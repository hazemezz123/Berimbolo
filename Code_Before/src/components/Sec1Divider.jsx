import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
const Divider = () => {
  return (
    <div className="mx-auto p-20 flex flex-col justify-center items-center bg-deepPurple-dark ">
      <p className="text-center text-4xl text-white mb-10">About Us Company</p>
      <div className="animate-pulse">
        <FaArrowDown className="text-7xl text-center text-white animate-bounce " />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-deepPurple-lightest text-white font-bold py-2 px-6 rounded-full hover:bg-deepPurple-lighter transition-colors"
      >
        Get Started
      </motion.button>{" "}
    </div>
  );
};

export default Divider;
