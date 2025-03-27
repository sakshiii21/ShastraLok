import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RamayanaChapter() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    import(`../../../data/ramayana/${id}.json`) // Dynamically import JSON file
      .then((module) => setChapter(module.default))
      .catch(() => setChapter(null));
  }, [id]);

  if (!chapter) {
    return <p className="text-center text-red-500">Chapter not found</p>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-5">{chapter.name}</h1>

      {chapter.chapters.map((shloka, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-semibold text-indigo-400">{shloka.sanskrit}</h2>
          <p className="text-gray-300 italic">{shloka.transliteration}</p>
          <p className="mt-2">{shloka.translation}</p>
        </div>
      ))}
    </div>
  );
}
