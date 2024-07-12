import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaSkullCrossbones } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Container from './Container';
import Flex from './Flex';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

    let [show, setshow] = useState(false)
    let handleshow = ()=>{
        setshow(!show)
    }

  return (
    <>
    <Container className="py-7">
        <Flex className="items-center justify-between">
            <div className='lg:w-[15%]'>
                <img src={logo} alt="" />
            </div>
            <nav className='lg:w-[85%]'>
                <ul className={`lg:flex justify-center absolute top-0 left-0 lg:static text-center w-full -z-10
                     ${show == true ? "top-[-200px] left-0  duration-700 ease-in-out " : "top-[60px] left-0  duration-700 ease-in-out"}`}>
                    <li className='font-dm text-[#767676] font-bold text-[18px] lg:px-5 py-2 lg:py-1 cursor-pointer hover:text-[#262626]'> <NavLink to="/">Home</NavLink></li>
                    <li className='font-dm text-[#767676] font-bold text-[18px] lg:px-5 py-2 lg:py-1 cursor-pointer hover:text-[#262626]'> <NavLink to="/product">Shop</NavLink></li>
                    <li className='font-dm text-[#767676] font-bold text-[18px] lg:px-5 py-2 lg:py-1 cursor-pointer hover:text-[#262626]'> <NavLink to="/About">About</NavLink> </li>
                    <li className='font-dm text-[#767676] font-bold text-[18px] lg:px-5 py-2 lg:py-1 cursor-pointer hover:text-[#262626]'> <NavLink to="/Contacts">Contacts</NavLink> </li>
                    <li className='font-dm text-[#767676] font-bold text-[18px] lg:px-5 py-2 lg:py-1 cursor-pointer hover:text-[#262626]'>Journal</li>
                </ul>
            
            </nav>
           
            <div className='lg:hidden' onClick={handleshow}>
                  {show ?  <FaSkullCrossbones/>:<FaBars/>}
              
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Navbar