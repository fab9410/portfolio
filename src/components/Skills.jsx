import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Csharp from '../assets/csharp.png';
import Cplus from '../assets/cplus.png';
import C from '../assets/c.png';
import Php from '../assets/php.png'
import SQL from '../assets/SQL.png';
import S from '../assets/S.png';
import VSC from '../assets/VSC.png';
import VS from '../assets/VS.png';
import phpa from '../assets/phpa.png';
import wix from '../assets/wix.png';
import P from '../assets/P.png';
import W from '../assets/W.png';





import Separator from './configs/Seperator';



const Skills = () => {
    return (

        <>
            <Separator />
            <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-5xl font-bold inline border-b-4 border-pink-600 '>Compétences</p>
                        <p className='text-2xl mt-11 font-bold underline' style={{ textDecorationColor: 'rgb(219, 39, 119)' }}> Languages de programmation :</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                            <p className='my-4'>REACT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                            <p className='my-4'>NODE JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Csharp} alt="HTML icon" />
                            <p className='my-4'>C#</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Cplus} alt="HTML icon" />
                            <p className='my-4'>C++</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                            <p className='my-4'>C</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Php} alt="HTML icon" />
                            <p className='my-4'>PHP</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                            <p className='my-4'>SQL</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={S} alt="HTML icon" />
                            <p className='my-4'>SYMPHONY</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={P} alt="HTML icon" />
                            <p className='my-4'>PYTHON</p>
                        </div>
                    </div>



                </div>
            </div>


            <div className='w-full h-90 bg-[#0a192f] text-gray-300'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                    <div>
                        <p className='text-3xl font-bold underline' style={{ textDecorationColor: 'rgb(219, 39, 119)' }}> Logiciels et applications :</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                            <p className='my-4'>GITHUB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={VSC} alt="HTML icon" />
                            <p className='my-4'>VISUAL STUDIO CODE</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={VS} alt="HTML icon" />
                            <p className='my-4'>VISUAL STUDIO</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={phpa} alt="HTML icon" />
                            <p className='my-4'>PHPMYADMMIN</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full h-90 bg-[#0a192f] text-gray-300'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
                    <div>
                        <p className='text-3xl font-bold underline' style={{ textDecorationColor: 'rgb(219, 39, 119)' }}> CMS :</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={wix} alt="HTML icon" />
                            <p className='my-4'>WIX</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={W} alt="HTML icon" />
                            <p className='my-4'>WORDPRESS</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default Skills;