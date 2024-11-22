const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-blue-500 text-white flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
      <p className="mt-4 text-lg md:text-xl">
        Your one-stop solution for services and more
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
