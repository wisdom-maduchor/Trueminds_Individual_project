import React, { useState } from 'react';
import jollofChickenImg from '../assets/Menu/jollof rice and chicken.svg';
import ebaEgusiImg from '../assets/Menu/eba & egusi.svg';
import pepperedSnailImg from '../assets/Menu/peppered snail.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyOrders = ({ onLoginClick, onHomeClick, onExploreClick, cartItems, onUpdateQuantity, onRemoveItem, onProceedToSummary, onAccountClick }) => {

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <Header
                activePage="myOrders"
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={() => { }} // current page
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto w-full px-6 md:px-24 py-12 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h2>

                {/* Cart Items List */}
                <div className="space-y-4 mb-8">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between shadow-sm">
                            <div className="flex items-center space-x-6">
                                <div className="w-32 h-24 overflow-hidden rounded-lg">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-12">
                                {/* Quantity Controls */}
                                <div className="flex items-center space-x-6">
                                    <button
                                        onClick={() => onUpdateQuantity(item.cartId || item.id, 1)}
                                        className="bg-gray-100 p-1.5 rounded-md text-gray-400 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <span className="text-3xl font-bold text-gray-900">{item.quantity}</span>
                                    <button
                                        onClick={() => onUpdateQuantity(item.cartId || item.id, -1)}
                                        className="bg-gray-100 p-1.5 rounded-md text-gray-400 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Price */}
                                <span className="text-xl font-bold text-chuks-orange w-24 text-right">
                                    ₦{(item.price * item.quantity).toLocaleString()}
                                </span>

                                {/* Remove Button */}
                                <button
                                    onClick={() => onRemoveItem(item.cartId || item.id)}
                                    className="bg-chuks-orange p-1.5 rounded-md text-white hover:bg-orange-600 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add more items link */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-gray-100 pt-8 mt-4">
                    <button
                        onClick={onExploreClick}
                        className="flex items-center text-blue-500 font-medium hover:underline text-sm"
                    >
                        <span className="mr-2 text-xl">+</span> Add more items from Lilian's Kitchen
                    </button>

                    <div className="flex flex-col items-end gap-4">
                        <div className="flex items-center gap-8">
                            <span className="text-gray-500 font-medium">Subtotal</span>
                            <span className="text-3xl font-bold text-gray-900">
                                ₦{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString()}
                            </span>
                        </div>
                        <button
                            onClick={onProceedToSummary}
                            className="bg-chuks-orange text-white px-12 py-4 rounded-xl font-bold text-base hover:bg-orange-600 transition-all shadow-lg active:scale-95 whitespace-nowrap"
                        >
                            Proceed to Order Summary
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <Footer
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={() => { }}
                onAccountClick={onAccountClick}
            />
        </div>
    );
};

export default MyOrders;
