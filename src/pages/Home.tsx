import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-[32vh] mb-[32vh]"
      >
        <p className="text-[clamp(20px,1.7vw,29px)] font-light leading-relaxed">
          Sai Chittala <br />
          <span>Product Designer at </span>
          <a href="https://www.customfurnish.com" 
             className="bg-gradient-to-r from-[#0895FF] via-[#C952DD] to-[#FF9014] bg-clip-text text-transparent">
            CustomFurnish
          </a>
          <br />
          <span className="text-[#808080] intro-link">Email</span>
          <span className="text-[#808080] intro-link">LinkedIn</span>
          <span className="text-[#808080] intro-link">Upwork</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <motion.div
              whileHover={{ y: -8 }}
              className="card-project"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
              />
              <div className="card-overlay">
                <div>
                  <h2 className="text-xl font-normal mb-2 text-white">{project.title}</h2>
                  <p className="text-sm uppercase text-[#808080]">{project.description}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;