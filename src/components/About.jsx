import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from 'react-scroll';
import Separator from './configs/Seperator';
//import Separator from './configs/Seperator.jsx';

const About = () => {
  return (

    <>
    <Separator />
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-2 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600' >
            <br></br>About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' style={{ marginTop: "-20px" }}>
          <div className='text-4xl font-bold' >
            <p>Ravi de vous rencontrer.<tr></tr> <p className='sm:text-5xl text-[#8892b0]'>Envie d'en savoir plus ?</p></p><br></br>
          </div>
          <div>
            <p>Je suis un développeur Full Stack expérimenté et passionné par la création de logiciels de qualité.
              Compétent sur l'ensemble du processus de développement ; depuis la conception jusqu'à la mise en production.<br></br>
              Ma plus grande satisfaction en tant que développeur est de créer des solutions efficaces qui répondent aux besoins
              de mes clients.<br></br>
              Si vous êtes à la recherche d'un développeur Full Stack pour votre prochain projet, n'hésitez pas à me contacter.</p>
            <br></br>

          </div>
          {/* Container */}
          <div>
            <h2 className='text-2xl font-bold mb-4 text-[#ccd6f6]'>Mon école</h2>
            <p className='text-lg'>
              Je suis étudiant en BTS Services Informatiques aux Organisations (SIO) option Solutions Logicielles et Applications Métiers (SLAM) à Efrei Paris. Depuis mon plus jeune âge, j'ai toujours été passionné par la technologie et tout ce qui touche à l'informatique. à l'Efrei Paris, une école d'ingénieurs en informatique reconnue pour son excellence académique et sa forte orientation professionnelle.
              <br></br>J'ai choisi cette école pour sa formation de qualité et ses nombreuses opportunités de stage et d'emploi dans les technologies de pointe.
            </p><br></br>
          </div>
          <Link className="hover:bg-pink-500 bg-pink-600 text-white max-w-[140px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base"
            to='contact'>
            Contact
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>
          <div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;