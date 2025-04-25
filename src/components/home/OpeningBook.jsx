import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bookCover from '../../assets/book2.png';
import backImg from '../../assets/background.jpg';

export default function AncientBook() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="relative w-[500px] h-[600px]">
        {/* Book Cover */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -180 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#4e342e] to-[#3e2723] shadow-2xl rounded-lg flex items-center justify-center text-center font-serif text-yellow-400 text-4xl origin-left border-5 border-[#B86F25]"
          style={{
            backgroundImage: `url(${bookCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
        {/* ShastraLok */}
        </motion.div>

        Left Page
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute left-0 top-0 w-full h-full bg-[#f4e4ba] border-r-2 border-yellow-700 shadow-lg rounded-lg flex flex-col items-center justify-center px-6"
          style={{
            backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20210429/pngtree-modern-old-paper-realistic-texture-concept-image_681816.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-yellow-900 font-playfair text-lg italic">
            "A journey into divine knowledge..."
          </p>
          <h2 className="text-3xl font-playfair text-yellow-900 drop-shadow-md">Explore Scriptures</h2>
          
          <Link
            to="/scriptures"
            className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-400 transition"
          >
            Enter
          </Link>
        </motion.div>
      </div>

      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-10 bg-[#B86F25] text-[#F4E4BA] px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#FED141] transition"
        >
          Open Sacred Text
        </button>
      )}
    </div>
  );
}
