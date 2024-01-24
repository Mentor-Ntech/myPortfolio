import { useEffect, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Exp/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
