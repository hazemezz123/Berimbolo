import { motion } from "framer-motion";
import { Fa500Px } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(/retinal-biometrics-technology-with-man-s-eye-digital-remix.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative bg-gradient-to-tr from-deepPurple-lighter to-deepPurple-darkest text-white py-20 min-h-screen flex justify-center items-center"
    >
      <div className="absolute w-full h-full bg-black/45" />
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Fa500Px className="h-20 w-20 mx-auto mb-8 text-deepPurple-accent" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Protect What Matters Most
          </h1>
          <p className="text-xl mb-8">
            Professional security solutions for your peace of mind
          </p>
          <motion.button
            className="bg-deepPurple-lightest text-white font-bold py-2 px-6 rounded-full hover:bg-deepPurple-lighter transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
