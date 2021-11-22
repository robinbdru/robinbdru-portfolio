import React from "react";
import SectionVcenterNoP from "../Containers/SectionVcenterNoP";

const experiences = [
  {
    title: "Wild Code School",
    promotion: "2021 - Nantes",
    text: " possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
  },
  {
    title: "1Kubator",
    promotion: "2020 - Nantes",
    text: " possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
  },
  {
    title: "Maia Mater",
    promotion: "2019 - Nantes",
    text: " possimus quis! Nam sequi, dolor dicta, unde repellendus nihil est autem eveniet corrupti voluptas inventore aliquam ea?",
  },
];

const Experience = () => {
  return (
    <SectionVcenterNoP>
      <div className='text-left'>
        <h3 className='text-2xl font-light'>Expériences</h3>
        <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
          Des expériences complémentaires <br /> sur le web.
        </h2>
        <p className='mb-14 max-w-2xl text-lg font-light'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          reprehenderit dolorem animi, doloremque vero, eaque eum officiis non
          blanditiis molestias minima beatae? Commodi, corporis placeat!
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-left'>
        {experiences.map((item, i) => (
          <div
            key={i}
            className='group flex flex-col mt-7 py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl  text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-5 transition-all duration-300 ease-out'>
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
    </SectionVcenterNoP>
  );
};

export default Experience;
