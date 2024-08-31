import React from 'react'
import QuizPageBack from '../component/QuizPageBack.Component'
import Congratulation from '../component/Congratulation.component'

function CongratulationPage() {
    return (
        <div>
            <QuizPageBack />
            <header className="bg-transparent">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-start">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <div className="w-52 lg:w-64">
                                <img src={`${process.env.PUBLIC_URL}/logo-transparent-png.png`} alt="" />
                            </div>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    className="hidden items-center focus:outline-none md:flex"
                                    aria-label="toggle profile dropdown"
                                >
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img
                                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                            className="object-cover w-full h-full"
                                            alt="avatar"
                                        />
                                    </div>

                                    <h3 className="mx-2 text-landing-color lg:hidden">Kailash Agarwal</h3>
                                </button>
                                <div className="block md:hidden">
                                    <button className="rounded bg-gray-100 p-2 text-landing-color transition hover:text-gray-600/75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Congratulation />
        </div>
    )
}

export default CongratulationPage
