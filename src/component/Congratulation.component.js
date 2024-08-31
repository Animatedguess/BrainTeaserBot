import React from 'react'

function Congratulation() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white bg-opacity-45 p-10 rounded-lg shadow-lg text-center max-w-xl w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Congratulation
        </h2>
        <p className="text-gray-500 mb-8">Category: Web Design</p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Replace with your image */}
            <img src="https://via.placeholder.com/80" alt="Illustration" />
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Replace with your image */}
            <img src="https://via.placeholder.com/80" alt="Illustration" />
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-2">You answered</p>
        <p className="text-3xl font-bold text-blue-600 mb-2">5 / 5</p>
        <p className="text-lg text-gray-700 mb-8">questions correct</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700">
            Play Again
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-600 py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:text-white">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Congratulation
