import "../CSS/Solutions.css";
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
      <section className="container mx-auto px-20">
        <figure className="text-start space-y-4 max-md:text-center max-md:leading-10 ">
          <h1 className="text-5xl text-white text-center">
            Solutions OverView
          </h1>
          <p className="text-slate-400 text-center ">
            Discover our comprehensive solutions for various facility types, as
            well as the stories of our customers and partnerships. Assemble your
            own kit of Ajax devices for security and comfort.
          </p>
        </figure>
        <div className="grid grid-cols-2 max-md:grid-cols-1 mt-10 space-x-5 text-center ">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col"
            >
              {/* Wrap the image in a parent div with the ImgHover class */}
              <div className="ImgHover">
                <img
                  className="rounded-xl object-cover h-80"
                  src={solution.img}
                  alt="No img here"
                />
              </div>
              <p className="text-white text-center p-2 max-w-64 text-pretty">
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
