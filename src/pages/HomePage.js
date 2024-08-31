import React from 'react'
import Header from '../component/Header'
import LandBack from '../component/LandBack'
import Banner from '../component/Banner.component'
import { Outlet, useLocation, useParams } from 'react-router-dom'

function HomePage() {

  const str = useLocation().pathname

  return (
    <div className='overflow-y-hidden h-screen'>
      {str === '/' ? (<div className='overflow-hidden'><LandBack />
        <Header />
        <Banner /></div>) : (<Outlet />)}
    </div>
  )
}

export default HomePage
