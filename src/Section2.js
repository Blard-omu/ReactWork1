import React from 'react'
// import profile from './profile_3.jpg'
import './Section2.css'

const section2 = () => {
    let gender = 'male';
    let Age = 30;
    let colors = ['blue', 'yellow'];
    let trainee = ['Silva', 'ola', 'Ade'];
    let picker = Math.floor(Math.random()*trainee.length)
    let pick = trainee[picker]

  return (
    <div>
       {/* <img src={profile} className="myPro" alt="blardPic" /> */}
        <h2>Dis na section2</h2>
        <h2>Eggy is a {gender} contestant and he is {Age} years old and likes color {colors[1]}</h2>
        <h3>{pick}</h3>
    <marquee behavior="wavy" direction="left"><a>blard.com</a></marquee>
    </div>
  )
}

export default section2