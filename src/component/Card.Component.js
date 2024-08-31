import React from 'react'

function Card(promps) {
    return (
        <div className='bg-quiz-color rounded-lg shadow-lg'>
            <a href={`/${promps.name}`} className="w-full max-w-xs overflow-hidden" tabIndex="0">
                <div className="flex justify-center items-center">
                    <img
                        className="object-cover w-56 h-56 shadow-2xl rounded-lg"
                        src={promps.path}
                        alt="avatar"
                    />
                </div>

                <div className="py-5 text-center">
                    <p className="block text-xl font-bold text-white bg-[#CCAC8E]">
                        {promps.name}
                    </p>
                </div>
            </a>
        </div>

    )
}

export default Card
