import React from 'react'
import background from '../../assets/home_bg.png'

function Home() {
  return (
    <section className="home-container pt-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${background})`}} data-scroll-container>
      <div className="header">
        <h1 className='text-6xl text-white font-serif pt-10'>$ Hello World!_</h1>
      </div>
      <div className="body pt-32">
        <h1 className='text-6xl text-white flex pl-20'>ACA, IIT Kanpur</h1>
        <p className='text-lg text-white flex pl-20 pt-20 pb-32 w-[40em] items-start text-left'>Association for Computing Activities (ACA) is the Computer Science society of IIT Kanpur. ACA organizes departmental activities right from freshers’ to farewell in addition to several programming competitions and lectures.</p>
      </div>
    </section>
  )
}

export default Home