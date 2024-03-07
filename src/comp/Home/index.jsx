import React from 'react'
import bg1 from '../../assets/lbg.jpg'
function Home() {
  return (
    <div className="home-container pt-20 bg-no-repeat bg-center bg-cover"style={{ backgroundImage: `url(${bg1})`}}>
      <div className="header" >
        <h1 className='text-6xl text-black font-serif pt-10'>Routemate</h1>
      </div>
      <div className="body pt-32 w-[40em]">
      </div>
      <p className='text-lg text-black flex pl-20 pt-20 pb-64 w-[40em] items-start text-left'></p>
    </div>
  )
}

export default Home