import React from "react";

const urlForm = "https://bit.ly/Contacter-Robin";

const menus = [
  {
    title: "Expériences",
    ref: "/#experiences",
  },
  {
    title: "Projets",
    ref: "/#projets",
  },
  {
    title: "Outils",
    ref: "/#outils",
  },
  {
    title: "Motivations",
    ref: "/#motivations",
  },
];

const Footer = () => {
  return (
    <div className='border-t border-gray-700 w-full px-8 py-20 sm:py-10 mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6'>
        <div className='text-center md:text-left'>
          <div className='text-gray-200 font-bold text-lg mb-2'>
            Robin
            <span className='text-gray-200 font-light'>Beaudru</span>
          </div>
          <a href='mailto:robinbeaudru@icloud.com?subject=Recherche de stage'>
            <p className='uppercase text-xs font-normal hover:underline tracking-wide'>
              robinbeaudru@icloud.com
            </p>
          </a>
        </div>
        <div className='flex flex-col md:flex-row justify-end'>
          {menus.map((item, i) => (
            <a
              key={i}
              href={item.ref}
              className='mx-1 px-5 py-4 rounded-sm text-md text-center border-transparent border text-gray-200 hover:border hover:border-current hover:border-gray-200 opacity-90 transition-all duration-200 ease-in-out'>
              {item.title}
            </a>
          ))}
          <button
            onClick={() => {
              window.open(urlForm);
            }}
            href={urlForm}
            className='hidden sm:block bg-gray-200 text-gray-800 text-sm font-semibold tracking-wider uppercase md:ml-8 py-4 px-6 rounded-sm hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-100 ease-in-out'>
            Me contacter
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-center md:justify-start text-center md:text-left text-xs font-light text-gray-500'>
        <p className='inline-block mt-4 mr-3'>
          RobinBeaudru© - All right reserved. 2021.
        </p>
        <a className='mt-4' href='website.com'>
          <p className='inline-block mb-2 hover:underline'>
            Mentions légales et confidentialité
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
