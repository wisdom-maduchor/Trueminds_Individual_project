import React from 'react';
import homeHero from '../assets/Home-images/Home screen.svg';
import amalaImg from '../assets/menu/Amala eith gbegiri and ewedu.svg';
import ebaEgusiImg from '../assets/menu/eba & egusi.svg';
import fufuOkraImg from '../assets/menu/fufu and okra soup.svg';
import grilledTilapiaImg from '../assets/menu/grilled tilapia.svg';
import jollofSmokedFishImg from '../assets/menu/jollof and smaoked fish.svg';
import jollofChickenImg from '../assets/menu/jollof rice and chicken.svg';
import pepperedSnailImg from '../assets/menu/peppered snail.svg';
import poundedYamEdikImg from '../assets/menu/pounded yam & edikiakong.svg';

const Menu = ({ onLoginClick }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <header className="bg-white px-6 md:px-24 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-100">
                <div className="flex items-center space-x-12">
                    <h1 className="text-2xl font-pacifico text-chuks-orange">Chuks Kitchen</h1>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-chuks-orange transition-colors">Home</a>
                        <a href="#" className="text-chuks-orange">Explore</a>
                        <a href="#" className="hover:text-chuks-orange transition-colors">My Orders</a>
                        <a href="#" className="hover:text-chuks-orange transition-colors">Account</a>
                    </nav>
                </div>
                <button
                    onClick={onLoginClick}
                    className="bg-chuks-orange text-white px-8 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all shadow-md active:scale-95"
                >
                    Login
                </button>
            </header>

            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                <img src={homeHero} alt="Menu Hero" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end px-6 md:px-24 pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                        Chuks Kitchen
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 font-light">
                        Chuks Kitchen Nigerian Home Cooking 4.8 (12k)
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto w-full px-6 md:px-24 py-12 flex flex-col md:flex-row gap-10">

                {/* Sidebar Categories */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-28 border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 px-4">Menu Categories</h3>
                        <ul className="space-y-1">
                            <li>
                                <button className="w-full text-left px-4 py-3 rounded-xl bg-orange-100 text-chuks-orange font-bold text-sm">
                                    Popular
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors">
                                    Jollof Rice & Entrees
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors">
                                    Swallow & Soups
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors">
                                    Grills & sides
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors">
                                    Beverages
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors">
                                    Desserts
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Menu Items Grid */}
                <div className="flex-1">
                    {/* Section: Popular */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Popular</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={jollofChickenImg} alt="Jollof Rice & Fried Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Jollof Rice & Fried Chicken</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Our signature Jollof rice, served with crispy fried chicken and plantain.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={ebaEgusiImg} alt="Eba & Egusi Soup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Eba & Egusi Soup (Goat Meat)</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Hearty Egusi soup with tender goat meat, served with soft Eba.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={poundedYamEdikImg} alt="Pounded Yam & Edikaikong" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Pounded Yam & Edikaikong</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Traditional pounded yam with rich, leafy Edikaikong soup.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N4,200</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={pepperedSnailImg} alt="Peppered Snail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Peppered Snail</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Spicy and savory peppered snail, perfect as a starter.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N7,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={grilledTilapiaImg} alt="Grilled Tilapia Fish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Grilled Tilapia Fish</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Whole grilled tilapia seasoned with our special spices.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N8,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={jollofChickenImg} alt="Jollof Rice & Fried Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Jollof Rice & Fried Chicken</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Our signature Jollof rice, served with crispy fried chicken and plantain.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Jollof Rice & Entrees */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Jollof Rice & Entrees</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={jollofSmokedFishImg} alt="Jollof Rice & Smoked Fish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Jollof Rice & Smoked Fish</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Flavorful jollof rice served with perfectly smoked fish.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N4,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={jollofChickenImg} alt="Party Jollof Rice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Party Jollof Rice (Veg)</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Vegetarian party jollof, full of rich flavors.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,000</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={jollofChickenImg} alt="Party Jollof Rice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Party Jollof Rice (Veg)</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Vegetarian party jollof, full of rich flavors.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,000</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Swallow & Soups */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Swallow & Soups</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={amalaImg} alt="Amala with Gbegiri" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Amala with Gbegiri & Ewedu</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Classic Amala served with Gbegiri, Ewedu and assorted meats.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={fufuOkraImg} alt="Fufu & Okra Soup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Fufu & Okra Soup (Fish)</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Light Fufu served with fresh Okra soup and tilapia fish.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group">
                                <div className="h-40 overflow-hidden rounded-2xl mb-4">
                                    <img src={fufuOkraImg} alt="Fufu & Okra Soup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Fufu & Okra Soup (Fish)</h4>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">Light Fufu served with fresh Okra soup and tilapia fish.</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="font-bold text-chuks-orange">N3,500</span>
                                    <button className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
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
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">My Order</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
                    <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Menu;
