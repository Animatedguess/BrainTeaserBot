import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LandBack from '../component/LandBack';

function ContactPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const chetna2110Data = await axios.get('https://api.github.com/users/chetna2110');
        const animatedGuessData = await axios.get('https://api.github.com/users/animatedguess');

        setTeamMembers([
          {
            name: chetna2110Data.data.name || 'Chetna',
            avatar_url: chetna2110Data.data.avatar_url,
            github_url: chetna2110Data.data.html_url,
            bio: chetna2110Data.data.bio || 'GitHub Enthusiast',
          },
          {
            name: animatedGuessData.data.name || 'Animated Guess',
            avatar_url: animatedGuessData.data.avatar_url,
            github_url: animatedGuessData.data.html_url,
            bio: animatedGuessData.data.bio || 'Creative Developer',
          },
        ]);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <>
      <LandBack />
      <section className="bg-white bg-opacity-30 h-[calc(100vh-50px)] overflow-y-auto scrollbar-none scroll-smooth">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-900 capitalize lg:text-3xl">
            Welcome to Our <span className="text-emerald-800">Contact Page!</span>
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-600">
            We’ve got your back! If you have any queries, require help, or just want to get in touch, our team of experts is always available.
            You may also contact any of our team members directly using the details provided below.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:border-orange-300 hover:bg-white hover:bg-opacity-35 hover:shadow-cyan-950 hover:shadow-xl rounded-xl"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-950"
                  src={member.avatar_url}
                  alt={member.name}
                />
                <h1 className="mt-4 text-2xl font-semibold text-emerald-900 capitalize">
                  {member.name}
                </h1>
                <p className="mt-2 text-gray-600 capitalize">
                  {member.bio}
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href={member.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-600 hover:text-gray-500"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.026 2C6.475 2 2 6.475 2 12.026C2 16.43 4.865 20.161 8.88 21.5C9.38 21.59 9.552 21.315 9.552 21.075C9.552 20.865 9.543 20.275 9.54 19.515C7.143 19.991 6.588 18.336 6.588 18.336C6.135 17.195 5.462 16.89 5.462 16.89C4.545 16.27 5.533 16.284 5.533 16.284C6.545 16.357 7.065 17.326 7.065 17.326C7.963 18.89 9.455 18.431 10.048 18.171C10.139 17.514 10.395 17.065 10.68 16.83C8.734 16.58 6.665 15.594 6.665 11.842C6.665 10.735 7.065 9.865 7.72 9.215C7.618 8.965 7.263 7.936 7.82 6.521C7.82 6.521 8.665 6.251 9.537 7.126C10.335 6.905 11.248 6.79 12.06 6.785C12.87 6.79 13.785 6.905 14.585 7.126C15.457 6.251 16.302 6.521 16.302 6.521C16.86 7.936 16.504 8.965 16.402 9.215C17.06 9.865 17.455 10.735 17.455 11.842C17.455 15.605 15.38 16.575 13.426 16.82C13.769 17.11 14.088 17.724 14.088 18.701C14.088 20.112 14.074 21.059 14.074 21.075C14.074 21.315 14.244 21.595 14.755 21.5C18.77 20.161 21.635 16.43 21.635 12.026C21.635 6.475 17.16 2 12.026 2Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
