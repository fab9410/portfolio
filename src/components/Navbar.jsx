import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/initialeRR-removebg-preview.png';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav); 


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '85px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='home' smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li>
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='about' smooth={true} duration={500}>
            À propos
          </Link>
        </li>
        <li>
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='skills' smooth={true} duration={500}>
            Compétences
          </Link>
        </li>
        <li>
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='work' smooth={true} duration={500}>
            Projets
          </Link>
        </li>
        <li>
          <Link className="hover:bg-pink-500  text-grey max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='veille' smooth={true} duration={500}>
            Veille
          </Link>
        </li>
        <li>
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" onClick={handleClick} to='home' smooth={true} duration={500}>
            Acceuil
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" onClick={handleClick} to='about' smooth={true} duration={500}>
            À propos
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" onClick={handleClick} to='skills' smooth={true} duration={500}>
            Compétences
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" onClick={handleClick} to='work' smooth={true} duration={500}>
            Projets
          </Link>
        </li>
        <li>
          <Link className="hover:bg-pink-500  text-grey max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" to='veille' smooth={true} duration={500}>
            Veille
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className="hover:bg-pink-500  text-white max-w-[160px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/rayan-romanet/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/fab9410'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto: rayan.romanet@outlook.fr'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;