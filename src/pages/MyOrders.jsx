import React, { useState } from 'react';
import jollofChickenImg from '../assets/menu/jollof rice and chicken.svg';
import ebaEgusiImg from '../assets/menu/eba & egusi.svg';
import pepperedSnailImg from '../assets/menu/peppered snail.svg';

const MyOrders = ({ onLoginClick, onHomeClick, onExploreClick, cartItems, onUpdateQuantity, onRemoveItem }) => {

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <header className="bg-white px-6 md:px-24 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-100">
                <div className="flex items-center space-x-12">
                    <h1
                        className="text-2xl font-pacifico text-chuks-orange cursor-pointer"
                        onClick={onHomeClick}
                    >
                        Chuks Kitchen
                    </h1>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <button onClick={onHomeClick} className="hover:text-chuks-orange transition-colors">Home</button>
                        <button onClick={onExploreClick} className="hover:text-chuks-orange transition-colors">Explore</button>
                        <button className="text-chuks-orange">My Orders</button>
                        <button className="hover:text-chuks-orange transition-colors">Account</button>
                    </nav>
                </div>
                <button
                    onClick={onLoginClick}
                    className="bg-chuks-orange text-white px-8 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all shadow-md active:scale-95"
                >
                    Login
                </button>
            </header>

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
                <button
                    onClick={onExploreClick}
                    className="flex items-center text-blue-500 font-medium hover:underline text-sm"
                >
                    <span className="mr-2 text-xl">+</span> Add more items from Chuks Kitchen
                </button>
            </main>

            {/* Footer Section */}
            <footer className="bg-dark-brown text-white py-20 px-6 md:px-24 mt-auto">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div>
                        <h2 className="text-2xl font-pacifico text-chuks-orange mb-8">Chuks Kitchen</h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-8">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><button onClick={onHomeClick} className="hover:text-white transition-colors">Home</button></li>
                            <li><button onClick={onExploreClick} className="hover:text-white transition-colors">Explore</button></li>
                            <li><button className="hover:text-white transition-colors">My Order</button></li>
                            <li><button className="hover:text-white transition-colors">Account</button></li>
                            <li><button className="hover:text-white transition-colors">Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-8">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>+234 801 234 5678</li>
                            <li>hello@chukskitchen.com</li>
                            <li>123 Taste Blvd, Lagos, Nigeria.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-8">Follow Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600">© 2020 Lift Media. All rights reserved.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default MyOrders;
