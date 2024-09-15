import React from 'react'

function AboutLand() {
  return (
    <img
            alt=""
            src={`${process.env.PUBLIC_URL}/website-Image/about-Image.png`}
            className="absolute inset-0 h-full w-full object-cover opacity-80 z-[-1] pointer-events-none"
        />
  )
}

export default AboutLand
