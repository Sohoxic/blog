import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartHere } from './components/StartHere';
import { BlogPage } from './components/BlogPage';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartHere />} />
        <Route path="/mynotes" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;