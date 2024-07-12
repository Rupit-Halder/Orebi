import React from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { RiArrowUpSFill } from "react-icons/ri";


const checkOut = () => {
  return (
    <Container className="mb-[140px]">
      <div className='mt-[124px]'>
        <h2 className='font-dm text-[45px] font-bold'>Checkout</h2>
        <p className='font-dm text-[#6D6D60] cursor-pointer'> <Link to="/">Home</Link>  &#62;	Checkout </p>
      </div>

      <div className='mt-[127px]'>
        <span className='font-dm text-[18px] text-[#767676]'>Have a coupon?</span>
        <span className='font-dm text-[18px] text-[#262626] ml-[8px]'>Click here to enter your code</span>
      </div>

      <div className='mb-[42px] mt-[120px]'>
        <h2 className='font-dm text-[32px] font-bold text-[#262626]'>Billing Details</h2>
      </div>

      <div className='flex gap-x-8'>

        <div className=' w-[29%] pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[25px]'>
          <div className="">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'> First Name *</h2>
          </div>
          <div className="pt-[10px]">
            <input type="text" className='outline-none  w-full font-dm' placeholder='First Name' />
          </div>
        </div>

        <div className=' w-[29%] pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[25px]'>
          <div className="">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Last Name *</h2>
          </div>
          <div className="pt-[10px]">
            <input type="text" className='outline-none  w-full font-dm' placeholder='Last Name ' />
          </div>
        </div>

      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Companye Name (optional)</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Company Name ' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className='flex  justify-between'>
          <div className="">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Country *</h2>
          </div>
          <div>
            <select id="size" className='' >
              <option>Afghanistan</option>
              <option>Argentina</option>
              <option>Australia</option>
              <option>Bangladesh</option>
              <option>Brazil</option>
              <option>Colombia</option>
              <option>China</option>
              <option>India</option>
              <option>Nepal</option>
              <option>United Kingdom, The</option>
              <option>United Arab Emirates, The</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
            </select>
          </div>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Please select' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Street Address *</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full border-b-2 border-[rgba(118,118,118,0.23)] pb-[20px]'
            placeholder='House number and street name ' />
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm pt-[20px]' placeholder='Apartment, suite, unit etc. (optional)' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Town/City *</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Town/City ' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>County (optional)</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='County' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Post Code *</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Post Code ' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Phone *</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Phone' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Email Address *</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Email ' />
        </div>
      </div>

      <div className='pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px] w-[60%]'>
        <div className="">
          <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Town/City *</h2>
        </div>
        <div className="pt-[10px]">
          <input type="text" className='outline-none  w-full font-dm' placeholder='Town/City ' />
        </div>
      </div>


      <div className='mt-[130px] w-[60%]'>
        <div>
          <h1 className='font-dm text-[32px] font-bold text-[#262626]'>Additional Information</h1>
        </div>
        <div className='pb-[80px] border-b-2 border-[rgba(118,118,118,0.23)] mt-[30px]'>
          <div className=" mt-[30px]">
            <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Other Notes (optional)</h2>
          </div>
          <div className="pt-[10px]">
            <input type="text" className='outline-none  w-full font-dm' placeholder='Notes about your order, e.g. special notes for delivery. ' />
          </div>
        </div>
      </div>

      <div className='w-[60%]'>
        <div className='mt-[130px]'>
          <h1 className='font-dm text-[32px] font-bold text-[#262626]'>Your Order</h1>
        </div>

        <div className='flex mt-[50px]'>
          <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Product</p>
          </div>
          <div className="">
            <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
              <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>Total</p>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Product name x 1</p>
          </div>
          <div className="">
            <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
              <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>389.99 $</p>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Subtotal</p>
          </div>
          <div className="">
            <div className=" border-[1px] border-[hsl(0,0%,94%)] h-[54px] w-[322px] ">
              <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>389.99 $</p>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
            <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Total</p>
          </div>
          <div className="">
            <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
              <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>389.99 $</p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-[60%] border-2 py-[30px] px-[30px] mt-[80px]'>
        <div>
          <input type="radio" name='gender' />
          <label htmlFor="" className='ml-[10px] text-[18px] font-dm font-bold'>Bank</label>
        </div>

       

      <div className='relative'>
      <div className=' text-[60px] absolute z-10 left-[20px] top-[-35px]'><RiArrowUpSFill className='text-[#F5F5F3]'/></div>
      <p className='bg-[#F5F5F3] text-[#979797] py-[20px] px-[30px] mt-[15px] '>Pay via Bank; you can pay with your credit 
      card if you don’t have a Bank account.</p>
      </div>

        <div className='mt-[30px]'>
          <input type="radio" name='gender'/>
          <label htmlFor="" className='ml-[10px] text-[18px] font-dm font-bold'>Bank2</label>
        </div>

        <div>
          <p className='text-[16px] font-dm text-[#767676] leading-[25px] mt-[20px]'>Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described in our <b>privacy policy</b>.</p>
        </div>

        <div className='inline-block px-[30px] py-[15px] text-[16px] font-dm font-bold mt-[30px] cursor-pointer
         hover:bg-[#262626] hover:text-[white] border-2 border-black duration-500 ease-in-out'>
          <a href="">Proceed to Bank</a>
        </div>

      </div>





    </Container>
  )
}

export default checkOut