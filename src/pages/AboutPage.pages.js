import React, { useState, useEffect } from 'react';
import { Commet } from 'react-loading-indicators'; // Assuming you have this library installed
import { aboutData } from '../Data/aboutData';
import AboutLand from '../component/Background/AboutLand.Background.Component';

function AboutPage() {
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulating data fetching or a delay for the loading screen
    const fetchData = async () => {
      setLoading(true); // Set loading to true when starting
      setTimeout(() => {
        setLoading(false); // Set loading to false after 2 seconds (replace this with actual data fetching if necessary)
      }, 2000); // Simulate loading delay
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-transparent">
        <Commet color="#1e909e" size="large" text="Loading" textColor="#1e909e" />
      </div>
    );
  }

  return (
    <>
      <AboutLand />
      {/* Container for the scrollable section */}
      <section className="bg-transparent flex-grow overflow-y-auto scrollbar-none scroll-smooth h-[calc(100vh-80px)]">
        <div className="container px-6 py-6 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 lg:text-3xl">
            Frequently asked questions.
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-8 md:grid-cols-2 xl:grid-cols-3 py-8">
            {aboutData.map((faq, index) => (
              <div key={index} className="bg-white bg-opacity-45 rounded-lg">
                <div className="inline-block p-3 text-white bg-sky-800 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h1>

                  <p className="mt-2 text-sm text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
