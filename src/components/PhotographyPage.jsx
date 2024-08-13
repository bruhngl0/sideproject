import React from 'react';
import '../styles/photography.scss'

const PhotographyPage = () => {
  return (
    <main className='joker'>
      <header className='joker-one'></header>
      <section className='joker-three'>
       
        <div className='utils'>
          <div className='utils-one'>
            <span>UI/UX Design</span>
            <span>Database Management</span>
            <span>Debugging</span>
          </div>

          <div className='utils-two'>
             <span>Resume</span>
          </div>
        </div>
        <img className='brain-img'  src="arr.jpg"/>

        <div className='para-po-main'>      
        <p className='para-po'>(About Series)</p>
        
        
         
        
       
       <p className='para-po-big'> Design Education Series is a new format of an original mini-series on the main principles of design, where we share all insights gained during our experience at Obys Agency. Typography Principles, Colors Combinations, Grids are the titles of the first three seasons of the series. who i am doesnt matter, what i do is</p>
       <p className='para-po-small' id="para-po"> Over the past 5 years, Obys has released 3 educational projects (websites) that have become quite popular within the design community. These websites have been visited over 1 million times.</p>
       <p className='para-po-small'> Here is the new, light, and entertaining format of the series that we are excited to present to you. With short episodes full of valuable information without fluff, these will teach you the main principles of design and enhance your skills in working with typography, grids, colors, and composition.</p>
       <a href= "#para-po" >
       <img src="arrowdown.png"  className='king'/>
       </a>
       
        
       
        </div>
        
       <div className='list'>
          <span>Projects</span>
          <span>Typtgraphy Principles(2019)</span>
          <span>Color Combinations(2021)</span>
          <span>Grids(coming soon)</span>
       </div>
           
      </section>

    </main>
  );
};

export default PhotographyPage;
