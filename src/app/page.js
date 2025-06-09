import Link from 'next/link'
import { ArrowRight, Brain, Code, Zap } from 'lucide-react'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8 animate-fade-in">
              <img
                src="/profile.png"
                alt="AI Engineer Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              AI Engineer
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Specializing in Computer Vision, NLP, Generative AI, and Agentic AI Applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/portfolio" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/about" className="btn-secondary border-white text-primary hover:bg-white hover:text-primary inline-flex items-center justify-center">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Building intelligent systems using PyTorch, TensorFlow, and cutting-edge ML techniques
              </p>
            </div>
            <div className="card text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-gray-600">
                Creating end-to-end applications with Python, Django, and modern web technologies
              </p>
            </div>
            <div className="card text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Deployment</h3>
              <p className="text-gray-600">
                Deploying scalable solutions on AWS, Azure, and GCP with best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next AI project and bring your ideas to life
          </p>
          <Link href="/portfolio" className="btn-primary inline-block">
            View My Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}