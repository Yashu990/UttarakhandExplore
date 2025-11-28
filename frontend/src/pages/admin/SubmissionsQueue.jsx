import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Filter,
    Search,
    Clock,
    CheckCircle,
    XCircle,
    Eye,
} from 'lucide-react';

const SubmissionsQueue = () => {
    const [submissions, setSubmissions] = useState(() => {
        return JSON.parse(localStorage.getItem('submissions') || '[]');
    });

    const [filter, setFilter] = useState('all'); // all, pending, approved, rejected
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        'Adventure', 'Temple Visit', 'Hidden Places', 'Local Food',
        'Culture', 'Trekking', 'Wildlife', 'Photography'
    ];

    // Filter submissions
    const filteredSubmissions = submissions.filter(sub => {
        const matchesStatus = filter === 'all' || sub.status === filter;
        const matchesCategory = categoryFilter === 'all' || sub.category === categoryFilter;
        const matchesSearch = !searchQuery ||
            sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sub.contributorName.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesStatus && matchesCategory && matchesSearch;
    });

    const stats = {
        all: submissions.length,
        pending: submissions.filter(s => s.status === 'pending').length,
        approved: submissions.filter(s => s.status === 'approved').length,
        rejected: submissions.filter(s => s.status === 'rejected').length,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/admin/dashboard"
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary mb-4 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Dashboard</span>
                    </Link>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                        Submissions Queue
                    </h1>
                    <p className="text-gray-600">Review and moderate community submissions</p>
                </motion.div>

                {/* Stats Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <button
                        onClick={() => setFilter('all')}
                        className={`p-4 rounded-xl transition-all ${filter === 'all'
                                ? 'bg-primary text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <p className="text-sm opacity-90 mb-1">All</p>
                        <p className="text-2xl font-bold">{stats.all}</p>
                    </button>

                    <button
                        onClick={() => setFilter('pending')}
                        className={`p-4 rounded-xl transition-all ${filter === 'pending'
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <p className="text-sm opacity-90 mb-1">Pending</p>
                        <p className="text-2xl font-bold">{stats.pending}</p>
                    </button>

                    <button
                        onClick={() => setFilter('approved')}
                        className={`p-4 rounded-xl transition-all ${filter === 'approved'
                                ? 'bg-green-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <p className="text-sm opacity-90 mb-1">Approved</p>
                        <p className="text-2xl font-bold">{stats.approved}</p>
                    </button>

                    <button
                        onClick={() => setFilter('rejected')}
                        className={`p-4 rounded-xl transition-all ${filter === 'rejected'
                                ? 'bg-red-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <p className="text-sm opacity-90 mb-1">Rejected</p>
                        <p className="text-2xl font-bold">{stats.rejected}</p>
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by title or contributor..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        >
                            <option value="all">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        {/* Reset */}
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setCategoryFilter('all');
                                setFilter('all');
                            }}
                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* Submissions List */}
                <div className="space-y-4">
                    {filteredSubmissions.length === 0 ? (
                        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg">No submissions found</p>
                            <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
                        </div>
                    ) : (
                        filteredSubmissions.map((submission) => (
                            <motion.div
                                key={submission.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    {/* Left - Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4">
                                            {/* Thumbnail */}
                                            {submission.images && submission.images.length > 0 && (
                                                <img
                                                    src={submission.images[0].url}
                                                    alt={submission.title}
                                                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                                                />
                                            )}

                                            {/* Details */}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {submission.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                                    <span className="flex items-center">
                                                        👤 {submission.contributorName}
                                                    </span>
                                                    <span>•</span>
                                                    <span className="px-2 py-1 bg-gray-100 rounded-md">
                                                        {submission.category}
                                                    </span>
                                                    {submission.district && (
                                                        <>
                                                            <span>•</span>
                                                            <span>📍 {submission.district}</span>
                                                        </>
                                                    )}
                                                    <span>•</span>
                                                    <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                                                </div>
                                                <p className="text-gray-700 mt-2 line-clamp-2">
                                                    {submission.content.substring(0, 150)}...
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - Status & Actions */}
                                    <div className="flex flex-col items-end gap-3">
                                        <span
                                            className={`px-4 py-2 rounded-full text-sm font-medium ${submission.status === 'pending'
                                                    ? 'bg-orange-100 text-orange-700'
                                                    : submission.status === 'approved'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {submission.status === 'pending' && (
                                                <><Clock className="inline h-4 w-4 mr-1" />Pending</>
                                            )}
                                            {submission.status === 'approved' && (
                                                <><CheckCircle className="inline h-4 w-4 mr-1" />Approved</>
                                            )}
                                            {submission.status === 'rejected' && (
                                                <><XCircle className="inline h-4 w-4 mr-1" />Rejected</>
                                            )}
                                        </span>

                                        <Link
                                            to={`/admin/submissions/${submission.id}/review`}
                                            className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
                                        >
                                            <Eye className="h-4 w-4" />
                                            <span>Review</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubmissionsQueue;
