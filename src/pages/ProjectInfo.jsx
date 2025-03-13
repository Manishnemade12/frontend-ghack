// import React from 'react'

// const ProjectInfo = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ProjectInfo



import React, { useState } from "react";
import { motion } from "framer-motion";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
    answer: "Albert Einstein",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["India", "China", "Japan", "Egypt"],
    answer: "China",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci",
  },
];

const ProjectInfo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a40] to-[#303060] p-6 text-white">
      {!showResult ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }} 
          className="w-full max-w-lg bg-[#2c2c54] p-8 rounded-2xl shadow-2xl border border-[#575fcf] text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#f1c40f]">Quiz Time! 🧠</h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="text-lg font-semibold mb-6 text-gray-300"
          >
            {quizData[currentQuestion].question}
          </motion.p>

          <div className="grid gap-4">
            {quizData[currentQuestion].options.map((option) => (
              <motion.button
                key={option}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOptionClick(option)}
                className={`p-3 w-full rounded-lg font-semibold text-lg transition-all ${
                  selectedOption === option
                    ? "bg-[#f1c40f] text-black"
                    : "bg-[#4b4b8f] hover:bg-[#f1c40f] hover:text-black"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className={`mt-6 px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
              selectedOption
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            {currentQuestion < quizData.length - 1 ? "Next" : "See Results"}
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.6 }} 
          className="w-full max-w-lg bg-[#2c2c54] p-8 rounded-2xl shadow-2xl border border-[#575fcf] text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#f1c40f]">Quiz Completed! 🎉</h2>
          <p className="text-xl">Your Score: <span className="text-green-400 font-bold">{score}/{quizData.length}</span></p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transition-all"
          >
            Play Again 🔄
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectInfo;