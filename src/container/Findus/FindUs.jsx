import React, { useEffect } from 'react';


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SubHeading } from '../../components';
import { images } from '../../constants';

const imageVariants = {
    visible: { opacity: 1, scale: 1 , transition: {delay: 0.3, duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  
  const contentVariants = {
    visible: { opacity: 1, x: 50, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -50 },
  };

const FindUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={contentVariants}
    className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </motion.div>

    <motion.div 
     ref={ref}
     animate={controls}
     initial="hidden"
     variants={imageVariants}
    className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </motion.div>
  </div>
)};

export default FindUs;
