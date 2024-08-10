import React from 'react'
import Header from './Header'
import Project from './Project'
import Parallax from './Parralax'

import Footer from './Footer'
import TextReveal from './TextReveal'
import PhotographyPage from './PhotographyPage'
import '../../src/styles/header.scss'
import '../../src/styles/footer.scss'
import '../../src/styles/photography.scss'
import '../../src/styles/parallax.scss'


const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='ex-one'>
      <h1 className='ex'>FULLSTACK DEV</h1>
      </div>
       <PhotographyPage />
      
      <Project />
      <TextReveal />
    
      
     
    </div>
  )
}

export default Homepage
