import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name:"FRONT STORE shop",
    // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
}
  return (
    <div>
         <HeroSection myData ={data}/>
    </div>
  )
}

export default About