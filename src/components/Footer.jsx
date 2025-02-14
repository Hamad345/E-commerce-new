import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm mb-10'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=''/>
            <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore maiores illum doloremque voluptas deserunt odio, totam delectus a soluta velit veritatis eius repellat ullam porro explicabo dicta eos recusandae!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy</li>

   </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>000000000000000</li>
                <li>000000000@gmail.com</li>

            </ul>
        </div>
     

    </div>
       <div className='w-full flex flex-col justify-center'>
            <hr className=''/>
            <p className='py-5 text-sm text-center '>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
        </>
  )
}

export default Footer