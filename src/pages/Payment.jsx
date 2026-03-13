import React, { useState } from 'react';

const Payment = ({ cartItems, onLoginClick, onHomeClick, onExploreClick, onBackToDelivery }) => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [saveCard, setSaveCard] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = 500; // Assuming standard delivery fee from summary
    const serviceFee = 200;
    const total = subtotal + deliveryFee + serviceFee;

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
                        <button onClick={onBackToDelivery} className="text-chuks-orange">My Orders</button>
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
            <main className="max-w-3xl mx-auto w-full px-6 py-12 flex flex-col">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-50">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment</h2>

                    {/* Payment Methods */}
                    <div className="mb-8">
                        <p className="font-bold text-gray-800 mb-4">Pay With:</p>
                        <div className="flex gap-12">
                            <label className="flex items-center cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={() => setPaymentMethod('card')}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'card' ? 'border-chuks-orange' : 'border-gray-300'}`}>
                                        {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-chuks-orange"></div>}
                                    </div>
                                </div>
                                <span className={`ml-3 text-sm font-medium transition-colors ${paymentMethod === 'card' ? 'text-gray-900' : 'text-gray-400'}`}>Card</span>
                            </label>

                            <label className="flex items-center cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="bank"
                                        checked={paymentMethod === 'bank'}
                                        onChange={() => setPaymentMethod('bank')}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'bank' ? 'border-chuks-orange' : 'border-gray-300'}`}>
                                        {paymentMethod === 'bank' && <div className="w-2.5 h-2.5 rounded-full bg-chuks-orange"></div>}
                                    </div>
                                </div>
                                <span className={`ml-3 text-sm font-medium transition-colors ${paymentMethod === 'bank' ? 'text-gray-900' : 'text-gray-400'}`}>Bank</span>
                            </label>

                            <label className="flex items-center cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="transfer"
                                        checked={paymentMethod === 'transfer'}
                                        onChange={() => setPaymentMethod('transfer')}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'transfer' ? 'border-chuks-orange' : 'border-gray-300'}`}>
                                        {paymentMethod === 'transfer' && <div className="w-2.5 h-2.5 rounded-full bg-chuks-orange"></div>}
                                    </div>
                                </div>
                                <span className={`ml-3 text-sm font-medium transition-colors ${paymentMethod === 'transfer' ? 'text-gray-900' : 'text-gray-400'}`}>Transfer</span>
                            </label>
                        </div>
                    </div>

                    {/* Card Form */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">Card Number</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="1234 5678 9101 1121"
                                className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                            />
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-800 mb-2">Expiration Date</label>
                                <input
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YY"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-800 mb-2">CVV</label>
                                <input
                                    type="text"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="123"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                                />
                            </div>
                        </div>

                        <label className="flex items-center cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={saveCard}
                                    onChange={() => setSaveCard(!saveCard)}
                                    className="sr-only"
                                />
                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${saveCard ? 'bg-chuks-orange border-chuks-orange' : 'border-gray-300'}`}>
                                    {saveCard && (
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span className="ml-3 text-sm text-gray-400">Save card details</span>
                        </label>
                    </div>

                    <button className="w-full bg-chuks-orange text-white py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95 mb-6">
                        Pay ₦{total.toLocaleString()}
                    </button>

                    <p className="text-xs text-gray-400 text-center leading-relaxed max-w-lg mx-auto">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
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
                            <li><button onClick={onBackToDelivery} className="hover:text-white transition-colors">My Order</button></li>
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

export default Payment;
