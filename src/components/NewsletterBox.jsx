import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler =(e)=>{
        e.preventDefault()

    }
  return (
    <div className='text-center mt-10'>
    <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam deserunt accusamus. Esse, repellendus voluptates?</p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewsletterBox