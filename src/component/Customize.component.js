import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Customize() {
  const [cat, setCat] = useState('');
  const { category } = useParams(); // Extracts the category from the URL
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setCat(category); // Update the state whenever the category changes
  }, [category]);

  return (
    <div className="absolute right-1/4 animate-slide-in-top top-1/4 z-10 flex flex-col w-2/4 h-64 px-4 py-4 overflow-y-auto bg-slate-300 bg-opacity-60 border border-gray-100 rounded-3xl shadow-lg rtl:border-l rtl:border-r-0">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {/* Difficulty Selector */}
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-sm md:text-base lg:text-lg text-gray-900 justify-start">
            Difficulty:
          </dt>
          <div className="justify-end">
            <select
              name="difficulty"
              id="difficulty"
              value={difficulty} // Bind the value to state
              onChange={(e) => setDifficulty(e.target.value)} // Update state on change
              className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm md:text-base"
            >
              <option value="">Please select</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Type Selector */}
        <div className="grid grid-cols-1 gap-1 p-3 mt-6 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-sm md:text-base lg:text-lg text-gray-900">
            Type:
          </dt>
          <div>
            <select
              name="type"
              id="type"
              value={type} // Bind the value to state
              onChange={(e) => setType(e.target.value)} // Update state on change
              className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm md:text-base"
            >
              <option value="">Please select</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True/False</option>
            </select>
          </div>
        </div>
      </dl>

      {/* Link to questions */}
      <Link
        className="group flex items-center justify-between gap-4 mt-6 rounded-lg border border-black bg-quiz-color px-5 py-3 hover:bg-slate-50 transition-colors focus:outline-none focus:ring"
        to={`/trivia/${cat}/${difficulty}/${type}`}
      >
        <span className="font-medium text-white transition-colors group-hover:text-black group-active:text-black">
          Find out more
        </span>

        <span className="shrink-0 rounded-full border border-current bg-white p-2 text-black group-active:text-indigo-500">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default Customize;
