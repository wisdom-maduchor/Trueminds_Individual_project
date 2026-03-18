import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const DeliveryDetails = ({ onLoginClick, onHomeClick, onExploreClick, onBackToSummary, onProceedToPayment, onAccountClick }) => {
    const [deliveryTime, setDeliveryTime] = useState('ASAP(30-25)');
    const [instructions, setInstructions] = useState('');
    const [contactAddress, setContactAddress] = useState('+234 801 234 5678');

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <Header
                activePage="myOrders"
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onBackToSummary}
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

            {/* Main Content Area */}
            <main className="max-w-3xl mx-auto w-full px-6 py-12 flex flex-col">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-50">
                    <div className="flex items-center gap-4 mb-8">
                        <button onClick={onBackToSummary} className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-3xl font-bold text-gray-900">Delivery Details</h2>
                    </div>

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
            <Footer
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onBackToSummary}
                onAccountClick={onAccountClick}
            />
        </div>
    );
};

export default DeliveryDetails;
