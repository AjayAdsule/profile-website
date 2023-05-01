import React from 'react'
import Tech from '../Extra_component/Tech'

const Home = () => {
  return (
    <React.Fragment> 
      <header className='my-[20px]'>
        <div className="container flex">
          <div className="header-right w-[900px] ">
            <img src="src/assets/ajay.png" alt="image" />
          </div>
          <div className="header-left mx-[30px] my-[20px] px-[20px] py-[50px]">
            <p className='font-serif leading-6 text-center font-medium hover:text-sky-500'>
            I'm Full Stack web devloper The crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs), design (working closely with designers), front-end development (React, Angular9, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), database(MongoDB), CI/CD(Docker, kubernetes)
            </p>
          </div>
         
        </div>
        <h2 className='mx-[80px] my-[10px]'>Techonlogy I know</h2>
      </header>
      <Tech/>
    </React.Fragment>
  )
}

export default Home
