import React from 'react'
import "./home.scss"
import html from "../Images/svg/html.svg"
import css from "../Images/svg/css.svg"
import js from "../Images/svg/javascript.svg"
import react from "../Images/svg/react.svg"

const Home = () => {
  return (
    <div className='home'>

        <div className='card1'>
            <div className='card1-left'>Learn New Technologies with 0% Coding Knowledge</div>
            <div className='card1-right'><div className='arrow-ani'></div></div>
        </div>

        <div className='card2'>
            <div><img src={html} alt="" /></div>
            <div><img src={css} alt="" /></div>
            <div><img src={js} alt="" /></div>
            <div><img src={react} alt="" /></div>
        </div>

    </div>
  )
}

export default Home