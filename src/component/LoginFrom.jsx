import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      const response = await fetch('https://backend-brainteaserbot.onrender.com/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sends form data as JSON
      });

      const result = await response.json();

      if (response.ok) {
        setErrorMessage('');
        setIsAuthenticated(true); // Update isAuthenticated to true
        localStorage.setItem('authToken', result.data.accessToken);
        setTimeout(() => {
          navigate('/'); // Redirect to the homepage after 2 seconds
        }, 1000);
      } else {
        setErrorMessage(result.message || 'Something went wrong!');
      }
    } catch (error) {
      setErrorMessage(`Login failed. Please try again later.`);
    } finally {
      setIsLoading(false); // Hide loading spinner when done
    }
  };

  return (
    <section className="relative flex flex-col-reverse lg:flex-row lg:h-screen lg:items-center">
      <div className="w-full px-4 py-5 sm:px-6 sm:py-10 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-login-color leading-tight">
            Get started today!
          </h1>

          <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-500 leading-snug">
            Welcome back! Please log in to access your account.
          </p>
        </div>

        {/* Show loading screen when isLoading is true */}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-4 sm:mt-6 max-w-md space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-3 sm:p-4 text-xs sm:text-sm shadow-sm focus:ring-login-color focus:border-login-color"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type between text and password
                  id="password"
                  name="password"
                  className="w-full rounded-lg border-gray-200 p-3 sm:p-4 text-xs sm:text-sm shadow-sm focus:ring-login-color focus:border-login-color"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                />

                {/* Show/Hide Toggle Button */}
                <span
                  className="absolute inset-y-0 end-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A9.959 9.959 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.008-3.213 3.346-5.792 6.416-6.79m9.6 3.866C18.859 10.48 18.217 11 17 11h-1c-.4 0-.778.075-1.136.215m-3.556-1.352A3 3 0 1012 15m-6.36 3.457A9.952 9.952 0 002 12m6 6a3.007 3.007 0 01-3-3c0-.752.283-1.482.816-2.023"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-xs sm:text-sm">{errorMessage}</div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-2">
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-0">
                No account? 
                <Link className="underline ml-1" to="/register">Sign up</Link>
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-login-color px-4 py-3 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-login-color"
              >
                Sign in
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="relative h-28 sm:h-44 lg:h-full w-full lg:w-1/2">
        <img
          alt="Login"
          src="https://cdn.dribbble.com/users/1338391/screenshots/15344962/media/6564bb2cf0975c926b603b7133486307.jpg?resize=1000x750&vertical=center"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default LoginForm;
