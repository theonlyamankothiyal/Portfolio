import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of My Most Recent Works. "
      list={<>
        <li>1. E-commerce Website</li>
        <li>2. Chess Game</li>
        <li>3. Weather App</li>
        <li>4. Covid19 Tracker App</li>
        <li>5. Movies App</li>
        <li>6. Web Based Online Class System</li>
      </>}
      />
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project