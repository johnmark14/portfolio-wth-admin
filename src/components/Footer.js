import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center text-white py-10 sm:py-5 mt-4 absolute z-20 bg-primary bottom-0 w-[100%] border-t-4 border-accent/10 gap-4'>
        <ul className='flex gap-5 msm:hidden'>
            <li><i className="ri-facebook-circle-line text-2xl"></i></li>
            <li><i className="ri-mail-line text-2xl"></i></li>
            <li><i className="ri-instagram-line text-2xl"></i></li>
            <li><i className="ri-linkedin-box-line text-2xl"></i></li>
            <li><i className="ri-github-line text-2xl"></i></li>
        </ul>
        <h2>Designed and Developed by</h2>
        <span>John Doe Dev 2022</span>
    </div>
  )
}

export default Footer