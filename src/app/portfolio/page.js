'use client'
import { useState } from 'react'
import ProjectModal from '../components/ProjectModal'
import Navbar from '../components/Navbar'
import { ExternalLink, Github } from 'lucide-react'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'No Cover App',
      description: 'Django App for Horse Racing Insights',
      fullDescription: 'A comprehensive Django web application designed for professional horse racing analysis, enabling frame-by-frame video examination to measure "no cover" percentages when horses race unobstructed. The system features an interactive video player with precision timing controls, real-time data collection tools for marking observation periods, and automated calculations based on configurable coverage multipliers. Built with Django backend integrating RESTful APIs for race data, the application includes multi-horse management, unsaved data tracking, and a responsive interface optimized for racing analysts to objectively measure performance metrics and racing tactics for strategic evaluation.',
      image: '/no-cover.png',
      technologies: ['Python', 'Django', 'SQLite', 'RESTful APIs', 'HTML5 Video API', 'Tailwind CSS', 'Vanilla Javascript'],
      features: [
        'Frame-by-frame video player with keyboard shortcuts for precise timing measurements',
        'Interactive tools to mark start/end times of racing observations with different cover types (sandwich, lead, full cover)',
        'Dynamic percentage calculations based on coverage multipliers and race duration',
        'RESTful API integration for fetching race schedules, horse information, and historical data',
        ' Cycle through horses in a race with unsaved data tracking and bulk save operations',
        'Mobile-friendly interface with collapsible panels and fullscreen video mode'
      ],
      githubUrl: 'https://github.com/username/doc-analysis',
      liveUrl: 'https://doc-analysis-demo.com'
    },
    {
      id: 2,
      title: 'In4mo Portal Webscraping',
      description: 'Automated Insurance Claims Data Extraction System',
      fullDescription: 'Azure-based web scraping solution that automatically extracts and processes insurance claims data from the In4mo platform using Selenium WebDriver.',
      image: '/solera_in4mo.svg',
      technologies: ['Python', 'Selenium WebDriver', 'Azure Functions', 'AzureSQL', 'Azure Blob Storage', 'PyPDF2', 'Docker'],
      features: [
        'Automated navigation and data extraction from complex insurance claim interfaces',
        'Extracts structured data from tables, unstructured chat messages, and PDF documents using PyPDF2',
        'Real-time data synchronization with SQL Server including change detection and logging',
        'PDF document processing with Azure Blob Storage integration',
        'Comprehensive logging and retry mechanisms for production reliability'
      ],
      githubUrl: 'https://github.com/username/agentic-ai',
      liveUrl: 'https://agentic-ai-demo.com'
    },
    {
      id: 3,
      title: 'Treadmill Monitor OCR',
      description: 'YOLO Nova Lambda - Serverless Computer Vision API',
      fullDescription: "A serverless computer vision system that combines custom YOLO object detection with AWS Bedrock's Nova Lite vision model for automated OCR extraction. Built as a scalable AWS Lambda function, the system detects specific regions (distance and time displays) in images and extracts numeric values using multi-modal AI.",
      image: '/detected_test_image_8.png',
      technologies: ['Python', 'PyTorch', 'Ultralytics YOLO', 'AWS Lambda', 'AWS Bedrock', 'OpenCV', 'AWS ECR', 'AWS API Gateway'],
      features: [
        'Custom YOLO model for region detection with configurable confidence thresholds',
        'AWS Bedrock Nova Lite integration for intelligent OCR processing',
        'Containerized Lambda deployment with optimized cold start performance',
        'RESTful API with health checks and comprehensive error handling',
        'Automated ECR deployment pipeline with Docker multi-stage builds',
      ],
      githubUrl: 'https://github.com/username/cv-quality-control',
      liveUrl: null
    },
    {
      id: 4,
      title: 'Real-Time Glove Detection and QC System for Manufacturing',
      description: 'Manufacturing Video Inference System',
      fullDescription: 'A real-time computer vision quality control system integrating YOLO-based object detection with industrial automation workflows. The system includes a Django-powered web interface that allows operators to define up to six detection zones on live video feeds for monitoring glove compliance in manufacturing environments. Integration with PLCs enables precise control and synchronization of detection zones within the industrial process. This system demonstrates the integration of modern computer vision techniques with industrial automation protocols, making it suitable for quality control applications in manufacturing, assembly lines, and safety compliance monitoring.',
      image: '/Untitled video - Made with Clipchamp.gif',
      technologies: ['Python', 'Django', 'YOLO (Ultralytics)', 'OpenCV', 'Websockets', 'Modbus TCP', 'Bootstrap'],
      features: [
        'Low-latency YOLO-based glove detection with WebSocket communication for live video processing',
        'Interactive zone editing with drag-and-drop functionality for flexible workflow adaptation',
        'Bidirectional Modbus TCP communication with industrial PLCs for seamless automation integration',
        'Color-coded zones (yellow for active, green for pass, red for fail) providing instant quality control status',
        'Supports both live webcam feeds and uploaded video processing',
        'Built for manufacturing environments with robust error handling and performance optimization'
      ],
      githubUrl: 'https://github.com/username/generative-ai-platform',
      liveUrl: 'https://generative-ai-demo.com'
    },
    {
      id: 5,
      title: 'Phi-3 Chat with Semantic Memory',
      description: 'A local LLM bult with Streamlit',
      fullDescription: "A local LLM chat application built with Streamlit that features intelligent conversation memory using ChromaDB for semantic search. The application runs Microsoft's Phi-3-mini model locally and maintains context-aware conversations by storing and retrieving relevant past interactions based on semantic similarity.",
      image: 'https://via.placeholder.com/600x400/10B981/ffffff?text=Sentiment+Analysis',
      technologies: ['Python', 'Streamlit', 'Transformers', 'PyTorch', 'ChrommaDB', 'HuggingFace'],
      features: [
        'Local deployment of Phi-3-mini-4k-instruct model with GPU acceleration support',
        'Semantic conversation memory using ChromaDB vector embeddings',
        'Context-aware responses that reference relevant previous conversations',
        'Session management with conversation search and memory controls',
        'Clean, modular architecture with separate components for model management, memory storage, and UI',
      ],
      githubUrl: 'https://github.com/username/sentiment-api',
      liveUrl: 'https://sentiment-api-demo.com'
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title">My Portfolio</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore my collection of AI and machine learning projects, from computer vision systems to agentic AI applications.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card group cursor-pointer" onClick={() => openModal(project)}>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-fill group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-sm">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, '_blank')
                      }}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </button>
                  )}
                  {project.liveUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.liveUrl, '_blank')
                      }}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  )
}