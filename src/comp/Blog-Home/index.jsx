import React from 'react'
import bg1 from '../../assets/lbg.jpg'
import logo from '../../assets/logo1.png'
import rt1 from '../../assets/rt1.png'
import lt1 from '../../assets/lt1.png'
import girl from '../../assets/girl.png'
import boy from '../../assets/boy.png'
import taj from '../../assets/taj.png'
import agfo from '../../assets/agfo.png'
import ftpsk from '../../assets/ftpsk.png'
// import {gsap} from 'gsap'
import "./style.css"
function Home() {
 // gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

  return (
    <>
    <div className="hc home-container pt-5 bg-no-repeat bg-center bg-cover bg-blue-950" >
      <div className="header" >
      <div className=" w-[40em]" >
      <img src={logo} className="logo w-1/5 pl-10" alt="Logo"/>
      </div>
      </div>

      <div className="flex pt-20 pl-10 pr-20 w-full flex-row justify-around">
        <img src = {taj} className="w-2/3 pr-10" alt="tajMAHAL"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">Day 1: The Majestic Taj Mahal</p>
          <p className='text-xl mr-[2em]'>The Agra Fort, another UNESCO World Heritage Site, stands tall as a testament to the grandeur of the Mughal Empire. Built by Emperor Akbar, this red sandstone fortress houses palaces, mosques, and audience halls that provide a glimpse into the opulent lifestyle of the Mughal rulers.
      </p>
          <p className='pt-4 text-xl mr-[2em]'>Pro Tip: To avoid the crowds, plan an early morning visit to witness the Taj Mahal at sunrise. Don't forget to capture the magical moments as the sun-kissed dome reflects in the pristine waters of the Yamuna River.</p>
        </div>
      </div>
      <div className="flex pt-20 pl-10 pr-20 w-full flex-row justify-around">
        <img src = {ftpsk} className="w-[25em] pr-10" alt="tajMAHAL"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">Day 2: A Walk Through Agra Fort</p>
          <p className='text-xl mr-[2em]'>No visit to Agra is complete without witnessing the ethereal beauty of the Taj Mahal. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage Site is an architectural masterpiece. As the first light of dawn bathes the ivory-white mausoleum, the marble comes alive with hues of pink and gold, creating a mesmerizing spectacle.</p>
          <p className='pt-4 text-xl mr-[2em]'>Suggestion: Engage a local guide to unravel the stories behind the intricately designed Diwan-i-Khas, Jahangir Mahal, and the Sheesh Mahal within the Agra Fort. The historical anecdotes and architectural insights will enrich your experience.</p>
        </div>
      </div>
      <div className="flex pt-20 pl-10 pr-20 pb-10 w-full flex-row justify-around">
        <img src = {agfo} className="w-[25em] pr-10" alt="tajMAHAL"/>
        <div className="flex flex-col text-white text-justify text-base">
          <p className="text-bold text-5xl pb-20 mr-[2em]">Day 3: Exploring Fatehpur Sikri</p>
          <p className='text-xl mr-[2em]'>A short drive from Agra takes you to Fatehpur Sikri, an abandoned city that served as the capital of the Mughal Empire for a short period. The well-preserved structures, including the Buland Darwaza and the Jama Masjid, showcase the architectural prowess of the Mughals.</p>
          <p className='pt-4 text-xl mr-[2em]'>Recommendation: Plan a day trip to Fatehpur Sikri to explore its unique blend of Mughal and Persian architecture. The serene ambiance and historical significance make it a compelling addition to your Agra itinerary.</p>
        </div>
      </div>
    </div>
  
         
 </>
 )
}

export default Home