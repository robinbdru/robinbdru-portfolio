import React from "react";

import SectionVcenterNoP from "../Containers/SectionVcenterNoP";

const Tools = () => {
  return (
    <div>
      <SectionVcenterNoP>
        <div className='text-left'>
          <h3 className='text-2xl font-light'>Outils</h3>
          <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
            Des bases sur des outils Code & No-Code.
          </h2>
          <p className='mb-14 max-w-2xl text-lg font-light'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            reprehenderit dolorem animi, doloremque vero, eaque eum officiis non
            blanditiis molestias minima beatae? Commodi, corporis placeat!
          </p>
        </div>
        <div className='text-left'>
          <div className='grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-4'>
            <div className='col-span-3 group flex flex-col py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl  text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-2 transition-all duration-300 ease-out'>
              <p className='mb-3 font-light text-xl text-left'>
                Front-End Development
              </p>
              <p className='font-semibold text-3xl text-left text-gray-200 group-hover:text-gray-900'>
                React.js
              </p>
              <div className='h-px my-8 bg-gray-500' />

              <p className='text-base leading-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                beatae aspernatur quas animi architecto dignissimos optio nulla
                consequuntur saepe impedit?
              </p>
            </div>
            <div className='col-span-3 group flex flex-col py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl  text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-2 transition-all duration-300 ease-out'>
              <p className='mb-3 font-light text-xl text-left'>
                Back-End Development
              </p>
              <p className='font-semibold text-3xl text-left text-gray-200 group-hover:text-gray-900'>
                Node.js • Express.js
              </p>
              <div className='h-px my-8 bg-gray-500' />

              <p className='text-base leading-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                beatae aspernatur quas animi architecto dignissimos optio nulla
                consequuntur saepe impedit?
              </p>
            </div>
            <div className='col-span-2 group flex flex-col py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-2 transition-all duration-300 ease-out'>
              <p className='mb-3 font-light text-xl text-left'>
                No-Code Development
              </p>
              <p className='font-semibold text-3xl text-left text-gray-200 group-hover:text-gray-900'>
                Bubble.io • Webflow
              </p>
              <div className='h-px my-8 bg-gray-500' />

              <p className='text-base leading-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                beatae aspernatur quas animi architecto dignissimos optio nulla
                consequuntur saepe impedit?
              </p>
            </div>
            <div className='col-span-2 group flex flex-col py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-2 transition-all duration-300 ease-out'>
              <p className='mb-3 font-light text-xl text-left'>
                No-Code Automation
              </p>
              <p className='font-semibold text-3xl text-left text-gray-200 group-hover:text-gray-900'>
                Zapier • Integromat
              </p>
              <div className='h-px my-8 bg-gray-500' />

              <p className='text-base leading-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                beatae aspernatur quas animi architecto dignissimos optio nulla
                consequuntur saepe impedit?
              </p>
            </div>
            <div className='col-span-2 group flex flex-col py-20 px-10 justify-end rounded-sm border transform border-gray-100 hover:bg-gray-200 hover:rounded-2xl text-gray-500 hover:text-gray-900 h-auto hover:-translate-y-2 transition-all duration-300 ease-out'>
              <p className='mb-3 font-light text-xl text-left'>
                No-Code Database
              </p>
              <p className='font-semibold text-3xl text-left text-gray-200 group-hover:text-gray-900'>
                Airtable • Google Sheet
              </p>
              <div className='h-px my-8 bg-gray-500' />

              <p className='text-base leading-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                beatae aspernatur quas animi architecto dignissimos optio nulla
                consequuntur saepe impedit?
              </p>
            </div>
          </div>
        </div>
      </SectionVcenterNoP>
    </div>
  );
};

export default Tools;
