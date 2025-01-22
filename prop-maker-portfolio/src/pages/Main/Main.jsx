import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import placeholderImage from "/assets/main/img-of-zek.jpg";

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

  // Unified container class for consistent alignment
  const containerClass = "max-w-7xl mx-auto px-8";

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
        <div className="relative flex flex-col items-center justify-center text-center px-8 py-12 z-10 text-white space-y-8">
          <h1 className="text-5xl font-bold text-blue-400 tracking-widest shadow-lg">
            My Creative Journey
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
 
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className={containerClass}>
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
        <div className={containerClass}>
          <h2 className="text-4xl font-bold text-white text-center mb-10">
            My Work in Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: "/assets/masks/majoras-main.jpg", text: "Painting" },
              { img: "/assets/sculptures/chozo-main.jpg", text: "Sculptures" },
              { img: "/assets/backdrops/Chipped-Ridge-Stone-1.jpg", text: "Carving" },
              { img: "/assets/sculptures/Project-2.png", text: "3D Modeling" },
              { img: "/assets/main/IMG_5329.jpg", text: "Electronics Engineering" },
              { img: "/assets/main/erreur-404.jpg", text: "Web Development" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={`Gallery Item ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className={containerClass}>
          <div className="flex flex-col items-center gap-8">
            <img
              src="/assets/main/img-of-zek-holdingrock.png"
              alt="Zek holding prop"
              className="w-full max-w-xl object-cover rounded-lg shadow-lg"
            />
            <p className="text-lg text-center">
              Each project I undertake is an opportunity to push the boundaries of creativity and precision. From concept to final product, every piece tells a story and reflects my passion for craftsmanship and innovation.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Main;
