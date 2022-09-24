import Header from 'components/Header'
import React from 'react'
import About from './About'
import Intro from './Intro'

function Home() {
  return (
    <div className='bg-primary'>
      <Header/>
      <div className="px-40 sm:px-10">
        <Intro/>
        <About/>
      </div>
    </div>
  )
}

export default Home