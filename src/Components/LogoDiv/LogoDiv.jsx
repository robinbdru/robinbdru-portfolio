import React from "react";
import { FadeInTwo } from "../../Animations/FadeIn";

import VsLogo from "../../img/VSlogo";

import GitHub from "../../img/GitHub";
import TailwindLogo from "../../img/Tailwind";
import ReactLogo from "../../img/ReactLogo";

const LogoDiv = () => {
  return (
    <div>
      <FadeInTwo>
        <div className='-mt-7 opacity-60'>
          <p className='mb-4 text-xs font-light uppercase tracking-widest'>
            Built with
          </p>
          <div className='px-5 flex flex-col sm:flex-row gap-6 items-center justify-center'>
            <div className='pb-2'>
              <ReactLogo />
            </div>
            <VsLogo />
            <GitHub />
            <TailwindLogo />
          </div>
        </div>
      </FadeInTwo>
    </div>
  );
};

export default LogoDiv;
