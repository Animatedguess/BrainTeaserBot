import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm({ setIsAuthenticated }) {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('email', email);
    data.append('password', password);
    if (avatar) {
      data.append('avatar', avatar);
    }

    try {
      const response = await fetch('https://backend-brainteaserbot.onrender.com/api/v1/users/register', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage('Account created successfully!');
        setErrorMessage('');
        setIsAuthenticated(true); // Mark the user as authenticated
        localStorage.setItem('authToken', result.message);
        setTimeout(() => {
          navigate('/'); // Redirect to homepage
        }, 1000);
      } else {
        setErrorMessage(result.message || 'Something went wrong!');
      }
    } catch (error) {
      setErrorMessage('Failed to create account. Please try again later.');
    }
  };

  return (
    <section className="bg-white h-screen overflow-scroll scrollbar-none">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 sm:h-40 md:h-48 lg:h-full items-end bg-gray-900 lg:col-span-5 xl:col-span-6">
          <img
            alt=""
            src="https://cdn.dribbble.com/users/1338391/screenshots/15344962/media/6564bb2cf0975c926b603b7133486307.jpg?resize=1000x750&vertical=center"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-8">
            <h2 className="mt-6 text-2xl font-bold text-sign-color sm:text-3xl md:text-4xl">
              Welcome to BrainTeaserBot
            </h2>
            <p className="mt-4 text-md leading-relaxed text-white/90">
              Join us today and unlock endless possibilities—create your account in just a few steps.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-4 py-4 sm:px-10 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-lg lg:max-w-3xl w-full">
            <div className="relative block lg:hidden text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-sign-color">
                Welcome to BrainTeaserBot
              </h1>
              <p className="mt-2 leading-relaxed text-gray-500 text-md">
                Join us today and unlock endless possibilities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-6 gap-y-4 gap-x-4">
              {/* Form Inputs */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  className="mt-1 w-full h-10 pl-2 rounded-md border-gray-300 bg-white text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 focus:shadow-lg"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="lastName"
                  className="mt-1 w-full h-10 pl-2 rounded-md border-gray-300 bg-white text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 focus:shadow-lg"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full h-10 pl-2 rounded-md border-gray-300 bg-white text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 focus:shadow-lg"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="Password"
                    name="password"
                    className="mt-1 w-full h-10 pl-2 pr-10 rounded-md border-gray-300 bg-white text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 focus:shadow-lg"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-2"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="PasswordConfirmation"
                    name="confirmPassword"
                    className="mt-1 w-full h-10 pl-2 pr-10 rounded-md border-gray-300 bg-white text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 focus:shadow-lg"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-2"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Error and Success Messages */}
              {errorMessage && (
                <div className="col-span-6 text-center text-red-500 text-sm">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="col-span-6 text-center text-green-500 text-sm">
                  {successMessage}
                </div>
              )}

              {/* Avatar Upload */}
              <div className="col-span-6">
                <label htmlFor="Avatar" className="block text-sm font-medium text-gray-700">
                  Avatar
                </label>
                <input
                  type="file"
                  id="Avatar"
                  name="avatar"
                  accept="image/*"
                  className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 focus:shadow-lg"
                  onChange={handleAvatarChange}
                />
                {avatarPreview && (
                  <div className="mt-4 flex justify-center">
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block w-full sm:w-auto rounded-md border border-blue-600 bg-login-color px-6 py-2 text-sm font-medium text-white transition duration-300 hover:bg-transparent hover:text-login-color focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p className="mt-4 sm:mt-0 text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <Link to="/login" className="text-gray-700 underline">Log in</Link>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignUpForm;
