import { useState } from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import scriptures from "../../data/scriptures";
import { Link } from "react-router-dom";

export default function Scriptures() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(scriptures.map((s) => s.category))];

  // Filter scriptures based on search and category
  const filteredScriptures = scriptures.filter(
    (scripture) =>
      (category === "All" || scripture.category === category) &&
      scripture.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#F4E4BA] h-full min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Browse Scriptures</h1>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="🔍 Search scriptures..."
          className="border p-2 w-full rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="border p-2 rounded bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Display Scriptures */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredScriptures.length > 0 ? (
          filteredScriptures.map((scripture) => (
            <Link
              key={scripture.id}
              to={`/scriptures/${scripture.name.toLowerCase()}`} // Navigate to detailed page
              className="no-underline"
            >
            <div
              key={scripture.id}
              className="border p-4 rounded-lg shadow-lg bg-white flex items-center gap-4 hover:bg-gray-100 transition"
              
            >
            
              <BookOpenIcon className="h-10 w-10 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold">{scripture.name}</h2>
                <p className="text-gray-600">{scripture.category}</p>
                <p className="text-sm text-gray-700">{scripture.description}</p>
              </div>
            </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">No scriptures found</p>
        )}
      </div>
    </div>
  );
}
