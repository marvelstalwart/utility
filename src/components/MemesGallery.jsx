import { motion } from "framer-motion";
import { useState } from "react";
import meme1 from "../assets/img/meme1.jpg"
import meme2 from "../assets/img/meme2.jpg"
import meme3 from "../assets/img/meme3.jpg"
import meme4 from "../assets/img/meme4.jpg"
import meme5 from "../assets/img/meme5.JPG"
import meme6 from "../assets/img/meme6.JPG"
import Section from "./Section";

const shakeAnimation = {
  animate: {
    rotate: [-2, 2, -2, 2, 0],
    transition: { duration: 0.4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
};
const memes = [
  {img: meme1},
    {img: meme2},
      {img: meme3},
        {img: meme4},
          {img: meme5},
            {img: meme6},
]
const MemesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-black text-white font-designer">
      <Section delay={0.4}>
        <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-[#808080] bg-clip-text text-transparent  ">Memes Gallery</h2>
        <div className=" grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {memes.map((meme, id) => (
            <motion.img
              key={id}
              src={meme.img}
              alt={`Meme ${id}`}
              className="rounded-xl shadow-lg w-full object-cover aspect-square cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(meme)}
              {...shakeAnimation}
            />
          ))}
        </div>
      </Section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.img}
            alt="Full meme"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default MemesGallery;
