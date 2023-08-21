import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const imageVariants = {
  visible: { opacity: 1, scale: 1 , transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const contentVariants = {
  visible: { opacity: 1, y: 50, transition: {delay: 0.5, duration: 1 } },
  hidden: { opacity: 0, y: -50 },
};

const Chef = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
  <div className="app__bg app__wrapper section__padding">
    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={imageVariants}
    className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </motion.div>

    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={contentVariants}
    className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Fuga esse, impedit velit voluptatibus sapiente laborum magni nihil
          error harum ex beatae, explicabo asperiores natus repellat cupiditate
          vel debitis id eos!
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Lou</p>
        <p className="p__opensans">
          Chef & Founder
        </p>
        <img src={images.sign} alt="sign" />
      </div>
    </motion.div>
  </div>
)};

export default Chef;
