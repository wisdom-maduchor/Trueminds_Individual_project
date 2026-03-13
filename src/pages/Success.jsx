import React, { useEffect, useState } from 'react';

const Success = ({ onLoginClick, onHomeClick, onTrackOrder, onExploreClick, onMyOrdersClick, onAccountClick }) => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const orderNumber = "123RGR231567Y";

    // Confetti pieces matching the image (stars, circles, squiggles)
    const confettiParticles = [
        { type: 'star', x: -60, y: -40, color: 'text-blue-400', rotate: 'rotate-12' },
        { type: 'circle', x: 50, y: -60, color: 'text-green-400', size: 'w-3 h-3' },
        { type: 'squiggle', x: -80, y: 10, color: 'text-pink-400', rotate: 'rotate-45' },
        { type: 'star', x: 70, y: -20, color: 'text-yellow-400', rotate: '-rotate-12' },
        { type: 'circle', x: -40, y: 70, color: 'text-green-300', size: 'w-2 h-2' },
        { type: 'squiggle', x: 60, y: 50, color: 'text-pink-300', rotate: '-rotate-45' },
        { type: 'circle', x: -10, y: -90, color: 'text-blue-300', size: 'w-4 h-4' },
        { type: 'star', x: -90, y: -70, color: 'text-yellow-300', rotate: 'rotate-90' },
    ];

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
                        <button onClick={onMyOrdersClick} className="hover:text-chuks-orange transition-colors">My Orders</button>
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
            <main className="flex-1 flex flex-col items-center py-16 px-6">
                <div className="max-w-md w-full text-center">

                    {/* Top Checkmark Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-[#167D45] rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
                    <p className="text-gray-600 mb-10 text-sm">
                        Your delicious Chuks Kitchen meal is on its way!
                    </p>

                    {/* Central Animation Area */}
                    <div className="relative mb-12 flex items-center justify-center">
                        {/* The Large Green Circle from Image */}
                        <div className="w-32 h-32 bg-[#2DCB73] rounded-full flex items-center justify-center relative z-10 shadow-xl animate-checkmark">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        {/* Confetti / Decorative Shapes */}
                        {showConfetti && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                {confettiParticles.map((p, i) => (
                                    <div
                                        key={i}
                                        className={`absolute ${p.color} transition-all duration-1000 animate-confetti`}
                                        style={{
                                            '--tw-translate-x': `${p.x}px`,
                                            '--tw-translate-y': `${p.y}px`,
                                            left: '50%',
                                            top: '50%'
                                        }}
                                    >
                                        {p.type === 'star' && (
                                            <svg className={`w-4 h-4 ${p.rotate}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        )}
                                        {p.type === 'circle' && (
                                            <div className={`${p.size} rounded-full bg-current`} />
                                        )}
                                        {p.type === 'squiggle' && (
                                            <svg className={`w-5 h-5 ${p.rotate}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Light Green Pulse Background */}
                        <div className="absolute w-40 h-40 bg-green-500/10 rounded-full animate-ping opacity-20"></div>
                    </div>

                    <p className="text-xl font-bold text-gray-900 mb-8">
                        Order #{orderNumber} Confirmed
                    </p>

                    <div className="space-y-6 w-full flex flex-col items-center">
                        <button
                            onClick={onTrackOrder}
                            className="w-full bg-[#FF7A1B] text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            Track Order
                        </button>

                        <button className="text-gray-400 font-semibold text-base hover:text-gray-600 transition-colors">
                            Generate Receipt
                        </button>

                        <button
                            onClick={onHomeClick}
                            className="text-[#3182CE] font-medium hover:underline text-base mt-2"
                        >
                            Need help with your order?
                        </button>
                    </div>
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
                            <li><button onClick={onMyOrdersClick} className="hover:text-white transition-colors">My Order</button></li>
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

export default Success;
