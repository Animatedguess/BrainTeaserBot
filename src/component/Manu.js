import React, { useState, useEffect } from 'react';
import Notifications from './Notification/Notification.component';
import NotificationButton from './Notification/NotificationButton';
import { NotificationProvider } from './Notification/NotificationContext';

function Manu({ onClick }) {
    const [visible, setVisible] = useState(false);
    const [userAvatar, setUserAvatar] = useState('');
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user data on component mount
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
                setUserAvatar(data.data.avatar); // Assuming response has `avatarUrl`
                setUserName(data.data.firstName+" "+data.data.lastName);        // Assuming response has `name`
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    function bothClick() {
        setVisible(!visible);
        onClick();
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <NotificationProvider>
                <Notifications />
                <NotificationButton />
            </NotificationProvider>

            <button
                type="button"
                onClick={bothClick}
                className="hidden items-center focus:outline-none md:flex"
                aria-label="toggle profile dropdown"
            >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                        src={userAvatar || "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                        className="object-cover w-full h-full"
                        alt="avatar"
                    />
                </div>

                <h3 className="mx-2 text-landing-color lg:hidden">{userName || "Kailash Agarwal"}</h3>
            </button>
        </>
    );
}

export default Manu;
