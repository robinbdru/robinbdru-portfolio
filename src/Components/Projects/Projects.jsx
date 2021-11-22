import React from "react";
import { FadeIn } from "../../Animations/FadeIn";
import SectionVcenterNoP from "../Containers/SectionVcenterNoP";

const projects = [
  {
    title: "WCS weather",
    year: "2021",
    text: "possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea? possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
    status: 0,
    url: "https://wcs-weather.netlify.app/",
  },
  {
    title: "Fripe Stories",
    year: "2021",
    text: " possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea? possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
    status: 1,
    url: "",
  },
  {
    title: "Pick My Fripe",
    year: "2020",
    text: " possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea? possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
    status: 2,
    url: "",
  },
  {
    title: "Hokilo Marketplace",
    year: "2020",
    text: " possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea? possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
    status: 2,
    url: "",
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            reprehenderit dolorem animi, doloremque vero, eaque eum officiis non
            blanditiis molestias minima beatae? Commodi, corporis placeat!
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
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionVcenterNoP>
  );
};

export default Projects;
