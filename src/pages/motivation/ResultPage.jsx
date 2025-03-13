// // ResultPage.jsx
// import React from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const ResultPage = () => {
//   const location = useLocation();
//   const feeling = location.state?.feeling || "Unknown";
//   const suggestion = location.state?.suggestion || "Stay positive and keep moving forward!";

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-pink-400 to-yellow-500 p-6">
//       <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold text-white mb-6">
//         You are feeling {feeling}
//       </motion.h2>
//       <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="p-6 bg-white rounded-lg shadow-xl text-center max-w-lg">
//         <p className="text-xl font-semibold text-gray-800">{suggestion}</p>
//       </motion.div>
//       {/* <button
//         className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
//         onClick={() => window.location.href = "/"}
//       >
//         Back to Home
//       </button> */}
//     </div>
//   );
// };

// export default ResultPage;
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ResultPage = () => {
  const location = useLocation();
  const feeling = location.state?.feeling || "Unknown";
  const suggestion = location.state?.suggestion || "Stay positive and keep moving forward!";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-purple-900 p-6">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold text-purple-300 mb-6 shadow-lg"
      >
        You are feeling {feeling}
      </motion.h2>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="p-6 bg-black rounded-lg shadow-2xl text-center max-w-lg border border-purple-500"
      >
        <p className="text-xl font-semibold text-purple-400">{suggestion}</p>
      </motion.div>
      <button
        className="mt-6 px-6 py-3 bg-purple-700 text-white font-bold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
        onClick={() => window.location.href = "/"}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResultPage;
