import React, { useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Slice/productSlice';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";



const Post = ({ allPage, cateFilter, multi }) => {

    let [showFilter,setShowFilter] = useState([])

    let [ShowLess, setShowLess] = useState(true)

    let navigate = useNavigate()

    let dispatch = useDispatch()


    useEffect(()=>{
       let showFilterVag = cateFilter.slice(0,5)
       setShowFilter(showFilterVag)
    },[cateFilter])

     let handleShowFilter =  ()=>{
        setShowFilter(cateFilter)
        setShowLess(false)
    }

    let handleShowLess = ()=>{
        setShowLess(true)
        let showLessVag = cateFilter.slice(0,5)
        setShowFilter(showLessVag)
    }

    let handleAddtoCart = (item)=>{
       dispatch(addtoCart({...item, quan:1}))
      setTimeout(()=>{
        navigate("/product")
      })
    }

   
 
    return (


        <>
       
            {cateFilter.length > 0 ?
                <div className="">
                    <div className={`${multi == "multiactive" ? "" : 'flex justify-between flex-wrap mt-[50px]'} `}>
                   {showFilter.map((item, i) => (
                        <div key={i} className="w-[32%]">
                            <Link to={`/product/${item.id}`}>
                                <div className="relative group overflow-hidden">
                                    <img src={item.thumbnail} className='w-full lg:h-[270px]' alt="" />

                                    <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                        <div className="">
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                                                <FaHeart />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2 ">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                                                <TfiReload />
                                            </div>
                                            <div className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center  py-5">
                                    <div className="">
                                        <p className='text-[16px] text-[#262626] font-dm font-bold'>{item.title}</p>
                                    </div>
                                    <div className="">
                                        <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${item.price}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    </div>
                    {ShowLess  ? 
                    cateFilter.length > 5 &&
                    <div>
                    <h3 onClick={handleShowFilter} className='cursor-pointer flex items-center mt-[120px]'><div><h3 className='font-dm text-[17px] hover:font-bold duration-300 ease-in-out underline '>Show All</h3></div> <div className='ml-[10px]'><IoMdArrowDropdown className='text-[30px]'/></div> </h3>
                    </div> 
                    :
                    cateFilter.length > 5 &&
                    <h3 className='cursor-pointer flex items-center mt-[120px]' onClick={()=>handleShowLess()}> <div><h3 className='font-dm text-[17px] hover:font-bold duration-300 ease-in-out underline'>Show Less</h3></div> <div className='ml-[10px]'><IoMdArrowDropup className='text-[30px]'/></div> </h3>
                    }
                
                </div>
                :
                <div className={`${multi == "multiactive" ? "" : 'flex justify-between flex-wrap mt-[50px]'}`}>
                    {allPage.map((item, i) => (
                        <div key={i} className="w-[32%]">
                                <div className="relative group overflow-hidden">
                            <Link to={`/product/${item.id}`}>
                                    <img src={item.thumbnail} className='w-full lg:h-[270px]' alt="" />
                                    </Link>
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
                                            <div onClick={()=>handleAddtoCart(item)} className="flex items-center justify-end mr-2 py-2">
                                                <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out cursor-pointer'>Add to Cart</h3>
                                                <FaShoppingCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center  py-5">
                                    <div className="">
                                        <p className='text-[16px] text-[#262626] font-dm font-bold'>{item.title}</p>
                                    </div>
                                    <div className="">
                                        <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${item.price}</h3>
                                    </div>
                                </div>
                          
                        </div>
                    ))}
                </div>
            }
           
        </>

    )
}

export default Post