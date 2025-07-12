import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogPage } from './components/BlogPage';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  // Redirect component for the root path
  const RedirectToStartHere = () => {
    useEffect(() => {
      window.location.href = '/starthere.html';
    }, []);
    
    return (
      <>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          backgroundColor: '#1a1b26', 
          color: '#c0caf5', 
          fontFamily: 'monospace' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              border: '2px solid #7aa2f7', 
              borderRadius: '50%', 
              width: '40px', 
              height: '40px', 
              margin: '0 auto 20px', 
              borderTop: '2px solid transparent', 
              animation: 'spin 1s linear infinite' 
            }}></div>
            <p>Redirecting...</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToStartHere />} />
        <Route path="/thesohoxictales" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;