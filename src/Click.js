import React from 'react'
import './Click.css'

const Click = () => {
    function handleClick(){
        console.log('Na Blard click am');
    }
  return (
    <div className='click'>
        <p>click Events</p>
        <button onClick={handleClick}>Click Am</button>
    </div>
  )
}

export default Click