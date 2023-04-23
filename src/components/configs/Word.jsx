import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Veille from '../../public/PDF/Veille_Nextjs.pdf';


const WordButton = ({ label }) => {

  return (

      <a href={Veille} download="Veille_Nextjs.pdf" className=" hover:bg-[#104390] bg-[#3a78f4] text-white max-w-[300px] font-bold py-2 px-4 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
      <FaDownload style={{ marginRight: '7px' }} />
      {label}
      </a>
  );
};

export default WordButton;