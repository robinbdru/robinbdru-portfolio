import React from "react";
import SectionVcenterNoP from "../Containers/SectionVcenterNoP";
import { FadeIn } from "../../Animations/FadeIn";

const experiences = [
  {
    title: "Wild Code School",
    promotion: "2021 - Nantes",
    text: "La W.C.S. est une école de développement. Je participe au batch fall 2021, promotion développement web & mobile JS. L'école recense 20 campus partout en Europe.",
    url: "https://www.wildcodeschool.com/",
  },
  {
    title: "1Kubator",
    promotion: "2020 - Nantes",
    text: "Je suis porteur de projet au sein de 1K, un incubateur-investisseur. Cette société accompagne et finance des projets startups en phase seed.",
    url: "https://www.1kubator.com/",
  },
  {
    title: "Maia Mater",
    promotion: "2019 - Nantes",
    text: "Maia Mater est un programme destiné aux primo-entrepreneurs•es. Il s'agissait en 2019 d'un accompgnement 24/24 & 7/7 de 3 mois encadré par La Cantine du Numérique.",
    url: "https://maiamater.lacantine.co/",
  },
];

const handleClick = (url) => {
  window.open(url, "_blank");
};

const Experience = () => {
  return (
    <SectionVcenterNoP>
      <FadeIn>
        <div className='text-left'>
          <h3 className='text-2xl font-light'>Expériences</h3>
          <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
            Des expériences complémentaires <br /> sur le web.
          </h2>
          <p className='mb-14 max-w-2xl text-lg font-light'>
            J'ai eu la chance de participer à différents programmes et
            organisations dans la ville de Nantes. J'y ai rencontré des
            personnes inspirantes, diverses et douées.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-left cursor-pointer'>
          {experiences.map((item, i) => (
            <div
              onClick={() => handleClick(item.url)}
              key={i}
              className='group flex flex-col py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl  text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-5 transition-all duration-300 ease-out'>
              <p className='mb-3 font-light text-xl text-left'>
                {item.promotion}
              </p>
              <p className='font-semibold text-3xl text-left text-gray-200 group-hover:text-gray-900'>
                {item.title}
              </p>
              <div className='h-px my-8 bg-gray-500' />

              <p className='text-base leading-normal'>{item.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionVcenterNoP>
  );
};

export default Experience;
