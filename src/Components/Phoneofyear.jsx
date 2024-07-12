import React from 'react'
import Container from './Container'
import pic5 from "../assets/pic5.png"
import pic6 from "../assets/pic6.png"
import pic7 from "../assets/pic7.png"
import pic8 from "../assets/pic8.png"
import pic9 from "../assets/pic9.png"

export const Phoneofyear = () => {
    return (

       

        <section>
            <Container>
                <div className='mb-[128px] mt-[130px]'>
                    <div className='relative'>

                        <div>
                            <img src={pic5} alt="pic5" className='w-full' />
                        </div>

                        <div className='absolute top-[50%] right-[200px] translate-y-[-50%] '>
                            <h3 className='text-[30px] text-[#292929] font-dm font-bold py-2'>Phone of the year</h3>
                            <p className='py-4 w-[500px] font-dm text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                            <div className='w-[185px] h-[50px] leading-[45px] text-[black]  text-center cursor-pointer font-dm 
      border-2  border-[#262626] hover:bg-[#262626] hover:text-[white]  mt-[20px] duration-700 ease-in-out'><a href="#">Shop Now</a></div>
                        </div>

                    </div>
                </div>


              


            </Container>
        </section>
    )
}
