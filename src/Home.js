import React from 'react'
import Login  from './Login'
// import Basic from './basic'
import Sign from './Sign'
const Home = () => {
  return (
    <div className='home_container'>
    <Login />
    {/* <Basic/> */}
    <Sign/>
    </div>
  )
}

export default Home
