import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import placeholderImage from "/assets/img-placeholder.jpg";

// Array of background images for the top section
const backgroundImages = [
  "/assets/masks/majoras-main.jpg",
  "/assets/sculptures/chozo-main.jpg",
  "/assets/backdrops/Chipped-Ridge-Stone-1.jpg",
];

const Main = () => {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [fade, setFade] = useState(true);

  // Cycle through background images every 10 seconds with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
        setFade(true); // Trigger fade-in after changing the image
      }, 500); // Duration of fade-out
    }, 10000); // Display each image for 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section with cycling background */}
      <div className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden">
        {/* Background Image Container */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${backgroundImages[currentBackground]})`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Content in front of the background */}
        <div className="relative flex flex-col items-center justify-center text-center px-6 py-12 z-10 text-white space-y-8">
          <h1 className="text-5xl font-bold text-blue-400 tracking-widest shadow-lg">
            Step Into My Creative Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">
            Hi! I'm <span className="font-semibold text-blue-400">Ezekiel Owens</span>, a passionate prop maker and web developer. 
            From crafting intricate masks to building immersive websites, I bring imagination to life.
          </p>
          <img
            src={placeholderImage}
            alt="Ezekiel Owens"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-500"
          />
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300">
            Explore My Creations
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-10">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            There’s something magical about holding a piece of another world in your hands. Whether it’s a mask from a legendary game or a sculpture that brings a fantastical creature to life, I strive to create pieces that make the impossible tangible.
          </p>
          <p className="text-lg leading-relaxed">
            Alongside my prop-making journey, I’m also a skilled web developer proficient in technologies like HTML, CSS, React, Node.js, Vite, Bootstrap, Tailwind CSS, and databases. Combining creativity and technical skills allows me to craft engaging and functional digital experiences.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black text-gray-300">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            My Work in Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={placeholderImage}
                  alt={`Prop ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-sm font-medium">
                  A showcase of creativity and precision in every detail.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for Additional Content */}
      <section className="py-16 bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-8">
    <img
      src={placeholderImage}
      alt="Prop example"
      className="w-full max-w-xl object-cover rounded-lg shadow-lg"
    />
    <p className="text-lg text-center">
      Each project I undertake is an opportunity to push the boundaries of creativity and precision. From concept to final product, every piece tells a story and reflects my passion for craftsmanship and innovation.
    </p>
  </div>
</section>

    </PageLayout>
  );
};

export default Main;
