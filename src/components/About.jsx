import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Bonjour, je suis ROMANET Rayan, ravi de vous rencontrer. Jetez un coup d'œil autour de vous.</p>
            </div>
            <div>
              <p>Je suis un développeur Full Stack passionné par la création de logiciels de qualité. 
                Avec plusieurs années d'expérience dans le développement web, je suis capable de travailler 
                sur l'ensemble du processus de développement, depuis la conception jusqu'à la mise en production. 
                Ma plus grande satisfaction en tant que développeur est de créer des solutions efficaces qui répondent aux besoins 
                de mes clients. Si vous cherchez un développeur Full Stack passionné et compétent pour votre prochain projet, n'hésitez pas à me contacter.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;