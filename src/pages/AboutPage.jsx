import React from "react";
import Navbar from "../routes/Navbar";
import BackButton from "../components/BackButton";

const AboutPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="aboutPage max-w-4xl mx-auto px-4 py-10 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <div className="flex items-center capitalize lg:py-[10px] py-[10px]">
          <BackButton /> Go to previous Page
        </div>

        <section className="mb-10 bg-gradient-to-br from-purple-900 to-indigo-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Hey!! Welcome to{" "}
            <span className="text-pink-400 font-bold">Find Anime</span>, your
            ultimate destination for everything anime!
          </h2>
          <p className="text-gray-300">
            We're a team of anime lovers who created this platform to help fans
            discover, explore, and enjoy the vibrant world of anime. Whether
            you're into heartwarming slice-of-life, intense shonen battles, or
            deep psychological thrillers — we've got something for you.
          </p>
        </section>

        <section className="mb-10 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-pink-400">
            🎯 Our Mission
          </h2>
          <p className="text-gray-300">
            To bring anime fans closer to the stories they love by providing a
            simple, clean, and powerful platform for discovering trending,
            upcoming, and classic anime.
          </p>
        </section>

        <section className="mb-10 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-pink-400">
            ✨ What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Explore popular, currently airing, and upcoming anime.</li>
            <li>Stay updated with detailed show info, trailers, and more.</li>
            <li>Search and filter through thousands of anime titles easily.</li>
          </ul>
        </section>

        <section className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-pink-400">
            👾 Join Us on This Journey
          </h2>
          <p className="text-gray-300">
            We built this site for fans, by fans. So whether you're a long-time
            otaku or just starting your anime journey, you're welcome here.
          </p>
        </section>

        <footer className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 mb-4">
            Created with ❤️ by{" "}
            <span className="text-pink-400 font-medium">Bhushan</span>
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/bhushan0705"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="www.linkedin.com/in/bhushan-dandavate-462276265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:bhushan752002@gmail.com"
              className="text-gray-400 hover:text-red-400 transition"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="https://bhushan-portfolio-pi49.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fas fa-briefcase text-xl"></i>
            </a>
            <a
              href="https://x.com/Bhuahan75?t=FAYVqGcI0lYMBTiewwvP2g&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
