import React from 'react';

const Footer = ({ onHomeClick, onExploreClick, onMyOrdersClick, onAccountClick }) => {
    return (
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
    );
};

export default Footer;
