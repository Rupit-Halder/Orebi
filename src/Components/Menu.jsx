import React, { useContext, useEffect, useState, useRef } from 'react';
import Container from './Container';
import Flex from './Flex';
import {  FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ApiData } from "./ContextApi";

const Menu = () => {
  const data = useSelector((state) => state.product.cartItem);
  const navigate = useNavigate();
  const info = useContext(ApiData);
  const [catshow, setCatshow] = useState(false);
  const [cartshow, setCartshow] = useState(false);
  const [usershow, setUsertshow] = useState(false);
  const [itemshow, setItemshow] = useState(false);
  const itemMenu = useRef();
  const userMenu = useRef();
  const chartMenu = useRef();
  const catMenu = useRef();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Track selected item index

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (catMenu.current.contains(e.target)) {
        setCatshow(true);s
      } else {
        setCatshow(false);
      }

      if (chartMenu.current.contains(e.target)) {
        setCartshow(!cartshow);
      } else {
        setCartshow(false);
      }

      if (userMenu.current.contains(e.target)) {
        setUsertshow(!usershow);
      } else {
        setUsertshow(false);
      }

      if (itemMenu.current.contains(e.target)) {
        setItemshow(!itemshow);
      } else {
        setItemshow(false);
      }
    });
  }, [catshow, cartshow, usershow, itemshow]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      setSearchFilter([]);
    } else {
      const searchFind = info.filter((item) => item.title.toLowerCase().includes(searchTerm));
      setSearchFilter(searchFind);
    }

    setSelectedItemIndex(-1); // Reset selected item index when search term changes
  };

  const handleSearchgo = (id) => {
    navigate(`/product/${id}`);
    setSearchTerm(""); // Clear search term
    setSearchFilter([]); // Clear search results
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && selectedItemIndex !== -1) {
      handleSearchgo(searchFilter[selectedItemIndex].id);
    }
  };

  const handleArrowKey = (e) => {
    if (searchFilter.length === 0) return;

    if (e.key === "ArrowUp" && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    } else if (e.key === "ArrowDown" && selectedItemIndex < searchFilter.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };

  return (
    <div className='bg-[#F5F5F3]'>
      <Container className="py-7">
        <Flex className="items-center">
          <div className="relative w-[38%]" ref={catMenu}>
            <div className='flex items-center ' ref={catMenu}>
              <h3 className='px-3 font-dm text-[14px] cursor-pointer'>Shop by Category</h3>
            </div>
            {catshow &&
              <div className=" bg-[#262626] absolute z-50 lg:top-[40px] top-[48px] left-0 lg:w-[300px] w-[200px] ">
                <ul>
                  <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Accesories</a></li>
                  <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Furniture</a></li>
                  <li className='py-3 relative' ref={itemMenu}><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal pl-5  hover:text-[#fff] hover:pl-10 duration-700'>Electronics</a>

                    {itemshow &&
                      <div className=" lg:flex z-50 absolute lg:top-[-98px] top-[200px] lg:left-[300px] left-[0] bg-[#FFFFFF] py-[24px] lg:px-[25px]">
                        <div className="flex">
                          <div className="  w-[100px] ">
                            <ul>
                              <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Phones</h6></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 1</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal  hover:font-bold duration-200'>Phone 2</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 3</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 4</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 5</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 6</a></li>
                            </ul>
                          </div>
                          <div className=" w-[100px]">
                            <ul>
                              <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Computers</h6></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 1</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 2</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 3</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 4</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 5</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 6</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex">
                          <div className=" w-[140px]">
                            <ul>
                              <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Smart watches</h6></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 1</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 2</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 3</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal'>Smart watches 4</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 5</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 6</a></li>
                            </ul>
                          </div>
                          <div className=" w-[100px]">
                            <ul>
                              <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Cameras</h6></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 1</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 2</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 3</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 4</a></li>
                              <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 5</a></li>
                              <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 6</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    }
                  </li>
                  <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Clothes</a></li>
                  <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Bags</a></li>
                  <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Home appliances</a></li>
                </ul>
              </div>
            }
          </div>

          <div className='w-2/5 '>
            <div className='relative' >
              <input
                onKeyUp={handleEnter}
                onChange={handleSearch}
                onKeyDown={handleArrowKey} // Handle arrow key navigation
                placeholder='Search Products'
                className='  pl-3 w-full h-12 font-dms text-[14px]'
                type="text"
                value={searchTerm}
              />
              <div className='absolute top-[50%] translate-y-[-50%] right-[20px]'>
                <div ><FaSearch /></div>
              </div>
              {searchFilter.length > 0 &&
                <div className="absolute z-50 top-[40px] lg:left-0  cursor-pointer h-[500px] overflow-y-scroll">
                  {searchFilter.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handleSearchgo(item.id)}
                      className={`flex bg-[#F5F5F3] py-[20px] px-[20px] ${selectedItemIndex === index ? 'bg-gray-200' : ''}`}
                    >
                      <div className="flex items-center justify-between w-[350px]">
                        <div className="h-[100px] w-[100px]"><img src={item.thumbnail} alt="" /></div>
                        <div className="">
                          <h4 className='text-[14px ] text-[#262626] font-dm font-bold'>{item.title}</h4>
                          <p className='text-[14px ] text-[#262626] font-dm font-bold'>${item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>

          <div className='w-[20%] relative'>
            <div className='flex justify-end gap-6'>
              <div className='flex cursor-pointer' ref={userMenu}>
                <FaUser />
                <IoMdArrowDropdown />
              </div>

              <div className='cursor-pointer relative' ref={chartMenu}>
                {data.length ? <div className="bg-[#F5F5F3] h-[20px] w-[20px] absolute 
              top-[-15px] left-[12px] text-center leading-[20px] font-bold text-[20px] text-[red]">{data.length}</div> : ""}
                <FaShoppingCart />
              </div>
            </div>
            {cartshow &&
              <div className="absolute z-50 top-[40px] lg:right-0 right-[-15px] cursor-pointer">
                {data.map(()=>(
                  <>
                   <div className="flex bg-[#F5F5F3] py-[20px] px-[20px]">
                  <div className="flex items-center justify-between w-[350px]">
                    <div className="h-[100px] w-[100px] bg-[#979797] mr-[20px]"></div>
                    <div className="">
                      <h4 className='text-[14px ] text-[#262626] font-dm font-bold'>Black Smart Watch</h4>
                      <p className='text-[14px ] text-[#262626] font-dm font-bold'>$44.00</p>
                    </div>
                    <div className="ml-[30px]">
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-[white] py-[20px] px-[20px]">
                  <div className="">
                    <h3 className=''><span className='text-[16px] text-[rgba(38,38,38,0.67)] font-dm font-normal'>Subtotal:</span> <span className='text-[16px] text-[rgb(38,38,38)] font-dm font-bold'> $44.00</span></h3>
                  </div>
                  <div className="flex justify-between py-[20px]">
                    <div className="">
                      <a href="#" className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '> <Link to="/Cart">View Cart</Link></a>
                    </div>
                    <div className="">
                      <a href="#" className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '> <Link to="/checkOut">Checkout</Link> </a>
                    </div>
                  </div>
                </div>
                  </>
                ))}
              </div>
            }

            {usershow &&
              <div className="absolute z-50 top-5 right-[50px] cursor-pointer">
                <div className="text-center">
                  <ul>
                    <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '> <Link to="/MyAccount">My Account</Link> </li>
                    <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>Log Out</li>
                  </ul>
                </div>
              </div>
            }
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Menu;
