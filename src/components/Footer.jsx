import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-orange-200'>
        <div className='my-8'>
            <h1 className='text-center text-5xl'>We Ready To Have The Best</h1>
            <h1 className='text-center text-4xl my-1'>Dining Experiences</h1>
            <div className='flex justify-evenly m-4'>
                <div id='1' className='flex flex-col items-center'>
                    <i className="fa-regular fa-clock m-1.5 py-1"></i>
                    <h1 className=' text-3xl'>Open Hours</h1>
                    <p className=' text-xl'>Monday-Sunday</p>
                   
                </div>
                 <div id='2' className='flex flex-col items-center' >
                   <i className="fa-solid fa-phone-volume m-1.5 py-1"></i>
                    <h1 className=' text-3xl'>Lets Talk</h1>
                    <p className=' text-xl'>Phone:1-1800-222-4462</p>
                </div>
                <div id='3' className='flex flex-col items-center'>
                   <i className="fa-solid fa-utensils m-1.5 py-1"></i>
                    <h1 className=' text-3xl'>Book A Table</h1>
                    <p className=' text-xl'>Email:info@quikBite.com</p>
                </div>
                <div id='4' className='flex flex-col items-center'>
                   <i className="fa-solid fa-id-badge m-1.5 py-1"></i>
                    <h1 className=' text-3xl'>Contact Us</h1>
                    <p className=' text-xl'>123, Kochi,Kerala</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center content-center my-6'>
            <div className=''>
                <i className="fa-brands fa-facebook text-4xl mx-4"></i>
                <i className="fa-brands fa-twitter text-4xl mx-4"></i>
                <i className="fa-brands fa-instagram text-4xl mx-4"></i>
            </div>
        </div>
         <p className='text-center'>@ 2025 Quik Bite All Rights Are Reserved </p>
    </div>
  )
}

export default Footer