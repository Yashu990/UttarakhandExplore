import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    CheckCircle,
    XCircle,
    Calendar,
    MapPin,
    Tag,
    User,
    Image as ImageIcon,
    Video,
    AlertCircle,
} from 'lucide-react';

const SubmissionReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [submission, setSubmission] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // Load submission from localStorage
        const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        const found = submissions.find(s => s.id === id);

        if (found) {
            setSubmission(found);
            setFeedback(found.adminFeedback || '');
        } else {
            // Submission not found, redirect
            navigate('/admin/submissions');
        }
    }, [id, navigate]);

    const handleApprove = () => {
        if (!submission) return;

        setProcessing(true);

        // Update submission status
        const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        const updatedSubmissions = submissions.map(s => {
            if (s.id === id) {
                return {
                    ...s,
                    status: 'approved',
                    reviewedAt: new Date().toISOString(),
                    reviewedBy: 'admin', // In production, use actual admin ID
                    adminFeedback: feedback,
                    publishedAt: new Date().toISOString(),
                };
            }
            return s;
        });

        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));

        // Update contributor's approved count
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.map(u => {
            if (u.id === submission.contributorId) {
                const approvedCount = (u.contributorProfile?.approvedStoriesCount || 0) + 1;
                let badge = u.contributorProfile?.badge || 'bronze';

                // Update badge based on approved stories
                if (approvedCount >= 16) badge = 'gold';
                else if (approvedCount >= 6) badge = 'silver';
                else badge = 'bronze';

                return {
                    ...u,
                    contributorProfile: {
                        ...u.contributorProfile,
                        approvedStoriesCount: approvedCount,
                        badge: badge,
                    },
                };
            }
            return u;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setProcessing(false);
        alert('✅ Story approved and published!');
        navigate('/admin/submissions');
    };

    const handleReject = () => {
        if (!submission) return;

        if (!feedback.trim()) {
            alert('Please provide feedback for the rejection');
            return;
        }

        setProcessing(true);

        // Update submission status
        const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        const updatedSubmissions = submissions.map(s => {
            if (s.id === id) {
                return {
                    ...s,
                    status: 'rejected',
                    reviewedAt: new Date().toISOString(),
                    reviewedBy: 'admin',
                    adminFeedback: feedback,
                };
            }
            return s;
        });

        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));

        setProcessing(false);
        alert('❌ Story rejected. Contributor can view your feedback.');
        navigate('/admin/submissions');
    };

    if (!submission) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 mt-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/admin/submissions"
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary mb-4 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Queue</span>
                    </Link>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                                Review Submission
                            </h1>
                            <p className="text-gray-600">Evaluate and moderate this submission</p>
                        </div>
                        <span
                            className={`px-4 py-2 rounded-full text-sm font-medium ${submission.status === 'pending'
                                    ? 'bg-orange-100 text-orange-700'
                                    : submission.status === 'approved'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                }`}
                        >
                            {submission.status.toUpperCase()}
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Story Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {submission.title}
                            </h2>

                            {/* Metadata */}
                            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <User className="h-4 w-4" />
                                    <span>{submission.contributorName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                                </div>
                                {submission.location && (
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{submission.location}</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="prose max-w-none mb-6">
                                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                    {submission.content}
                                </p>
                            </div>

                            {/* Tags */}
                            {submission.tags && submission.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Tag className="h-4 w-4 text-gray-400" />
                                    {submission.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Images */}
                            {submission.images && submission.images.length > 0 && (
                                <div className="mb-6">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <ImageIcon className="h-5 w-5 text-gray-700" />
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Photos ({submission.images.length})
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {submission.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img.url}
                                                alt={`Photo ${index + 1}`}
                                                className="w-full h-48 object-cover rounded-lg shadow-md"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Videos */}
                            {submission.videos && submission.videos.length > 0 && (
                                <div>
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Video className="h-5 w-5 text-gray-700" />
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Videos ({submission.videos.length})
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {submission.videos.map((vid, index) => (
                                            <video
                                                key={index}
                                                src={vid.url}
                                                controls
                                                className="w-full rounded-lg shadow-md"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Sidebar - Right Side */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Submission Info</h3>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="text-gray-600 mb-1">Category</p>
                                    <p className="font-semibold text-gray-900">{submission.category}</p>
                                </div>

                                {submission.district && (
                                    <div>
                                        <p className="text-gray-600 mb-1">District</p>
                                        <p className="font-semibold text-gray-900">{submission.district}</p>
                                    </div>
                                )}

                                {submission.bestTimeToVisit && (
                                    <div>
                                        <p className="text-gray-600 mb-1">Best Time to Visit</p>
                                        <p className="font-semibold text-gray-900">{submission.bestTimeToVisit}</p>
                                    </div>
                                )}

                                <div>
                                    <p className="text-gray-600 mb-1">Word Count</p>
                                    <p className="font-semibold text-gray-900">
                                        {submission.content.split(' ').length} words
                                    </p>
                                </div>
                            </div>

                            <hr className="my-6" />

                            {/* Feedback */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Admin Feedback {submission.status === 'pending' && '(Optional)'}
                                </label>
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none text-sm"
                                    placeholder={
                                        submission.status === 'pending'
                                            ? 'Provide feedback (required for rejection)...'
                                            : 'No feedback provided'
                                    }
                                    disabled={submission.status !== 'pending'}
                                />
                            </div>

                            {/* Action Buttons */}
                            {submission.status === 'pending' && (
                                <div className="space-y-3">
                                    <button
                                        onClick={handleApprove}
                                        disabled={processing}
                                        className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <CheckCircle className="h-5 w-5" />
                                        <span>Approve & Publish</span>
                                    </button>

                                    <button
                                        onClick={handleReject}
                                        disabled={processing}
                                        className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <XCircle className="h-5 w-5" />
                                        <span>Reject</span>
                                    </button>
                                </div>
                            )}

                            {submission.status !== 'pending' && (
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-start space-x-2">
                                        <AlertCircle className="h-5 w-5 text-gray-500 mt-0.5" />
                                        <div className="text-sm text-gray-600">
                                            <p className="font-medium mb-1">Already Reviewed</p>
                                            <p>This submission has been {submission.status}.</p>
                                            {submission.reviewedAt && (
                                                <p className="text-xs mt-2">
                                                    Reviewed on {new Date(submission.reviewedAt).toLocaleDateString()}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmissionReview;
