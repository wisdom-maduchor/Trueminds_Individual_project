import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Success = ({ onLoginClick, onHomeClick, onTrackOrder, onExploreClick, onMyOrdersClick, onAccountClick }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        // Generate random order ID
        const generateOrderId = () => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let id = '';
            for (let i = 0; i < 13; i++) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        };
        setOrderNumber(generateOrderId());

        const timer = setTimeout(() => setShowConfetti(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Pre-compute particle positions using polar coordinates
    const particles = [
        { shape: 'square', color: '#3B82F6' },
        { shape: 'arc-up', color: '#EC4899' },
        { shape: 'star', color: '#FBBF24' },
        { shape: 'dot', color: '#22C55E' },
        { shape: 'arc-down', color: '#60A5FA' },
        { shape: 'square', color: '#F97316' },
        { shape: 'star', color: '#F472B6' },
        { shape: 'arc-up', color: '#4ADE80' },
        { shape: 'dot', color: '#FACC15' },
        { shape: 'square', color: '#818CF8' },
        { shape: 'dot', color: '#FB7185' },
        { shape: 'arc-down', color: '#FB923C' },
        { shape: 'star', color: '#34D399' },
        { shape: 'dot', color: '#22D3EE' },
        { shape: 'square', color: '#FDE047' },
        { shape: 'arc-up', color: '#A855F7' },
    ].map((p, i, arr) => {
        const angle = (i / arr.length) * 2 * Math.PI;
        const dist = 85 + (i % 3) * 10;
        return {
            ...p,
            tx: Math.cos(angle) * dist,
            ty: Math.sin(angle) * dist,
            delay: i * 0.04,
        };
    });

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <Header
                activePage=""
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onMyOrdersClick}
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

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
                    <p className="text-gray-600 mb-0 text-sm">
                        Your delicious Lilian's Kitchen meal is on its way!
                    </p>

                    {/* Central Animation Area */}
                    <div className="relative mb-12 flex items-center justify-center" style={{ width: '240px', height: '240px', margin: '0 auto' }}>

                        {/* Winner burst particles */}
                        {showConfetti && particles.map((p, i) => (
                            <div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    '--tx': `${p.tx}px`,
                                    '--ty': `${p.ty}px`,
                                    animation: 'burst-out 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
                                    animationDelay: `${p.delay}s`,
                                    zIndex: 20,
                                }}
                            >
                                {p.shape === 'star' && (
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill={p.color}>
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                )}
                                {p.shape === 'dot' && (
                                    <div style={{ width: '10px', height: '10px', background: p.color, borderRadius: '50%' }} />
                                )}
                                {p.shape === 'square' && (
                                    <div style={{ width: '11px', height: '11px', background: p.color, borderRadius: '2px', transform: `rotate(${i * 25}deg)` }} />
                                )}
                                {p.shape === 'arc-up' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="3" strokeLinecap="round">
                                        <path d="M3 17 Q12 3 21 17" />
                                    </svg>
                                )}
                                {p.shape === 'arc-down' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="3" strokeLinecap="round">
                                        <path d="M3 7 Q12 21 21 7" />
                                    </svg>
                                )}
                            </div>
                        ))}

                        {/* The Large Green Circle */}
                        <div className="w-32 h-32 bg-[#2DCB73] rounded-full flex items-center justify-center relative shadow-xl animate-checkmark" style={{ zIndex: 10 }}>
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        {/* Pulsing ring */}
                        <div className="absolute w-40 h-40 bg-green-400/20 rounded-full animate-ping" style={{ zIndex: 5 }}></div>
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
            <Footer
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onMyOrdersClick}
                onAccountClick={onAccountClick}
            />
        </div>
    );
};

export default Success;
