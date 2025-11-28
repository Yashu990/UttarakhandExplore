import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    PenSquare,
    FileText,
    TrendingUp,
    Award,
    Clock,
    CheckCircle,
    XCircle,
    Eye,
} from 'lucide-react';

const ContributorDashboard = () => {
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    });

    // Get submissions from localStorage
    const [submissions] = useState(() => {
        const allSubmissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        return allSubmissions.filter(s => s.contributorId === user?.id);
    });

    // Calculate statistics
    const stats = {
        total: submissions.length,
        pending: submissions.filter(s => s.status === 'pending').length,
        approved: submissions.filter(s => s.status === 'approved').length,
        rejected: submissions.filter(s => s.status === 'rejected').length,
        totalViews: submissions.filter(s => s.status === 'approved').reduce((sum, s) => sum + (s.views || 0), 0),
    };

    const contributorProfile = user?.contributorProfile || {};

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                        Contributor Dashboard
                    </h1>
                    <p className="text-gray-600">Welcome back, {user?.name}! Share your adventure stories with the world.</p>
                </motion.div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Submissions</p>
                                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <FileText className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Pending Review</p>
                                <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <Clock className="h-6 w-6 text-orange-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Approved Stories</p>
                                <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-xl">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Views</p>
                                <p className="text-3xl font-bold text-purple-600">{stats.totalViews}</p>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-xl">
                                <Eye className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-gradient-to-br from-primary via-orange-500 to-accent text-white rounded-2xl p-8 shadow-xl">
                            <h2 className="text-2xl font-bold mb-2">Ready to Share Your Story?</h2>
                            <p className="text-white/90 mb-6">
                                Share your adventure experiences, hidden gems, and travel stories with thousands of readers.
                            </p>
                            <Link
                                to="/contributor/submit"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                            >
                                <PenSquare className="h-5 w-5" />
                                <span>Submit New Story</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <Award className="h-6 w-6 text-yellow-500" />
                            <h3 className="text-lg font-bold text-gray-900">Your Badge</h3>
                        </div>
                        <div className="text-center py-6">
                            <div className="text-6xl mb-2">
                                {contributorProfile.badge === 'gold' && '🥇'}
                                {contributorProfile.badge === 'silver' && '🥈'}
                                {contributorProfile.badge === 'bronze' && '🥉'}
                                {!contributorProfile.badge && '🌟'}
                            </div>
                            <p className="text-xl font-bold text-gray-900 capitalize mb-1">
                                {contributorProfile.badge || 'New'} Contributor
                            </p>
                            <p className="text-sm text-gray-600">
                                {stats.approved} approved {stats.approved === 1 ? 'story' : 'stories'}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Recent Submissions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Submissions</h2>
                        <Link
                            to="/contributor/submissions"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            View All →
                        </Link>
                    </div>

                    {submissions.length === 0 ? (
                        <div className="text-center py-12">
                            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg mb-4">No submissions yet</p>
                            <Link
                                to="/contributor/submit"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all"
                            >
                                <PenSquare className="h-5 w-5" />
                                <span>Create Your First Story</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {submissions.slice(0, 5).map((submission) => (
                                <div
                                    key={submission.id}
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-1">{submission.title}</h3>
                                        <p className="text-sm text-gray-600">{submission.category} • {new Date(submission.submittedAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${submission.status === 'pending'
                                                    ? 'bg-orange-100 text-orange-700'
                                                    : submission.status === 'approved'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {submission.status === 'pending' && '⏳ Pending'}
                                            {submission.status === 'approved' && '✅ Approved'}
                                            {submission.status === 'rejected' && '❌ Rejected'}
                                        </span>
                                        <Link
                                            to={`/contributor/submissions/${submission.id}`}
                                            className="text-primary hover:text-primary/80 font-medium"
                                        >
                                            View →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ContributorDashboard;
