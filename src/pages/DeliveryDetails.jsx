import React, { useState } from 'react';

const DeliveryDetails = ({ onLoginClick, onHomeClick, onExploreClick, onBackToSummary, onProceedToPayment, onAccountClick }) => {
    const [deliveryTime, setDeliveryTime] = useState('ASAP(30-25)');
    const [instructions, setInstructions] = useState('');
    const [contactAddress, setContactAddress] = useState('+234 801 234 5678');

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
                        <button onClick={onBackToSummary} className="text-chuks-orange">My Orders</button>
                        <button onClick={onAccountClick} className="hover:text-chuks-orange transition-colors">Account</button>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onLoginClick}
                        className="hidden md:block bg-chuks-orange text-white px-8 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all shadow-md active:scale-95"
                    >
                        Login
                    </button>
                    <button className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-3xl mx-auto w-full px-6 py-12 flex flex-col">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-50">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Delivery Details</h2>

                    {/* Address Box */}
                    <div className="border border-gray-100 rounded-2xl p-6 mb-8 flex justify-between items-start">
                        <div>
                            <p className="font-bold text-gray-800">Home: <span className="font-normal text-gray-600">123 Main Street, Victoria Island, Lagos</span></p>
                            <p className="text-gray-600">Apt 4B, Opposite Mega Plaza</p>
                        </div>
                        <button className="text-blue-500 text-sm font-medium hover:underline">Change Address</button>
                    </div>

                    {/* Delivery Time */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery Time</h3>
                        <input
                            type="text"
                            value={deliveryTime}
                            onChange={(e) => setDeliveryTime(e.target.value)}
                            placeholder="ASAP(30-25)"
                            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                        />
                    </div>

                    {/* Delivery Instructions */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery Instructions (Optional)</h3>
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="E.g leave at the front of the door, knock twice.............."
                            rows={3}
                            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-sm text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:border-chuks-orange transition-colors"
                        />
                    </div>

                    {/* Contact Address (Phone) */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Address</h3>
                        <input
                            type="text"
                            value={contactAddress}
                            onChange={(e) => setContactAddress(e.target.value)}
                            placeholder="+234 801 234 5678"
                            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                        />
                    </div>

                    <button
                        onClick={onProceedToPayment}
                        className="w-full bg-chuks-orange text-white py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                    >
                        Proceed to Payment
                    </button>
                </div>
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
                            <li><button onClick={onBackToSummary} className="hover:text-white transition-colors">My Order</button></li>
                            <li><button onClick={onAccountClick} className="hover:text-white transition-colors">Account</button></li>
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

export default DeliveryDetails;
