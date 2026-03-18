import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderSummary = ({ cartItems, deliveryType, setDeliveryType, onLoginClick, onHomeClick, onExploreClick, onBackToCart, onProceedToDelivery, onProceedToPayment, onAccountClick }) => {
    const [promoCode, setPromoCode] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = deliveryType === 'delivery' ? 500 : 0;
    const serviceFee = 200;
    const tax = 0;
    const total = subtotal + deliveryFee + serviceFee + tax;

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <Header
                activePage="myOrders"
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onBackToCart}
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

            {/* Main Content Area */}
            <main className="max-w-3xl mx-auto w-full px-6 py-12 flex flex-col">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-50">
                    <div className="flex items-center gap-4 mb-8">
                        <button onClick={onBackToCart} className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-3xl font-bold text-gray-900">Order Summary</h2>
                    </div>

                    <div className="border-t border-gray-100 pt-8 mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Add a Promo Code</h3>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                placeholder="Enter Code here"
                                className="flex-1 border border-gray-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                            />
                            <button className="bg-chuks-orange text-white px-12 py-4 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-md active:scale-95">
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8 text-gray-600">
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span>Subtotal</span>
                            <span>₦{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span>Delivery Fee</span>
                            <span>₦{deliveryFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span>Service Fee</span>
                            <span>₦{serviceFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium border-b border-gray-100 pb-4">
                            <span>Tax</span>
                            <span>₦{tax.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <span className="text-2xl font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-gray-900">₦{total.toLocaleString()}</span>
                    </div>

                    {/* Delivery/Pick up Toggle */}
                    <div className="flex bg-gray-200 rounded-xl p-1 mb-8">
                        <button
                            onClick={() => setDeliveryType('delivery')}
                            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${deliveryType === 'delivery' ? 'bg-chuks-orange text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Delivery
                        </button>
                        <button
                            onClick={() => setDeliveryType('pickup')}
                            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${deliveryType === 'pickup' ? 'bg-chuks-orange text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Pick up
                        </button>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Special Instructions for Restaurant</h3>
                        <textarea
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhh&#10;food is tasty"
                            rows={4}
                            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-sm text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:border-chuks-orange transition-colors"
                        />
                    </div>

                    <button
                        onClick={() => deliveryType === 'pickup' ? onProceedToPayment() : onProceedToDelivery()}
                        className="w-full bg-chuks-orange text-white py-5 rounded-xl font-bold text-base hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </main>

            {/* Footer Section */}
            <Footer
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onBackToCart}
                onAccountClick={onAccountClick}
            />
        </div>
    );
};

export default OrderSummary;
