import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { IoStar } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import productSlice, { addtoCart } from '../Components/Slice/productSlice'


const ProductDetails = () => {

  let dispatch = useDispatch()

  let [show, setShow] = useState(false)

  let [see, setSee] = useState(false)

  let [singleProduct, setSingleProduct] = useState([])

  let productId = useParams()


  let dataId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProduct(response.data)
    })
  }

  useEffect(() => {
    dataId()
  }, [])

  let clientRating = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5
    return (
      singleProduct.rating > index + 1 ? <IoStar /> :
        singleProduct.rating > number ? <FaStarHalfStroke /> : <FaRegStar />

    )
  })
  
  let handleaddtoCart = (item)=>{
    dispatch(addtoCart({...item ,quan:1}))
  }

  return (
    <Container>
      <Flex className="flex-wrap justify-between">

        {singleProduct.images?.map((item) => (
          <div className='w-[48%] mt-20'>
            <img src={item} alt="" className='h-[300px]' />
          </div>
        ))}

      </Flex>

      <div className='w-[45%]'>
        <h4 className='text-[39px]  text-[#262626] font-dm font-bold'>Product</h4>
        <div className=' pt-3  flex items-center '>
          <p className='text-[#FFD881] flex'>{clientRating}</p>
          <div className='ml-[10px]'>
            <span className='text-[14px] font-dm font-normal text-[#767676] '>{singleProduct.rating}</span>
          </div>
        </div>

        <div className='flex pt-[10px] pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)]'>
          <span><del className='text-[rgba(118,118,118,0.49)] font-dm font-medium'>{singleProduct.discountPercentage} %Discount</del></span>
          <span className='text-[20px] text-[#262626] font-dm font-bold ml-[20px]'>${singleProduct.price}</span>
        </div>
      </div>

      <div className=''>
        <div className="flex items-center mt-10">
          <div className="">
            <h3 className='text-[20px] uppercase text-[#262626] font-dm font-bold'>color:</h3>
          </div>
          <div className="flex items-center ml-[53px]">
            <div className="h-[25px] w-[25px] rounded-full bg-[#767676]"></div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#FF8686] mx-[15px]"></div>
            <div className="h-[25px] w-[25px] rounded-full bg-[#7ED321]"></div>
            <div className="h-[25px] w-[25px] rounded-full bg-[#B6B6B6] mx-[15px]"></div>
            <div className="h-[25px] w-[25px] rounded-full bg-[#15CBA5]"></div>
          </div>
        </div>
      </div>


      <div className=''>

        <div className="pt-[30px] flex w-[48%]">
          <div className="">
            <h4 className='text-[20px] text-[#262626] font-dm font-bold' >SIZE:</h4>
          </div>
          <div>
            <select id="size" name="size" className='border-[2px] w-[70px] ml-[80px]' size="1">
              <option>S</option>
              <option>M</option>
              <option>XL</option>
              <option>XXL</option>
              <option>XXXL</option>
            </select>
          </div>

        </div>

       

        <div className="flex items-center py-[30px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]">
          <div className="">
            <h4 className='text-[20px] text-[#262626] font-dm font-bold' >STATUS:</h4>
          </div>
          <div className=" ml-[30px]">
            <span className='text-[14px] text-[#262626] font-dm font-normal '> Items Stock</span>
          </div>
        </div>

        <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]">
          <div className="flex">
            <div className="">
              <button className=' h-[50px] w-[200px] font-dm font-normal border-2 border-[#262626] 
              hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Add to Wish List</button>
            </div>
            <Link to="/Cart">
              <div className="ml-[20px]">
                <button onClick={()=>handleaddtoCart(singleProduct)} className='h-[50px] w-[200px] font-dm font-normal border-2 border-[#262626]
               hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Add to Cart</button>
              </div>
            </Link>

          </div>
        </div>

        <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]" >
          <div className="flex justify-between items-center cursor-pointer">
            <div className="">
              <h4 className='text-[20px] text-[#262626] font-dm font-bold' >FEATURES  & DETAILS</h4>
            </div>
            <div onClick={() => setShow(!show)}>
              {show == true ? <span><FaMinus /></span> : <span><FaPlus /></span>}
            </div>

          </div>
          <div className="py-[30px]">
            <div className="">
              {show &&
                <p className='text-[16px] text-[#767676] font-dm font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
          </div>
        </div>


        <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]">
          <div className="flex justify-between items-center cursor-pointer">
            <div className="">
              <h4 className='text-[20px] text-[#262626] font-dm font-bold' >SHIPPING & RETURNS</h4>
            </div>
            <div onClick={() => setSee(!see)}>
              {see == true ? <span><FaMinus /></span> : <span><FaPlus /></span>}
            </div>

          </div>
          <div className="py-[30px]">
            <div className="">
              {see &&
                <p className='text-[16px] text-[#767676] font-dm font-normal '>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              }
            </div>
          </div>
        </div>


        <div className="py-[50px]">
          <span className='text-[20px] text-[#262626] font-dm font-bold'>Add a Review</span>
        </div>

        <div className="pb-[30px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]">
          <div className="">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Name</h2>
          </div>
          <div className="pt-[10px]">
            <input type="text" className='outline-none  w-full' placeholder='Enter Name' />
          </div>
        </div>

        <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]">
          <div className="">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Email</h2>
          </div>
          <div className="pt-[10px]">
            <input type="text" className='outline-none  w-full' placeholder='Enter Name' />
          </div>
        </div>

        <div className="pt-[30px] pb-[70px] border-b-2 border-[rgba(118,118,118,0.23)] w-[48%]">
          <div className="">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Review</h2>
          </div>
          <div className="pt-[10px]">
            <input type="text" className='outline-none w-full' placeholder='Enter Name' />
          </div>
        </div>

        <div className="py-[30px]">
          <button className='w-[200px] h-[50px] border-2 border-[#262626] font-dm font-normal
           hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Post</button>
        </div>
      </div>


    </Container>
  )
}

export default ProductDetails