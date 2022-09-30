import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {
  // @ts-ignore
  const {portfolioData : {intros}} = useSelector(rootState=> rootState.root)
  
  return (
    <div className='min-h-[80vh] sm:min-h-0 flex flex-col items-start justify-center sm:justify-start gap-8 sm:gap-4 py-10 w-3/4 sm:w-full'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{intros[0].firstName} {intros[0].lastName} Developer</h1>
        <h1 className='text-6xl sm:text-2xl text-white font-semibold'>
            {intros[0].caption}
        </h1>
        <p className="text-white w-2/3 sm:w-full">
            {intros[0].description}
        </p>
        <button className='border-2 border-accent text-white px-10 py-3 rounded text-accent'>Get Started</button>
    </div>
  )
}

export default Intro