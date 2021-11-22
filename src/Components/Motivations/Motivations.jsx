import React from "react";
import SectionVcenterNoP from "../Containers/SectionVcenterNoP";
import BottleImage from "../../img/nariman-mesharrafa-7VSQt-obpso-unsplash.jpg";

const Motivations = () => {
  return (
    <SectionVcenterNoP>
      <div id='#motivations' className='text-left'>
        <h3 className='text-2xl font-light'>Motivations</h3>
        <h2 className='my-4 tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold'>
          On ne peut coder une autre planète mais...
        </h2>
      </div>
      <div className='mt-14 grid grid-cols-1 justify-between md:grid-cols-2'>
        <div className='mr-6 mb-14 md:mb-0 md:mr-20 max-w-5xl text-lg text-left  font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eos
          praesentium soluta inventore, odio ipsum sapiente, quam iure totam
          harum labore doloribus cumque dicta amet saepe. <br /> <br />
          Assumenda in exercitationem minus doloribus deserunt officia, aperiam
          alias tempora repellat sequi est non illum laborum, vel ut! <br />{" "}
          <br />
          Nihil deleniti asperiores architecto recusandae, maxime exercitationem
          mollitia obcaecati est numquam eos amet ab expedita rerum, unde ad
          similique consectetur velit?
          <br /> <br />
          Officia voluptate vitae sapiente voluptatum, fuga porro explicabo
          blanditiis suscipit deserunt accusamus itaque mollitia hic quaerat
          eveniet excepturi ducimus, nihil in impedit error est? Dolores, qui.
          Beatae qui praesentium labore aut harum porro cumque quis! Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          <br /> <br />
          Officia voluptate vitae sapiente voluptatum, fuga porro explicabo
          blanditiis suscipit deserunt accusamus itaque mollitia hic quaerat
          eveniet excepturi ducimus, nihil in impedit error est? Dolores, qui.
          Beatae qui praesentium labore aut harum porro cumque quis! Lorem ipsum
        </div>
        <div>
          <img
            className='h-auto'
            src={BottleImage}
            alt='Plastic bottle floating in the sea.'
          />
          <a href='https://unsplash.com/@narimanmesharrafa'>
            <p className='mt-2 text-left font-light text-sm text-gray-300 hover:underline'>
              Photo by Nariman Mesharrafa on Unsplash.
            </p>
          </a>
        </div>
      </div>
    </SectionVcenterNoP>
  );
};

export default Motivations;
