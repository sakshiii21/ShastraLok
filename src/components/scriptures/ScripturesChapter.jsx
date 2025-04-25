import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ScriptureChapter() {
  const { scriptureName, id } = useParams();
  const [shlokas, setShlokas] = useState([]);
  const [chapterInfo, setChapterInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const indexResponse = await fetch(`/data/script/${scriptureName}/index.json`);
        if (!indexResponse.ok) return;

        const indexData = await indexResponse.json();
        const chapterEntry = indexData.find((ch) => ch.id === Number(id));
        if (!chapterEntry) return;

        setChapterInfo(chapterEntry);

        const chapterResponse = await fetch(`/data/script/${scriptureName}/${chapterEntry.file}`);
        if (!chapterResponse.ok) return;

        const chapterData = await chapterResponse.json();

        // Normalize the data based on the scripture
        let normalizedData = [];
        if (scriptureName.toLowerCase() === "ramayana") {
          normalizedData = chapterData.map((shloka) => ({
            title: `${shloka.kaanda} - Sarg ${shloka.sarg}, Shloka ${shloka.shloka}`,
            text: shloka.text,
          }));
        } else if (scriptureName.toLowerCase() === "mahabharata") {
          normalizedData = [{
            title: chapterEntry.name,
            text: chapterData.content,
          }];
        } else if (scriptureName.toLowerCase() === "bhagavad gita") {
          normalizedData = [{
            title: chapterData.name_translation || chapterData.name,
            text: chapterData.chapter_summary,
          }];
        }

        setShlokas(normalizedData);
      } catch {
        setShlokas([]);
      }
    };

    fetchChapter();
  }, [scriptureName, id]);

  const goToChapter = (chapterOffset) => {
    const newChapter = Number(id) + chapterOffset;
    if (newChapter > 0) navigate(`/scriptures/${scriptureName}/${newChapter}`);
  };

  if (!shlokas.length) {
    return <p className="text-center text-red-500 text-2xl">❌ Chapter not found</p>;
  }

  return (
    <div className="bg-[#F4E4BA] text-white min-h-screen p-6">
      {chapterInfo && (
        <h1 className="text-4xl font-bold text-center mb-8 text-[#1E1006]">
          {chapterInfo.name} - Chapter {id}
        </h1>
      )}

      {shlokas.map((shloka, index) => (
        <div key={index} className="bg-[#1E1006] p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-[#F4E4BA] mb-2">
            {shloka.title}
          </h2>
          <p className="text-[#F4E4BA] text-xl leading-relaxed">{shloka.text}</p>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => goToChapter(-1)}
          disabled={Number(id) === 1}
          className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition disabled:bg-gray-600"
        >
          ⬅ Previous
        </button>
        <button
          onClick={() => goToChapter(1)}
          className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
        >
          Next ➡
        </button>
      </div>

      {/* Back to Chapters */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate(`/scriptures/${scriptureName}`)}
          className="px-5 py-3 bg-red-600 hover:bg-red-500 rounded-lg"
        >
          🔙 Back to Chapters
        </button>
      </div>
    </div>
  );
}
