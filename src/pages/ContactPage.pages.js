import React from 'react'

function ContactPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 w-screen overflow-x-hidden">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Ask us everything and we would love to hear from you
            </p>

            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  (257) 563-7401
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  acb@example.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300">Follow us</h3>

              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 12.0002 8.23468 12.0002 9.33334V10.6673C10.1622 10.7167 7.73016 9.83601 6.00016 8.00001C5.33349 9.15334 6.07949 10.7267 7.00016 11.3333C6.41349 11.3727 5.69216 11.1387 5.33349 11.3333C5.72016 12.4733 6.91349 13.19 7.98683 13.1933C7.41349 13.64 6.62016 13.7953 5.98683 13.7933C6.67949 14.552 7.66149 14.908 8.74683 14.8933C7.56683 15.8107 6.03349 16.1633 4.66683 16C6.70016 17.2673 9.33949 17.3847 11.0002 16C13.0335 14.4533 14.0402 11.9873 14.0002 9.33334V8.66668C14.8535 8.00001 15.6202 7.80001 16.6668 7.33334C16.4935 8.32601 15.9335 9.13134 15.3335 9.33334C16.1202 9.32668 17.2602 9.22601 18.0002 8.66668C17.6135 9.49334 16.8535 10.3067 16.0002 10.6667C17.3468 10.664 18.2795 10.1587 18.6668 9.33334C18.1735 10.7467 17.0535 11.7473 15.6668 12C14.9935 12.814 14.1002 13.3887 13.2468 13.68C14.7735 13.8973 16.3268 13.54 17.6668 13.3333C19.6268 12.98 21.3268 11.6747 22.0002 10C21.3335 10.5807 20.5602 11.038 19.6668 11.3333C20.6402 10.6073 21.4402 9.69334 22.0002 8.66668C21.3335 9.06668 20.7468 9.56334 20.0002 9.33334Z" />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8C15.4375 8 14.8835 8.054 14.344 8.1585C13.7477 8.26834 13.3315 8.49968 13.0325 8.7515C12.6517 9.067 12.3998 9.40583 12.1795 9.8255C11.9633 10.2397 11.8225 10.7372 11.8225 11.25V12.75C11.8225 13.2628 11.9633 13.7603 12.1795 14.1745C12.3998 14.5942 12.6517 14.933 13.0325 15.2485C13.3315 15.5003 13.7477 15.7317 14.344 15.8415C14.8835 15.946 15.4375 16 16 16C16.5625 16 17.1165 15.946 17.656 15.8415C18.2523 15.7317 18.6685 15.5003 18.9675 15.2485C19.3483 14.933 19.6002 14.5942 19.8205 14.1745C20.0367 13.7603 20.1775 13.2628 20.1775 12.75V11.25C20.1775 10.7372 20.0367 10.2397 19.8205 9.8255C19.6002 9.40583 19.3483 9.067 18.9675 8.7515C18.6685 8.49968 18.2523 8.26834 17.656 8.1585C17.1165 8.054 16.5625 8 16 8ZM22 4H20.25C19.9357 4 19.6366 4.1317 19.4395 4.3665C19.2283 4.61797 19.0786 4.90818 18.978 5.2205C18.8545 5.61417 18.6617 5.98769 18.404 6.316C18.1257 6.66925 17.7832 6.97961 17.3935 7.2305C16.9536 7.51704 16.4574 7.72688 15.9395 7.8415C15.3695 7.9683 14.6863 8 14 8C13.3137 8 12.6305 7.9683 12.0605 7.8415C11.5426 7.72688 11.0464 7.51704 10.6065 7.2305C10.2168 6.97961 9.87433 6.66925 9.596 6.316C9.33834 5.98769 9.1455 5.61417 9.022 5.2205C8.92139 4.90818 8.77167 4.61797 8.5605 4.3665C8.36342 4.1317 8.06431 4 7.75 4H6C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H22C23.6569 20 25 18.6569 25 17V7C25 5.34315 23.6569 4 22 4Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
