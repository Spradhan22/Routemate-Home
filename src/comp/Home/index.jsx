import React from 'react'
import bg1 from '../../assets/lbg.jpg'
import logo from '../../assets/logo1.png'
import rt1 from '../../assets/rt1.png'
import lt1 from '../../assets/lt1.png'
import girl from '../../assets/girl.png'
import boy from '../../assets/boy.png'
// import {gsap} from 'gsap'
import "./home.css"
function Home() {
 // gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

  return (
    <>
    <div className="home-container pt-5 bg-no-repeat bg-center bg-cover" >
      
      
      <div className="header" >
      <div className=" w-[40em]" >
    <img src={logo} className="logo w-1/5 pl-10" alt="Logo"/>
  </div>
        <h1 className='rm text-6xl text-black font-serif pt-10'>Routemate</h1>
      </div>
      <div className=" ">
      <div class="rm spin flex h-screen pt-10  w-full  justify-center items-baseline">
      <div >
    <img src={lt1}  alt="leftarrow"/>
  </div>  
  
      <div className="" >
    <img src={rt1} alt="rightarrow"/>
  </div>
  </div>
  <div class=" flex absolute  mt-40 top-40 left-10 right-10 h-screen  w-full items-baseline" id="place">
      <div className="text-right pr-52">
    <img src={boy} className="fade-in w-4/5  pr-20" alt="boyimg"/>
  </div>  
     
  <div >
    <img src={girl} className="fade-in w-4/5 pl-10" alt="girlimg"/>
  </div>
  </div>
  <div>
  <p className='absolute -mt-48 ml-64 pl-64 text-black align-middle flex h-[100em]  pb-64 w-[50em]  text-center'><h1 className='text-4xl text-black font-serif'>Find travel buddies and discover the world together</h1></p>
  </div>
         </div>
  </div>
  
         
 </>
 )
}

export default Home