import React from 'react'

function LeftNav() {
  return (
    <div className='text-white fixed sm:hidden z-10 left-0 top-0 flex w-fit h-[100%] flex-col items-center justify-end pl-10'>
        <ul className='h-[40vh] flex flex-col justify-end gap-5 cursor-pointer'>
            <li><i className="ri-facebook-circle-line text-2xl"></i></li>
            <li><i className="ri-mail-line text-2xl"></i></li>
            <li><i className="ri-instagram-line text-2xl"></i></li>
            <li><i className="ri-linkedin-box-line text-2xl"></i></li>
            <li><i className="ri-github-line text-2xl"></i></li>
        </ul>
        <div className='w-[1px] h-[40vh] bg-accent'></div>
    </div>
  )
}

export default LeftNav