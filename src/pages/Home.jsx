import React from 'react';
import homeHero from '../assets/Home-images/home-img.png';
import swallowImg from '../assets/Home-images/swallow.svg';
import grillsImg from '../assets/Home-images/grills.svg';
import sweetTreatsImg from '../assets/Home-images/sweet-treats.svg';
import jollofImg from '../assets/Home-images/joolof.svg';
import spicySoupImg from '../assets/Home-images/spicy-pepper-soup.svg';
import jollofFriedChickenImg from '../assets/Home-images/jollof-rice-chicken-fried.svg';
import egusiFufuImg from '../assets/Home-images/egusi-fufu.svg';
import ricePlantainImg from '../assets/Home-images/rice-plantain.svg';
import promoImg from '../assets/Home-images/home-img.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ onLoginClick, onExploreClick, onMyOrdersClick, onHomeClick, onAddToCart, onAccountClick }) => {
    const categories = [
        { name: 'Jollof Delights', img: jollofImg },
        { name: 'Swallow & Soups', img: swallowImg },
        { name: 'Grills & BBQ', img: grillsImg },
        { name: 'Sweet Treats', img: sweetTreatsImg },
        { name: 'Jollof Delights', img: jollofImg },
        { name: 'Jollof Delights', img: jollofImg },
    ];

    const specials = [
        { name: 'Spicy Tilapia Pepper Soup', price: 'N2,100', img: spicySoupImg, description: 'A flavorful, spicy soup with tender tilapia fish, a Nigerian delicacy.' },
        { name: 'Jollof Rice & Fried Chicken', price: 'N3,500', img: jollofFriedChickenImg, description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.' },
        { name: 'Jollof Rice & Fried Chicken', price: 'N3,500', img: jollofFriedChickenImg, description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.' },
        { name: 'Jollof Rice & Smoked Chicken', price: 'N4,200', img: swallowImg, description: 'Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.' },
        { name: 'Jollof Rice & Fried Chicken', price: 'N3,500', img: jollofFriedChickenImg, description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.' },
        { name: 'Egusi Soup & Pounded Yam', price: 'N3,200', img: egusiFufuImg, description: 'Rich and savory Egusi soup with succulent meat, paired with freshly pounded yam.' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-inter">
            {/* Top Navigation */}
            <Header
                activePage="home"
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onMyOrdersClick}
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

            {/* RapidBott Widget */}
            <script async defer src="https://app.rapidbott.cloud/js/widget/tqls2fmqekqy8e2z/float.js"></script>

            {/* Hero Section */}
            <section className="relative w-full h-[500px] overflow-hidden">
                <img src={homeHero} alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-24">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            The Heart of Nigerian Home Cooking
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light">
                            Handcrafted with passion, delivered with care.
                        </p>
                        <button onClick={onExploreClick} className="bg-chuks-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                            Browse Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* Search Bar Section */}
            <div className="px-6 md:px-24 -mt-8 relative z-10 max-w-5xl mx-auto w-full">
                <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center">
                    <div className="pl-6 flex items-center flex-grow">
                        <svg className="w-6 h-6 text-gray-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="What are you craving for today?"
                            className="w-full py-4 text-gray-700 outline-none text-lg border-none focus:ring-0"
                        />
                    </div>
                </div>
            </div>

            {/* Popular Categories */}
            <section className="px-6 md:px-24 py-20 bg-[#FBFBFB]">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Popular Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-gray-100 p-4">
                            <div className="h-48 overflow-hidden rounded-2xl mb-6">
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Chef's Specials */}
            <section className="px-6 md:px-24 py-24 bg-white">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Chef's Specials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {specials.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-2xl transition-all duration-300">
                            <div className="h-56 overflow-hidden rounded-[24px] mb-6">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">{item.description}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xl font-bold text-chuks-orange">{item.price}</span>
                                <button
                                    onClick={() => {
                                        onAddToCart({
                                            id: `special-${idx}`,
                                            name: item.name,
                                            price: parseInt(item.price.replace(/[^0-9]/g, '')),
                                            description: item.description,
                                            image: item.img,
                                            quantity: 1
                                        });
                                        onMyOrdersClick();
                                    }}
                                    className="bg-chuks-orange text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100 active:scale-95"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promo Section */}
            <section className="px-6 md:px-24 py-20">
                <div className="relative rounded-[48px] overflow-hidden h-[500px] group shadow-2xl">
                    <img src={promoImg} alt="New Menu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-12 md:px-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-xl">
                            Introducing Our New Menu Additions!
                        </h2>
                        <p className="text-lg text-gray-200 mb-10 max-w-md font-light">
                            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                        </p>
                        <button className="bg-chuks-orange text-white w-fit px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                            Browse Menu Now
                        </button>
                    </div>
                </div>
            </section>

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

export default Home;
