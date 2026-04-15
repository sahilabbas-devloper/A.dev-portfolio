import { Routes, Route , useLocation } from "react-router-dom"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contect from "./components/Contect"
import Navbar from "./components/Navbar"


function App() {


  return (

    <div>


      <div>

        <Navbar />

        <Routes>
          <Route  path="/" element={<Hero />} />
          <Route id="Hero" path="/Hero" element={<Hero />} />
          <Route id="About" path="/About" element={<About />} />
          <Route id="Skills" path="/Skills" element={<Skills />} />
          <Route id="Project" path="/Project" element={<Project />} />
          <Route id="Contect" path="/Contect" element={<Contect />} />


        </Routes>



      </div>


    </div>

  )
}

export default App
