import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from 'react-scroll';
import Button from './configs/Button.jsx';



const Home = () => {

  return (

    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Bonjour, je suis</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RAYAN ROMANET
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Je suis un développeur full-stack spécialisé dans la construction (et occasionnellement la conception)
          d'expériences numériques exceptionnelles.
          Actuellement, je me concentre sur la création d'applications web full-stack.
        </p>
        <div>
          <Link className="hover:bg-pink-500 bg-pink-600 text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base"
            to='work'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>


          <div>
            <span className='group-hover:rotate-90 duration-300'>
              <Button label="Télécharger le CV" downloadLink="C:\Users\rayan\OneDrive\Documents\Rayan\CV\CV Rayan ROMANET.pdf" />
            </span>
          </div>
        </div>
      </div>
    </div>







  );
};

export default Home;