import React, { useState } from 'react'
import './GameScreen.css'
import { Navigate, useNavigate } from 'react-router-dom'

//reusable component for displaying the game item component when users have clicked game mode

const GameScreen = ({ title, description, onStart }) => {

    const navigate = useNavigate()
    
  return (
    <div className='gamescreen-container'>
        <h1>{title}</h1>
        <p>How to play: {description}</p>
        
        <div className='gamescreen-buttons'>
          <button onClick={() => navigate('/games')}>Return To Games</button>
          <button onClick={onStart}>Click to play!</button>
            
        </div>
      

    </div>
  )
}

export default GameScreen