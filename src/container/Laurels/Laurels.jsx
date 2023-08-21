import React, { useEffect } from 'react';


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const imageVariants = {
  visible: { opacity: 1, scale: 1 , transition: {delay: 0.3, duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const contentVariants = {
  visible: { opacity: 1, x: 50, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -50 },
};

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <motion.div 
     ref={ref}
     animate={controls}
     initial="hidden"
     variants={contentVariants}
    className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </motion.div>

    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={imageVariants}
    className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </motion.div>
  </div>
)};

export default Laurels;
