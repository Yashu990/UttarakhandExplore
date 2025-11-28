import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, Mountain, LogOut, UserCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const navigate = useNavigate();

    // Check authentication status
    useEffect(() => {
        const checkAuth = () => {
            const authStatus = localStorage.getItem('isAuthenticated');
            const userData = localStorage.getItem('user');

            setIsAuthenticated(authStatus === 'true');
            if (userData) {
                setUser(JSON.parse(userData));
            }
        };

        checkAuth();

        // Listen for storage changes (e.g., login/logout in another tab)
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'culture', label: 'Culture & Heritage', slug: 'culture' },
        { id: 'temples', label: 'Temples & Char Dham', slug: 'temples-char-dham' },
        { id: 'travelGuides', label: 'Travel Guides', slug: 'travel-guides' },
        { id: 'hiddenPlaces', label: 'Hidden Places', slug: 'hidden-places' },
        { id: 'food', label: 'Food & Lifestyle', slug: 'food-lifestyle' },
        { id: 'history', label: 'History', slug: 'history' },
        { id: 'adventure', label: 'Adventure', slug: 'adventure' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-gradient-to-b from-black/60 to-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Mountain
                                className={`h-8 w-8 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'
                                    }`}
                            />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform" />
                        </div>
                        <span
                            className={`text-xl font-heading font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'
                                }`}
                        >
                            Uttarakhand
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-textPrimary' : 'text-white'
                                }`}
                        >
                            Home
                        </Link>

                        {/* Categories Dropdown */}
                        <div className="relative group">
                            <button
                                className={`font-medium transition-colors hover:text-accent flex items-center ${isScrolled ? 'text-textPrimary' : 'text-white'
                                    }`}
                            >
                                Categories
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                <div className="py-2">
                                    {categories.map((category) => (
                                        <Link
                                            key={category.id}
                                            to={`/category/${category.slug}`}
                                            className="block px-4 py-2 text-textPrimary hover:bg-primary/10 hover:text-primary transition-colors"
                                        >
                                            {category.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/videos"
                            className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-textPrimary' : 'text-white'
                                }`}
                        >
                            Videos
                        </Link>
                        <Link
                            to="/about"
                            className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-textPrimary' : 'text-white'
                                }`}
                        >
                            About Uttarakhand
                        </Link>
                        <Link
                            to="/contact"
                            className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-textPrimary' : 'text-white'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={`p-2 rounded-full hover:bg-primary/10 transition-colors ${isScrolled ? 'text-textPrimary' : 'text-white'
                                }`}
                        >
                            <Search className="h-5 w-5" />
                        </button>

                        {/* Login/Profile */}
                        {isAuthenticated && user ? (
                            <div className="hidden md:block relative">
                                <button
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isScrolled
                                        ? 'bg-primary/10 text-primary hover:bg-primary/20'
                                        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
                                        }`}>
                                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                    </div>
                                    <span className="text-sm font-medium">{user.name || 'User'}</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Profile Dropdown */}
                                <AnimatePresence>
                                    {isProfileDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                                        >
                                            <div className="p-4 border-b border-gray-200 bg-gray-50">
                                                <p className="font-semibold text-gray-900">{user.name || 'User'}</p>
                                                <p className="text-sm text-gray-600 truncate">
                                                    {user.email || user.mobile}
                                                </p>
                                            </div>
                                            <div className="py-2">
                                                <Link
                                                    to="/profile"
                                                    onClick={() => setIsProfileDropdownOpen(false)}
                                                    className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors text-gray-700"
                                                >
                                                    <UserCircle className="h-5 w-5" />
                                                    <span>Profile</span>
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        localStorage.removeItem('isAuthenticated');
                                                        localStorage.removeItem('user');
                                                        localStorage.removeItem('rememberMe');
                                                        setIsAuthenticated(false);
                                                        setUser(null);
                                                        setIsProfileDropdownOpen(false);
                                                        navigate('/');
                                                    }}
                                                    className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600"
                                                >
                                                    <LogOut className="h-5 w-5" />
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isScrolled
                                    ? 'bg-primary text-white hover:bg-primary/90'
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                    }`}
                            >
                                <User className="h-4 w-4" />
                                <span className="text-sm font-medium">Login</span>
                            </Link>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`lg:hidden p-2 rounded-full hover:bg-primary/10 transition-colors ${isScrolled ? 'text-textPrimary' : 'text-white'
                                }`}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 bg-white"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-textSecondary" />
                                <input
                                    type="text"
                                    placeholder="Search for articles, temples, places..."
                                    className="w-full pl-12 pr-4 py-3 bg-bgLight rounded-full border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                                    autoFocus
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween' }}
                        className="lg:hidden fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
                    >
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <Link
                                    to="/"
                                    className="block text-lg font-medium text-textPrimary hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>

                                <div>
                                    <h3 className="text-lg font-semibold text-textPrimary mb-2">Categories</h3>
                                    <div className="space-y-2 pl-4">
                                        {categories.map((category) => (
                                            <Link
                                                key={category.id}
                                                to={`/category/${category.slug}`}
                                                className="block text-textSecondary hover:text-primary transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {category.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to="/videos"
                                    className="block text-lg font-medium text-textPrimary hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Videos
                                </Link>
                                <Link
                                    to="/about"
                                    className="block text-lg font-medium text-textPrimary hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Uttarakhand
                                </Link>
                                <Link
                                    to="/contact"
                                    className="block text-lg font-medium text-textPrimary hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>

                            <div className="pt-6 border-t border-gray-200 space-y-4">
                                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                                    <User className="h-5 w-5" />
                                    <span className="font-medium">Login / Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
