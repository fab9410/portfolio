import React from 'react';
import { FaDownload } from 'react-icons/fa';



const WordButton = ({ label }) => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = "https://rayan-romanet.efrei.me/Portfolio/Veille"; // chemin vers le fichier à télécharger
    link.download = 'VeilleNextJs.pdf'; // nom du fichier à télécharger
    link.click();
  };

  return (
    <button className=" hover:bg-[#104390] bg-[#3a78f4] text-white font-bold py-2 px-4 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1" onClick={downloadFile}>
      <FaDownload style={{ marginRight: '7px' }} />
      {label}
    </button>
  );
};

export default WordButton;