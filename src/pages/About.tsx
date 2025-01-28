import { Code, Briefcase, GraduationCap, Star } from "lucide-react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javasript",
    "Figma",
    "AdobeXD",
    "Photoshop",
    "Illustrator",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            About Me
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I'm a driven and creative individual with a strong passion for
          technology and problem solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I enjoy exploring innovative ideas, collaborating on projects, and
            continuously improving my expertise. My ultimate goal is to
            contribute meaningfully to the Tech & Real Estate Industries while
            inspiring others to achieve their dreams.
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I enjoy exploring innovative ideas, collaborating on projects, and
            continuously improving my expertise. My ultimate goal is to
            contribute meaningfully to the Tech & Real Estate Industries while
            inspiring others to achieve their dreams.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="glass rounded-2xl p-8 text-center">
          <Code className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Figma, HTML, CSS, Javascript
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300">
            UI/UX Design, QA Tester, Realtor
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-600 dark:text-gray-300">
            <p>
              <strong>Name:</strong> Obamah Modupe Rejoice
            </p>
            <p>
              <strong>Matric No:</strong> F/HD/23/3210049
            </p>
            <p>
              <strong>Department:</strong> Computer Science
            </p>
          </p>
        </div>
      </div>

      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 rounded-full glass-hover"
            >
              <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
