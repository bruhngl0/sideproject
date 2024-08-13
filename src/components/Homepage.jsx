import React from 'react'
import Header from './Header'
import Project from './Project'
import Parallax from './Parralax'
import Bruh from './Bruh'


import Footer from './Footer'
import TextReveal from './TextReveal'
import PhotographyPage from './PhotographyPage'
import '../../src/styles/header.scss'
import '../../src/styles/footer.scss'
import '../../src/styles/photography.scss'
import '../../src/styles/parallax.scss'
import '../../src/styles/sde.scss'


const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='ex-one'>
      <h1 className='ex'>SDE</h1>
      <div className='rotating-container'>
      <img src= "cyc.png"  className='rotating-image'/>
      </div>
      </div>
      <div className='sde-div'>
      <p className='sde'>Full-Stack Web App Developer*</p>
      </div>
       <PhotographyPage />
      
      <Project />
      <Footer />
 
     
    
      
     
    </div>
  )
}

export default Homepage
