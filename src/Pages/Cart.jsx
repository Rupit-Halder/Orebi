import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { productIncrement, productDecrement,productSplice } from "../Components/Slice/productSlice"
import { Link } from 'react-router-dom';

const Cart = () => {
  let dispatch = useDispatch()

  let data = useSelector((state) => (state.product.cartItem))

  let handleIncrement = (item) => {
    dispatch(productIncrement(item))
  }

  let handleDecrement = (item) => {
    dispatch(productDecrement(item))
  }

  let productCross = (item)=>{
    dispatch(productSplice(item))
  }

  let {totalPrice, totalQuantity} = data.reduce((acc,item)=>{
    acc.totalPrice += item.price * item.quan
    acc.totalQuantity += item.quan
    return acc

  },{totalPrice:0, totalQuantity:0}) 
   
 
 


  return (
    <div className='mb-[100px]'>
      <Container>

        <div className='py-[124px] pb-[130px]'>
          <h4 className='text-[49px] text-[#262626] font-dm font-bold '>Cart</h4>
          <span className='font-dm text-[#6D6D60]'> <Link to="/">Home</Link> 	&#62; Cart</span>
        </div>

        <Flex className="justify-between items-center bg-[#F5F5F3] h-[50px]">
          <div className='w-[25%] pl-[20px]'>
            <h3 className=''>Product</h3>
          </div>
          <div className='w-[25%]'>
            <h3>Price </h3>
          </div>
          <div className='w-[25%]'>
            <h3>Quantity</h3>
          </div>
          <div className='w-[25%]'>
            <h3>Total</h3>
          </div>
        </Flex>


        {data.map((item, i) => (
          <Flex className="justify-between items-center pt-8">
            <div className='w-[20%]  pl-[20px] flex items-center justify-between'>
              <div onClick={()=>productCross(i)} className='cursor-pointer'>
                <RxCross2 />
              </div>
              <div className=''>
                <img className='h-[100px] w-[100px]' src={item.thumbnail} alt="" />
              </div>
              <div className=''>
                <h4>{item.title}</h4>
              </div>
            </div>

            <div className='w-[15%]'>${item.price}</div>



            <div className=" w-[25%] pl-[30px]">
              <div className="  flex h-[50px] w-40 items-center justify-around border-2">
                <div className="">
                  <span className='cursor-pointer font-bold text-[20px]' onClick={() => handleDecrement(i)}>-</span>
                </div>
                <div className="">
                  <span>{item.quan}</span>
                </div>
                <div className="">
                  <span className='cursor-pointer font-bold text-[20px]' onClick={() => handleIncrement(i)}>+</span>
                </div>
              </div>
            </div>



            <div className='w-[25%]'>${item.price * item.quan}</div>

          </Flex>
        ))}

        <div className="py-[20px] items-center border-[1px] border-[#F0F0F0]">
          <div className="flex justify-between items-center ">
            <div className="">
              <select id="size" name="size" className='border-[2px] w-[255px] h-[50px] ml-[20px] items-center ' >
                <option>S</option>
                <option>M</option>
                <option>XL</option>
                <option>XXL</option>
                <option>XXXL</option>
              </select>
              <span className='text-[16px] text-[#262626] font-dm font-bold pl-[20px]'>Apply coupon</span>
            </div>
            <div className="">
              <div className="">
                <span className='text-[16px] text-[#262626] font-dm font-bold'>Update cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='w-[40%] pt-[50px]'>
            <div className=''>
            <div className="pb-[24px] ">
                <p className='text-[20px] text-[#262626] font-dm font-bold text-end '>Cart totals</p>
              </div>
              <div className='flex'>
              <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Subtotal</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>${totalPrice}</p>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Total Quntity</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>{totalQuantity}</p>
                  </div>
                </div>
                </div>
                <div className='flex'>
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Total</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>${totalPrice}</p>
                  </div>
                </div>
                </div>
                <div className="pt-[20px] flex justify-end">
                <div className="">

                  <Link to="/checkOut">
                  <button className='h-[50px] w-[200px] items-center text-[14px] text-[#262626] 
                  font-dm font-semibold border-[1px] border-[#767676] hover:text-[#fff] 
                  hover:bg-[#262626] duration-500 ease-in-out'>Proceed to Checkout</button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </div>
  )


}



export default Cart