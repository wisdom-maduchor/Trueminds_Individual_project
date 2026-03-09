import React, { useState } from 'react';

const FoodDetail = ({ food, onClose, onLoginClick }) => {
    const [selectedProtein, setSelectedProtein] = useState(food.proteins?.[0]?.label || '');
    const [selectedSides, setSelectedSides] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');

    const toggleSide = (label) => {
        setSelectedSides((prev) =>
            prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
        );
    };

    const getTotalPrice = () => {
        let total = food.basePrice;
        const protein = food.proteins?.find((p) => p.label === selectedProtein);
        if (protein?.extra) total += protein.extra;
        food.extraSides?.forEach((side) => {
            if (selectedSides.includes(side.label)) total += side.price;
        });
        return total;
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <header className="bg-white px-6 md:px-24 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-100">
                <div className="flex items-center space-x-12">
                    <h1 className="text-2xl font-pacifico text-chuks-orange">Chuks Kitchen</h1>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-chuks-orange transition-colors">Home</a>
                        <a href="#" className="hover:text-chuks-orange transition-colors">Explore</a>
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

            {/* Main Detail Section */}
            <main className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                    {/* Left – Food Image */}
                    <div className="relative h-72 md:h-auto overflow-hidden">
                        <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right – Detail Panel */}
                    <div className="relative bg-white px-8 md:px-12 py-10 overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded text-sm font-bold hover:bg-gray-700 transition-colors z-10"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Title & Price */}
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 pr-10">{food.name}</h2>
                        <p className="text-2xl font-bold text-chuks-orange mb-4">
                            ₦{food.basePrice.toLocaleString()}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed mb-5">{food.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-4 mb-7 text-xs text-gray-500">
                            {food.tags?.map((tag) => (
                                <span key={tag.label} className="flex items-center gap-1.5">
                                    <span className="text-chuks-orange text-base">{tag.icon}</span>
                                    {tag.label}
                                </span>
                            ))}
                            <a href="#" className="flex items-center gap-1.5 text-chuks-orange hover:underline">
                                <span className="text-base">⚠️</span> View Allergies
                            </a>
                        </div>

                        {/* Choose Your Protein */}
                        {food.proteins && food.proteins.length > 0 && (
                            <section className="mb-7">
                                <h3 className="text-base font-bold text-gray-900 mb-4">Choose Your Protein</h3>
                                <div className="flex flex-col gap-3">
                                    {food.proteins.map((protein) => (
                                        <label
                                            key={protein.label}
                                            className={`flex items-center justify-between border rounded-xl px-5 py-3.5 cursor-pointer transition-all ${selectedProtein === protein.label
                                                    ? 'border-chuks-orange bg-orange-50'
                                                    : 'border-gray-200 hover:border-chuks-orange'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedProtein === protein.label
                                                            ? 'border-chuks-orange'
                                                            : 'border-gray-300'
                                                        }`}
                                                >
                                                    {selectedProtein === protein.label && (
                                                        <span className="w-2.5 h-2.5 rounded-full bg-chuks-orange block" />
                                                    )}
                                                </span>
                                                <span className="text-sm font-medium text-gray-800">{protein.label}</span>
                                            </div>
                                            <span className="text-xs text-gray-400 font-semibold">
                                                {protein.extra ? `+₦${protein.extra.toLocaleString()}` : '(Default)'}
                                            </span>
                                            <input
                                                type="radio"
                                                name="protein"
                                                value={protein.label}
                                                checked={selectedProtein === protein.label}
                                                onChange={() => setSelectedProtein(protein.label)}
                                                className="sr-only"
                                            />
                                        </label>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Extra Sides */}
                        {food.extraSides && food.extraSides.length > 0 && (
                            <section className="mb-7">
                                <h3 className="text-base font-bold text-gray-900 mb-4">
                                    Extra Sides <span className="text-gray-400 font-normal">(Optional)</span>
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {food.extraSides.map((side) => (
                                        <label
                                            key={side.label}
                                            className={`flex items-center justify-between border rounded-xl px-5 py-3.5 cursor-pointer transition-all ${selectedSides.includes(side.label)
                                                    ? 'border-chuks-orange bg-orange-50'
                                                    : 'border-gray-200 hover:border-chuks-orange'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedSides.includes(side.label)
                                                            ? 'border-chuks-orange bg-chuks-orange'
                                                            : 'border-gray-300'
                                                        }`}
                                                >
                                                    {selectedSides.includes(side.label) && (
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </span>
                                                <span className="text-sm font-medium text-gray-800">{side.label}</span>
                                            </div>
                                            <span className="text-xs text-gray-400 font-semibold">
                                                +₦{side.price.toLocaleString()}
                                            </span>
                                            <input
                                                type="checkbox"
                                                checked={selectedSides.includes(side.label)}
                                                onChange={() => toggleSide(side.label)}
                                                className="sr-only"
                                            />
                                        </label>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Special Instructions */}
                        <section className="mb-8">
                            <h3 className="text-base font-bold text-gray-900 mb-4">Special Instructions</h3>
                            <textarea
                                value={specialInstructions}
                                onChange={(e) => setSpecialInstructions(e.target.value)}
                                placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhh&#10;food is tasty"
                                rows={4}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:border-chuks-orange transition-colors"
                            />
                        </section>

                        {/* Add to Cart */}
                        <button className="w-full bg-chuks-orange text-white py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-lg active:scale-95">
                            Add to Cart — ₦{getTotalPrice().toLocaleString()}
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-dark-brown text-white py-20 px-6 md:px-24">
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

export default FoodDetail;
