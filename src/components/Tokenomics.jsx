import { motion } from "framer-motion";
import Section from "./Section";

const Tokenomics = () => (
  <section>
    <Section delay={0.8}>
      <h2 className="text-4xl font-bold mb-8 text-center">Tokenomics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "50%", label: "Liquidity" },
          { title: "30%", label: "Community Airdrops" },
          { title: "20%", label: "Team & Dev" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-gold text-black p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  </section>
);

export default Tokenomics;
