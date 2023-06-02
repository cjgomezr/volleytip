import React from 'react'
import Slider from "../../Components/Slider/Slider"
import "./Home.scss"
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre'
import Founders from '../../Components/Founders/Founders'
import Motivational from '../../Components/Motivational/Motivational'

const Home = () => {
  return (
    <div className='home'>

      <Slider/>
      <WhoWeAre/>
      <Founders/>
      <Motivational/>
      {/* <FeaturedProducts type="General"/> */}
      {/* <Categories/>
      <FeaturedProducts type="General"/> */}
      <Contact/>
      
    </div>
  )
}

export default Home
