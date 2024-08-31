import React, { useState } from 'react'
import Notifications from './Notification/Notification.component';
import NotificationButton from './Notification/NotificationButton';
import { NotificationProvider } from './Notification/NotificationContext';
import AvatarLayout from './Avatar/AvatarLayout';

function Manu() {
    const [visible,setVisible]=useState(false);
    return (
        <>
            <NotificationProvider>
                <Notifications />
                <NotificationButton />
            </NotificationProvider>

            <button
                type="button"
                onClick={()=>setVisible(!visible)}
                className="hidden items-center focus:outline-none md:flex"
                aria-label="toggle profile dropdown"
            >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        className="object-cover w-full h-full"
                        alt="avatar"
                    />
                </div>

                <h3 className="mx-2 text-landing-color lg:hidden">Kailash Agarwal</h3>
            </button>

            {visible?<AvatarLayout visible={visible} setVisible={setVisible}/>
            :<div></div>}
        </>
    )
}

export default Manu
