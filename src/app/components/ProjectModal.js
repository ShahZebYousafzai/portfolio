'use client'
import { X, ExternalLink, Github } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-fill rounded-lg bg-gray-200"
            />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}