import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose prose-invert">
          <p className="text-xl text-gray-400 mb-6">
            I'm Sai Chittala, a Product Designer with a passion for creating intuitive and impactful digital experiences. Currently, I'm leading design initiatives at CustomFurnish, where I focus on transforming complex furniture customization processes into seamless user journeys.
          </p>
          <p className="text-xl text-gray-400 mb-6">
            With over 5 years of experience in product design, I've developed a deep understanding of user-centered design principles and a keen eye for detail. My approach combines strategic thinking with creative problem-solving to deliver solutions that not only look beautiful but also drive business results.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Lead Product Designer</h3>
              <p className="text-gray-400">CustomFurnish • 2021 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Senior UX Designer</h3>
              <p className="text-gray-400">Design Studio X • 2019 - 2021</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;