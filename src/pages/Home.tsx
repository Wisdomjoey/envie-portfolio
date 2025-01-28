import profile from "../assets/profile-1.jpg";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
              Rejoice Modupe Obamah
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            UI/UX Designer
          </h2>
          {/* <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Crafting digital experiences with code and creativity. Specialized in building modern web applications
            that make a difference.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com"
                className="p-3 glass rounded-full hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/rejoice-obamoh-0384b4187/"
                className="p-3 glass rounded-full hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="mailto:modupeobamoh@gmail.com"
                className="p-3 glass rounded-full hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          <img
            src={profile}
            alt="Profile"
            className="relative rounded-2xl object-cover w-full aspect-square glass p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
