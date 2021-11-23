import React from "react";
import { FadeIn } from "../../Animations/FadeIn";

import SectionVcenterNoP from "../Containers/SectionVcenterNoP";

const Tools = () => {
  return (
    <SectionVcenterNoP>
      <FadeIn>
        <div className='text-left'>
          <h3 className='text-2xl font-light'>Outils</h3>
          <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
            Des bases avec le Code & le No-Code.
          </h2>
          <p className='mb-14 max-w-2xl text-lg font-light'>
            La fusion des outils Code & No-Code permet de créer et déployer plus
            rapidement que jamais. J'ai déjà réalisé des M.V.P., boutiques
            e-commerce et landing page en no-code, le code pur vient palier aux
            limites (parfois très rapidement atteintes).
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
                Parmi les plus populaires des libraries front-end Javascript,
                React.js est au coeur du cursus que je poursuis actuellement à
                la Wild Code School. Ce site est notamment réalisé intégralement
                avec React.js.
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
                Node.js et sa sur-couche Express forment le deuxième pilier de
                la formation de la W.C.S., nous avons rédigé nos premiers
                scripts avec eux il y a quelques semaines.
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
                Bubble est pionnier et leader du côté back-end no-code et
                Webflow leader côté front. J'ai eu l'occasion de travailler sur
                les deux, un projet est en ligne aujourd'hui (Webflow).
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
                Ces deux outils permettent d'intégrer d'autres ensemble, comme
                Webflow et Airtable. Integromat permet également d'insérer du
                code.
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
                Uilisés comme base de donnée no-code et/ou CRM, Airtable reste
                mon outils préféré car très complet, de nombreuses features sont
                incluses comme l'automatisation.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionVcenterNoP>
  );
};

export default Tools;
