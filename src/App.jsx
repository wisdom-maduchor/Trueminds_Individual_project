import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToHome = () => setCurrentPage('home');
  const navigateToOnboarding = () => setCurrentPage('onboarding');
  const navigateToSignup = () => setCurrentPage('signup');

  return (
    <div className="App md:h-screen">
      {currentPage === 'onboarding' && (
        <Onboarding
          onStartOrder={navigateToHome}
          onSignIn={navigateToLogin}
        />
      )}
      {currentPage === 'home' && (
        <Home onLoginClick={navigateToLogin} />
      )}
      {currentPage === 'login' && (
        <Login
          onBackClick={navigateToOnboarding}
          onSignupClick={navigateToSignup}
        />
      )}
      {currentPage === 'signup' && (
        <Signup
          onSignInClick={navigateToLogin}
          onHomeClick={navigateToHome}
        />
      )}
    </div>
  );
}

export default App;
