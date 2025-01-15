import React from "react";
import PageLayout from "../../components/PageLayout";
import placeholderImage from "/assets/img-placeholder.jpg";

const Main = () => {
  return (
    <PageLayout title="Welcome to Ezekiel Owens' Portfolio">
      <section className="flex flex-col items-center justify-center text-center px-6 py-12">
        <p className="text-lg text-gray-400 max-w-3xl mb-8">
          Hi! I'm <span className="font-semibold text-blue-400">Ezekiel Owens</span>, a passionate prop maker dedicated to bringing imaginative creations to life. From intricate masks and detailed helmets to captivating sculptures and stunning backdrops, I craft pieces that inspire and captivate. Dive into my world of creativity and craftsmanship!
        </p>

        <img
          src={placeholderImage}
          alt="Ezekiel Owens"
          className="w-64 h-64 object-cover rounded-full shadow-lg mb-8 border-4 border-gray-700"
        />

        <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition transform hover:scale-105">
          Explore My Creations
        </button>
      </section>
    </PageLayout>
  );
};

export default Main;
