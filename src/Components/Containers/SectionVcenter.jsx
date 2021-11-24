import React from "react";

const SectionVcenter = ({ children }) => {
  return (
    <div className='min-h-screen w-full max-w-7xl py-24 px-3 sm:py-52 mx-auto flex flex-col justify-center '>
      <div className='w-full h-auto flex flex-col text-white '>{children}</div>
    </div>
  );
};

export default SectionVcenter;
