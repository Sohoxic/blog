import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, GraduationCap, Briefcase, Heart, Code, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

interface YearlyAchievements {
  year: string;
  achievements: string[];
}

const yearlyAchievements: YearlyAchievements[] = [
  {
    year: '2025',
    achievements: [
      'Started building personal projects and exploring AI/ML',
      'Focusing on systems programming and distributed systems'
    ]
  },
  {
    year: '2024',
    achievements: [
      'Completed Bachelor\'s in Computer Science',
      '',
      ''
    ]
  },
  {
    year: '2023',
    achievements: [
      ''
    ]
  },
  {
    year: '2022',
    achievements: [
      'Deepened understanding of computer science fundamentals',
      ''
    ]
  },
  {
    year: '2021',
    achievements: [
      'Started my Bachelor\'s in Computer Science unaware of anything about tech'
    ]
  },
  {
    year: '2018-2020',
    achievements: [
      'Class 10 (Matriculation) - Core subjects including Science and Mathematics - 94.6%',
      'Class 12 (Higher Secondary) - Science stream (Physics, Chemistry, Mathematics) - 93.6%',
    ]
  }
];

export function StartHere() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-[var(--divider)] bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Main Header Content */}
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Hey, I'm Soham! 👋</h1>
            <p className="text-[var(--text-secondary)] text-sm mb-6">
              Welcome to my corner of the internet. Here's a little about my journey so far.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mb-6">
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

            {/* Navigation Bar */}
            <div>
              <nav className="flex items-center justify-center gap-8 text-sm">
                <Link to="/about" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-2 underline-offset-4">
                  about ↗
                </Link>
                <span className="text-[var(--text-secondary)]">-</span>
                <Link to="/mynotes" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-2 underline-offset-4">
                  blog ↗
                </Link>
                <span className="text-[var(--text-secondary)]">-</span>
                <Link to="/projects" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-2 underline-offset-4">
                  projects ↗
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Achievements by Year */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">What I've Been Up To</h2>
          <p className="text-[var(--text-secondary)] text-sm">
            A quick rundown of the stuff I've done over the years
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {yearlyAchievements.map((yearData, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-mono font-semibold mb-4" style={{ color: 'var(--accent)' }}>
                {yearData.year}
              </h3>
              <div className="space-y-3 ml-4">
                {yearData.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex}>
                    <span className="text-[var(--text-primary)] text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 p-8 bg-[var(--bg-secondary)] rounded-xl border border-[var(--divider)]">
          <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Ready to dive deeper?</h3>
          <p className="text-[var(--text-secondary)] text-sm mb-6">
            Explore my thoughts on AI, systems, research, and everything in between.
          </p>
          <Link
            to="/mynotes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/80 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Read My Blog
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
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