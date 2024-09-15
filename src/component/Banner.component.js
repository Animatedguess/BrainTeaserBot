import React from 'react';
import { Link } from 'react-router-dom';

function Banner({ isAuthenticated }) {
    return (
        <section className="bg-transparent">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Discover, Quiz, and Master AI Concepts
                        <strong className="font-extrabold text-landing-color sm:block"> Start Your Journey!</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Welcome to our AI quiz site! Explore a variety of AI quizzes, get personalized recommendations, track your progress, and join a community of learners. Discover, learn, and master AI concepts with engaging challenges!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {isAuthenticated ? (
                            <Link
                            className="block text-md w-1/2 rounded-lg px-12 py-3 sm:text-sm font-medium text-landing-color bg-slate-50 shadow hover:text-gray-500 focus:outline-none focus:ring active:text-gray-300 sm:w-auto"
                            to="/about"
                        >
                            About
                        </Link>
                        ) : (
                            <>
                                <Link
                                    className="block text-md w-1/2 rounded-lg bg-landing-color px-12 py-3 sm:text-sm font-medium text-white shadow hover:bg-gray-500 focus:outline-none focus:ring active:bg-gray-300 sm:w-auto"
                                    to="/login"
                                >
                                    Start
                                </Link>

                                <Link
                                    className="block text-md w-1/2 rounded-lg px-12 py-3 sm:text-sm font-medium text-landing-color bg-slate-50 shadow hover:text-gray-500 focus:outline-none focus:ring active:text-gray-300 sm:w-auto"
                                    to="/about"
                                >
                                    About
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
