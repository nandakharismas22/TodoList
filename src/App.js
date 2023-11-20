import './App.css';
import { motion, AnimatePresence } from "framer-motion"

import Hill1 from './img/hill1.jsx';
import Hill2 from './img/hill2.jsx';
import Hill3 from './img/hill3.jsx';
import Cloud1 from './img/cloud1.jsx';
import Moon from './img/moon.jsx';

function App() {

  const MainSection = () => {
    const motion1 = {
      visible: (custom) => ({
        opacity: .7,
        y:0,
        transition: { 
          duration: 1.4, delay: custom * 0.4 ,
        }
      }),
      visibleHill: (custom) => ({
        opacity: 1,
        y:0,
        transition: { 
          duration: .8, delay: custom * 0.4 ,
        }
      }),
    }

    const motion2 = {
      sunHide: (custom) => ({
        opacity: 1,
        y:'80vh',
        scale: 1,
        transition: { 
          duration: 12, delay: custom * 0.4 ,
          opacity:{duration: .2, delay: 0},
          scale:{duration:.7, delay: 0}
        }
      }),
      moonShow: (custom) => ({
        opacity: 1,
        top:'25%',
        scale:1,
        transition: { 
          duration: 15, 
          delay: custom * 0.4,
          opacity: {duration: 1},
          scale: {duration: 1},
        }
      })
    }
    
    const MotionDiv = ({children,...props}) => {
      return(
        <motion.div {...props}>
          {children}
        </motion.div>
      )
    }
    
    return(
      <AnimatePresence>
        <MotionDiv key="hill1" custom={3} animate="visibleHill" variants={motion1} initial={{y:200}} class='z-50 absolute bottom-[-1rem] sm:bottom-[-3rem] w-[100%]'><Hill1/></MotionDiv>
        <MotionDiv key="hill2" custom={5} animate="visibleHill" variants={motion1} initial={{y:300}} class='opacity-100 z-40 absolute  bottom-[-1rem] sm:bottom-[-8rem] right-[-7rem] md:right-[-5rem] w-[100%]'><Hill2 /></MotionDiv>
        <MotionDiv key="hill3" custom={7} animate="visibleHill" variants={motion1} initial={{y:350}} class='opacity-80 z-30 absolute bottom-[0rem] sm:bottom-[-2rem] sm:left-[-6rem] left-[-3rem] w-[45%]'><Hill3 /></MotionDiv>
        <MotionDiv key="cloud4" custom={8} animate="visible05" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute md:w-[10%] w-[40%] top-[3rem] right-[2rem] opacity-40'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud5" custom={10} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute md:w-[15%] w-[40%] top-[10rem] right-[5rem] opacity-80'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud1" custom={11} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute w-[16%] top-[8rem] left-[20rem] opacity-70'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud6" custom={12} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute w-[7%] top-[23rem] left-[25rem] opacity-30'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud2" custom={13} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute md:w-[19%] w-[40%] top-[3rem] left-[5rem] opacity-70'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud7" custom={8} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute w-[9%] top-[18rem] right-[25rem] opacity-40'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud3" custom={10} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute w-[13%] top-[18rem] left-[5rem] opacity-50'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud9" custom={10} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} class='z-50 absolute w-[17%] top-[3rem] right-[16rem] opacity-60'><Cloud1 /></MotionDiv>
        <motion.div key="sun" custom={18} animate="sunHide" initial={{opacity:0, top: '15vh', scale:0}} variants={motion2} class='z-10 absolute w-[25vh] h-[25vh] top-[10%] rounded-full  bg-gradient-to-b from-amber-200 to-yellow-400 shadow-orange-300 shadow-[0_0px_20px_20px]'></motion.div>
        <motion.div  key="moon" custom={36} animate="moonShow" initial={{bottom:'-10rem', scale:0}} variants={motion2} class='z-10 absolute w-[25vh] h-[25vh] shadow-stone-200 rounded-full shadow-[0_0px_44px_10px] bg-[#e7e5e4b3] opacity-0'><Moon /></motion.div>
      </AnimatePresence>
    )
  }

  
  return (
    <motion.div 
      initial={{background:'linear-gradient(0deg, #ef4444 0%, #f97316 100%)'}} 
      animate={{background:'linear-gradient(0deg, rgba(0,5,69,1) 0%, rgba(0,0,17,1) 100%)'}} 
      transition={{duration: 4, delay:13}}
      class='absolute overflow-hidden w-screen h-screen flex items-center justify-center'
    >
      <motion.div 
        initial={{top:0}} 
        // animate={{top:'-110vh'}} 
        transition={{duration: 5, delay:33}}
        class='absolute w-full h-full flex items-center justify-center'
      >
        <MainSection />
      </motion.div>
      {/* <div class='bg-blue-200'></div> */}
    </motion.div>
  );
}


export default App;
