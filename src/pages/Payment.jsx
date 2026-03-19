import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Payment = ({ cartItems, deliveryType = 'delivery', onLoginClick, onHomeClick, onExploreClick, onBackToDelivery, onAccountClick, onPaymentSuccess }) => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [saveCard, setSaveCard] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePay = () => {
        setIsLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsLoading(false);
            if (onPaymentSuccess) {
                onPaymentSuccess();
            }
        }, 3000);
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = deliveryType === 'pickup' ? 0 : 500;
    const serviceFee = 200;
    const total = subtotal + deliveryFee + serviceFee;

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter relative">
            {/* Loader Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <div className="radial-loader">
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                    </div>
                </div>
            )}

            {/* Top Navigation */}
            <Header
                activePage="account"
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onBackToDelivery}
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

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

                    <button
                        onClick={handlePay}
                        disabled={isLoading}
                        className={`w-full bg-chuks-orange text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95 mb-6 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}`}
                    >
                        {isLoading ? 'Processing...' : `Pay ₦${total.toLocaleString()}`}
                    </button>

                    <p className="text-xs text-gray-400 text-center leading-relaxed max-w-lg mx-auto">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                </div>
            </main>

            {/* Footer Section */}
            <Footer
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onBackToDelivery}
                onAccountClick={onAccountClick}
            />
        </div>
    );
};

export default Payment;
