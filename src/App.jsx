import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import FoodDetail from './pages/FoodDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');
  const [selectedFood, setSelectedFood] = useState(null);

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToHome = () => setCurrentPage('home');
  const navigateToOnboarding = () => setCurrentPage('onboarding');
  const navigateToSignup = () => setCurrentPage('signup');
  const navigateToMenu = () => setCurrentPage('menu');
  const navigateToFoodDetail = (food) => {
    setSelectedFood(food);
    setCurrentPage('foodDetail');
  };

  return (
    <div className="App md:h-screen">
      {currentPage === 'onboarding' && (
        <Onboarding
          onStartOrder={navigateToHome}
          onSignIn={navigateToLogin}
        />
      )}
      {currentPage === 'home' && (
        <Home
          onLoginClick={navigateToLogin}
          onExploreClick={navigateToMenu}
        />
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
      {currentPage === 'menu' && (
        <Menu
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onFoodSelect={navigateToFoodDetail}
        />
      )}
      {currentPage === 'foodDetail' && selectedFood && (
        <FoodDetail
          food={selectedFood}
          onClose={navigateToMenu}
          onLoginClick={navigateToLogin}
        />
      )}
    </div>
  );
}

export default App;
