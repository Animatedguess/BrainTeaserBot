import React, {useState} from 'react'
import Card from './Card.Component'
import { categories } from '../Data/categoryData'
import Customize from './Customize.component';

function Grid() {
    const [check,setCheck]=useState(false);
    
    return (
        <section className="bg-transparent">
            {check?(<Customize/>):(<></>)}
            <div className="container px-6 py-10 mx-auto">
                <span className="relative lg:max-w-lg justify-center">
                    <h1 className="text-2xl font-semibold text-gray-950 lg:text-3xl">
                        Select a category below and test <span className="text-quiz-color">your knowledge!</span>
                    </h1>

                    <p className="text-gray-700 text-lg font-medium">
                        Can you ace all 5 questions in your chosen topic? {' '}
                        <span className="font-semibold text-lg text-quiz-color">Let's find out!</span>
                    </p>
                </span>

                <div className="grid grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 h-96 lg:grid-cols-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent" onClick={()=>setCheck(!check)}>
                    {categories.map(({ id, name, path }) => (
                        <div key={id} className="w-full">
                            <Card name={name} path={path} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Grid
