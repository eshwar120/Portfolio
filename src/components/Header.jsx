import React, { useState } from 'react'
import '../styles/header.css';

export default function Header() {
  
  return (
    <header>
      
      <section className='text-container'>
        <div id='Intro'>Hello, I'm <span id='name'>Eshwaramahendra</span>, a passionate full stack developer skilled in <span className="js">JavaScript</span>, <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="node">Node.js</span>, <span className="react">React.js</span>, <span className="mongo">Mongo DB</span> and more. I thrive on creating innovative web solutions that merge functionality with captivating user experiences. Explore my portfolio to see my projects and let's collaborate on building something incredible together!</div>
        <button className='start-btn'>Get started</button>
      </section>
    </header>
  )
}
