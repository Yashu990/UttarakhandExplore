import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrMobile: '',
        password: '',
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic validation
        if (!formData.emailOrMobile || !formData.password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        // Simulate login (in production, this would be an API call)
        setTimeout(() => {
            // Mock authentication - check against demo credentials
            if (
                (formData.emailOrMobile === 'demo@uttarakhand.com' ||
                    formData.emailOrMobile === '9876543210') &&
                formData.password === 'demo123'
            ) {
                // Create user object
                const user = {
                    email: formData.emailOrMobile.includes('@')
                        ? formData.emailOrMobile
                        : 'mobile@user.com',
                    mobile: formData.emailOrMobile.includes('@') ? '' : formData.emailOrMobile,
                    name: 'Demo User',
                    loginTime: new Date().toISOString(),
                };

                // Save to localStorage
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify(user));

                if (formData.rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }

                // Redirect to home
                navigate('/');
            } else {
                setError('Invalid email/mobile or password. Try: demo@uttarakhand.com / demo123');
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070')`,
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
                            Welcome Back to
                            <br />
                            Uttarakhand Blog
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-md">
                            Continue your journey through the Land of Gods. Explore stories, culture, and the beauty of
                            the Himalayas.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 max-w-md">
                            {[
                                'Access exclusive content',
                                'Save your favorite articles',
                                'Comment and engage with community',
                                'Get personalized recommendations',
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-white/90">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Right Side - Login Form */}
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
                        <p className="text-textSecondary">Welcome back!</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-heading font-bold text-textPrimary mb-2">Login</h2>
                        <p className="text-textSecondary">Enter your credentials to access your account</p>
                    </div>

                    {/* Demo Credentials */}
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-sm text-blue-800 font-medium mb-2">Demo Credentials:</p>
                        <p className="text-sm text-blue-700">
                            Email: <span className="font-mono font-semibold">demo@uttarakhand.com</span>
                        </p>
                        <p className="text-sm text-blue-700">
                            Mobile: <span className="font-mono font-semibold">9876543210</span>
                        </p>
                        <p className="text-sm text-blue-700">
                            Password: <span className="font-mono font-semibold">demo123</span>
                        </p>
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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email/Mobile Input */}
                        <div>
                            <label className="block text-sm font-medium text-textPrimary mb-2">
                                Email or Mobile Number
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-textSecondary" />
                                </div>
                                <input
                                    type="text"
                                    value={formData.emailOrMobile}
                                    onChange={(e) => setFormData({ ...formData, emailOrMobile: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Enter email or mobile number"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-textPrimary mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-textSecondary" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-primary transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                                />
                                <span className="text-sm text-textSecondary">Remember me</span>
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Logging in...</span>
                                </>
                            ) : (
                                <>
                                    <LogIn className="h-5 w-5" />
                                    <span>Login</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-8 mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-textSecondary">Don't have an account?</span>
                            </div>
                        </div>
                    </div>

                    {/* Signup Link */}
                    <div className="text-center">
                        <Link
                            to="/signup"
                            className="inline-flex items-center justify-center w-full px-6 py-4 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all"
                        >
                            Create New Account
                        </Link>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-6 text-center">
                        <Link to="/" className="text-sm text-textSecondary hover:text-primary transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
