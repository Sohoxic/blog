import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // Redirect component for the root path
  const RedirectToHome = () => {
    useEffect(() => {
      window.location.href = '/home';
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
          backgroundColor: '#ffffff', 
          color: '#1f2937', 
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

  // Home route component - for local development
  const HomeRoute = () => {
    useEffect(() => {
      // In development, redirect to starthere.html
      // In production, Vercel handles this rewrite
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
          backgroundColor: '#ffffff', 
          color: '#1f2937', 
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
            <p>Loading home...</p>
          </div>
        </div>
      </>
    );
  };

  // Redirect component for the blog path
  const RedirectToBlog = () => {
    useEffect(() => {
      window.location.href = '/thesohoxictales.html';
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
          backgroundColor: '#ffffff', 
          color: '#1f2937', 
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
            <p>Loading blog...</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/thesohoxictales" element={<RedirectToBlog />} />
      </Routes>
    </Router>
  );
}

export default App;