import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat:Infinity,
      repeatTypw:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">

        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IVAN IZIDORO</motion.h2>
          <motion.h1 variants={textVariants}>Desenvolvedor Web e UI designer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Veja os últimos trabalhos</motion.button>
            <motion.button variants={textVariants}>Contate-me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div 
      className="slindingTextContainer" 
      variants={sliderVariants} 
      initial="initial" 
      animate="animate">
        Freelance Desenvolvedor Front-End
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="foto-pessoa"/>
      </div>
    </div>
  )
}

export default Hero;