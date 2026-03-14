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
import Payment from './pages/Payment';
import Success from './pages/Success';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');
  const [selectedFood, setSelectedFood] = useState(null);
  const [cart, setCart] = useState([]);
  const [deliveryType, setDeliveryType] = useState('delivery');

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToHome = () => setCurrentPage('home');
  const navigateToOnboarding = () => setCurrentPage('onboarding');
  const navigateToSignup = () => setCurrentPage('signup');
  const navigateToMenu = () => setCurrentPage('menu');
  const navigateToMyOrders = () => setCurrentPage('myOrders');
  const navigateToOrderSummary = () => setCurrentPage('orderSummary');
  const navigateToDeliveryDetails = () => setCurrentPage('deliveryDetails');
  const navigateToPayment = () => setCurrentPage('payment');
  const navigateToSuccess = () => setCurrentPage('success');
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
          onAccountClick={navigateToPayment}
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
          onAccountClick={navigateToPayment}
          onAddToCart={addToCart}
        />
      )}
      {currentPage === 'foodDetail' && selectedFood && (
        <FoodDetail
          food={selectedFood}
          onClose={navigateToMenu}
          onLoginClick={navigateToLogin}
          onMyOrdersClick={navigateToMyOrders}
          onAccountClick={navigateToPayment}
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
          onAccountClick={navigateToPayment}
          onProceedToSummary={navigateToOrderSummary}
          cartItems={cart}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
        />
      )}
      {currentPage === 'orderSummary' && (
        <OrderSummary
          cartItems={cart}
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onAccountClick={navigateToPayment}
          onBackToCart={navigateToMyOrders}
          onProceedToDelivery={navigateToDeliveryDetails}
          onProceedToPayment={navigateToPayment}
        />
      )}
      {currentPage === 'deliveryDetails' && (
        <DeliveryDetails
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onAccountClick={navigateToPayment}
          onBackToSummary={navigateToOrderSummary}
          onProceedToPayment={navigateToPayment}
        />
      )}
      {currentPage === 'payment' && (
        <Payment
          cartItems={cart}
          deliveryType={deliveryType}
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onAccountClick={navigateToPayment}
          onBackToDelivery={navigateToDeliveryDetails}
          onPaymentSuccess={navigateToSuccess}
        />
      )}
      {currentPage === 'success' && (
        <Success
          onLoginClick={navigateToLogin}
          onHomeClick={navigateToHome}
          onExploreClick={navigateToMenu}
          onMyOrdersClick={navigateToMyOrders}
          onAccountClick={navigateToPayment}
          onTrackOrder={() => alert('Order tracking feature coming soon!')}
        />
      )}
    </div>
  );
}

export default App;
