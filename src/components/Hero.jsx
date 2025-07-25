import { motion } from "framer-motion";
import Section from "./Section";
import logo from "../assets/img/utillogo.png"
import map from "../assets/icons/map.svg"
  const bgMap = `url(${map})`
const Hero = () => (
  
  <section
    className=" min-h-screen  relative flex justify-center items-center  text-center bg-fixed bg-center bg-no-repeat bg-cover w-full"

  >
    <img src={map} className="absolute  top-20% -z-10"/>
    <Section className="z-10 "> 
      {/* <img src={logo} alt="Token Logo" className="w-full mb-4 animate-pulse mx-auto" /> */}
<h1 className="text-5xl md:text-[5rem] lg:text-[6rem]  xl:text-[10rem] z-40 font-bold tracking-wide mb-4 font-designer bg-gradient-to-r from-white to-[#808080] bg-clip-text text-transparent">
  UTILITYCOIN
</h1>

      <p className="text-xl md:text-4xl mb-6 text-green-50 font-semibold">Bringing Utility on Chain</p>

    
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-[#FF8C17] italic
        animate-bounce focus:animate-none hover:animate-none inline-flex text-3xl font-medium mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
      ><a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=EZbVKZpGPPS4UjHTJooaHLWYXQmXF9FT8EGk9rfbonk">
            GRAB A BAG
        </a>
   
      </motion.button>
    </Section>
  </section>
);

export default Hero;
