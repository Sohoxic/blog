import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartHere } from './components/StartHere';
import { BlogPage } from './components/BlogPage';
import { About } from './components/About';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartHere />} />
        <Route path="/thesohoxictales" element={<BlogPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;