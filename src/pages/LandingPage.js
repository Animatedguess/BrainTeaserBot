import React from 'react'
import LandingCom from '../component/LandingCom'
import NavBar from '../component/NavBar'
import LandBack from '../component/LandBack'
import { Outlet } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
        <LandBack/>
        <NavBar/>
        <LandingCom/>
    </div>
  )
}

export default LandingPage
