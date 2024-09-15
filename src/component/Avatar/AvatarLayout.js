import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

function MenuItem({ to, icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      className="flex items-center px-4 py-2 mt-5 text-gray-400 transition-colors duration-300 transform rounded-lg hover:text-gray-200"
      aria-label={label}
      onClick={onClick} // Attach onClick event if needed
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
}

function AvatarLayout({ visible, setVisible }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://backend-brainteaserbot.onrender.com/api/v1/users/current-user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle closing transition
  useEffect(() => {
    if (!visible && closing) {
      setTimeout(() => {
        setClosing(false);
      }, 300);
    }
  }, [visible, closing]);

  if (!visible && !closing) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://backend-brainteaserbot.onrender.com/api/v2/users/logout', {
        method: 'POST', // Make sure it's a POST request
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem('authToken'); // Clear the token
        navigate('/login'); // Redirect to the login page
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <aside
      className={`fixed right-0 top-0 flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-gray-900 border-r rtl:border-r-0 rtl:border-l bg-opacity-70 dark:border-gray-700 z-10 transition-all duration-300
        ${visible ? 'animate-slide-in-right' : 'animate-slide-out-right'}`}
      aria-label="Sidebar"
    >
      <div
        className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
        onClick={handleClose}
      >
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
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>

      {/* User Info Section */}
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src={user?.data.avatar || 'https://via.placeholder.com/150'}
          alt="User Avatar"
          aria-label="User Avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-100">{user?.data.firstName || 'Anonymous'}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-400">{user?.data.email || 'No email'}</p>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <MenuItem
            to="/profile"
            label="Profile"
            icon={
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            }
          />
          <MenuItem
            to="/ai"
            label="AI"
            icon={
              <path
                d="M12 2L12 22M22 12L2 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            }
          />
          <MenuItem
            to="/trivia"
            label="Trivia"
            icon={
              <path
                d="M12 8C10.6739 8 9.40215 8.52678 8.46447 9.46447C7.52678 10.4021 7 11.6739 7 13C7 14.3261 7.52678 15.5979 8.46447 16.5355C9.40215 17.4732 10.6739 18 12 18C13.3261 18 14.5979 17.4732 15.5355 16.5355C16.4732 15.5979 17 14.3261 17 13C17 11.6739 16.4732 10.4021 15.5355 9.46447C14.5979 8.52678 13.3261 8 12 8ZM12 2V3M12 23V22M4.2222 4.2222L5.636 5.636L4.2222 4.2222ZM18.3639 18.3639L19.7777 19.7777L18.3639 18.3639ZM1 12H2M22 12H23M4.2222 19.7777L5.636 18.3639L4.2222 19.7777ZM18.3639 5.636L19.7777 4.2222L18.3639 5.636Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            }
          />
          <MenuItem
            to="/contact"
            label="Contact"
            icon={
              <path
                d="M21 8V7C21 5.67392 20.4732 4.40215 19.5355 3.46447C18.5979 2.52678 17.3261 2 16 2H8C6.67392 2 5.40215 2.52678 4.46447 3.46447C3.52678 4.40215 3 5.67392 3 7V8M21 8V17C21 18.3261 20.4732 19.5979 19.5355 20.5355C18.5979 21.4732 17.3261 22 16 22H8C6.67392 22 5.40215 21.4732 4.46447 20.5355C3.52678 19.5979 3 18.3261 3 17V8M21 8L16.5 13.5C16.1022 13.8787 15.5371 14.0874 14.9497 14.0874C14.3623 14.0874 13.7972 13.8787 13.3995 13.5L10.6005 10.5C10.2028 10.1213 9.63771 9.91259 9.05025 9.91259C8.46279 9.91259 7.89773 10.1213 7.5 10.5L3 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            }
          />
          <MenuItem
            to="/login" // Redirect after logout
            label="Logout"
            onClick={handleLogout} // Attach the logout handler
            icon={
              <>
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            }
          />
        </nav>
      </div>
    </aside>
  );
}

export default AvatarLayout;
