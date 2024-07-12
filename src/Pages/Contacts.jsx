import React from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <Container className="mb-[140px]">
            <div className='mt-[130px]'>
                <h2 className='text-[40px] text-[#262626] font-dm font-bold'>Contacts</h2>
                <a className='font-dm text-[#6D6D60]'><Link to="/">Home</Link> &#62;  Contacts </a>
            </div>

            <div className='mt-[130px]'>
                <h2 className='text-[30px] text-[#262626] font-dm font-bold'>Fill up a Form</h2>
            </div>

            <div className='w-[50%] border-b-2 border-[rgba(118,118,118,0.23)] mt-[42px] pb-[20px]'>
                <div className="">
                    <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Name</h2>
                </div>
                <div className="pt-[10px]">
                    <input type="text" className='outline-none  w-full font-dm text-[18px]' placeholder='Your name here' />
                </div>
            </div>

            <div className='w-[50%] border-b-2 border-[rgba(118,118,118,0.23)] mt-[42px] pb-[20px]'>
                <div className="">
                    <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Email</h2>
                </div>
                <div className="pt-[10px]">
                    <input type="email" className='outline-none  w-full font-dm text-[18px]' placeholder='Your email here' />
                </div>
            </div>

            <div className='w-[50%] border-b-2 border-[rgba(118,118,118,0.23)] mt-[42px] pb-[80px]'>
                <div className="">
                    <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Message</h2>
                </div>
                <div className="pt-[10px]">
                    <input type="text" className='outline-none  w-full font-dm text-[18px]' placeholder='Your message here' />
                </div>
            </div>

            <div className='w-[15%] py-[15px] border-2 text-center cursor-pointer duration-500 ease-in-out
             border-black hover:bg-[black] mt-[60px] text-[black] hover:text-[white]'>
                <a href="" className='text-[20px] font-dm font-bold'>Post</a>
            </div>

            <div className='mt-[140px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17372.281990457785!2d90.3707254542456!3d23.74479703601865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1718737984163!5m2!1sen!2sbd" 
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[600px]'></iframe>
            </div>

        </Container>
    )
}

export default Contacts