import React, { useEffect, useState } from 'react';
import { geminiAi } from '../Data/geminiAi';
import ChatApp from './ChatApp'; // Import ChatApp

function LandingCom() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [context, setContext] = useState('');
    const [fetched, setFetched] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (buttonClicked) {
            const fetchData = async () => {
                try {
                    if (inputValue) {
                        const contexts = await geminiAi(inputValue);
                        setContext(contexts);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    setButtonClicked(false);
                }
            };

            fetchData();
        }
    }, [buttonClicked]);

    useEffect(() => {
        if (context.length !== 0) setFetched(true);
        console.log(context)
    }, [context]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <header className=''>
            {fetched ? (<ChatApp initialMessages={[{ text: context, isUser: false }]} />)
                : (
                    <div className="container px-6 py-16 mx-auto">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:max-w-lg opacity-100">
                                    <h1 className="text-3xl font-semibold text-gray-950 lg:text-4xl">
                                        Discover Answers Instantly with <span className="text-landing-color">AI-Powered Precision</span>
                                    </h1>
                                    <p className="mt-3 text-gray-700">
                                        Your Smart Search{' '}
                                        <span className="font-bold text-landing-color">Starts Here!</span>
                                    </p>
                                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                        <input
                                            id="email"
                                            value={inputValue}
                                            onChange={handleChange}
                                            type="text"
                                            className="px-4 w-3/4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                            placeholder="Ask your question here..."
                                        />
                                        <button onClick={() => setButtonClicked(!buttonClicked)} className="w-1/4 px-5 py-2 text-sm tracking-wider text-white transition-colors duration-300 transform bg-landing-color rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-400 focus:outline-none focus:bg-landing-color">
                                            Ask AI
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">

                                <img
                                    className="w-full h-full max-w-md pointer-events-none"
                                    src={`${process.env.PUBLIC_URL}/landingPage-Main-Image.png`}
                                    alt="Email illustration vector art"
                                />

                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default LandingCom;
