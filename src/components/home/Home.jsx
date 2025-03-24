import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://as2.ftcdn.net/v2/jpg/05/45/44/27/1000_F_545442743_pNEGdI3dN46ubFYAbhnCDoasAPAxVIBh.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-yellow-400">Explore the Wisdom of the Ages</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Dive into the scriptures, stories, and philosophies of Hindu mythology.
          </p>
          <Link
            to="/scriptures"
            className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-400 transition"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Featured Scriptures Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-6">
          Featured Scriptures
        </h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {['Vedas', 'Upanishads', 'Bhagavad Gita', 'Ramayana', 'Mahabharata'].map((scripture) => (
            <div key={scripture} className="bg-gray-800 p-4 rounded-lg shadow-md min-w-[200px]">
              <h3 className="text-xl font-medium text-yellow-300">{scripture}</h3>
              <p className="text-gray-400 text-sm mt-2">A glimpse into {scripture} teachings.</p>
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
  );
}