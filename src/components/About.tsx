import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Twitter, Linkedin, Code, Brain, Rocket, Heart, Coffee, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-[var(--divider)] bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-primary)] border border-[var(--divider)] hover:border-[var(--accent)]"
                title="Back to Start"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Start Here</span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">About Me</h1>
                  <p className="text-[var(--text-secondary)] text-sm">Getting to know Soham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
              Hey there! I'm Soham 👋
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              A Computer Science graduate passionate about AI, systems programming, and building things that matter. 
              Currently exploring the fascinating world of artificial intelligence and distributed systems.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--divider)] text-center">
              <Code className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Developer</h3>
              <p className="text-sm text-[var(--text-secondary)]">Building with modern tech stacks</p>
            </div>
            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--divider)] text-center">
              <Brain className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">AI Enthusiast</h3>
              <p className="text-sm text-[var(--text-secondary)]">Exploring machine learning & AI</p>
            </div>
            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--divider)] text-center">
              <Rocket className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Systems</h3>
              <p className="text-sm text-[var(--text-secondary)]">Distributed systems & architecture</p>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">My Story</h2>
          <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--divider)]">
            <div className="space-y-6 text-[var(--text-secondary)]">
              <p className="leading-relaxed">
                I started my journey in Computer Science back in 2021, completely unaware of what the tech world had to offer. 
                What began as curiosity quickly turned into a passion for understanding how systems work and how technology can solve real-world problems.
              </p>
              <p className="leading-relaxed">
                During my Bachelor's degree, I deepened my understanding of computer science fundamentals, 
                from algorithms and data structures to system design and software engineering principles. 
                But it was the world of artificial intelligence that truly captured my imagination.
              </p>
              <p className="leading-relaxed">
                Today, I'm focused on building personal projects that explore the intersection of AI and systems programming. 
                I'm particularly interested in distributed systems, machine learning infrastructure, and how we can build more intelligent, scalable applications.
              </p>
            </div>
          </div>
        </section>

        {/* What I'm Up To Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">What I'm Up To</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--divider)]">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[var(--accent)]" />
                <h3 className="font-semibold text-[var(--text-primary)]">Currently Learning</h3>
              </div>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li>• Advanced AI/ML techniques and frameworks</li>
                <li>• Distributed systems and microservices</li>
                <li>• Systems programming with Rust and Go</li>
                <li>• Cloud-native architectures</li>
              </ul>
            </div>
            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--divider)]">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-[var(--accent)]" />
                <h3 className="font-semibold text-[var(--text-primary)]">Building</h3>
              </div>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li>• Personal AI projects and experiments</li>
                <li>• Open-source tools and libraries</li>
                <li>• This blog (obviously!) 😄</li>
                <li>• Various side projects to learn new tech</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Beyond Code</h2>
          <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--divider)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Coffee className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Coffee Lover</h3>
                <p className="text-sm text-[var(--text-secondary)]">Fueling late-night coding sessions</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Tech Enthusiast</h3>
                <p className="text-sm text-[var(--text-secondary)]">Always exploring new technologies</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Continuous Learner</h3>
                <p className="text-sm text-[var(--text-secondary)]">Never stop growing and learning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Let's Connect!</h2>
          <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--divider)]">
            <p className="text-[var(--text-secondary)] mb-6">
              I'm always excited to connect with fellow developers, discuss ideas, or collaborate on interesting projects.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/sohoxic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/80 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://twitter.com/sohoxic_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/80 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/sarkar-soham/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/80 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 pb-11 border-t border-[var(--divider)] text-center text-[var(--text-secondary)]">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="text-sm">
            <span>&copy; 2025 Soham Sarkar</span>
            <span className="mx-2">|</span>
            <strong className="text-red-400">AI</strong>
            <span className="mx-2">|</span>
            <span>Systems</span>
            <span className="mx-2">|</span>
            <span>Research</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sohoxic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/sohoxic_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarkar-soham/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 