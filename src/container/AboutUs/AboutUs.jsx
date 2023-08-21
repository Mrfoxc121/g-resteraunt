import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants";
import "./AboutUs.css";

const imageVariants = {
  visible: { opacity: 1, scale: 1 , transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const contentVariants = {
  visible: { opacity: 1, y: 50, transition: {delay: 0.5,  duration: 1 } },
  hidden: { opacity: 0, y: -50 },
};

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={contentVariants}
      className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod hic
          numquam sint veniam! Eligendi, temporibus. Officiis quas recusandae
          quaerat quisquam?
        </p>
        <button type="button" className="custom__button">
          Learn more
        </button>
      </motion.div>

      <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={imageVariants}
      className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" className="knife__img" />
      </motion.div>

      <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={contentVariants}
      className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod hic
          numquam sint veniam! Eligendi, temporibus. Officiis quas recusandae
          quaerat quisquam?
        </p>
        <button type="button" className="custom__button">
          Learn more
        </button>
      </motion.div>
    </div>
  </div>
)};

export default AboutUs;
