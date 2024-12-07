import "../App.css";
const Solutions = () => {
  const solutions = [
    {
      img: "./Security On-amico.svg",
      description: "Comprehensive security solutions tailored for your needs.",
    },
    {
      img: "./Secure data-cuate.svg",
      description: "Robust data protection to keep your information safe.",
    },
    {
      img: "./Drone surveillance-amico.svg",
      description:
        "Advanced drone surveillance for enhanced security monitoring.",
    },
    {
      img: "./Security-bro.svg",
      description: "Innovative security systems for peace of mind.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-l from-deepPurple-darker to-deepPurple-light">
      <section className="container mx-auto px-4 ">
        <figure className="text-start space-y-4 max-md:text-center max-md:leading-10 ">
          <h1 className="text-5xl text-white">Solutions OverView</h1>
          <p className="text-slate-400 ">
            Discover our comprehensive solutions for various facility types, as
            well as the stories of our customers and partnerships. Assemble your
            own kit of Ajax devices for security and comfort.
          </p>
        </figure>
        <div className="grid grid-cols-2 max-md:grid-cols-1 mt-10 space-x-5 text-center">
          {solutions.map((solution, index) => (
            <div key={index} className="flex justify-center flex-col">
              <img
                className="rounded-xl object-fit h-96 "
                src={solution.img}
                alt="No img here"
              />
              <p className="text-white text-center p-2">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
