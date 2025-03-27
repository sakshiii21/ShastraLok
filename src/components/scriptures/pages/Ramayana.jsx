import { useState } from "react";
import { Link } from "react-router-dom";
import ramayanaData from "../../../data/script/ramayana/index.json"; // Create an index file for metadata

export default function Ramayana() {
  const [search, setSearch] = useState("");

  // Filter chapters based on search input
  const filteredChapters = ramayanaData.filter(chapter =>
    chapter.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-5">📖 Valmiki Ramayana</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search chapters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 text-black rounded-lg"
      />

      {/* Display Chapters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChapters.length > 0 ? (
          filteredChapters.map((chapter) => (
            <Link key={chapter.id} to={`/ramayana/${chapter.id}`} className="no-underline">
              <div className="border p-4 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition cursor-pointer">
                <h2 className="text-xl font-semibold text-indigo-400">{chapter.name}</h2>
                <p className="text-gray-300">{chapter.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">No chapters found...</p>
        )}
      </div>
    </div>
  );
}
