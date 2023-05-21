import React from 'react';
import { FaDownload } from 'react-icons/fa';
import moncv from '../../public/PDF/CV_Rayan_ROMANET.pdf';

const Button = ({ label }) => {

  return (    

      <a href={moncv} download="CV_Rayan_ROMANET.pdf" className='text-white font-bold max-w-[215px] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' >
      <FaDownload style={{ marginRight: '7px' }} />
      {label}
      </a>
    
  );
};

export default Button;