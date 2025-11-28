import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, User, UserPlus, Shield } from 'lucide-react';
import { initializeTestUsers } from '../utils/testUsers';


const Login = () => {
    const navigate = useNavigate();
    // const { t } = useLanguage();

    // Portal selection state
    const [activePortal, setActivePortal] = useState('user'); // 'user', 'contributor', 'admin'
    const [contributorMode, setContributorMode] = useState('login'); // 'login' or 'signup'

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        emailOrMobile: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Auto-initialize test users on component mount
    useEffect(() => {
        initializeTestUsers();
    }, []);

    // Reset form when switching portals
    const handlePortalSwitch = (portal) => {
        setActivePortal(portal);
        setError('');
        setFormData({
            name: '',
            emailOrMobile: '',
            password: '',
            confirmPassword: '',
            rememberMe: false,
        });
        if (portal === 'contributor') {
            setContributorMode('login');
        }
    };

    // Validation for contributor signup
    const validateSignup = () => {
        if (!formData.name || !formData.emailOrMobile || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all fields');
            return false;
        }
        if (formData.name.length < 3) {
            setError('Name must be at least 3 characters long');
            return false;
        }
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

    // Handle login
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!formData.emailOrMobile || !formData.password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const foundUser = users.find(u => {
                const emailMatch = u.email && u.email === formData.emailOrMobile;
                const mobileMatch = u.mobile && u.mobile === formData.emailOrMobile;
                const passwordMatch = u.password === formData.password;
                return (emailMatch || mobileMatch) && passwordMatch;
            });

            if (foundUser) {
                // Validate role matches selected portal
                if (activePortal === 'admin' && foundUser.role !== 'admin') {
                    setError('This account does not have admin access');
                    setLoading(false);
                    return;
                }
                if (activePortal === 'contributor' && foundUser.role !== 'contributor' && foundUser.role !== 'admin') {
                    setError('This account is not registered as a contributor');
                    setLoading(false);
                    return;
                }

                const user = {
                    ...foundUser,
                    loginTime: new Date().toISOString(),
                };
                delete user.password;

                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify(user));

                if (formData.rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }

                // Redirect based on role
                if (user.role === 'admin') {
                    navigate('/admin/dashboard');
                } else if (user.role === 'contributor') {
                    navigate('/contributor/dashboard');
                } else {
                    navigate('/profile');
                }
            } else {
                // Provide helpful error message
                const userCount = users.length;
                if (userCount === 0) {
                    setError('No users found. Test users are being loaded automatically. Please try again.');
                } else {
                    setError(`Invalid credentials. Check email/password or use test credentials shown above.`);
                }
            }
            setLoading(false);
        }, 1500);
    };

    // Handle contributor signup
    const handleSignup = (e) => {
        e.preventDefault();
        setError('');

        if (!validateSignup()) {
            return;
        }

        setLoading(true);

        setTimeout(() => {
            const user = {
                id: Date.now().toString(),
                name: formData.name,
                email: formData.emailOrMobile.includes('@') ? formData.emailOrMobile : '',
                mobile: formData.emailOrMobile.includes('@') ? '' : formData.emailOrMobile,
                password: formData.password,
                role: 'contributor',
                createdAt: new Date().toISOString(),
                contributorProfile: {
                    badge: 'new',
                    approvedStoriesCount: 0
                }
            };

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            const userToStore = { ...user };
            delete userToStore.password;
            localStorage.setItem('user', JSON.stringify(userToStore));
            localStorage.setItem('isAuthenticated', 'true');

            setLoading(false);
            navigate('/contributor/dashboard');
        }, 1500);
    };

    const loadDemoData = () => {
        initializeTestUsers();
        alert('Test users loaded! You can now login with demo credentials.');
    };

    // Portal tab configuration
    const portals = [
        { id: 'user', label: 'User', icon: User },
        { id: 'contributor', label: 'Contributor', icon: UserPlus },
        { id: 'admin', label: 'Admin', icon: Shield },
    ];

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
                            Welcome to
                            <br />
                            Uttarakhand Blog
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-md">
                            Choose your portal to access personalized features and manage your content.
                        </p>

                        <div className="space-y-4 max-w-md">
                            {[
                                'Exclusive content access',
                                'Join our community',
                                'Share your stories',
                                'Manage your profile',
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

                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Right Side - Portal Selection & Forms */}
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
                            Welcome Back
                        </h2>
                        <p className="text-textSecondary">Sign in to continue</p>
                    </div>

                    {/* Portal Tabs */}
                    <div className="mb-8">
                        <div className="flex gap-2 mb-6 border-b border-gray-200">
                            {portals.map((portal) => {
                                const Icon = portal.icon;
                                const isActive = activePortal === portal.id;

                                // Set static color classes
                                let activeClasses = '';
                                if (portal.id === 'user') {
                                    activeClasses = 'border-b-2 border-blue-600 text-blue-600 font-semibold';
                                } else if (portal.id === 'contributor') {
                                    activeClasses = 'border-b-2 border-orange-600 text-orange-600 font-semibold';
                                } else if (portal.id === 'admin') {
                                    activeClasses = 'border-b-2 border-red-600 text-red-600 font-semibold';
                                }

                                return (
                                    <button
                                        key={portal.id}
                                        onClick={() => handlePortalSwitch(portal.id)}
                                        className={`flex-1 flex items-center justify-center gap-2 pb-3 transition-all ${isActive ? activeClasses : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="hidden sm:inline">{portal.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Portal Title */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-heading font-bold text-textPrimary">
                                {activePortal === 'user' && 'User Login'}
                                {activePortal === 'contributor' && (contributorMode === 'login' ? 'Contributor Login' : 'Contributor Signup')}
                                {activePortal === 'admin' && 'Admin Portal'}
                            </h2>
                            <p className="text-textSecondary mt-1">
                                {activePortal === 'user' && 'Access your saved blogs and preferences'}
                                {activePortal === 'contributor' && (contributorMode === 'login' ? 'Manage your stories and analytics' : 'Join our community of storytellers')}
                                {activePortal === 'admin' && 'Secure access for administrators'}
                            </p>
                        </div>
                    </div>

                    {/* Demo Credentials */}
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-sm text-blue-800 font-medium mb-2">Test Credentials (Click to auto-fill)</p>
                        <p className="text-xs text-blue-700 mb-1">
                            User: user@test.com / user123
                        </p>
                        <p className="text-xs text-blue-700 mb-1">
                            Contributor: contributor@test.com / contributor123
                        </p>
                        <p className="text-xs text-blue-700 mb-2">
                            Admin: admin@test.com / admin123
                        </p>
                        <button
                            onClick={loadDemoData}
                            className="text-xs text-blue-600 hover:text-blue-800 underline"
                        >
                            Load Test Users
                        </button>
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

                    {/* Forms */}
                    <AnimatePresence mode="wait">
                        {/* User Login Form */}
                        {activePortal === 'user' && (
                            <motion.form
                                key="user-login"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleLogin}
                                className="space-y-5"
                            >
                                {/* Email/Mobile */}
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
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="Enter your email or mobile"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
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
                                            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-blue-600"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.rememberMe}
                                            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                            className="w-4 h-4 text-blue-600 rounded"
                                        />
                                        <span className="text-sm text-textSecondary">Remember me</span>
                                    </label>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
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

                                {/* Signup Link */}
                                <div className="text-center text-sm text-textSecondary">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                                        Sign up
                                    </Link>
                                </div>
                            </motion.form>
                        )}

                        {/* Contributor Login/Signup Form */}
                        {activePortal === 'contributor' && (
                            <motion.form
                                key="contributor-form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={contributorMode === 'login' ? handleLogin : handleSignup}
                                className="space-y-5"
                            >
                                {/* Name Field (Signup Only) */}
                                {contributorMode === 'signup' && (
                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-textSecondary" />
                                            </div>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Email/Mobile */}
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
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                            placeholder="Enter your email or mobile"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
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
                                            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                            placeholder={contributorMode === 'signup' ? 'Create a password' : 'Enter your password'}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-orange-600"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password (Signup Only) */}
                                {contributorMode === 'signup' && (
                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">Confirm Password</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-textSecondary" />
                                            </div>
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                                placeholder="Confirm your password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-orange-600"
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>{contributorMode === 'login' ? 'Logging in...' : 'Creating Account...'}</span>
                                        </>
                                    ) : (
                                        <>
                                            {contributorMode === 'login' ? <LogIn className="h-5 w-5" /> : <UserPlus className="h-5 w-5" />}
                                            <span>{contributorMode === 'login' ? 'Login as Contributor' : 'Sign Up as Contributor'}</span>
                                        </>
                                    )}
                                </button>

                                {/* Toggle Mode */}
                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={() => setContributorMode(contributorMode === 'login' ? 'signup' : 'login')}
                                        className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                                    >
                                        {contributorMode === 'login'
                                            ? "New contributor? Join us"
                                            : "Already have an account? Login"}
                                    </button>
                                </div>
                            </motion.form>
                        )}

                        {/* Admin Login Form */}
                        {activePortal === 'admin' && (
                            <motion.form
                                key="admin-login"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleLogin}
                                className="space-y-5"
                            >
                                <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600 mb-4">
                                    This area is restricted to authorized personnel only.
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-textPrimary mb-2">
                                        Admin Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Shield className="h-5 w-5 text-textSecondary" />
                                        </div>
                                        <input
                                            type="email"
                                            value={formData.emailOrMobile}
                                            onChange={(e) => setFormData({ ...formData, emailOrMobile: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                            placeholder="admin@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
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
                                            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                            placeholder="Enter admin password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-textSecondary hover:text-red-600"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Authenticating...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Shield className="h-5 w-5" />
                                            <span>Login to Dashboard</span>
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>

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
