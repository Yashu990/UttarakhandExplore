import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, UserPlus, AlertCircle, CheckCircle } from 'lucide-react';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        emailOrMobile: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        if (!formData.name || !formData.emailOrMobile || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all fields');
            return false;
        }

        if (formData.name.length < 3) {
            setError('Name must be at least 3 characters long');
            return false;
        }

        // Email or mobile validation
        const isEmail = formData.emailOrMobile.includes('@');
        const isMobile = /^\d{10}$/.test(formData.emailOrMobile);

        if (!isEmail && !isMobile) {
            setError('Please enter a valid email or 10-digit mobile number');
            return false;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        // Simulate account creation (in production, this would be an API call)
        setTimeout(() => {
            // Create user object
            const user = {
                id: Date.now().toString(), // Simple ID generation
                name: formData.name,
                email: formData.emailOrMobile.includes('@') ? formData.emailOrMobile : '',
                mobile: formData.emailOrMobile.includes('@') ? '' : formData.emailOrMobile,
                password: formData.password, // In production, never store plain passwords!
                role: formData.isContributor ? 'contributor' : 'user',
                createdAt: new Date().toISOString(),
                ...(formData.isContributor && {
                    contributorProfile: {
                        badge: 'new',
                        approvedStoriesCount: 0
                    }
                })
            };

            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');

            // Also save to a users array (for multi-user simulation)
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            setLoading(false);

            // Redirect based on role
            if (user.role === 'contributor') {
                navigate('/contributor/dashboard');
            } else {
                navigate('/profile');
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-accent via-orange-600 to-orange-700 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070')`,
                    }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-heading font-bold mb-6">
                            Join Our
                            <br />
                            Community
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-md">
                            Become part of the Uttarakhand Blog family. Share your stories, connect with fellow travelers,
                            and explore the Land of Gods.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4 max-w-md">
                            {[
                                'Create and share your own stories',
                                'Bookmark your favorite articles',
                                'Join discussions and comment',
                                'Get personalized travel recommendations',
                                'Connect with local communities',
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                                    <span className="text-white/90 text-left">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-md"
                >
                    {/* Logo for mobile */}
                    <div className="lg:hidden text-center mb-8">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                            Uttarakhand Blog
                        </h2>
                        <p className="text-textSecondary">Create your account</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-heading font-bold text-textPrimary mb-2">Sign Up</h2>
                        <p className="text-textSecondary">Create an account to get started</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
                        >
                            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                            <p className="text-sm text-red-700">{error}</p>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-textPrimary mb-2">
                                Full Name *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-textSecondary" />
                                </div>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        {/* Email/Mobile Input */}
                        <div>
                            <label className="block text-sm font-medium text-textPrimary mb-2">
                                Email or Mobile Number *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-textSecondary" />
                                </div>
                                <input
                                    type="text"
                                    value={formData.emailOrMobile}
                                    onChange={(e) => setFormData({ ...formData, emailOrMobile: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Enter email or mobile number"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-textPrimary mb-2">Password *</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-textSecondary" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Create a password (min 6 characters)"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-accent transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-textPrimary mb-2">
                                Confirm Password *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-textSecondary" />
                                </div>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-accent transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="mt-8 mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-textSecondary">Already have an account?</span>
                            </div>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className="text-center">
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full px-6 py-4 bg-white border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent/5 transition-all"
                        >
                            Login to Your Account
                        </Link>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-6 text-center">
                        <Link to="/" className="text-sm text-textSecondary hover:text-accent transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
