import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/common/ScrollProgress";


function App() {
  return (
    <>
    <ScrollProgress/>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
