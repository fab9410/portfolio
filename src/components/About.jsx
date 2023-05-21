import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from 'react-scroll';
import Separator from './configs/Seperator';
//import Separator from './configs/Seperator.jsx';

const About = () => {
  return (

    <>
      <Separator />
      <div name='about' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <div>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300'>À propos</p>
          </div>
          
          

          <p className='text-3xl mt-11 py-4 font-bold text-gray-300 underline' style={{ textDecorationColor: 'rgb(219, 39, 119)' }}> Mon parcours :</p>

          <h1 className='sm:text-5xl font-bold text-[#ccd6f6]'>
            Bac Général - NSI 2020
          </h1>
          <p className='text-[#f8f9fb] py-4 max-w-[900px]' style={{ fontSize: '20px' }}>
          Le bac général NSI est une filière qui met l'accent sur les sciences informatiques, la programmation et le traitement de l'information, permettant aux élèves d'acquérir des compétences essentielles dans le domaine de l'informatique.
          </p>

          <h1 className='sm:text-5xl font-bold text-[#ccd6f6]'>
            BTS SIO - EFREI PARIS 2021-2023
          </h1>
          <p className='text-[#f8f9fb] py-4 max-w-[900px]' style={{ fontSize: '20px' }}>
          Le BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) est une formation professionnelle en informatique axée sur le développement de solutions logicielles et d'applications métiers pour les entreprises.
          </p>

          <h1 className='sm:text-5xl font-bold text-[#ccd6f6]'>
            Stage - MadDam Mai 2021
          </h1>
          <p className='text-[#f8f9fb] py-4 max-w-[900px]' style={{ fontSize: '20px' }}>
           Apprentissage de l'utlisation de CMS, création de maquette, et le travaille d'équipe.
          </p>

          <h1 className='sm:text-5xl font-bold text-[#ccd6f6]'>
            Alternance - Mayak Services 2022-2023
          </h1>
          <p className='text-[#f8f9fb] py-4 max-w-[900px]' style={{ fontSize: '20px' }}>
          Mayak Services, propose ses services dans plusieurs domaines de compétence complémentaires. 
          Des formations en finance et assurance santé et prévoyance, aux sevices de courtage en assurance de personnes, 
          MAYAK Services développe ses propres applications métiers.
          </p>



          <div>
            <Link className="mt-6 hover:bg-pink-500 bg-pink-600 text-white max-w-[140px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base"
              to='contact'>
              Contact
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;