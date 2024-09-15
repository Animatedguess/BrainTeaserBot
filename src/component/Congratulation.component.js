import React from 'react';
import { useNavigate } from 'react-router-dom';

function Congratulation({ correctAnswers, totalQuestions, category, onPlayAgain }) {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleBackToHome = () => {
    navigate('/trivia'); // Navigate to the home page (adjust this path if necessary)
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white bg-opacity-45 p-10 rounded-lg shadow-lg text-center max-w-xl w-full">
        <h2 className="text-2xl font-bold text-quiz-color mb-2">
          Congratulations!
        </h2>
        <p className="text-gray-500 mb-8">{`Category: ${category}`}</p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <div className="w-48 h-full flex items-center justify-center">
            {correctAnswers >= 5 ? (
              <img src={`${process.env.PUBLIC_URL}/images/image.png`} alt="" />
            ) : (
              <img src={`${process.env.PUBLIC_URL}/images/lose.png`} alt="" />
            )}
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-2">You answered</p>
        <p className="text-3xl font-bold text-quiz-color mb-2">{correctAnswers} / {totalQuestions}</p>
        <p className="text-lg text-gray-700 mb-8">questions correctly</p>
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-quiz-color transition shadow-rose-950 hover:translate-y-1 text-white py-2 px-6 rounded-lg shadow-md hover:bg-rose-900"
            onClick={onPlayAgain} // Call onPlayAgain when button is clicked
          >
            Play Again
          </button>
          <button 
            className="bg-transparent transition shadow-rose-950 hover:translate-y-1 border border-quiz-color text-quiz-color py-2 px-6 rounded-lg shadow-md hover:bg-quiz-color hover:text-white"
            onClick={handleBackToHome} // Call handleBackToHome when "Back to Home" is clicked
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Congratulation;
