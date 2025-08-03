import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import About from './Componant/About/About'
import Contact from './Componant/Contact/Contact'
import Home from './Componant/Home/Home'
import Nav from './Componant/Nav/Nav'
import Project from './Componant/Project/Project'
import Tutorial from './Componant/Tutorial/Tutorial'
import Skill from "./Componant/Skill/Skill"
import Footer from "./Componant/Footer/Footer"

function App() {
  return (
    <>
      <Nav />
       <Home />
      <About />
      <Skill />
      <Project />
      <Tutorial />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
