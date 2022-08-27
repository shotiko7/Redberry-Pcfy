import React, { useEffect, useState } from 'react'
import "../Personal/Personal.css"
import Ellipse from "../Personal/PersonalAssets/Ellipse.png"
import VectorBack from "../Personal/PersonalAssets/vectorback.png"


function Personal() {
    const [team, setTeam] = useState([])
    const [position, setPosition ] = useState([])
    useEffect(()=>{
      fetch('https://pcfy.redberryinternship.ge/api/teams').then((response) => response.json()).then((data) => {
        setTeam(data.data)
        console.log(data.data)
      });
    }, [])
    useEffect(()=>{
      fetch('https://pcfy.redberryinternship.ge/api/positions').then((response) => response.json()).then((data) => {
        setPosition(data.data)
        console.log(data.data)
      });
    }, [])
    
  return (
    <div className='personalmain'>
        <div className='personalhead'>
            <img className='ellipse' src={Ellipse} alt="ellipse" />
            <img className='vectorback' src={VectorBack} alt="ellipse" />
            <h2> თანამშრომლის ინფო </h2> 
            <div> </div>
            <h3> ლეპტოპის მახასიათებლები </h3> 
        </div>
        <div className='validmain'>
            <div className='validname'>
                <label> სახელი </label>
                <input />
                <p> მინიმუმ 2 სიმბოლო, ქართული ასოები </p>
            </div>
            <div className='validlast'>
                <label> გვარი </label>
                <input />
                <p> მინიმუმ 2 სიმბოლო, ქართული ასოები </p>
            </div>
            <div className='divapi'>
                <select className='timi'>
                  <option> თიმი </option>
                  {team.map(tea=>{
                    return <option key={tea.id}>{tea.name} </option>
                  })}
                </select>
                <select className='position'>
                  <option> პოზიცია </option>
                  {position.map(pos=>{
                    return <option key={pos.id}>{pos.name} </option>
                  })}
                </select>
            </div>
        </div>
    </div>
  )
}

export default Personal