import React, { useEffect } from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Header.css";

const imageVariants = {
  visible: { opacity: 1, x: -50 , transition: {delay: 0.5, duration: 1 } },
  hidden: { opacity: 0, x: 0 },
};

const headVariants = {
  visible: { opacity: 1, x: 30, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -50 },
};

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={headVariants}
        className="app__wrapper_info"
      >
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quo. Soluta animi dolorum perferendis voluptatum ducimus quos! Rerum
          id et voluptatum eligendi neque laudantium, natus numquam omnis rem
          nam in!
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </motion.div>
      <motion.div
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={imageVariants}
        className="app__wrapper_img"
      >
        <img src={images.welcome} alt="header img" />
      </motion.div>
    </div>
  );
};

export default Header;
