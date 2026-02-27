import React, { useState } from 'react';
import onboardingImg from '../assets/on-bording/onboarding-img.svg';

const Login = ({ onBackClick, onSignupClick }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-[#F5F7FA] font-inter">
            {/* Top Section - Split Screen */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Left Side - Image with Orange Overlay */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                    <img
                        src={onboardingImg}
                        alt="Authentic Nigerian food"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#FF7A1B]/70 flex flex-col items-center justify-center text-white px-12 text-center">
                        <h1 className="text-5xl font-pacifico mb-8">Chuks Kitchen</h1>
                        <p className="text-xl max-w-sm leading-relaxed">
                            Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
                        </p>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-16 py-8 md:py-12 bg-[#F5F7FA]">
                    <div className="w-full max-w-md rounded-2xl">
                        <div className="text-center mb-3">
                            <h1 className="text-2xl font-pacifico text-chuks-orange mb-2">Chuks Kitchen</h1>
                            <h2 className="text-2xl font-bold text-gray-900">Login your Account</h2>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email or phone number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="name@gmail.com"
                                        className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-chuks-orange focus:border-chuks-orange transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="******"
                                        className="block w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-chuks-orange focus:border-chuks-orange transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                    >
                                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-end mt-2">
                                    <a href="#" className="text-xs text-blue-500 hover:underline">Forgot Password?</a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 mb-0 bg-chuks-orange text-white rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
                            >
                                Continue
                            </button>

                            <div className="relative flex items-center justify-center my-4">
                                <div className="flex-grow border-t border-gray-200"></div>
                                <span className="flex-shrink mx-4 text-gray-400 text-xs font-medium">Or continue with</span>
                                <div className="flex-grow border-t border-gray-200"></div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center py-4 px-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                                >
                                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-3" />
                                    Continue with Google
                                </button>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center py-4 px-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                                >
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.75.9-.01 2.1-.82 3.56-.67 1.34.14 2.1 0 2.8 1.05-3.35 2.1-2.5 7.1.81 8.35-.61 1.58-1.5 3.05-2.25 3.49zm-1.85-13.43c-.05 1.55-1.6 3.01-2.99 3.12-.21-1.74 1.12-3.22 2.65-3.48.15.02.26.11.34.36z" />
                                    </svg>
                                    Continue with Apple
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 text-center text-xs text-gray-500">
                            Don't have an account? <button onClick={onSignupClick} className="text-blue-500 hover:underline font-medium">Create an account</button>
                        </div>
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

export default Login;
