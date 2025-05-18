import { useState } from "react";

import Footer from "./Footer.jsx";

import Bot from "./Bot.jsx";
import MouseFollower from "./MouseFollower.jsx";
import Img from "./Img.jsx";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Footer isVisible={isVisible} />
      <Bot setIsVisible={setIsVisible} />
      <MouseFollower />
      <Img />
    </>
  );
}

export default App;
