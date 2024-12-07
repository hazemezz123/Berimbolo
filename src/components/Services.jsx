import { Home, Building, Video, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-deepPurple-darkest p-6 rounded-lg shadow-md border-4 border-transparent cursor-pointer transition-all hover:border-deepPurple-accent hover:scale-105"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-12 w-12 text-deepPurple-accent mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Security",
      description:
        "Protect your home with our state-of-the-art security systems.",
    },
    {
      icon: Building,
      title: "Business Security",
      description:
        "Comprehensive security solutions for businesses of all sizes.",
    },
    {
      icon: Video,
      title: "Video Surveillance",
      description:
        "Advanced video monitoring for enhanced security and peace of mind.",
    },
    {
      icon: Users,
      title: "Security Personnel",
      description: "Trained security professionals to safeguard your property.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-deepPurple-dark to-deepPurple-light">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Services
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex justify-center mt-10 ">
          <Link to="/services">
            <motion.button
              className="bg-deepPurple-lightest w-52   text-white font-bold py-4 px-8 rounded-full hover:bg-deepPurple-lighter transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
