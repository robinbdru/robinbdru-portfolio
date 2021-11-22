import "./App.css";

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
      <NavBar />
      <NavbarMobile />

      <FixedButton />

      <Hero />
      <LogoDiv />

      <Experience />

      <Projects />

      <Tools />

      <Motivations />

      <Footer />
    </div>
  );
}

export default App;
