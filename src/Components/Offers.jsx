import Container from './Container'
import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='absolute top-[50%] right-3 h-[40px] w-[40px] cursor-pointer 
         rounded-full bg-[#979797] text-center leading-[35px] translate-y-[-50%] text-[white] text-[20px]' onClick={onClick}
        > <GrFormNextLink className='inline-block' /> </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='absolute top-[50%] translate-y-[-50%] left-[-20px] cursor-pointer
      h-[40px] w-[40px] rounded-full bg-[#979797] text-center leading-[35px] z-50 text-[white] text-[20px]' onClick={onClick}
        > <GrFormPreviousLink className='inline-block' /> </div>
    );
}



const Offers = () => {





    var settings = {
        infinite: true,
        autoplay: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <section>
            <Container className="lg:px-0 px-[10px]">

                <div className=" pt-[48px] mt-[118px]">
                    <Slider {...settings}>

                        <div className="lg:!w-[90%] ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={pic1} className='w-full lg:h-[270px]' alt="" />

                                    <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0 " >
                                        <div className="">
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2 ">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>




                            <div className="flex justify-between items-center  py-5">
                                <div className="">
                                    <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="lg:!w-[90%]  ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={pic2} className='w-full lg:h-[270px]' alt="" />

                                    <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                        <div className="">
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2 ">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>




                            <div className="flex justify-between items-center  py-5">
                                <div className="">
                                    <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="lg:!w-[90%]  ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={pic3} className='w-full lg:h-[270px]' alt="" />

                                    <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                        <div className="">
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2 ">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>




                            <div className="flex justify-between items-center  py-5">
                                <div className="">
                                    <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="lg:!w-[90%]  ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={pic4} className='w-full lg:h-[270px]' alt="" />

                                    <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                        <div className="">
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2 ">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>




                            <div className="flex justify-between items-center  py-5">
                                <div className="">
                                    <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Offers