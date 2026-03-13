import React, { useState } from 'react';
import homeHero from '../assets/Home-images/home-img.png';
import amalaImg from '../assets/menu/Amala eith gbegiri and ewedu.svg';
import ebaEgusiImg from '../assets/menu/eba & egusi.svg';
import fufuOkraImg from '../assets/menu/fufu and okra soup.svg';
import grilledTilapiaImg from '../assets/menu/grilled tilapia.svg';
import jollofSmokedFishImg from '../assets/menu/jollof and smaoked fish.svg';
import jollofChickenImg from '../assets/menu/jollof rice and chicken.svg';
import pepperedSnailImg from '../assets/menu/peppered snail.svg';
import poundedYamEdikImg from '../assets/menu/pounded yam & edikiakong.svg';

// ─── Food data (passed into FoodDetail when a card is clicked) ───────────────
const menuSections = [
    {
        title: 'Popular',
        items: [
            {
                id: 'jollof-chicken',
                name: 'Jollof Rice with Fried Chicken',
                basePrice: 2800,
                image: jollofChickenImg,
                description:
                    'Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavour and satisfying. Perfect for a quick lunch or a hearty dinner.',
                tags: [
                    { icon: '🌶️', label: 'Mildly spicy' },
                    { icon: '🥦', label: 'Vegetarian option available' },
                ],
                proteins: [
                    { label: 'Fried Chicken', extra: 0 },
                    { label: 'Grilled Fish', extra: 500 },
                    { label: 'Beef', extra: 700 },
                ],
                extraSides: [
                    { label: 'Fried Plantain', price: 700 },
                    { label: 'Coleslaw', price: 500 },
                    { label: 'Extra Pepper Sauce', price: 300 },
                ],
            },
            {
                id: 'eba-egusi',
                name: 'Eba & Egusi Soup (Goat Meat)',
                basePrice: 3500,
                image: ebaEgusiImg,
                description: 'Hearty Egusi soup with tender goat meat, served with soft Eba. A true taste of Nigerian tradition.',
                tags: [{ icon: '🥬', label: 'Rich in protein' }],
                proteins: [
                    { label: 'Goat Meat', extra: 0 },
                    { label: 'Assorted Meats', extra: 400 },
                ],
                extraSides: [
                    { label: 'Extra Eba', price: 300 },
                    { label: 'Extra Egusi', price: 500 },
                ],
            },
            {
                id: 'pounded-yam-edik',
                name: 'Pounded Yam & Edikaikong',
                basePrice: 4200,
                image: poundedYamEdikImg,
                description: 'Traditional pounded yam with rich, leafy Edikaikong soup — a wholesome, nutrient-packed delight.',
                tags: [{ icon: '🥬', label: 'Leafy & Nutritious' }],
                proteins: [
                    { label: 'Assorted Meat', extra: 0 },
                    { label: 'Stockfish', extra: 300 },
                ],
                extraSides: [
                    { label: 'Extra Pounded Yam', price: 400 },
                ],
            },
            {
                id: 'peppered-snail',
                name: 'Peppered Snail',
                basePrice: 7500,
                image: pepperedSnailImg,
                description: 'Spicy and savory peppered snail, cooked in fiery peppers and spices. Perfect as a starter or side dish.',
                tags: [{ icon: '🌶️', label: 'Very spicy' }],
                proteins: [],
                extraSides: [
                    { label: 'Extra Pepper Sauce', price: 300 },
                    { label: 'Toothpicks', price: 50 },
                ],
            },
            {
                id: 'grilled-tilapia',
                name: 'Grilled Tilapia Fish',
                basePrice: 8500,
                image: grilledTilapiaImg,
                description: 'Whole grilled tilapia seasoned with our special spices, served with a side of your choice.',
                tags: [
                    { icon: '🐟', label: 'Fresh Fish' },
                    { icon: '🔥', label: 'Grilled' },
                ],
                proteins: [],
                extraSides: [
                    { label: 'Fried Plantain', price: 700 },
                    { label: 'Coleslaw', price: 500 },
                    { label: 'Jollof Rice', price: 1200 },
                ],
            },
            {
                id: 'jollof-chicken-2',
                name: 'Jollof Rice & Fried Chicken',
                basePrice: 3500,
                image: jollofChickenImg,
                description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
                tags: [{ icon: '🌶️', label: 'Mildly spicy' }],
                proteins: [
                    { label: 'Fried Chicken', extra: 0 },
                    { label: 'Beef', extra: 700 },
                ],
                extraSides: [
                    { label: 'Fried Plantain', price: 700 },
                ],
            },
        ],
    },
    {
        title: 'Jollof Rice & Entrees',
        items: [
            {
                id: 'jollof-smoked-fish',
                name: 'Jollof Rice & Smoked Fish',
                basePrice: 4500,
                image: jollofSmokedFishImg,
                description: 'Flavorful jollof rice served with perfectly smoked fish — a delightful Nigerian classic.',
                tags: [{ icon: '🐟', label: 'Smoked Fish' }],
                proteins: [
                    { label: 'Smoked Fish', extra: 0 },
                    { label: 'Grilled Fish', extra: 300 },
                ],
                extraSides: [
                    { label: 'Fried Plantain', price: 700 },
                    { label: 'Coleslaw', price: 500 },
                ],
            },
            {
                id: 'party-jollof-veg',
                name: 'Party Jollof Rice (Veg)',
                basePrice: 3000,
                image: jollofChickenImg,
                description: 'Vegetarian party jollof, full of rich flavors — no meat, all taste.',
                tags: [{ icon: '🥦', label: 'Vegetarian' }],
                proteins: [],
                extraSides: [
                    { label: 'Fried Plantain', price: 700 },
                    { label: 'Coleslaw', price: 500 },
                ],
            },
            {
                id: 'party-jollof-veg-2',
                name: 'Party Jollof Rice (Veg)',
                basePrice: 3000,
                image: jollofChickenImg,
                description: 'Vegetarian party jollof, full of rich flavors — no meat, all taste.',
                tags: [{ icon: '🥦', label: 'Vegetarian' }],
                proteins: [],
                extraSides: [
                    { label: 'Fried Plantain', price: 700 },
                ],
            },
        ],
    },
    {
        title: 'Swallow & Soups',
        items: [
            {
                id: 'amala-gbegiri',
                name: 'Amala with Gbegiri & Ewedu',
                basePrice: 3500,
                image: amalaImg,
                description: 'Classic Amala served with Gbegiri, Ewedu and assorted meats — true Yoruba cuisine.',
                tags: [{ icon: '🫘', label: 'Traditional' }],
                proteins: [
                    { label: 'Assorted Meats', extra: 0 },
                    { label: 'Beef Only', extra: 200 },
                ],
                extraSides: [
                    { label: 'Extra Gbegiri', price: 400 },
                    { label: 'Extra Ewedu', price: 400 },
                ],
            },
            {
                id: 'fufu-okra',
                name: 'Fufu & Okra Soup (Fish)',
                basePrice: 3500,
                image: fufuOkraImg,
                description: 'Light Fufu served with fresh Okra soup and tilapia fish — a West African staple.',
                tags: [{ icon: '🐟', label: 'Fresh Fish' }],
                proteins: [
                    { label: 'Tilapia Fish', extra: 0 },
                    { label: 'Catfish', extra: 400 },
                ],
                extraSides: [
                    { label: 'Extra Fufu', price: 300 },
                    { label: 'Extra Pepper', price: 200 },
                ],
            },
            {
                id: 'fufu-okra-2',
                name: 'Fufu & Okra Soup (Fish)',
                basePrice: 3500,
                image: fufuOkraImg,
                description: 'Light Fufu served with fresh Okra soup and tilapia fish — a West African staple.',
                tags: [{ icon: '🐟', label: 'Fresh Fish' }],
                proteins: [
                    { label: 'Tilapia Fish', extra: 0 },
                ],
                extraSides: [],
            },
        ],
    },
];

// ─── Single food card ─────────────────────────────────────────────────────────
const FoodCard = ({ item, onSelect, onAddToCart, onMyOrdersClick }) => (
    <div
        className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full group cursor-pointer"
        onClick={() => onSelect(item)}
    >
        <div className="h-40 overflow-hidden rounded-2xl mb-4">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h4>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="mt-auto flex justify-between items-center">
            <span className="font-bold text-chuks-orange">₦{item.basePrice.toLocaleString()}</span>
            <button
                className="text-chuks-orange hover:text-orange-600 bg-orange-50 p-2 rounded-full transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart({
                        id: item.id,
                        name: item.name,
                        price: item.basePrice,
                        description: item.description,
                        image: item.image,
                        quantity: 1
                    });
                    onMyOrdersClick();
                }}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </div>
    </div>
);

// ─── Menu page ────────────────────────────────────────────────────────────────
const Menu = ({ onLoginClick, onHomeClick, onFoodSelect, onMyOrdersClick, onAddToCart, onAccountClick }) => {
    const [selectedCategory, setSelectedCategory] = useState('Popular');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = [
        "Popular",
        "Jollof Rice & Entrees",
        "Swallow & Soups",
        "Grills & sides",
        "Beverages",
        "Desserts"
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
                        <button className="text-chuks-orange">Explore</button>
                        <button
                            onClick={onMyOrdersClick}
                            className="hover:text-chuks-orange transition-colors"
                        >
                            My Orders
                        </button>
                        <button onClick={onAccountClick} className="hover:text-chuks-orange transition-colors">Account</button>
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
            <main className="max-w-7xl mx-auto w-full px-6 md:px-24 py-12 flex flex-col">

                {/* Categories Dropdown Section */}
                <div className="mb-10 relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Menu</h2>
                            <p className="text-gray-500">Discover our delicious variety of authentic Nigerian dishes</p>
                        </div>

                        {/* Dropdown Menu */}
                        <div className="relative w-full md:w-72">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl flex items-center justify-between hover:border-chuks-orange transition-all shadow-sm group"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Category</span>
                                    <span className="text-gray-900 font-bold">{selectedCategory}</span>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} group-hover:text-chuks-orange`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-40 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-6 py-3.5 text-sm font-semibold transition-colors ${selectedCategory === category
                                                ? 'text-chuks-orange bg-orange-50'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-chuks-orange'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div className="flex-1">
                    {menuSections.map((section) => (
                        <section key={section.title} className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">
                                {section.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item) => (
                                    <FoodCard
                                        key={item.id}
                                        item={item}
                                        onSelect={onFoodSelect}
                                        onAddToCart={onAddToCart}
                                        onMyOrdersClick={onMyOrdersClick}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
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
                            <li><button className="text-white">Explore</button></li>
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
