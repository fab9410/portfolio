import React from 'react';




const ContactButton = () => {
    return (
        <a href="contact" className="hover:bg-pink-500 bg-pink-600 text-white max-w-[113px] group border-1 font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base" style={{ position: 'relative',  left: '440px', top: '30px' }}>
            Contact
        </a>
    );
};

export default ContactButton;