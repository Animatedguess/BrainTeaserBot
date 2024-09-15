import React from 'react'
import LandingCom from '../component/LandingCom'
import LandBack from '../component/LandBack'

function LandingPage() {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
        <LandBack/>
        <LandingCom/>
    </div>
  )
}

export default LandingPage
