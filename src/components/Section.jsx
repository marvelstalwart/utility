import { motion } from "framer-motion";

const Section = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="w-full px-4 md:px-12 max-w-screen-xl mx-auto py-12"
  >
    {children}
  </motion.div>
);

export default Section;
