import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ScriptureList() {
  const { scriptureName } = useParams(); // Example: "ramayana" or "mahabharata"
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(`/data/script/${scriptureName}/index.json`);
        if (!response.ok) throw new Error(`Index file not found for ${scriptureName}`);

        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error("Error fetching index.json:", error);
        setChapters([]);
      }
    };

    fetchChapters();
  }, [scriptureName]);

  return (
    <div className="p-6 bg-[#F4E4BA] text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1E1006]">
        📖 {scriptureName.toUpperCase()}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.length > 0 ? (
          chapters.map((chapter) => (
            <Link key={chapter.id} to={`/scriptures/${scriptureName}/${chapter.id}`} className="no-underline">
              <div className="border p-6 rounded-xl shadow-lg bg-[#1E1006] hover:bg-gray-700 transition cursor-pointer">
                <h2 className="text-2xl font-semibold text-[#F4E4BA]">{chapter.name}</h2>
                <p className="text-[#F4E4BA] mt-2">{chapter.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-red-500 text-xl">No chapters found</p>
        )}
      </div>
    </div>
  );
}
