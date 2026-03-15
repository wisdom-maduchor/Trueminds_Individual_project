import React from 'react';

const Header = ({
    activePage,
    onHomeClick,
    onExploreClick,
    onMyOrdersClick,
    onAccountClick,
    onLoginClick
}) => {
    return (
        <header className="bg-white px-6 md:px-24 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-100">
            <div className="flex items-center space-x-12">
                <h1
                    className="text-2xl font-pacifico text-chuks-orange cursor-pointer"
                    onClick={onHomeClick}
                >
                    Chuks Kitchen
                </h1>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                    <button
                        onClick={onHomeClick}
                        className={`transition-colors ${activePage === 'home' ? 'text-chuks-orange' : 'hover:text-chuks-orange'}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={onExploreClick}
                        className={`transition-colors ${activePage === 'explore' ? 'text-chuks-orange' : 'hover:text-chuks-orange'}`}
                    >
                        Explore
                    </button>
                    <button
                        onClick={onMyOrdersClick}
                        className={`transition-colors ${activePage === 'myOrders' ? 'text-chuks-orange' : 'hover:text-chuks-orange'}`}
                    >
                        My Orders
                    </button>
                    <button
                        onClick={onAccountClick}
                        className={`transition-colors ${activePage === 'account' ? 'text-chuks-orange' : 'hover:text-chuks-orange'}`}
                    >
                        Account
                    </button>
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
    );
};

export default Header;
