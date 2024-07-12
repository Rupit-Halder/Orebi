import React from 'react'
import Container from '../Components/Container'
import clock from "../assets/clock.png"
import busket2 from "../assets/busket2.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container className="mb-[160px]">
        <div className='mt-[130px]'>
            <h2 className='text-[50px] text-[#262626] font-dm font-bold'>About</h2>
            <a className='font-dm text-[#6D6D60]'> <Link to="/">Home</Link> &#62;  Contacts</a>
        </div>

        <div className='flex gap-x-9 mt-[140px] '>
           <div className='w-[48%] h-[700px] relative'>
            <img src={clock} alt="clock" className='w-full h-[700px]'/>
            <div className='font-dm font-bold text-[18px] py-[15px] px-[60px] border-2 border-black duration-500 ease-in-out cursor-pointer
             hover:bg-[#262626] text-[black] hover:text-[white] inline-block absolute bottom-[50px] left-[50%] translate-x-[-50%]'>
               <a href="" className=''>Our Brands</a>
            </div>
           </div>
           <div className='w-[48%] h-[700px] relative'>
            <img src={busket2} alt="clock" className='w-full h-[700px]'/>
            <div className='font-dm font-bold text-[18px] py-[15px] px-[60px] border-2 border-black duration-500 ease-in-out cursor-pointer
             hover:bg-[#262626] text-[black] hover:text-[white] inline-block absolute bottom-[50px] left-[50%] translate-x-[-50%]'>
               <a href="" className=''>Our Brands</a>
            </div>
           </div>
        </div>

        <div className='mt-[130px]'>
            <h1 className='font-dm font-normal text-[39px] text-[#262626]'>Orebi is one of the world’s leading ecommerce brands and is internationally 
                recognized for celebrating the essence of classic Worldwide cool looking style.</h1>
        </div>

        <div className='flex gap-x-10 mt-[130px]'>
          <div className='w-[31%]'>
            <h2 className='font-dm font-bold text-[22px] text-[#262626] mb-[15px]'>Our Vision</h2>
            <p className='font-dm text-[16px] text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='w-[31%]'>
            <h2 className='font-dm font-bold text-[22px] text-[#262626] mb-[15px]'>Our Story</h2>
            <p className='font-dm text-[16px] text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it 
                to make a type specimen book. It has survived not only five centuries, but also the 
                leap into electronic.</p>
          </div>
          <div className='w-[31%]'>
            <h2 className='font-dm font-bold text-[22px] text-[#262626] mb-[15px]'>Our Brands</h2>
            <p className='font-dm text-[16px] text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </div>

    </Container>
  )
}

export default About