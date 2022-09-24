import React from 'react'

function Intro() {
  return (
    <div className='min-h-[80vh] flex flex-col items-start justify-center sm:justify-start gap-8 sm:gap-4 py-10 w-3/4 sm:w-full'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>John Doe Developer</h1>
        <h1 className='text-6xl sm:text-2xl text-white font-semibold'>
            I build awesome things for the web.
        </h1>
        <p className="text-white w-2/3 sm:w-full">
            I am Fullstack web developer / Instructor. Currently I am working as a React Developer in the Philippines.
            Also sharing my knowledge to the students that I have gained in my career through online teaching across the world.
        </p>
        <button className='border-2 border-accent text-white px-10 py-3 rounded text-accent'>Get Started</button>
    </div>
  )
}

export default Intro