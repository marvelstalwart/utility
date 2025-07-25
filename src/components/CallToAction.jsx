import { FaTelegram, FaTwitter, FaShoppingCart } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";
const CallToAction = () => (
  <section className="bg-black max-h-fit py-20 text-[#FF8C17] flex flex-col">
    <section delay={1} className="flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Join the community</h2>
      <p className="text-lg mb-6 text-center">Grab and shill your bag. Be a part of the core community</p>
      
      
          
       <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-[#FF8C17] w-fit italic
        animate-bounce focus:animate-none hover:animate-none inline-flex text-3xl font-medium mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
      >
          <p className="text-xs">
             EZbVKZpGPPS4UjHTJooaHLWYXQmXF9FT8EGk9rfbonk
            
            </p> 
       
   
      </motion.button>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=EZbVKZpGPPS4UjHTJooaHLWYXQmXF9FT8EGk9rfbonk"
          className="flex items-center gap-2 bg-gray-900 text-[#FF8C17] px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          <FaShoppingCart /> Buy Now
        </a>
   
        <a
          href="https://x.com/utilityonchain?s=21"
          className="flex items-center gap-2 bg-gray-900 text-[#FF8C17]k px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          <FaTwitter /> Twitter
        </a>
      </div>
    </section>
  </section>
);

export default CallToAction;
