import React from 'react'
import Container from "./Container";
import ad1 from "../assets/Ad1.png"
import ad2 from "../assets/Ad2.png"
import ad3 from "../assets/Ad3.png"

const Ads = () => {
  return (
    <Container className="lg:pt-[165px] pt-[50px] lg:px-0 px-[10px] lg:pb-[50px]">
    <div className="lg:flex lg:justify-between">
      <div className="lg:w-[49%]">
        <div className="">
        <img src={ad1} className=' ' alt="" />
        </div>
      </div>
      <div className="lg:w-[49%] lg:pt-0 pt-3">
        <div className="">
          <img src={ad2} className='' alt="" />
        </div>
        <div className="lg:pt-9 pt-3">
          <img src={ad3} className='' alt="" />
        </div>
      </div>
    </div>
  </Container>
  )
}

export default Ads