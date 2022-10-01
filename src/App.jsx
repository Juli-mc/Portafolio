import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import RecentWorks from './components/RecentWorks'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import { motion, useScroll } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)
  const { scrollYProgress } = useScroll();

function Component() {

  const { scrollY } = useScroll()

useEffect(() => {
  return scrollY.onChange((latest) => {
    console.log("Page scroll: ", latest)
  })
}, [])

  
    
}

  return (
    <HashRouter>
      <div>
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />  
      </div>
      <div className='hero'>
      <nav>
        <h2 className='logo'>Julian <span>Marin</span></h2>
        <ul>
          <li><a id='1' href="#">Inicio</a></li>
          <li><a href="#2">Sobre mi</a></li>
          <li><a href="#3">Mis proyectos</a></li>
          <li><a href="#4">Contacto</a></li>
        </ul>
      </nav>
      </div>
      <Home />
      <AboutMe />
      <Skills />
      <br />
      <RecentWorks />
      <br />
      <ContactMe />
    <footer>
      <div className='social-icon-container'>
        <a href="https://instagram.com/juli.marinc/"><i class="fa-brands fa-instagram" style={{cursor: "pointer"}}></i></a>
        <a href="https://github.com/Juli-mc"><i class="fa-brands fa-github" style={{cursor: "pointer"}}></i></a>
        <a href="mailto:julianmarincordoba19@gmail.com"><i class="fa-solid fa-envelope" style={{cursor: "pointer"}}></i></a>
      </div>
      <span className='copyright'>&copy;2022, Julián Marin. Todos los derechos reservados.</span>
    </footer>
    </HashRouter>
  )
}

export default App
