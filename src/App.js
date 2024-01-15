// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Us from './components/Us';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform any additional logout actions if needed
    setLoggedIn(false);
    // Redirect to the login page using the Navigate component
    return <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        <Header isAuthenticated={isLoggedIn} onLogout={handleLogout} />

        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/us"
            element={isLoggedIn ? <Us /> : <Navigate to="/login" />}
          />
        </Routes>
              <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
