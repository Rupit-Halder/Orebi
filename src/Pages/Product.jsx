import React, { useContext, useEffect, useState } from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import Flex from '../Components/Flex'
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { ApiData } from '../Components/ContextApi';
import Post from '../Components/Pagination/Post';
import PaginationArea from '../Components/Pagination/PaginationArea';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Product = () => {
    let Data = useContext(ApiData)

    let [cateFilter, setCateFilter] = useState([])

    let [category, setCategory] = useState([])

    let [multi, setMulti] = useState("")

    let [showCate, setshowCate] = useState(false)

    let [startPage, setStartpage] = useState(1)
    let [perPage, setPerpage] = useState(6)

    let lastPage = startPage * perPage
    let fastPage = lastPage - perPage

    let allPage = Data.slice(fastPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(cateFilter.length > 0 ? cateFilter : Data.length / perPage); i++) {
        pageNumber.push(i)
    }


    let peginate = (pageNumber) => {
        setStartpage(pageNumber + 1)
    }

    let next = () => {
        if (startPage < pageNumber.length) {

            setStartpage((state) => state + 1)
        }
    }

    let preve = () => {
        if (startPage > 1) {
            setStartpage((state) => state - 1)
        }

    }

    useEffect(() => {
        setCategory([...new Set(Data.map((item) => item.category))])
    }, [Data])

    let handlecategory = (citem) => {
        let cateFilter = Data.filter((item) => item.category == citem)
        setCateFilter(cateFilter)
    }

    let handleList = ()=>{
        setMulti("multiactive")
    }

    return (
        <Container>
            <div className='mb-[50px] mt-[124px]'>
                <div className="">
                    <h3 className='text-[49px] text-[#292929] font-dm font-bold '><Link to="/product">Products</Link></h3>
                    <span className='text-[14px] text-[#767676] font-dm font-normal'><Link to="/">Home</Link> &#62; Products</span>
                </div>

                <Flex>
                    <div className='w-[20%] mt-[120px]'>
                        <div className='mr-20'>
                            <div className='flex justify-between items-center cursor-pointer'>
                                <h3 className='font-dm font-bold text-[18px]' onClick={() => setshowCate(!showCate)}>Shop by Category</h3>
                                <div className='text-[21px]' onClick={() => setshowCate(!showCate)}>
                                    {showCate == true ? <FaCaretUp /> : <FaCaretDown />}
                                </div>
                            </div>
                            {showCate &&
                                <ul className='py-[20px]'>
                                    {category.map((item) => (
                                        <li className='text-[18px] border-b-[3px] py-[20px] cursor-pointer
                              font-normal hover:font-bold' onClick={() => handlecategory(item)}>{item}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>

                    <div className='w-[80%] mt-[100px] '>
                        <div className="lg:flex flex items-center lg:w-[100%] ">
                            <div onClick={()=>setMulti("")} className="mr-[20px] py-[12px] px-[12px] border-2 duration-500 ease-in-out  hover:bg-[#262626] hover:text-[#fff] cursor-pointer">
                                <IoGrid />
                            </div>
                            <div onClick={handleList} className="py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff] cursor-pointer ">
                                <TfiMenuAlt />
                            </div>
                            <div className='w-[30%] ml-[430px] flex items-center'>
                             <h3>Sort by:</h3>
                             <div className='relative'>
                             <input type="text" placeholder='Featured' className=' w-[290px]  py-[5px] 
                             pl-[8px] border-2 border-[rgba(118,118,118,0.27)] ml-[8px]' />
                             <div className='absolute top-[50%] right-0 translate-y-[-50%] mr-[10px] text-[#737373]'>
                              <TiArrowSortedDown />
                              </div>
                             </div>
                            </div>

                            <div className=' flex items-center ml-[80px]'>
                              <h3>Show:</h3>
                              <div className='relative'>
                              <input type="text" placeholder='36' className=' lg:w-[70%] w-[290px] 
                              py-[5px] pl-[10px] border-2 border-[rgba(118,118,118,0.26)] ml-[8px]' />
                              <div className='absolute top-[50%] lg:right-[60px] right-0 translate-y-[-50%] 
                              mr-[10px] text-[#737373]'>
                              <TiArrowSortedDown />
                              </div>
                              </div>
                            </div>
                        </div>

                        <Post allPage={allPage} cateFilter={cateFilter} multi={multi}/>

                        <div className='text-end mt-[50px]'>
                            <PaginationArea pageNumber={pageNumber} peginate={peginate} startPage={startPage}
                                next={next} preve={preve} />
                        </div>

                    </div>


                </Flex>

            </div>
        </Container>
    )
}

export default Product