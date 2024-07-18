import React from 'react'

import Navbar from "../components/navbar/Navbar"

import Footer from "../components/footer/Footer"
import HeroImg2 from '../components/heroImg2/HeroImg2'
import PricingCard from '../components/pricingCard/PricingCard'

import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="some of my most recent works"/>
      <Work/>
      <PricingCard/>
     
      <Footer/>
     
    </div>
  )
}

export default Project