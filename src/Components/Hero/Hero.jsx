import React from "react";
import SectionVcenter from "../Containers/SectionVcenter";
import WCSlabel from "../WCSlabel/WCSlabel";

const urlForm = "https://bit.ly/Contacter-Robin";

const Hero = () => {
  return (
    <SectionVcenter>
      <h2 className='text-2xl font-light'>Hello, je m'appelle Robin 👋</h2>
      <h1 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-7xl font-bold'>
        Je recherche un stage de <br className='hidden sm:block' /> dev.
        front/back-end.
      </h1>
      <WCSlabel />
      <p className='text-2xl font-light'>
        À compter de mi-février 2022, <br /> pour 2 à 4 mois. <br />
        Remote OK.
      </p>
      <a className='mt-12 mx-auto' href={urlForm} target={urlForm}>
        <button className='hidden sm:block bg-gray-200 text-gray-800 text-base font-semibold tracking-wider py-4 px-10 rounded-sm uppercase transform hover:-translate-y-1 hover:opacity-90 transition-all duration-150 ease-in-out'>
          Me contacter
        </button>
      </a>
    </SectionVcenter>
  );
};

export default Hero;
