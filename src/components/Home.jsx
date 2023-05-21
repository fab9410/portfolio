import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from 'react-scroll';
import Button from './configs/Button.jsx';



const Home = () => {

  return (

    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600' style={{ fontSize: '20px', fontWeight: 'bold' }}>Bonjour, je suis</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RAYAN ROMANET
        </h1>
        <h2 className='text-5xl sm:text-7xl font-bold text-[#8892b0]'>
          Étudiant en BTS SIO        
        </h2>
        
        <p className='text-[#f8f9fb] py-4 max-w-[900px]' style={{ fontSize: '24px' }}>
          Passionné par le développement informatique.<br></br>
          À travers mon portfolio, je mets en avant mes compétences en langages de programmation ainsi que ma créativité
          pour résoudre des problèmes complexes. Avec une approche méthodique et un fort désir d'innovation,
          je suis prêt à relever les défis du monde numérique et à contribuer au développement technologique.
        </p>
        <div>
          <Link className="hover:bg-pink-500 bg-pink-600 text-white max-w-[125px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base"
            to='work'>
            Projets
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>


          <div>
            <span className='group-hover:rotate-90 duration-300'>
              <Button label="Télécharger le CV" downloadLink={process.env.PUBLIC_URL + `/PDF/CV_Rayan_ROMANET.pdf`} />
            </span>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Home;