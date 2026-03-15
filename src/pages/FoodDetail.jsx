import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const FoodDetail = ({ food, onClose, onLoginClick, onMyOrdersClick, onHomeClick, onExploreClick, onAddToCart, onAccountClick }) => {
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

    const handleAddToCart = () => {
        const cartItem = {
            id: food.id,
            cartId: `${food.id}-${Date.now()}`, // Unique ID for cart entries
            name: food.name,
            image: food.image,
            price: getTotalPrice(),
            description: [
                selectedProtein && `Protein: ${selectedProtein}`,
                selectedSides.length > 0 && `Sides: ${selectedSides.join(', ')}`,
                specialInstructions && `Notes: ${specialInstructions}`
            ].filter(Boolean).join(', ') || food.description,
            quantity: 1,
            selectedProtein,
            selectedSides,
            specialInstructions
        };
        onAddToCart(cartItem);
        onMyOrdersClick(); // Navigate to cart after adding
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9] font-inter">
            {/* Top Navigation */}
            <Header
                activePage="explore"
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onMyOrdersClick}
                onAccountClick={onAccountClick}
                onLoginClick={onLoginClick}
            />

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
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-chuks-orange text-white py-4 rounded-2xl font-bold text-base hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            Add to Cart — ₦{getTotalPrice().toLocaleString()}
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer
                onHomeClick={onHomeClick}
                onExploreClick={onExploreClick}
                onMyOrdersClick={onMyOrdersClick}
                onAccountClick={onAccountClick}
            />
        </div>
    );
};

export default FoodDetail;
