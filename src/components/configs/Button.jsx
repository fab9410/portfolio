import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Button = ({ label }) => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = "https://rayan-romanet.efrei.me/Portfolio/CVRayanROMANET"; // chemin vers le fichier à télécharger
    link.download = 'CV Rayan ROMANET.pdf'; // nom du fichier à télécharger
    link.click();
  };

  return (
    <button className='text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' onClick={downloadFile}>
      <FaDownload style={{ marginRight: '7px' }} />
      {label}
    </button>
  );
};

export default Button;