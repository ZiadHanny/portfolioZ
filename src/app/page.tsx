import About from "./About/about";
import Experience from "./Experience/Experience";
import Footer from "./footer/footer";
import NavBarV2 from "./NavBar/nav";
import Projects from "./projects/projects";
import SecOne from "./sec1/secOne";
import Skills from "./skills/skills";

export default function Home() {
  return (
    <>
      <NavBarV2 />
      <SecOne />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
