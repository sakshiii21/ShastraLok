import React from "react";
import { Link } from "react-router-dom";
import OpeningBook from "./OpeningBook";

export default function Home() {
  return (
    <>
    <OpeningBook />
    <div className="text-white min-h-screen !m-0 !p-0">
      {/* Featured Scriptures Section */}
      <section className="bg-[#1E1006] py-16 px-6 min-h-100 mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#F4E4BA] mb-6">
          Featured Scriptures
        </h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {['Vedas', 'Upanishads', 'Bhagavad Gita', 'Ramayana', 'Mahabharata'].map((scripture) => (
            <div key={scripture} className="bg-[#F4E4BA] p-4 rounded-lg shadow-md min-w-[200px]">
              <h3 className="text-xl font-medium text-[#1E1006]">{scripture}</h3>
              <p className="text-[#B86F25] text-sm mt-2">A glimpse into {scripture} teachings.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400">Interactive Mythology Map</h2>
        <p className="text-gray-400 mt-4">Explore sacred places connected to scriptures.</p>
        <div className="mt-6 bg-gray-800 w-full h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">[Map Placeholder]</span>
        </div>
      </section>

      {/* Gamified Learning & Quizzes */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400">Gamified Learning & Quizzes</h2>
        <p className="text-gray-400 mt-4">Test your knowledge and earn rewards.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-400 transition">
            Take a Quiz
          </button>
          <button className="bg-gray-800 text-yellow-400 px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-gray-700 transition">
            View Leaderboard
          </button>
        </div>
      </section>
    </div>
    </>
  );
}