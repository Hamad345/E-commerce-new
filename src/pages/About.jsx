import React from 'react'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={"ABOUT"} text2={"US"}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
      <div className='flex flex-col  justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur laboriosam, officiis deserunt quos voluptates, minima, obcaecati sit facere nihil nisi modi beatae doloremque quaerat recusandae tenetur ipsam. Pariatur itaque necessitatibus rerum non velit praesentium voluptas dicta, beatae, corrupti, facilis reprehenderit. Necessitatibus doloribus quos obcaecati neque iure hic vitae tempora?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur suscipit reprehenderit dicta magnam possimus nisi tempore harum placeat dolorem, corporis aliquid ad et! At asperiores excepturi voluptate aliquid vel.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni, similique hic dolore beatae iusto quam culpa non earum nobis?</p>

      </div>
    </div>
    <div className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam provident doloremque aliquam optio ratione enim error saepe quasi ducimus.</p>
      </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam provident doloremque aliquam optio ratione enim error saepe quasi ducimus.</p>
      </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam provident doloremque aliquam optio ratione enim error saepe quasi ducimus.</p>
      </div> 


    </div>
<NewsletterBox/>
    </div>
  )
}

export default About