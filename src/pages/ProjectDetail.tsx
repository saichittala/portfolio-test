import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold mb-2">Role</h3>
              <p className="text-gray-400">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Duration</h3>
              <p className="text-gray-400">{project.duration}</p>
            </div>
          </div>

          <div className="space-y-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <p className="text-gray-400 mb-8">{project.fullDescription}</p>

            <h3 className="text-xl font-semibold mb-4">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;