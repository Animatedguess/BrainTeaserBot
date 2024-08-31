import React from 'react'

function SignUpForm() {
    return (
        < section className="bg-white" >
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://cdn.dribbble.com/users/1338391/screenshots/15344962/media/6564bb2cf0975c926b603b7133486307.jpg?resize=1000x750&vertical=center"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-8">
                        <h2 className="mt-6 text-2xl font-bold text-sign-color sm:text-3xl md:text-4xl">
                            Welcome to Squid
                        </h2>

                        <p className="mt-4 text-md leading-relaxed text-white/90">
                            Welcome! Join us today and unlock endless possibilities—create your account in just a few easy steps
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-2 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative block lg:hidden">

                            <h1 className="text-3xl font-bold text-sign-color sm:text-3xl md:text-4xl">
                                Welcome to Squid
                            </h1>

                            <p className="mt-1 leading-relaxed text-gray-500 text-md">
                                Welcome! Join us today and unlock endless possibilities—create your account in just a few easy steps
                            </p>
                        </div>

                        <form action="#" className="mt-2 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    className="mt-1 w-full h-8 pl-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="last_name"
                                    className="mt-1 w-full h-8 pl-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full h-8 pl-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full h-8 pl-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    className="mt-1 w-full h-8 pl-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-login-color px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-login-color focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <a href="/login" className="text-gray-700 underline">Log in</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section >
    )
}

export default SignUpForm
