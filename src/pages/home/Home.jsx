import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import "./home.css"

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
 
      </div>
    </div>
  )
}

export default Home
