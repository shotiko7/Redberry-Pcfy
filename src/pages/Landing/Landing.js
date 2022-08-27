import React from 'react'
import {
    BrowserRouter as Router,
    useNavigate,
    Route,
    Routes,
  } from "react-router-dom";
import "../Landing/Landing.css"
import LOGO from "../Landing/LandingAssets/LOGO.png"
import Group from "../Landing/LandingAssets/Group.png"

function Landing() {
    let navigate = useNavigate()
    const onClick =()=>{
        navigate("/personal")
    }
  return (
    <div className='landingmain'>
        <div className='logo'>
            <img src={LOGO} alt="logo" />
        </div>
        <div className='group'>
            <img src={Group} alt="group" />
        </div>
        <button onClick={onClick} className='button1'> ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ </button>
        <button className='button2'> ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ </button>
    </div>
  )
}

export default Landing