import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LandBack from '../LandBack';

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    newPassword: '',
    oldPassword: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

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
          throw new Error('Failed to fetch user data.');
        }

        const data = await response.json();
        setProfile({
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          email: data.data.email,
          avatar: data.data.avatar || 'https://via.placeholder.com/100',
          newPassword: '',
          oldPassword: '',
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  // Handle avatar/image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // For preview
      setProfile((prevProfile) => ({ ...prevProfile, avatar: file })); // Store file to send to server
    }
  };

  // Handle save button click
  // Handle save button click
  const handleSave = async () => {
    try {
      // Check if user is updating profile details
      if (isEditable) {
        // Update firstName, lastName, and email
        const response = await fetch('https://backend-brainteaserbot.onrender.com/api/v1/users/update-account', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
          body: JSON.stringify({
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update profile information.');
        }

        // If a new avatar is selected, send it to the correct endpoint
        if (profile.avatar instanceof File) {
          const formData = new FormData();
          formData.append('avatar', profile.avatar);

          const avatarResponse = await fetch('https://backend-brainteaserbot.onrender.com/api/v1/users/avatar', {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
            body: formData,
          });

          if (!avatarResponse.ok) {
            throw new Error('Failed to update avatar.');
          }
        }

        setIsEditable(false);
      }

      // Check if user is updating password
      if (isPasswordReset) {
        // If newPassword and oldPassword are provided, change the password
        const passwordResponse = await fetch('https://backend-brainteaserbot.onrender.com/api/v1/users/change-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
          body: JSON.stringify({
            oldPassword: profile.oldPassword,
            newPassword: profile.newPassword,
          }),
        });

        if (!passwordResponse.ok) {
          throw new Error('Failed to update password.');
        }

        // Reset the password change form
        setIsPasswordReset(false);
        setProfile((prevProfile) => ({ ...prevProfile, oldPassword: '', newPassword: '' }));
      }

      // Show success message after both operations
      setSuccessMessage('Profile updated successfully!');
    } catch (error) {
      setError(error.message);
    }
  };


  // Handle cancel button
  const handleCancel = () => {
    navigate(-1);
  };

  // Handle Forgot Password activation
  const handleForgotPassword = () => {
    setIsPasswordReset(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div>
      <LandBack />
      <div className="flex justify-center items-center h-screen bg-transparent">
        <div className="bg-white bg-opacity-40 rounded-xl shadow-black-3xl p-8 max-w-lg w-full">
          {/* Profile Picture and Edit Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={selectedImage || profile.avatar}
                alt="Profile"
                className="rounded-full w-20 h-20 object-cover"
              />
              {isEditable && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="ml-4 text-sm"
                />
              )}
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsEditable(!isEditable)}
            >
              {isEditable ? 'Save' : 'Edit'}
            </button>
          </div>

          {/* Profile Form */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">My Profile</h2>
            <form className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`mt-1 w-full border rounded-lg p-2 ${isEditable ? '' : 'bg-gray-100'
                    }`}
                  value={profile.firstName}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`mt-1 w-full border rounded-lg p-2 ${isEditable ? '' : 'bg-gray-100'
                    }`}
                  value={profile.lastName}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className={`mt-1 w-full border rounded-lg p-2 ${isEditable ? '' : 'bg-gray-100'
                    }`}
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </div>
              {isPasswordReset && (
                <div className="col-span-2">
                  <label className="block text-sm text-gray-700">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="mt-1 w-full border rounded-lg p-2"
                    value={profile.newPassword}
                    onChange={handleChange}
                  />
                  <label className="block text-sm text-gray-700">Old Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    className="mt-1 w-full border rounded-lg p-2"
                    value={profile.oldPassword}
                    onChange={handleChange}
                  />
                </div>
              )}
            </form>
          </div>

          {/* Success Message */}
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}

          {/* Forgot Password */}
          <div className="mt-4">
            {!isPasswordReset && (
              <button
                className="text-landing-color hover:underline"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
            {(isEditable || isPasswordReset) && ( // Show save button when editable or password reset is active
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
