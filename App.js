import { useEffect, useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from "framer-motion"

import Hill1 from './img/hill1.jsx';
import Hill2 from './img/hill2.jsx';
import Hill3 from './img/hill3.jsx';
import Cloud1 from './img/cloud1.jsx';
import Moon from './img/moon.jsx';

function App() {

  // const [sub, setSub] = useState(true)
  const [sub,setSub] = useState()
  const [startMovie, setStartMovie] = useState(false)

  // useEffect(()=>{
  //   // setSun(true);
  //   // ----- change start state -----
  //   setTimeout(
  //     function() {
  //       setStartMovie(true);
  //     },
  //     1000
  //   );
  // },[])

  const Login = () => {
    const [userN,setUserN] = useState("")
    const [pass,setPass] = useState("")
  
    const handlerForm = (e) => {
      e.preventDefault();
      if(userN === '123' && pass === '123'){
        setSub(true)
        setStartMovie(true);
      }else {
        setSub(false)
        setUserN("")
        setPass("")
      }
    }
  
    const Alarm = () => {
      return(
        <div style={sub === false ? {display:'flex'} : {}} className="transition duration-500 hidden relative mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded justify-center items-center" role="alert">
          <strong className="font-bold mr-4">Error!</strong>
          <span className="block sm:inline">Wrong UserName Or Password.</span>
          {/* <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span> */}
        </div>
      )
    }
  
    const btnAnimate = {
      visible: { y: 1, opacity:1 },
      hidden: { y: 100,opacity:0 ,},
    }
    
  
    return(
      <motion.div 
        className="z-[100000] bg-white p-12 lg:w-[90%] max-w-md mx-auto rounded shadow-2xl shadow-orange-950"
        initial="visible"
        animate="hidden"
        variants={sub && btnAnimate} 
        transition={{
          duration: .6, delay:0,
        }}   
      >
        <h2 className="text-4xl px-4 ">Log In</h2>
        <form className="mt-10 space-y-8" onSubmit={handlerForm}>
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none"
            placeholder="User Name - 123"
            type="userName"
            value={userN}
            onChange={e=>setUserN(e.target.value)} 
          />
  
          <div className="flex items-center ">
            <input
              className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
              placeholder="Password"
              type="password"
              value={pass}
              onChange={e=>setPass(e.target.value)} 
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.607"
              height="17.076"
              viewBox="0 0 17.607 17.076"
            >
              <path
                id="eye-off"
                d="M12.392,16.769a8.718,8.718,0,0,1-9.935-5.938A8.675,8.675,0,0,1,3.817,8.2m5.1.79a2.611,2.611,0,1,1,3.692,3.692M8.914,8.985,12.6,12.675M8.916,8.986,6.053,6.124m6.554,6.554,2.863,2.863M2.929,3,6.053,6.124m0,0a8.7,8.7,0,0,1,13.011,4.707,8.723,8.723,0,0,1-3.6,4.708m0,0,3.123,3.123"
                transform="translate(-1.957 -2.293)"
                fill="none"
                stroke="#949090"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeidth="1"
              />
            </svg>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between ">
              <input
                className="bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
                type="submit"
                value="login now"      
              />
            </div>
          </div>
        </form>
        <Alarm />
      </motion.div>
    )
  }

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
        <MotionDiv key="hill1" custom={3} animate="visibleHill" variants={motion1} initial={{y:200}} className='z-50 absolute bottom-[-1rem] sm:bottom-[-3rem] w-[100%]'><Hill1/></MotionDiv>
        <MotionDiv key="hill2" custom={5} animate="visibleHill" variants={motion1} initial={{y:300}} className='opacity-100 z-40 absolute  bottom-[-1rem] sm:bottom-[-8rem] right-[-7rem] md:right-[-5rem] w-[100%]'><Hill2 /></MotionDiv>
        <MotionDiv key="hill3" custom={7} animate="visibleHill" variants={motion1} initial={{y:350}} className='opacity-80 z-30 absolute bottom-[0rem] sm:bottom-[-2rem] sm:left-[-6rem] left-[-3rem] w-[45%]'><Hill3 /></MotionDiv>
        <MotionDiv key="cloud4" custom={8} animate="visible05" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute md:w-[10%] w-[40%] top-[3rem] right-[2rem] opacity-40'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud5" custom={10} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute md:w-[15%] w-[40%] top-[10rem] right-[5rem] opacity-80'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud1" custom={11} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute w-[16%] top-[8rem] left-[20rem] opacity-70'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud6" custom={12} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute w-[7%] top-[23rem] left-[25rem] opacity-30'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud2" custom={13} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute md:w-[19%] w-[40%] top-[3rem] left-[5rem] opacity-70'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud7" custom={8} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute w-[9%] top-[18rem] right-[25rem] opacity-40'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud3" custom={10} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute w-[13%] top-[18rem] left-[5rem] opacity-50'><Cloud1 /></MotionDiv>
        <MotionDiv key="cloud9" custom={10} animate="visible" variants={motion1} initial={{y:-300,opacity:0}} className='z-60 absolute w-[17%] top-[3rem] right-[16rem] opacity-60'><Cloud1 /></MotionDiv>
        <motion.div key="sun" custom={18} animate="sunHide" initial={{opacity:0, top: '15vh', scale:0}} variants={motion2} className='absolute w-[25vh] h-[25vh] top-[10%] rounded-full  bg-gradient-to-b from-amber-200 to-yellow-400 shadow-orange-300 shadow-[0_0px_20px_20px]'></motion.div>
        <motion.div  key="moon" custom={36} animate="moonShow" initial={{bottom:'-10rem', scale:0}} variants={motion2} className='absolute w-[25vh] h-[25vh] shadow-stone-200 rounded-full shadow-[0_0px_44px_10px] bg-[#e7e5e4b3] opacity-0'><Moon /></motion.div>
      </AnimatePresence>
    )
  }

  
  return (
    <motion.div 
      initial={{background:'linear-gradient(0deg, #ef4444 0%, #f97316 100%)'}} 
      animate={startMovie && {background:'linear-gradient(0deg, rgba(0,5,69,1) 0%, rgba(0,0,17,1) 100%)'}} 
      transition={{duration: 4, delay:13}}
      className='absolute overflow-hidden w-screen h-screen flex items-center justify-center'
    >
      <Login/>
      <motion.div 
        initial={{top:0}} 
        // animate={{top:'-110vh'}} 
        transition={{duration: 5, delay:33}}
        className='absolute w-full h-full flex items-center justify-center'
      >
        {
          startMovie &&
            <MainSection />
        }
      </motion.div>
      {/* <div className='bg-blue-200'></div> */}
    </motion.div>
  );
}


export default App;
