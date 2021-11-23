import React from "react";
import { FadeIn } from "../../Animations/FadeIn";
import SectionVcenterNoP from "../Containers/SectionVcenterNoP";

const projects = [
  {
    title: "WCS weather",
    year: "2021",
    text: "Projet livré il y a quelques semaines dans le cadre du cursus de la Wild Code School. L'objectif est de permettre aux étudiants•es de la W.C.S. de trouver des informations sur la qualité de l'air dans la ville de leur campus, parmi les 20 présents en Europe. Malheureusement, les seuils de sûreté préconisés par l'O.M.S. sont dépassés tous les jours, dans toutes les grandes villes européennes.",
    status: 0,
    url: "https://wcs-weather.netlify.app/",
  },
  {
    title: "oto closet",
    year: "2021",
    text: "Side project à l'étude. oto closet permet aux boutiques professionnelles de vêtements de seconde-main d'automatiser les tâches répétitives sur les plate-formes Vinted et Depop, et donc gagner du temps.",
    status: 1,
  },
  {
    title: "Pick My Fripe",
    year: "2020",
    text: "Un projet de prise en charge de la vente des vêtements de seconde-main pour les particuliers. Ces derniers remettent leurs vêtements à un Picker qui (sous un statut auto-entrepreneur) se charge des ventes, les profits étant ensuite partagés.",
    status: 2,
  },
  {
    title: "Hokilo Marketplace",
    year: "2020",
    text: "Une marketplace spécialisée pour les boutiques professionnelles de vêtements de seconde-main, notamment dotées de fonctionnalités avancées pour celles-ci telles que la possibilité de vendre aux enchères ou automatiser les tâches répétitives.",
    status: 2,
  },
];

function setStatusClass(index) {
  if (index === 0)
    return "w-auto py-1 px-2 text-green-500 border border-green-500 rounded-md font-light text-sm";
  else if (index === 1)
    return "w-auto py-1 px-2 text-yellow-500 border border-yellow-500 rounded-md font-light text-sm";
  else
    return "w-auto py-1 px-2 text-red-600 border border-red-600 rounded-md font-light text-sm";
}

function setStatusName(index) {
  if (index === 0) return "Online";
  else if (index === 1) return "Coming soon";
  else return "Shut down";
}

const Projects = () => {
  return (
    <SectionVcenterNoP>
      <FadeIn>
        <div className='text-left'>
          <h3 className='text-2xl font-light'>Projets</h3>
          <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
            Des projets engagés pour <br className='hidden sm:block' /> la
            société et le climat.
          </h2>
          <p className='mb-14 max-w-2xl text-lg font-light'>
            Nous avons travaillé ensemble avec des amis proches sur des projets
            en accord avec nos valeurs et principes. Entreprendre est à nos yeux
            la meilleure manière de changer le monde.
          </p>
        </div>
        <div className='w-full flex flex-col text-left'>
          {projects.map((item, i) => (
            <div
              key={i}
              className='grid grid-cols-1 sm:grid-cols-2 py-20 justify-start border-b border-gray-600'>
              <div>
                <p className='text-base font-light mb-4'>{item.year}</p>
                <h3 className='text-3xl font-bold tracking-tight mb-6'>
                  {item.title}
                </h3>
                <div className='flex flex-row justify-start'>
                  <p className={setStatusClass(item.status)}>
                    {setStatusName(item.status)}
                  </p>
                </div>
              </div>
              <div className='mt-12 sm:mt-0'>{item.text}</div>
              <p>
                {item.url ? (
                  <div className='inline-block mt-6 text-gray-400 hover:underline hover:text-blue-400'>
                    <a href='https://wcs-weather.netlify.app'>{item.url}</a>
                  </div>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionVcenterNoP>
  );
};

export default Projects;
