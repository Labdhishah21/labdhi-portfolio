import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import ProjectDesc from "./components/Projects/ProjectDesc"; // Import ProjectDesc

const basename = import.meta.env.MODE === "production" ? "/labdhi-portfolio" : "/";

function App() {
  return (
    <Router basename={basename}>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:slug" element={<ProjectDesc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
