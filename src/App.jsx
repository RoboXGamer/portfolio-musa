import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx";
import Bot from "./components/Bot.jsx";
import MouseFollower from "./components/MouseFollower.jsx";
import { useState } from "react";
import Img from './components/Img.jsx'
import Bubbles from './components/Bubbles.jsx'
function App() {

  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <main>
        <Skills />
        <Projects />
      </main>
      <Footer isVisible={isVisible} />
      <Bot setIsVisible={setIsVisible} />
      <MouseFollower />
      <Img />
      <Bubbles />
    </>
  )
}

export default App;