import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          I'm a passionate Full Stack Developer with over 5 years of experience building web applications.
          I specialize in React, Node.js, and modern web technologies. My goal is to create beautiful,
          functional, and user-friendly applications that solve real-world problems.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">React, Node.js, TypeScript, MongoDB</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">5+ years in web development</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Education</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">BS in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;