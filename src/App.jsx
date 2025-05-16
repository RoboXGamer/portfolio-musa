import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx";
import Bot from "./components/Bot.jsx";
import MouseFollower from "./components/MouseFollower.jsx";
import HiddenHero from './components/HiddenHero.jsx'
import { useState } from "react";


function App() {

  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <HiddenHero />
      <main>
        <Skills />
        <Projects />
      </main>

      <Footer isVisible={isVisible} />
      <Bot setIsVisible={setIsVisible} />
      <MouseFollower />
    </>
  )
}

export default App;