import React from "react";
import { FadeIn } from "../../Animations/FadeIn";
import MenuMobile from "./MenuMobile";

const NavbarMobile = () => {
  return (
    <FadeIn>
      <div className='z-50 bg-darkestGray md:hidden fixed w-full flex flex-row justify-between px-4 py-6 items-center mx-auto'>
        <div className='text-left text-gray-200 font-bold text-xl'>
          Robin
          <span className='text-left font-light'>Beaudru</span>
        </div>
        <div>
          <MenuMobile />
        </div>
      </div>
    </FadeIn>
  );
};

export default NavbarMobile;
