import Header from 'components/Header'
import React from 'react'
import About from './About'
import Experiences from './Experiences'
import Intro from './Intro'

function Home() {
  return (
    <div className='bg-primary'>
      <Header/>
      <div className="px-40 sm:px-10 max-w-[1680px] m-auto">
        <Intro/>
        <About/>
        <Experiences/>
      </div>
    </div>
  )
}

export default Home