import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import FoodDetail from './pages/FoodDetail';
import MyOrders from './pages/MyOrders';
import OrderSummary from './pages/OrderSummary';
import DeliveryDetails from './pages/DeliveryDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');
  const [selectedFood, setSelectedFood] = useState(null);
  const [cart, setCart] = useState([]);

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToHome = () => setCurrentPage('home');
  const navigateToOnboarding = () => setCurrentPage('onboarding');
  const navigateToSignup = () => setCurrentPage('signup');
  const navigateToMenu = () => setCurrentPage('menu');
  const navigateToMyOrders = () => setCurrentPage('myOrders');
  const navigateToOrderSummary = () => setCurrentPage('orderSummary');
  const navigateToDeliveryDetails = () => setCurrentPage('deliveryDetails');
  const navigateToFoodDetail = (food) => {
    setSelectedFood(food);
    setCurrentPage('foodDetail');
  };

  const addToCart = (newItem) => {
    setCart(prevCart => {
      // Find if item already exists with SAME customizations
      const existingProductIndex = prevCart.findIndex(item =>
        item.id === newItem.id &&
        item.selectedProtein === newItem.selectedProtein &&
        JSON.stringify(item.selectedSides) === JSON.stringify(newItem.selectedSides)
      );

      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += (newItem.quantity || 1);
        return updatedCart;
      }
      return [...prevCart, { ...newItem, quantity: newItem.quantity || 1 }];
    });
  };

  const updateCartQuantity = (cartId, delta) => {
    setCart(prevCart => prevCart.map(item => {
      if ((item.cartId || item.id) === cartId) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (cartId) => {
    setCart(prevCart => prevCart.filter(item => (item.cartId || item.id) !== cartId));
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
          onMyOrdersClick={navigateToMyOrders}
          onHomeClick={navigateToHome}
          onAddToCart={addToCart}
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
          onMyOrdersClick={navigateToMyOrders}
          onAddToCart={addToCart}
        />
      )}
      {currentPage === 'foodDetail' && selectedFood && (
        <FoodDetail
          food={selectedFood}
          onClose={navigateToMenu}
          onLoginClick={navigateToLogin}
          onMyOrdersClick={navigateToMyOrders}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onAddToCart={addToCart}
        />
      )}
      {currentPage === 'myOrders' && (
        <MyOrders
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onProceedToSummary={navigateToOrderSummary}
          cartItems={cart}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
        />
      )}
      {currentPage === 'orderSummary' && (
        <OrderSummary
          cartItems={cart}
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onBackToCart={navigateToMyOrders}
          onProceedToDelivery={navigateToDeliveryDetails}
        />
      )}
      {currentPage === 'deliveryDetails' && (
        <DeliveryDetails
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onBackToSummary={navigateToOrderSummary}
        />
      )}
    </div>
  );
}

export default App;
