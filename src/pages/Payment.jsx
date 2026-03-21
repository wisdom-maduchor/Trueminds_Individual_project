import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Payment = ({ cartItems, deliveryType = 'delivery', onLoginClick, onHomeClick, onExploreClick, onBackToDelivery, onAccountClick, onPaymentSuccess }) => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isLoading, setIsLoading] = useState(false);

    // Card state
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [saveCard, setSaveCard] = useState(false);

    // Bank state
    const [selectedBank, setSelectedBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const handlePay = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (onPaymentSuccess) onPaymentSuccess();
        }, 3000);
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = deliveryType === 'pickup' ? 0 : 500;
    const serviceFee = 200;
    const total = subtotal + deliveryFee + serviceFee;

    const banks = [
        'Access Bank', 'First Bank of Nigeria', 'Guaranty Trust Bank (GTB)',
        'United Bank for Africa (UBA)', 'Zenith Bank', 'Sterling Bank',
        'Polaris Bank', 'Fidelity Bank', 'Union Bank', 'Ecobank',
        'Kuda Bank', 'Opay', 'Palmpay',
    ];

    // Simulated transfer details
    const transferDetails = {
        bankName: 'Zenith Bank',
        accountNumber: '1234567890',
        accountName: "Lilian's Kitchen Ltd",
        amount: `₦${total.toLocaleString()}`,
    };

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

                    {/* Payment Method Tabs */}
                    <div className="mb-8">
                        <p className="font-bold text-gray-800 mb-4">Pay With:</p>
                        <div className="flex gap-3">
                            {['card', 'bank', 'transfer'].map((method) => (
                                <button
                                    key={method}
                                    onClick={() => setPaymentMethod(method)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${paymentMethod === method
                                            ? 'bg-chuks-orange text-white border-chuks-orange shadow-md'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-chuks-orange hover:text-chuks-orange'
                                        }`}
                                >
                                    {method === 'card' && '💳  Card'}
                                    {method === 'bank' && '🏦  Bank'}
                                    {method === 'transfer' && '📲  Transfer'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── CARD FORM ── */}
                    {paymentMethod === 'card' && (
                        <div className="space-y-6 mb-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Card Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        placeholder="1234 5678 9101 1121"
                                        maxLength={19}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-4 pr-12 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-60">
                                        <svg viewBox="0 0 38 24" width="28" height="18"><rect width="38" height="24" rx="4" fill="#1565C0" /><circle cx="15" cy="12" r="7" fill="#E53935" opacity=".9" /><circle cx="23" cy="12" r="7" fill="#FFB300" opacity=".85" /></svg>
                                        <svg viewBox="0 0 38 24" width="28" height="18"><rect width="38" height="24" rx="4" fill="#1A1F71" /><text x="50%" y="17" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="Arial">VISA</text></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-800 mb-2">Expiration Date</label>
                                    <input
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        placeholder="MM / YY"
                                        maxLength={5}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-bold text-gray-800 mb-2">CVV</label>
                                    <input
                                        type="password"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        placeholder="•••"
                                        maxLength={4}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors"
                                    />
                                </div>
                            </div>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <div
                                    onClick={() => setSaveCard(!saveCard)}
                                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${saveCard ? 'bg-chuks-orange border-chuks-orange' : 'border-gray-300'}`}
                                >
                                    {saveCard && (
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm text-gray-500">Save card details for future payments</span>
                            </label>
                        </div>
                    )}

                    {/* ── BANK FORM ── */}
                    {paymentMethod === 'bank' && (
                        <div className="space-y-6 mb-8">
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
                                <p className="font-semibold mb-1">💡 Bank Debit (Direct Debit)</p>
                                <p className="text-blue-600">Select your bank and provide your account number to authorise a direct debit of <span className="font-bold">₦{total.toLocaleString()}</span> from your account.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Select Bank</label>
                                <div className="relative">
                                    <select
                                        value={selectedBank}
                                        onChange={(e) => setSelectedBank(e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors appearance-none bg-white cursor-pointer"
                                    >
                                        <option value="">-- Choose your bank --</option>
                                        {banks.map((bank) => (
                                            <option key={bank} value={bank}>{bank}</option>
                                        ))}
                                    </select>
                                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Account Number</label>
                                <input
                                    type="text"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    placeholder="10-digit NUBAN account number"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-chuks-orange transition-colors tracking-widest"
                                />
                                {accountNumber.length === 10 && selectedBank && (
                                    <p className="text-xs text-green-600 mt-2 font-medium">✓ Account verified with {selectedBank}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ── TRANSFER DETAILS ── */}
                    {paymentMethod === 'transfer' && (
                        <div className="space-y-4 mb-8">
                            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 text-sm text-orange-700">
                                <p className="font-semibold mb-1">📲 Bank Transfer</p>
                                <p className="text-orange-600">Transfer the exact amount below to the account details provided. Your order will be confirmed once payment is received.</p>
                            </div>

                            <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                {[
                                    { label: 'Bank Name', value: transferDetails.bankName },
                                    { label: 'Account Number', value: transferDetails.accountNumber, mono: true },
                                    { label: 'Account Name', value: transferDetails.accountName },
                                    { label: 'Amount', value: transferDetails.amount, highlight: true },
                                ].map(({ label, value, mono, highlight }) => (
                                    <div key={label} className="flex justify-between items-center px-5 py-4 border-b border-gray-50 last:border-b-0">
                                        <span className="text-sm text-gray-500">{label}</span>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm font-bold ${highlight ? 'text-chuks-orange text-base' : 'text-gray-900'} ${mono ? 'tracking-widest font-mono' : ''}`}>{value}</span>
                                            {mono && (
                                                <button
                                                    onClick={() => navigator.clipboard.writeText(value)}
                                                    className="text-xs text-blue-500 hover:text-blue-700 font-medium border border-blue-200 rounded-md px-2 py-0.5 transition-colors"
                                                >
                                                    Copy
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs text-gray-400 text-center">
                                ⏱ Transfer expires in <span className="font-semibold text-gray-600">30 minutes</span>. Please complete your transfer before it expires.
                            </p>
                        </div>
                    )}

                    {/* Pay Button */}
                    <button
                        onClick={handlePay}
                        disabled={isLoading}
                        className={`w-full bg-chuks-orange text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95 mb-6 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}`}
                    >
                        {isLoading ? 'Processing...' : paymentMethod === 'transfer' ? `I've Sent ₦${total.toLocaleString()}` : `Pay ₦${total.toLocaleString()}`}
                    </button>

                    <p className="text-xs text-gray-400 text-center leading-relaxed max-w-lg mx-auto">
                        🔒 Your payment is secured with 256-bit encryption. Your personal data will be used solely to process your order.
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
