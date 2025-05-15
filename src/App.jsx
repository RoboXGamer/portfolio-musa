import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx";
import Bot from "./components/Bot.jsx";
import { useState } from "react";


function App() {

  const [ isVisible, setIsVisible ] = useState(false)


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-[48rem] p-5 text-white">
        <Hero />
        <Skills />
        <Projects />
        <Footer isVisible={isVisible} />
        <Bot isVisible={isVisible} setIsVisible={setIsVisible} />

      </div>
    </>
  )
}

export default App;