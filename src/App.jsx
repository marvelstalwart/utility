import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import MemesGallery from "./components/MemesGallery";
import ChartPreview from "./components/ChartPreview";
import Tokenomics from "./components/Tokenomics";
import CallToAction from "./components/CallToAction";
import ToggleTheme from "./components/ToggleTheme";
import Navigation from "./components/Navigation"
import './App.css'
const App = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.title = "GOLDAPE Token";
  }, []);

  return (
    <div
      className={
        // (dark ? "bg-black text-[#FF8C17]  " : "bg-white text-black") +
        
        // "bg-linear-to-r/srgb from-black to-[#1b0e00] scroll-smooth snap-y snap-mandatory  h-screen overflow-y-scroll"
       " font-poppins scroll-smooth snap-y snap-mandatory "
      }
      
    >
      <Navigation/>
<div class="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#ff8c17_100%)]"></div>







      <ToggleTheme dark={dark} setDark={setDark} />
      <div id="hero" className="snap-start">
        <Hero />
      </div>
  <div id="about" className="snap-start">
        <About />
      </div>
      <div id="memes" className="snap-start">
        <MemesGallery />
      </div>
      <div id="chart" className="snap-start">
        <ChartPreview />
      </div>
      {/* <div id="tokenomics" className="snap-start">
        <Tokenomics />
      </div> */}
      <div id="cta" className="snap-start">
        <CallToAction />
      </div> 
    </div>
  );
};

export default App;
