import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OpeningBook from "./OpeningBook";
import MapComponent from "../map/MapComponent";
import scriptures from "../../data/scriptures";

export default function Home() {
  return (
    <>
      <OpeningBook />
      <div className="bg-[#1E1006] text-white min-h-56 pt-8">
      {/* ✨ Featured Scriptures Section */}
      <motion.section
        className="py-16 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-[#F4E4BA] mb-10 tracking-wide">
          Featured Scriptures
        </h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {scriptures.map((scripture) => (
            <Link
              key={scripture.id}
              to={`/scriptures/${encodeURIComponent(scripture.name)}/${scripture.id}`}
              className="min-w-[220px]"
            >
              <motion.div
                className="bg-[#F4E4BA] p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-[#1E1006]">
                  {scripture.name}
                </h3>
                <p className="text-[#B86F25] text-sm mt-2">
                  {scripture.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>


        {/* 🗺️ Interactive Map Placeholder */}
        <div className="bg-[#F4E4BA] text-white min-h-screen pt-8">
        <motion.section
          className="py-16 px-6 text-center max-w-5xl mx-auto "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#1E1006] font-bold mb-4">
            Interactive Mythology Map
          </h2>
          <p className="text-[#B86F25] mb-6">
            Explore sacred places connected to scriptures.
          </p>
          <div className="bg-[#2F1C0F] w-full h-full rounded-xl flex items-center justify-center border border-yellow-900 relative z-0 p-4">
          <MapComponent
            center={[23.5937, 80.9629]}
            zoom={5}
               className="w-full h-full z-0"
           >
            </MapComponent>

          </div>
          
        </motion.section>
        </div>

        {/*  Gamified Learning & Quizzes */}

        <div className="bg-[#1E1006] text-white min-h-56 pt-8">
        <motion.section
          className="py-16 px-6 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#F4E4BA] mb-4">
            Gamified Learning & Quizzes
          </h2>
          <p className="text-gray-300 mb-6">
            Test your knowledge and earn rewards.
          </p>
          <Link to="/quiz">
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-yellow-400 transition">
              Take a Quiz
            </button>
            <button className="bg-[#2F1C0F] text-yellow-400 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#3a2511] transition">
              View Leaderboard
            </button>
           
          </div>
          </Link>
        </motion.section>
      </div>
      {/* Ai section */}
      <div className="bg-[#F4E4BA] text-white min-h-56 pt-8">
      <motion.section
          className="py-16 px-6 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#1E1006] mb-4">
            Shastralok AI Visualizer
          </h2>
          <p className="text-[#B86F25] mb-6">
            Enter a divine prompt and watch sacred scenes come to life through AI!
          </p>
          <Link to="/ai">
            <button className="bg-[#B86F25] text-[#1E1006] px-8 py-3 rounded-xl text-lg font-bold shadow-lg hover:bg-[#e3b719] transition">
              Go to AI Visualizer
            </button>
          </Link>
        </motion.section>
      </div>
    </>
  );
}
