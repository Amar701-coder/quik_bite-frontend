import React from 'react'

const Header = () => {
  return (
    <div>
        <div id='header-section rounded-full w-full'>
            <div className='flex justify-between bg-orange-200 '>
                <img src="/res.png" alt="" width={75} />
                <ul className='flex gap-3.5 items-center mx-3'>
                    <li className='bg-orange-300 p-2 rounded-full ' style={{fontSize:'22px'}}>Dine With Us</li>
                    <li className='bg-orange-300 p-2 rounded-full'  style={{fontSize:'22px'}}>Login </li>
                    <li className='bg-orange-300 p-2 rounded-full' style={{fontSize:'22px'}} >Sign Up</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header