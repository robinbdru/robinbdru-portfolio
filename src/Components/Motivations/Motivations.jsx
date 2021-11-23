import React from "react";
import { FadeIn } from "../../Animations/FadeIn";
import SectionVcenterNoP from "../Containers/SectionVcenterNoP";
import BottleImage from "../../img/nariman-mesharrafa-7VSQt-obpso-unsplash.jpg";

const Motivations = () => {
  return (
    <SectionVcenterNoP>
      <FadeIn>
        <div className='text-left'>
          <h3 className='text-2xl font-light'>Motivations</h3>
          <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
            On ne peut coder une autre planète mais...
          </h2>
        </div>
        <div className='mt-14 grid grid-cols-1 justify-between md:grid-cols-2'>
          <div className='mr-6 mb-14 md:mb-0 md:mr-20 max-w-5xl text-lg text-left  font-light'>
            Les rapports (notamment du G.I.E.C.) sont formels, nous ne
            parviendrons par à contenir le réchauffement du climat causé par le
            déréglement climatique en deça de 2°. C'est sur ce scénario (et à
            minima) qu'il faut tabler.
            <br /> <br />
            Ces 2° malheureux degrés rendront bientôt impossible une des plus
            anciennes activités humaines; l'agriculture, qui plus est l'un des
            pilliers de nos sociétés.
            <br /> <br />
            L'accès à l'énergie est évidemment central dans cette histoire : si
            vous me lisez ici c'est bien parce que des machines (nourries au
            pétrole) travaillent à votre place, vous n'avez donc pas à passer la
            journée à ramasser vous même des pommes de terre.
            <br /> <br />
            Alors malgré ce constat (navrant, n'est-ce pas), je pense
            sincérement que l'informatique, la programmation, peuvent participer
            à la conception de modes de vie plus soutenables. Il est cependant
            évident que nos habitudes de vie et de consommation occidentales
            seront réduites, par 2, par 5 (ou même 10 ?).
            <br /> <br />
            Ces enjeux me motivent et apprendre la programmation est pour moi
            l'opportunité de co-créer des solutions satisfaisantes.
            <br /> <br />
            Co-créer, coopérer, peut-être avec vous ?
          </div>
          <div>
            <img
              className='h-auto'
              src={BottleImage}
              alt='Plastic bottle floating in the sea.'
            />
            <a href='https://unsplash.com/@narimanmesharrafa' target='_blanck'>
              <p className='mt-2 text-left font-light text-sm text-gray-300 hover:underline'>
                Photo by Nariman Mesharrafa on Unsplash.
              </p>
            </a>
          </div>
        </div>
      </FadeIn>
    </SectionVcenterNoP>
  );
};

export default Motivations;
