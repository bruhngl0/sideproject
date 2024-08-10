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
        <img className='brain-img'  src="bts.jpg"/>

        <div className='para-po-main'>      
        <p className='para-po'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu et enim mattis tristique. Nullam a leo aliquet, tincidunt nibh sit amet, pellentesque mauris. Nunc quis tellus posuere, fermentum felis at, tristique leo. Praesent nec facilisis turpis. Praesent sit amet velit vitae libero mollis efficitur. Praesent rutrum erat quis facilisis dapibus. Curabitur nec tempus nibh, ac eleifend turpis.</p>
        <a href="">
        <img src="arrowdown.png"  className='king'/>
        </a> 
        <p className='para-po'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu et enim mattis tristique. Nullam a leo aliquet, tincidunt nibh sit amet, pellentesque mauris. Nunc quis tellus posuere, fermentum felis at, tristique leo. Praesent nec facilisis turpis. Praesent sit amet velit vitae libero mollis efficitur. Praesent rutrum erat quis facilisis dapibus. Curabitur nec tempus nibh, ac eleifend turpis.</p>
        <p className='para-po'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. FuscePraesent rutrum erat quis facilisis dapibus. Curabitur nec tempus nibh, ac eleifend turpis.</p>
        
        <p className='para-po'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu et enim mattis tristique. Nullam a leo aliquet, tincidunt nibh sit amet, pellentesque mauris. Nunc quis tellus posuere, fermentum felis at, tristique leo. Praesent nec facilisis turpis. Praesent sit amet velit vitae libero mollis efficitur. Praesent rutrum erat quis facilisis dapibus. Curabitur nec tempus nibh, ac eleifend turpis.</p>
        </div>
        
       
           
      </section>

    </main>
  );
};

export default PhotographyPage;
