import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    FileText,
    Users,
    CheckCircle,
    XCircle,
    Clock,
    TrendingUp,
    Eye,
} from 'lucide-react';

const AdminDashboard = () => {
    // Get all submissions
    const [submissions] = useState(() => {
        return JSON.parse(localStorage.getItem('submissions') || '[]');
    });

    // Get all users
    const [users] = useState(() => {
        return JSON.parse(localStorage.getItem('users') || '[]');
    });

    // Calculate statistics
    const stats = {
        totalSubmissions: submissions.length,
        pendingSubmissions: submissions.filter(s => s.status === 'pending').length,
        approvedSubmissions: submissions.filter(s => s.status === 'approved').length,
        rejectedSubmissions: submissions.filter(s => s.status === 'rejected').length,
        totalUsers: users.length,
        contributors: users.filter(u => u.role === 'contributor').length,
        totalViews: submissions.reduce((sum, s) => sum + (s.views || 0), 0),
    };

    // Get recent submissions (last 5)
    const recentSubmissions = submissions
        .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
        .slice(0, 5);

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
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-600">Manage content, users, and platform operations</p>
                </motion.div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Pending Review</p>
                                <p className="text-3xl font-bold text-orange-600">{stats.pendingSubmissions}</p>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <Clock className="h-6 w-6 text-orange-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Approved Content</p>
                                <p className="text-3xl font-bold text-green-600">{stats.approvedSubmissions}</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-xl">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Active Contributors</p>
                                <p className="text-3xl font-bold text-blue-600">{stats.contributors}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Views</p>
                                <p className="text-3xl font-bold text-purple-600">{stats.totalViews.toLocaleString()}</p>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-xl">
                                <Eye className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/admin/submissions"
                            className="block bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Review Submissions</h3>
                                    <p className="text-white/90 mb-4">
                                        {stats.pendingSubmissions} {stats.pendingSubmissions === 1 ? 'submission' : 'submissions'} waiting for review
                                    </p>
                                    <span className="inline-flex items-center space-x-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                        <span>Start Reviewing</span>
                                        <span>→</span>
                                    </span>
                                </div>
                                <FileText className="h-16 w-16 text-white/30" />
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            to="/admin/users"
                            className="block bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Manage Users</h3>
                                    <p className="text-white/90 mb-4">
                                        {stats.totalUsers} total users, {stats.contributors} contributors
                                    </p>
                                    <span className="inline-flex items-center space-x-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                        <span>View Users</span>
                                        <span>→</span>
                                    </span>
                                </div>
                                <Users className="h-16 w-16 text-white/30" />
                            </div>
                        </Link>
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
                            to="/admin/submissions"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            View All →
                        </Link>
                    </div>

                    {recentSubmissions.length === 0 ? (
                        <div className="text-center py-12">
                            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600">No submissions yet</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {recentSubmissions.map((submission) => (
                                <div
                                    key={submission.id}
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-1">{submission.title}</h3>
                                        <p className="text-sm text-gray-600">
                                            By {submission.contributorName} • {submission.category} • {new Date(submission.submittedAt).toLocaleDateString()}
                                        </p>
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
                                            to={`/admin/submissions/${submission.id}/review`}
                                            className="text-primary hover:text-primary/80 font-medium"
                                        >
                                            Review →
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

export default AdminDashboard;
