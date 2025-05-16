import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx";
import Bot from "./components/Bot.jsx";
import { useState } from "react";


function App() {

  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <Hero />
      <main>
        <Skills />
        <Projects />
      </main>

      <Footer isVisible={isVisible} />
      <Bot setIsVisible={setIsVisible} />

    </>
  )
}

export default App;