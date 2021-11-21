import React from "react";

const FixedButton = () => {
  return (
    <div className='sm:hidden fixed bottom-0 w-full mb-2 px-3 z-50 h-16 gradi'>
      <button className='mx-auto w-full px-8 py-5 bg-gray-200 text-gray-800 font-semibold text-sm rounded-sm uppercase tracking-wider hover:bg-gray-700 transform hover:-translate-y-1'>
        Me contacter facilement
      </button>
    </div>
  );
};

export default FixedButton;
