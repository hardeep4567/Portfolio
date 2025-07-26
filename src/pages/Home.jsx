import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Projects from '../component/Projects'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Experience from '../component/Experience'

const Home = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
       <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home