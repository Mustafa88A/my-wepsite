import About from "./About";
import Cards from "./Cards";
import SectionOne from "./SectionOne";
import Skills from "./Skills";
import Contact from "./Contact";
// import Navbar from "./Navbar";

function HomePage() {
  return (
    <div>
      <SectionOne />
      <About />
      <Skills />
      <Cards />
      <Contact />
    </div>
  );
}
export default HomePage;
