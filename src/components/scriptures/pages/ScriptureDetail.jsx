import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import scriptures from "../../../data/scriptures"; 
import mahabharata from "../../../data/script/mahabharata.json"; // Load Mahabharata



export default function ScriptureDetail() {
  const { id } = useParams(); // Get scripture ID from URL
  const scripture = scriptures.find((s) => s.id === Number(id));
  const [currentChapter, setCurrentChapter] = useState(0); // Track chapter
  const navigate = useNavigate(); // Handle navigation

  if (!scripture) {
    return <p className="text-center text-red-500">Scripture not found</p>;
  }

  // Handle navigation between chapters
  const nextChapter = () => {
    if (currentChapter < mahabharata.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-5">{scripture.name}</h1>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-3">
          {mahabharata[currentChapter].title}
        </h2>
        <p className="text-gray-300 leading-relaxed">{mahabharata[currentChapter].content}</p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevChapter}
            disabled={currentChapter === 0}
            className={`px-4 py-2 rounded-lg ${
              currentChapter === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            ◀ Previous
          </button>

          <button
            onClick={nextChapter}
            disabled={currentChapter === mahabharata.length - 1}
            className={`px-4 py-2 rounded-lg ${
              currentChapter === mahabharata.length - 1 ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Next ▶
          </button>
        </div>

        {/* Back to Scriptures */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/scriptures")}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
          >
            🔙 Back to Scriptures
          </button>
        </div>
      </div>
    </div>
  );
}
