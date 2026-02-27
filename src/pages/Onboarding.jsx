import React from 'react';
import onboardingImg from '../assets/on-bording/onboarding-img.svg';
import cutleryIcon from '../assets/on-bording/cutlery-icon.svg';
import logisticsIcon from '../assets/on-bording/logistics.svg';

const Onboarding = ({ onStartOrder, onSignIn }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white font-inter">
            {/* Top Section - Split Screen */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                        src={onboardingImg}
                        alt="Authentic Nigerian food"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 flex flex-col px-6 md:px-16 py-8 md:py-12 relative">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-16">
                        <h1 className="text-2xl font-pacifico text-chuks-orange">Chuks Kitchen</h1>
                        <button
                            onClick={onSignIn}
                            className="px-6 py-2 border border-blue-400 text-blue-500 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Main Text Content */}
                    <div className="max-w mt-30">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Authentic Taste of Nigeria
                        </h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Experience homemade flavors delivered fresh to your desk or home. We
                            bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>

                        {/* Features */}
                        <div className="space-y-6 mb-12">
                            <div className="flex space-x-20">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <img src={cutleryIcon} alt="Freshly Prepared" className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Freshly Prepared</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <img src={cutleryIcon} alt="Support Local Business" className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Support Local Business</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-orange-100 rounded-lg">
                                    <img src={logisticsIcon} alt="Fast & Reliable Delivery" className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 font-medium">Fast & Reliable Delivery</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={onStartOrder}
                                className="w-full py-4 bg-chuks-orange text-white rounded-md font-semibold text-lg hover:bg-orange-600 transition-colors"
                            >
                                Start Your Order
                            </button>
                            <button className="w-full py-4 border border-blue-400 text-blue-500 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors">
                                Learn More About Us
                            </button>
                        </div>
                    </div>

                    {/* Right Column Bottom Links */}
                    <div className="absolute bottom-8 left-6 md:left-16 flex items-center space-x-4 text-xs text-gray-400 ml-30 mb-12">
                        <span>© 2024 Chuks Kitchen.</span>
                        <a href="#" className="hover:text-gray-600 text-blue-600">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600 text-blue-600">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Main Footer Section */}
            <footer className="bg-dark-brown text-white py-16 px-6 md:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="col-span-1">
                        <h2 className="text-2xl font-pacifico text-chuks-orange mb-6">Chuks Kitchen</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Bringing the authentic <br /> flavors of Nigerian <br /> home cooking to your <br /> table, with passion <br /> and care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">My Order</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>+234 801 234 5678</li>
                            <li>hello@chukskitchen.com</li>
                            <li>123 Taste Blvd, Lagos, Nigeria.</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-span-1">
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 flex justify-between items-center">
                    <p className="text-xs text-gray-500">© 2020 Lift Media. All rights reserved.</p>
                    <button className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Onboarding;
