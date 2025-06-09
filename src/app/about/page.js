import { GraduationCap, Briefcase, Code, Award } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function About() {
  const skills = [
    { category: 'AI/ML Frameworks', items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'LangChain', 'LangGraph'] },
    { category: 'Programming Languages', items: ['Python', 'JavaScript', 'SQL'] },
    { category: 'Web Development', items: ['Django', 'React', 'Streamlit', 'Gradio', 'FastAPI', 'FlaskAPI'] },
    { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'] },
    { category: 'AI Specializations', items: ['Computer Vision', 'NLP', 'Generative AI', 'Agentic AI'] }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* My Story Section */}
          <section className="mb-20">
            <h1 className="section-title">About Me</h1>
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="mr-3 text-primary" />
                My Story
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  I'm a passionate AI Engineer with a deep fascination for artificial intelligence and its potential to transform industries. My journey began with a curiosity about how machines could learn and adapt, which led me to specialize in cutting-edge AI technologies.
                </p>
                <p className="mb-4">
                  With expertise spanning Computer Vision, Natural Language Processing, and Generative AI, I've dedicated my career to building intelligent systems that solve real-world problems. My work focuses on creating agentic AI applications that can autonomously perform complex tasks and make intelligent decisions.
                </p>
                <p>
                  I believe in the power of continuous learning and staying at the forefront of AI innovation. Every project I undertake is an opportunity to push the boundaries of what's possible with artificial intelligence.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-gray-800">Master of Science in Computer Engineering</h3>
                  <p className="text-primary font-medium">COMSATS University | 2019-2023</p>
                  <p className="text-gray-600 mt-2">
                    Specialized in Artificial Intelligence. Thesis focused on advanced computer vision techniques like depth estimation and pose estimation for autonomous systems.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Electrical Engineering</h3>
                  <p className="text-primary font-medium">Foundation University Islamabad, Rawalpindi Campus | 2014-2018</p>
                  <p className="text-gray-600 mt-2">
                    Strong foundation in algorithms and data structures. Graduated with honors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-20">
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Briefcase className="mr-3 text-primary" />
                Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-gray-800">Senior AI Engineer</h3>
                  <p className="text-primary font-medium">Elexoft Technologies | 2023-Present</p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Leading development of agentic AI systems using LangChain and LangGraph</li>
                    <li>• Implementing computer vision solutions for industrial automation</li>
                    <li>• Deploying ML models at scale on AWS infrastructure</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-gray-800">AI Intern</h3>
                  <p className="text-primary font-medium">NECOP Islamabad | 2020-2022</p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Developed NLP models for document processing and analysis</li>
                    <li>• Built generative AI applications using transformer architectures</li>
                    <li>• Created data pipelines and MLOps workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <div className="card max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Code className="mr-3 text-primary" />
                Skills & Technologies
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}