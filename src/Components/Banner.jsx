import React from 'react'
import bnnr from "../assets/banner.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from "./Container";
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          top: "55%",
          transform: "translateY(-50%)",
          left: "30px",
          width: "50%"
        }}
      >
        <ul style={{ margin: "0px", display: "table-caption" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "transparent",

          fontWeight: "500",
          borderRight: "3px #fff solid",
        }}
      >
        0{i + 1}
      </div>
    )
  }

  return (
    <div className=" border-b-2 border-[rgba(38,38,38,0.11)]">
      <Slider {...settings}>
        <div className="">
          <img src={bnnr} alt="" />
        </div>
        <div className="">
          <img src={bnnr} alt="" />
        </div>
        <div className="">
          <img src={bnnr} alt="" />
        </div>
      </Slider>
      <Container className="py-[20px] lg:px-0 px-[]">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="">
              <span className="text-[18px] text-[#262626] font-dm font-bold">2</span>
              <span className="lg:text-[16px] text-[14px] ml-2 text-[#262626] opacity-70 font-dm font-normal" >Two years warranty</span>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <span><FaTruck /></span>
              <span className="lg:text-[16px] text-[14px] ml-2 text-[#262626] opacity-70 font-dm font-normal">Free shipping</span>
            </div>

          </div>
          <div className="">
            <div className="flex items-center">
              <span><TbReload /></span>
              <span className="lg:text-[16px] text-[14px] ml-2 text-[#262626] opacity-70 font-dm font-normal">Return policy in 30 days</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner