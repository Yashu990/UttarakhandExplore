import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    Calendar,
    Bookmark,
    Heart,
    Globe,
    LogOut,
    Edit,
    ChevronRight,
    Clock,
} from 'lucide-react';

const Profile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile');
    const [user, setUser] = useState(null);
    const [savedBlogs, setSavedBlogs] = useState([]);
    const [likedBlogs, setLikedBlogs] = useState([]);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Check if user is authenticated
        const isAuth = localStorage.getItem('isAuthenticated');
        if (!isAuth || isAuth !== 'true') {
            navigate('/login');
            return;
        }

        // Load user data
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        setUser(userData);

        // Load saved blogs
        const saved = JSON.parse(localStorage.getItem('savedBlogs') || '[]');
        setSavedBlogs(saved);

        // Load liked blogs
        const liked = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
        setLikedBlogs(liked);

        // Load language preference
        const lang = localStorage.getItem('language') || 'en';
        setLanguage(lang);
    }, [navigate]);

    const handleLogout = () => {
        // Clear auth state
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');

        // Redirect to home
        navigate('/');
    };

    const handleLanguageChange = (newLang) => {
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const removeSavedBlog = (blogId) => {
        const updated = savedBlogs.filter((blog) => blog.id !== blogId);
        setSavedBlogs(updated);
        localStorage.setItem('savedBlogs', JSON.stringify(updated));
    };

    const removeLikedBlog = (blogId) => {
        const updated = likedBlogs.filter((blog) => blog.id !== blogId);
        setLikedBlogs(updated);
        localStorage.setItem('likedBlogs', JSON.stringify(updated));
    };

    const tabs = [
        { id: 'profile', label: 'Profile Info', icon: User },
        { id: 'saved', label: 'Saved Blogs', icon: Bookmark },
        { id: 'liked', label: 'Liked Blogs', icon: Heart },
        { id: 'language', label: 'Language', icon: Globe },
        { id: 'logout', label: 'Logout', icon: LogOut },
    ];

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
        { code: 'ur', name: 'اردو (Urdu)', flag: '🇵🇰' },
    ];

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-primary via-blue-600 to-accent text-white rounded-2xl p-8 mb-8 shadow-xl"
                >
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl font-bold border-4 border-white/30">
                            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                            <h1 className="text-4xl font-heading font-bold mb-2">{user.name || 'User'}</h1>
                            <p className="text-white/90 flex items-center space-x-2">
                                {user.email && (
                                    <>
                                        <Mail className="h-4 w-4" />
                                        <span>{user.email}</span>
                                    </>
                                )}
                                {user.mobile && !user.email && (
                                    <>
                                        <Phone className="h-4 w-4" />
                                        <span>{user.mobile}</span>
                                    </>
                                )}
                            </p>
                            {user.createdAt && (
                                <p className="text-white/80 text-sm flex items-center space-x-2 mt-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-lg font-semibold text-textPrimary mb-4">Account Settings</h3>
                            <nav className="space-y-2">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => {
                                                if (tab.id === 'logout') {
                                                    handleLogout();
                                                } else {
                                                    setActiveTab(tab.id);
                                                }
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                                                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                                                    : 'text-textSecondary hover:bg-gray-100'
                                                }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Icon className="h-5 w-5" />
                                                <span className="font-medium">{tab.label}</span>
                                            </div>
                                            {tab.id !== 'logout' && <ChevronRight className="h-5 w-5" />}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            {activeTab === 'profile' && (
                                <motion.div
                                    key="profile"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white rounded-2xl shadow-lg p-8"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-heading font-bold text-textPrimary">
                                            Profile Information
                                        </h2>
                                        <button className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                                            <Edit className="h-4 w-4" />
                                            <span>Edit</span>
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Name */}
                                        <div className="border-b border-gray-200 pb-4">
                                            <label className="text-sm text-textSecondary font-medium">Full Name</label>
                                            <p className="text-lg text-textPrimary mt-1 font-medium">
                                                {user.name || 'Not provided'}
                                            </p>
                                        </div>

                                        {/* Email */}
                                        {user.email && (
                                            <div className="border-b border-gray-200 pb-4">
                                                <label className="text-sm text-textSecondary font-medium">Email Address</label>
                                                <p className="text-lg text-textPrimary mt-1 flex items-center space-x-2">
                                                    <Mail className="h-5 w-5 text-primary" />
                                                    <span>{user.email}</span>
                                                </p>
                                            </div>
                                        )}

                                        {/* Mobile */}
                                        {user.mobile && (
                                            <div className="border-b border-gray-200 pb-4">
                                                <label className="text-sm text-textSecondary font-medium">Mobile Number</label>
                                                <p className="text-lg text-textPrimary mt-1 flex items-center space-x-2">
                                                    <Phone className="h-5 w-5 text-primary" />
                                                    <span>{user.mobile}</span>
                                                </p>
                                            </div>
                                        )}

                                        {/* Join Date */}
                                        {user.createdAt && (
                                            <div className="border-b border-gray-200 pb-4">
                                                <label className="text-sm text-textSecondary font-medium">Member Since</label>
                                                <p className="text-lg text-textPrimary mt-1 flex items-center space-x-2">
                                                    <Calendar className="h-5 w-5 text-primary" />
                                                    <span>{new Date(user.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}</span>
                                                </p>
                                            </div>
                                        )}

                                        {/* Login Time */}
                                        {user.loginTime && (
                                            <div>
                                                <label className="text-sm text-textSecondary font-medium">Last Login</label>
                                                <p className="text-lg text-textPrimary mt-1 flex items-center space-x-2">
                                                    <Clock className="h-5 w-5 text-primary" />
                                                    <span>{new Date(user.loginTime).toLocaleString()}</span>
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-textSecondary">Saved Blogs</p>
                                                    <p className="text-2xl font-bold text-primary">{savedBlogs.length}</p>
                                                </div>
                                                <Bookmark className="h-8 w-8 text-primary/50" />
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-textSecondary">Liked Blogs</p>
                                                    <p className="text-2xl font-bold text-red-600">{likedBlogs.length}</p>
                                                </div>
                                                <Heart className="h-8 w-8 text-red-500/50" />
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-textSecondary">Language</p>
                                                    <p className="text-2xl font-bold text-accent">
                                                        {languages.find((l) => l.code === language)?.flag || '🌐'}
                                                    </p>
                                                </div>
                                                <Globe className="h-8 w-8 text-accent/50" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'saved' && (
                                <motion.div
                                    key="saved"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white rounded-2xl shadow-lg p-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-textPrimary mb-6">
                                        Saved Blogs ({savedBlogs.length})
                                    </h2>

                                    {savedBlogs.length === 0 ? (
                                        <div className="text-center py-16">
                                            <Bookmark className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                            <p className="text-textSecondary text-lg">No saved blogs yet</p>
                                            <Link
                                                to="/blogs"
                                                className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                            >
                                                Explore Blogs
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {savedBlogs.map((blog) => (
                                                <div
                                                    key={blog.id}
                                                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <Link
                                                                to={`/blog/${blog.id}`}
                                                                className="text-lg font-semibold text-textPrimary hover:text-primary transition-colors"
                                                            >
                                                                {blog.title}
                                                            </Link>
                                                            <p className="text-sm text-textSecondary mt-1">{blog.excerpt}</p>
                                                            <div className="flex items-center space-x-4 mt-3 text-xs text-textSecondary">
                                                                <span>{blog.category}</span>
                                                                <span>•</span>
                                                                <span>{blog.date}</span>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => removeSavedBlog(blog.id)}
                                                            className="ml-4 p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                                        >
                                                            <Bookmark className="h-5 w-5 fill-current" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'liked' && (
                                <motion.div
                                    key="liked"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white rounded-2xl shadow-lg p-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-textPrimary mb-6">
                                        Liked Blogs ({likedBlogs.length})
                                    </h2>

                                    {likedBlogs.length === 0 ? (
                                        <div className="text-center py-16">
                                            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                            <p className="text-textSecondary text-lg">No liked blogs yet</p>
                                            <Link
                                                to="/blogs"
                                                className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                            >
                                                Explore Blogs
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {likedBlogs.map((blog) => (
                                                <div
                                                    key={blog.id}
                                                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <Link
                                                                to={`/blog/${blog.id}`}
                                                                className="text-lg font-semibold text-textPrimary hover:text-primary transition-colors"
                                                            >
                                                                {blog.title}
                                                            </Link>
                                                            <p className="text-sm text-textSecondary mt-1">{blog.excerpt}</p>
                                                            <div className="flex items-center space-x-4 mt-3 text-xs text-textSecondary">
                                                                <span>{blog.category}</span>
                                                                <span>•</span>
                                                                <span>{blog.date}</span>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => removeLikedBlog(blog.id)}
                                                            className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        >
                                                            <Heart className="h-5 w-5 fill-current" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'language' && (
                                <motion.div
                                    key="language"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-white rounded-2xl shadow-lg p-8"
                                >
                                    <h2 className="text-2xl font-heading font-bold text-textPrimary mb-2">
                                        Language Preference
                                    </h2>
                                    <p className="text-textSecondary mb-8">
                                        Choose your preferred language for the blog content
                                    </p>

                                    <div className="space-y-4">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className={`w-full flex items-center justify-between p-6 rounded-xl border-2 transition-all ${language === lang.code
                                                        ? 'border-primary bg-primary/5 shadow-md'
                                                        : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-4xl">{lang.flag}</span>
                                                    <div className="text-left">
                                                        <p className="text-lg font-semibold text-textPrimary">{lang.name}</p>
                                                        <p className="text-sm text-textSecondary">Language Code: {lang.code}</p>
                                                    </div>
                                                </div>
                                                {language === lang.code && (
                                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                                        <div className="w-3 h-3 bg-white rounded-full" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                        <p className="text-sm text-blue-800">
                                            <strong>Note:</strong> Your language preference is saved locally and will be used
                                            to display content in your preferred language when available.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
