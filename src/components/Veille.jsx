import React from 'react';
import Twitter from '../assets/twitter.png'
import Cle from '../assets/cle.png'
import Chaine from '../assets/chaine.png'
import Word from './configs/Word.jsx';

//import CSR from '../assets/CSR.png'

function Veille() {
    return (
        <div name='veille' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-1 flex flex-col justify-center h-full'>
                <div className='pb-8'>
                    <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Veille technologique sur Next Js
                    </p>
                </div>


                {/* Cards Présentation */}
                <div class="max-w-7xl text-white bg-pink-600 rounded-lg shadow-md p-10">
                    <h1 className='text-3xl font-bold inline border-b-4 border-[#0a192f]'>Présentation</h1>
                    <p class="mb-4 font-bold text-2xl"><br></br> Next Js est, comme son nom l’indique un framework javascript gratuit et Open Source basé sur React Js et Node Js.</p><br></br>

                    <h1 className='text-3xl font-bold inline border-b-4 border-[#0a192f]'>Quel sont les moyens que j’utilise pour réaliser ma veille ? <br></br></h1>
                    <li class="mt-4 font-bold text-2xl"> Les sites d’actualités (pour l’informatique: Developpez.net, 01net, lemondeinformatique.fr)</li>      
                    <li class="mt-4 font-bold text-2xl"> Les communiqués de presse des fournisseurs et des éditeurs</li>
                    <li class="mt-4 font-bold text-2xl"> Les sites spécialisés</li>
                    <li class="mt-4 font-bold text-2xl"> Google Alert</li>
                    <li className="mt-4 font-bold text-2xl">Les blogs d’expert</li><br></br>

                    
                    <div class="flex flex-col sm:flex-row sm:justify-between text-center">
                        <div class="sm:w-1/2 mb-4 sm:mb-0">
                            <img className='w-20 mx-auto' src={Twitter} alt="HTML icon" />
                            <a className='text-2xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://twitter.com/nextjs?s=20">Next js</a>
                        </div>

                        <div class="sm:w-1/2 mb-4 sm:mb-0">
                            <img className='w-20 mx-auto' src={Chaine} alt="HTML icon" />
                            <a className='text-2xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://nextjs.org/">Next js</a>
                        </div>

                        <div class="sm:w-1/2 mb-4 sm:mb-0">
                            <img className='w-20 mx-auto' src={Cle} alt="HTML icon" />
                            <a className='text-2xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://nextjs.org/blog">Next js.org</a><br></br>
                            <a className='text-2xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://react.dev/community#">React Js.dev</a>
                        </div>


                    </div>
                    <div>
                        <span className='group-hover:rotate-90 duration-300 '>
                            <Word  label="Télécharger pour en savoir plus" downloadLink="C:\Users\rayan\Downloads\Veille Next.js.pdf" />
                        </span>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Veille;









