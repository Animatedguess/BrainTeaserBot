import React from 'react'
import { Link } from 'react-router-dom'

function Card(promps) {
    return (
        <Link to={promps.name}>
            <div className='bg-quiz-color rounded-lg shadow-lg'>
                <div className="w-full max-w-xs overflow-hidden" tabIndex="0">
                    <div className="flex justify-center items-center">
                        <img
                            className="object-cover w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shadow-2xl rounded-lg"
                            src={promps.path}
                            alt="avatar"
                        />
                    </div>

                    <div className="py-5 text-center">
                        <p className="block text-lg sm:text-xl md:text-2xl font-bold text-white bg-[#CCAC8E] px-2 py-1">
                            {promps.name}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
