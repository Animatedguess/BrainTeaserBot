import React from 'react'

function QusetionAnswer(promps) {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-[#FAF1E7] p-8 rounded-lg shadow-lg max-w-xl w-full bg-opacity-45">
                <h2 className="text-center text-lg font-semibold text-gray-600 mb-4">
                    Category : Web Design
                </h2>
                <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-blue-500">1</span>
                    <span className="text-lg font-medium text-gray-500">/ 5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-6">
                    What is web & mobile design?
                </h3>
                <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            name="question"
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="block p-3 bg-gray-100 rounded-lg shadow-sm w-full">
                            Lipsum as it is sometimes known is dummy text
                        </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            name="question"
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="block p-3 bg-gray-100 rounded-lg shadow-sm w-full">
                            Lipsum as it is sometimes known is dummy text
                        </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            name="question"
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="block p-3 bg-gray-100 rounded-lg shadow-sm w-full">
                            Lipsum as it is sometimes known is dummy text
                        </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            name="question"
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="block p-3 bg-gray-100 rounded-lg shadow-sm w-full">
                            Lipsum as it is sometimes known is dummy text
                        </span>
                    </label>
                </div>
                <div className="text-center mt-6">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">
                        Next Question
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QusetionAnswer
