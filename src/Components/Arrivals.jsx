import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';
import Slider from "react-slick";
import { GrFormNextLink,GrFormPreviousLink } from "react-icons/gr";
import { ApiData } from './ContextApi';

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className='absolute top-[50%] right-[-20px] h-[40px] w-[40px] cursor-pointer
         rounded-full bg-[#979797] text-center leading-[35px] translate-y-[-50%] text-[white] text-[20px]' onClick={onClick}
      > <GrFormNextLink className='inline-block'/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='absolute top-[50%] translate-y-[-50%] left-[-25px] cursor-pointer
      h-[40px] w-[40px] rounded-full bg-[#979797] text-center leading-[35px] z-50 text-[white] text-[20px]' onClick={onClick}
      > <GrFormPreviousLink className='inline-block'/> </div>
    );
  }

 

const Arrivals = () => {

    let data = useContext(ApiData)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <Container>
                <div className="mb-[50px]">
                    <h2 className='text-[39px] text-[#292929] font-dm font-bold'>New Arrivals</h2>
                </div>

                <Slider {...settings}>
                    {data.map((item,i) => (
                        <div key={i} className='!w-[96%] my-4'>
                            <div className='relative overflow-hidden group cursor-pointer'>
                                <img src={item.thumbnail} alt="arr1" className='w-full h-[300px]' />

                                <div className='bg-[white] h-[150px] absolute bottom-[-150px] group-hover:bottom-[0px] left-0 w-full flex justify-end 
                                       items-center duration-700 ease-in-out '>

                                    <div className=''>
                                        <div className='flex justify-end items-center py-2 mr-2 gap-x-3'>
                                            <p className='text-[16px] text-[#29292979] font-dm font-regular 
                                            hover:font-bold hover:text-[black] duration-300 ease-in-out'>Add to Wish List</p>
                                            <IoIosHeart />
                                        </div>
                                        <div className='flex justify-end items-center py-2 mr-2 gap-x-3'>
                                            <p className='text-[16px] text-[#29292979] font-dm font-regular 
                                              hover:font-bold hover:text-[black] duration-300 ease-in-out'>Compare</p>
                                            <TfiReload />
                                        </div>
                                        <div className='flex justify-end items-center py-2 mr-2 gap-x-3'>
                                            <p className='text-[16px] text-[#29292979] font-dm font-regular 
                                            hover:font-bold hover:text-[black] duration-300 ease-in-out'>Add to Cart</p>
                                            <FaShoppingCart />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='flex justify-between items-center pt-4'>
                                <div className=''>
                                    <h3 className='text-[16px] text-[#292929] font-dm font-bold'>{item.title}</h3>
                                </div>

                                <div className=''>
                                    <h3 className='text-[14px] text-[#292929] font-dm font-normal'>${item.price}</h3>
                                </div>

                            </div>
                        </div>
                    ))}

                </Slider>

            </Container>

        </div>
    )
}

export default Arrivals