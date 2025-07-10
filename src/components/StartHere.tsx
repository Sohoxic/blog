import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, GraduationCap, Briefcase, Heart, Code, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

interface YearlyAchievements {
  year: string;
  achievements: string[];
}

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
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
  const [currentInput, setCurrentInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { type: 'command', content: 'whoami' },
    { type: 'output', content: 'soham - CS graduate passionate about AI, systems programming, and building things that matter.' },
    { type: 'output', content: 'Currently working at Couchbase, a distributed database company.' }
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    const newHistory = [...terminalHistory, { type: 'command' as const, content: command }];

    switch (trimmedCommand) {
      case 'cd blog':
      case 'cd thesohoxictales':
        newHistory.push({ type: 'output' as const, content: 'Navigating to blog...' });
        setTerminalHistory(newHistory);
        setTimeout(() => navigate('/thesohoxictales'), 1000);
        break;
      
      case 'cd proof-of-work':
      case 'cd proof-of-work/':
        newHistory.push({ type: 'output' as const, content: 'Navigating to proof-of-work section...' });
        setTerminalHistory(newHistory);
        setTimeout(() => {
          const element = document.getElementById('what-ive-been-up-to');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000);
        break;
      
      case 'ls':
        newHistory.push({ type: 'output' as const, content: 'blog/  proof-of-work/  contact.txt' });
        break;
      
      case 'pwd':
        newHistory.push({ type: 'output' as const, content: `/home/soham${currentDirectory === '~' ? '' : currentDirectory}` });
        break;
      
      case 'whoami':
        newHistory.push({ type: 'output' as const, content: 'soham - CS graduate passionate about AI, systems programming, and building things that matter.' });
        newHistory.push({ type: 'output' as const, content: 'Currently working at Couchbase, a distributed database company.' });
        break;
      
      case 'help':
        newHistory.push({ type: 'output' as const, content: 'Available commands: whoami, ls, pwd, cd blog, cd proof-of-work, help, clear' });
        break;
      
      case 'clear':
        setTerminalHistory([]);
        setCurrentInput('');
        return;
      
      case '':
        // Empty command, just add a new prompt
        break;
      
      default:
        newHistory.push({ type: 'error' as const, content: `Command not found: ${command}. Type 'help' for available commands.` });
        break;
    }

    setTerminalHistory(newHistory);
    setCurrentInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-[var(--divider)] bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Main Header Content */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/profile-picture.jpeg"
                alt="Soham"
                className="w-24 h-24 rounded-full object-cover border-3 border-[var(--accent)] shadow-lg mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Hey, I'm Soham! 👋</h1>
            </div>
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
                <Link to="/thesohoxictales" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-2 underline-offset-4">
                  blog ↗
                </Link>
                <span className="text-[var(--text-secondary)]">-</span>
                <a href="#what-ive-been-up-to" className="text-orange-400 hover:text-orange-300 transition-colors underline decoration-2 underline-offset-4">
                  proof-of-work ↗
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Terminal Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-black rounded-xl border border-gray-700 p-6 shadow-xl" onClick={handleTerminalClick}>
          <div className="font-mono text-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-xs ml-2">terminal</div>
            </div>
            
            {/* Terminal content */}
            <div className="space-y-1">
              {terminalHistory.map((line, index) => (
                <div key={index}>
                  {line.type === 'command' ? (
                    <div className="text-gray-400">
                      <span className="text-green-400">soham@dev</span>:<span className="text-blue-400">{currentDirectory}</span>$ <span className="text-white">{line.content}</span>
                    </div>
                  ) : line.type === 'error' ? (
                    <div className="text-red-400 pl-4">{line.content}</div>
                  ) : (
                    <div className="text-gray-300 pl-4">
                      {line.content.includes('Couchbase') ? (
                        <>
                          {line.content.split('Couchbase')[0]}
                          <span 
                            className="text-red-500 font-semibold cursor-help relative group"
                          >
                            Couchbase
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap border border-gray-600">
                              COUCH = Clusters Of Unreliable Commodity Hardware
                            </span>
                          </span>
                          {line.content.split('Couchbase')[1]}
                        </>
                      ) : (
                        line.content
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Current input line */}
              <div className="text-gray-400 flex">
                <span className="text-green-400">soham@dev</span>:<span className="text-blue-400">{currentDirectory}</span>$ 
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none text-white ml-1 flex-1"
                  autoFocus
                />
                <span className="animate-pulse text-white">█</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fun fact note below terminal */}
        <div className="mt-4 text-center">
          <p className="text-[var(--text-secondary)] text-xs italic">
            💡 Try terminal commands like "cd blog", "ls", "help" • Hover over <span className="text-red-400 font-semibold">Couchbase</span> in the terminal above to see what COUCH stands for!
          </p>
        </div>
      </section>

      {/* Achievements by Year */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12" id="what-ive-been-up-to">
          <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">What I've Been Up To </h2>
          <p className="text-[var(--text-secondary)] text-sm">
            A quick rundown of the stuff I've done over the years - my <span className="text-orange-400 font-mono font-semibold italic">proof of work!</span>
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
            to="/thesohoxictales"
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