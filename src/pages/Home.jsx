import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Projects from '../component/Projects';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Experience from '../component/Experience';
import Resume from '../component/Resume';
import Loader from '../component/Loader'; // loader component import karo

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
