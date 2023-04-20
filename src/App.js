import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";

import React, {useEffect} from "react";


function App() {

  useEffect(() => {
    document.title = "Portfolio Rayan ROMANET";
  }, []);

  return (
    <>
      <div>

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;