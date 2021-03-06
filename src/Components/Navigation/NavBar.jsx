import React from "react";
import { FadeInTwo } from "../../Animations/FadeIn";

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

const NavBar = () => {
  return (
    <FadeInTwo>
      <div className='z-50 bg-darkestGray fixed hidden md:flex w-full flex-row justify-between px-8 py-6 items-center mx-auto'>
        <div className='text-left text-gray-200 font-bold text-lg'>
          <a href='/'>
            Robin
            <span className='text-left text-gray-200 font-light'>Beaudru</span>
          </a>
        </div>
        <div className='flex flex-row items-center'>
          <div className='mr-5'>
            {menus.map((item, i) => (
              <a
                key={i}
                href={item.ref}
                className='mx-1 px-5 py-4 rounded-sm text-md text-center border-transparent border text-gray-200 hover:border hover:border-current hover:border-gray-200 opacity-90 transition-all duration-200 ease-in-out'>
                {item.title}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              window.open(urlForm);
            }}
            href={urlForm}
            className='bg-gray-200 text-gray-800 text-sm font-semibold tracking-wider uppercase py-4 px-6 rounded-sm hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-100 ease-in-out'>
            Me contacter
          </button>
        </div>
      </div>
    </FadeInTwo>
  );
};

export default NavBar;
