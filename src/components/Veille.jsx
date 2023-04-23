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
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Veille technologique Next Js
                    </p>
                </div>


                {/* Cards Présentation */}
                <div class="max-w-7xl text-white bg-pink-600 rounded-lg shadow-md p-10">
                    <h1 className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>Présentation</h1>
                    <p class="mb-4"><br></br> Next Js est, comme son nom l’indique un framework javascript gratuit et Open Source basé sur React Js et Node Js.</p><br></br>

                    <p class="mb-4">Ayant un grand succès auprès des développeurs de par son architechture ainsi que sa flexibilité, NextJs permet de simplifier le développement tout en disposant de fonctionnalités très utiles que nous detaillerons par la suite et qui justifient l'engouement qu'il suscite.</p><br></br>

                    <p class="mb-4">Next Js est principalement utilisé pour le développement d’applications universelles qui présente l’avantage de pouvoir etre exécuté coté client ainsi que coté serveur. Executer une application coté serveur permet au code d'etre executé au préalable avant de l’etre par le navigateur côté client, permettant alors de pouvoir générer entièrement la page web côté serveur puis de l’envoyer déjà construite au client ce qui diminue les ressources necessaires du client et permet d'afficher la page avant d'avoir la possibilité d'interaction avec celle ci.</p><br></br>
                    <p class="mb-4">L’architechture d’une application réalisée en Next Js présente aussi des avantages niveaux référencements en generant une application dite "mono page".</p><br></br>

                    <div class="flex flex-col sm:flex-row sm:justify-between text-center">
                        <div class="sm:w-1/2 mb-4 sm:mb-0">
                            <img className='w-20 mx-auto' src={Twitter} alt="HTML icon" />
                            <a className='text-1xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://twitter.com/nextjs?s=20">Next js</a>
                        </div>

                        <div class="sm:w-1/2 mb-4 sm:mb-0">
                            <img className='w-20 mx-auto' src={Chaine} alt="HTML icon" />
                            <a className='text-1xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://nextjs.org/">Next js</a>
                        </div>

                        <div class="sm:w-1/2 mb-4 sm:mb-0">
                            <img className='w-20 mx-auto' src={Cle} alt="HTML icon" />
                            <a className='text-1xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://nextjs.org/blog">Next js.org</a><br></br>
                            <a className='text-1xl font-bold inline border-b-2 border-[#0a192f] hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition duration-300 ease-in-out' href="https://react.dev/community#">React Js.dev</a>
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









