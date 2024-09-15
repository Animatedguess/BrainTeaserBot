import React, { useState } from 'react';
import Header from '../component/Header';
import LandBack from '../component/LandBack';
import Banner from '../component/Banner.component';
import { Outlet, useLocation } from 'react-router-dom';

function HomePage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    // List of paths where Header should not appear
    const noHeaderPaths = ['/login', '/register']; // Add '/signup' to the list

    // Check if current path is in the list of paths without Header
    const hideHeader = noHeaderPaths.includes(location.pathname);

    return (
        <div className='overflow-y-hidden h-screen'>
            {location.pathname === '/' ? (
                <div className='overflow-hidden'>
                    <LandBack />
                    {!hideHeader && <Header isAuthenticated={isAuthenticated} />}
                    <Banner isAuthenticated={isAuthenticated} />
                </div>
            ) : (
                <>
                    {/* Only render Header if not on login or signup pages */}
                    {!hideHeader && <Header isAuthenticated={isAuthenticated} />}
                    <Outlet context={{ isAuthenticated, setIsAuthenticated }} />
                </>
            )}
        </div>
    );
}

export default HomePage;
