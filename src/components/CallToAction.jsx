import { FaTelegram, FaTwitter, FaShoppingCart } from "react-icons/fa";
import Section from "./Section";

const CallToAction = () => (
  <section className="bg-black text-[#FF8C17]">
    <Section delay={1}>
      <h2 className="text-4xl font-bold mb-4 text-center">Join the community</h2>
      <p className="text-lg mb-6 text-center">Grab and shill your bag. Be a part of the core community</p>
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
    </Section>
  </section>
);

export default CallToAction;
