import "./App.css";
import { FadeIn } from "./Animations/FadeIn";

import NavBar from "./Components/Navigation/NavBar";
import NavbarMobile from "./Components/Navigation/NavBarMobile";
import FixedButton from "./Components/FixedButton/FixedButton";
import Hero from "./Components/Hero/Hero";
import LogoDiv from "./Components/LogoDiv/LogoDiv";
import Experience from "./Components/Experiences/Experience";
import Projects from "./Components/Projects/Projects";
import Motivations from "./Components/Motivations/Motivations";
import Footer from "./Components/Footer/Footer";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <div className='App bg-darkestGray min-h-screen text-gray-200'>
      <FadeIn>
        <NavBar />
      </FadeIn>

      <FadeIn>
        <NavbarMobile />
      </FadeIn>

      <FadeIn>
        <FixedButton />
      </FadeIn>

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <LogoDiv />
      </FadeIn>

      <FadeIn>
        <div id='experiences'>
          <Experience />
        </div>
      </FadeIn>

      <FadeIn>
        <div id='projets'>
          <Projects />
        </div>
      </FadeIn>

      <FadeIn>
        <div id='projets'>
          <Projects />
        </div>
      </FadeIn>

      <FadeIn>
        <div id='tools'>
          <Tools />
        </div>
      </FadeIn>

      <FadeIn>
        <div id='motivations'>
          <Motivations />
        </div>
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
