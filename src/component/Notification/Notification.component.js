import React from 'react';
import { useNotification } from './NotificationContext';

const Notifications = () => {
    const { notifications, removeNotification } = useNotification();

    return (
        <div className="fixed bg-black bg-opacity-40 right-12 top-16 space-y-4">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className="flex items-center justify-between max-w-4xl p-4 bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:shadow-gray-900 shadow-gray-100 dark:border-gray-700 rounded-2xl"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {notification.message}
                    </p>
                    <button
                        onClick={() => removeNotification(notification.id)}
                        className="flex items-center justify-center text-gray-700 transition-colors duration-300 rounded-full shrink-0 dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Notifications;
