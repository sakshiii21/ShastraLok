import React, { useState } from "react";

const quizData = [
  {
    question: "Who is considered the author of the Mahabharata?",
    options: ["Valmiki", "Vyasa", "Kalidasa", "Tulsidas"],
    answer: "Vyasa",
  },
  {
    question: "Which scripture contains the dialogue between Arjuna and Krishna?",
    options: ["Ramayana", "Bhagavad Gita", "Vedas", "Upanishads"],
    answer: "Bhagavad Gita",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold dark:text-white">Quiz Completed!</h2>
          <p className="text-lg dark:text-gray-300">Your Score: {score} / {quizData.length}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4 dark:text-white">{quizData[currentQuestion].question}</h2>
          <div className="space-y-3">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`block w-full px-4 py-2 text-left rounded-md border ${
                  selectedAnswer === option
                    ? option === quizData[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
