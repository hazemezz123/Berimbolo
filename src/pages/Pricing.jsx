import { motion } from "framer-motion";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";

const PricingSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const pricingPlans = [
    {
      name: "Free",
      price: "$0.00",
      description:
        "Ideal for individuals looking to enhance their online security",
      features: [
        "Basic Threat Detection",
        "Password Manager",
        "Two-Factor Authentication",
        "Security Alerts",
        "Basic Privacy Protection",
      ],
      buttonText: "Start for Free",
      buttonClass: "bg-deepPurple-light hover:bg-deepPurple-lighter",
    },
    {
      name: "Professional",
      price: "$98.00",
      description:
        "Best for small businesses needing comprehensive security solutions",
      features: [
        "Everything in Free",
        "Advanced Threat Detection",
        "Custom Security Policies",
        "Data Encryption",
        "Enhanced Privacy Controls",
      ],
      buttonText: "Sign Up with Professional",
      buttonClass: "bg-deepPurple-lightest hover:bg-deepPurple-accent",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "$160.00",
      description:
        "Tailored for large organizations requiring top-tier security measures",
      features: [
        "Security Audits",
        "24/7 Monitoring",
        "Incident Response",
        "Data Protection",
        "Security Tool Integration",
      ],
      buttonText: "Sign Up with Enterprise",
      buttonClass: "bg-deepPurple-light hover:bg-deepPurple-lighter",
    },
  ];

  return (
    <div
      className="min-h-screen bg-deepPurple-dark text-neutral-light py-16 flex items-center justify-center flex-col font-JetBrains"
      style={{
        backgroundImage:
          "radial-gradient(#7a4d9c 2.5px, transparent 2.5px), radial-gradient(#7a4d9c 2.5px, transparent 2.5px)",
        backgroundSize: "45px 45px",
        backgroundPosition: "0 0, 22.5px 22.5px",
        backgroundColor: "#25003b",
      }}
    >
      <h1 className="mb-10 text-5xl text-deepPurple-lightest font-bold">
        Pricing
      </h1>
      <div className="grid md:grid-cols-3 gap-8 px-4 max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`bg-deepPurple-darkest rounded-lg p-6 shadow-lg border-4 border-transparent cursor-pointer backdrop-blur-md transition-colors ${
              plan.isPopular
                ? "transition-colors border-deepPurple-lightest"
                : " transition-colors hover:border-deepPurple-lighter"
            } hover:scale-105 transition-transform relative`}
          >
            {plan.isPopular && (
              <span className="absolute top-2 right-2 bg-deepPurple-accent text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-deepPurple-lightest">
              {plan.name}
            </h3>
            <p className="text-4xl font-bold my-4 ">
              {plan.price}
              <span className="text-lg text-neutral-dark">/month</span>
            </p>
            <p className="text-neutral-medium">{plan.description}</p>
            <button
              className={`w-full text-white py-2 rounded mt-6 transition-colors duration-300 ${plan.buttonClass}`}
            >
              {plan.buttonText}
            </button>
            <ul className="mt-6 space-y-2 text-slate-400">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <LiaAngleDoubleUpSolid className="mr-2 text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
