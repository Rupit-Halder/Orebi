import React from 'react'
import Banner from '../Components/Banner'
import Ads from '../Components/Ads'
import Arrivals from '../Components/Arrivals'
import Offers from '../Components/Offers'
import { Phoneofyear } from '../Components/Phoneofyear'
import { Special } from '../Components/Special'


const Home = () => {
  return (
   <>
      <Banner/>
      <Ads/>
      <Arrivals/>
      <Offers/>
      <Phoneofyear/>
      <Special/>
   </>
  )
}

export default Home