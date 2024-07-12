import React from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'

const MyAccount = () => {
    return (
        <Container>
            <div className='mt-[130px] mb-[140px]'>
                <div >
                    <h1 className='text-[40px] text-[#262626] font-dm font-bold'>My Account</h1>
                    <p className='font-dm text-[#6D6D60] cursor-pointer'> <Link to="/">Home </Link> &#62; My account</p>
                </div>

                <div className='flex gap-x-20'>
                    <div className='w-[15%]'><h2 className='font-dm text-[18px] hover:text-[20px] text-[#262626] font-normal hover:font-bold duration-500 ease-in-out cursor-pointer mt-[105px] 
                    border-b-2 border-[rgba(118,118,118,0.23)] py-[25px]'>Dashboard</h2>

                        <div className='border-b-2 border-[rgba(118,118,118,0.23)] py-[25px]'><h2 className='font-dm text-[18px] hover:text-[20px] text-[#262626] font-normal hover:font-bold duration-500 ease-in-out cursor-pointer'>Others</h2></div>
                        <div className='border-b-2 border-[rgba(118,118,118,0.23)] py-[25px]'><h2 className='font-dm text-[18px] hover:text-[20px] text-[#262626] font-normal hover:font-bold duration-500 ease-in-out cursor-pointer'>Donwloads</h2></div>
                        <div className='border-b-2 border-[rgba(118,118,118,0.23)] py-[25px]'><h2 className='font-dm text-[18px] hover:text-[20px] text-[#262626] font-normal hover:font-bold duration-500 ease-in-out cursor-pointer'>Addresses</h2></div>
                        <div className='border-b-2 border-[rgba(118,118,118,0.23)] py-[25px]'><h2 className='font-dm text-[18px] hover:text-[20px] text-[#262626] font-normal hover:font-bold duration-500 ease-in-out cursor-pointer'>Account details</h2></div>
                        <div className='border-b-2 border-[rgba(118,118,118,0.23)] py-[25px]'><h2 className='font-dm text-[18px] hover:text-[20px] text-[#262626] font-normal hover:font-bold duration-500 ease-in-out cursor-pointer'>Logout</h2></div>

                    </div>
                    <div className='w-[60%] '><p className='font-dm text-[17px] text-[#767676] mt-[130px] '>Hello
                        <b className='text-[#262626] ml-[5px]'>admin</b>  (not <b className='text-[#262626]'>admin</b>? <b className='text-[#262626]'>Log out</b>)</p>
                        <p className='font-dm text-[17px] text-[#767676] mt-[30px] leading-[40px]'>From your account dashboard you can view your
                            <b className='text-[#262626]'>recent orders</b>, manage your <b className='text-[#262626]'>shipping and billing addresses</b>, and <b className='text-[#262626]'>edit your password and account details</b>.</p>
                    </div>
                </div>
            </div>


        </Container>
    )
}

export default MyAccount