import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Save,
    Send,
    Image,
    Video,
    MapPin,
    Tag,
    Calendar,
    ArrowLeft,
    X,
    Upload,
} from 'lucide-react';

const SubmitStory = () => {
    const navigate = useNavigate();
    const [user] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    });

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
        location: '',
        district: '',
        tags: '',
        bestTimeToVisit: '',
    });

    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [saving, setSaving] = useState(false);

    const categories = [
        'Adventure',
        'Temple Visit',
        'Hidden Places',
        'Local Food',
        'Culture',
        'Trekking',
        'Wildlife',
        'Photography',
    ];

    const districts = [
        'Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun',
        'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh',
        'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'
    ];

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            id: Date.now() + Math.random(),
            file,
            preview: URL.createObjectURL(file),
            caption: ''
        }));
        setImages([...images, ...newImages].slice(0, 10)); // Max 10 images
    };

    const handleVideoUpload = (e) => {
        const files = Array.from(e.target.files);
        const newVideos = files.map(file => ({
            id: Date.now() + Math.random(),
            file,
            preview: URL.createObjectURL(file),
            caption: ''
        }));
        setVideos([...videos, ...newVideos].slice(0, 3)); // Max 3 videos
    };

    const removeImage = (id) => {
        setImages(images.filter(img => img.id !== id));
    };

    const removeVideo = (id) => {
        setVideos(videos.filter(vid => vid.id !== id));
    };

    const handleSubmit = (status) => {
        if (!formData.title || !formData.content || !formData.category) {
            alert('Please fill in all required fields');
            return;
        }

        setSaving(true);

        const submission = {
            id: Date.now().toString(),
            contributorId: user.id,
            contributorName: user.name,
            ...formData,
            tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
            images: images.map(img => ({ url: img.preview, caption: img.caption })),
            videos: videos.map(vid => ({ url: vid.preview, caption: vid.caption })),
            status: status, // 'draft' or 'pending'
            submittedAt: new Date().toISOString(),
            views: 0,
            likes: 0,
            comments: 0,
        };

        // Save to localStorage
        const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        submissions.push(submission);
        localStorage.setItem('submissions', JSON.stringify(submissions));

        setSaving(false);

        if (status === 'draft') {
            alert('Story saved as draft!');
            navigate('/contributor/dashboard');
        } else {
            alert('Story submitted for review!');
            navigate('/contributor/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 mt-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => navigate('/contributor/dashboard')}
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary mb-4 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Dashboard</span>
                    </button>
                    <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                        Share Your Story
                    </h1>
                    <p className="text-gray-600">Tell the world about your adventure in Uttarakhand</p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Title */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Story Title *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g., My Trek to Valley of Flowers"
                            required
                        />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Your Story *
                        </label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            rows={12}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                            placeholder="Share your experience, tips, and memories..."
                            required
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            {formData.content.length} characters
                        </p>
                    </div>

                    {/* Category & District */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Category *
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                required
                            >
                                <option value="">Select category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                District
                            </label>
                            <select
                                value={formData.district}
                                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            >
                                <option value="">Select district</option>
                                {districts.map(dist => (
                                    <option key={dist} value={dist}>{dist}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Location & Best Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                <MapPin className="inline h-4 w-4 mr-1" />
                                Location/Place Name
                            </label>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="e.g., Valley of Flowers National Park"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                <Calendar className="inline h-4 w-4 mr-1" />
                                Best Time to Visit
                            </label>
                            <input
                                type="text"
                                value={formData.bestTimeToVisit}
                                onChange={(e) => setFormData({ ...formData, bestTimeToVisit: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="e.g., June to September"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            <Tag className="inline h-4 w-4 mr-1" />
                            Tags (comma separated)
                        </label>
                        <input
                            type="text"
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g., trekking, mountains, flowers, photography"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            <Image className="inline h-4 w-4 mr-1" />
                            Photos (Max 10)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="hidden"
                                id="image-upload"
                            />
                            <label htmlFor="image-upload" className="cursor-pointer">
                                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-600">Click to upload images</p>
                                <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
                            </label>
                        </div>

                        {/* Image Previews */}
                        {images.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                {images.map((img) => (
                                    <div key={img.id} className="relative group">
                                        <img
                                            src={img.preview}
                                            alt="Preview"
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                        <button
                                            onClick={() => removeImage(img.id)}
                                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Video Upload */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            <Video className="inline h-4 w-4 mr-1" />
                            Videos (Max 3) - Optional
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                            <input
                                type="file"
                                accept="video/*"
                                multiple
                                onChange={handleVideoUpload}
                                className="hidden"
                                id="video-upload"
                            />
                            <label htmlFor="video-upload" className="cursor-pointer">
                                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-600">Click to upload videos</p>
                                <p className="text-sm text-gray-500 mt-1">MP4, MOV up to 50MB each</p>
                            </label>
                        </div>

                        {/* Video Previews */}
                        {videos.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                {videos.map((vid) => (
                                    <div key={vid.id} className="relative group">
                                        <video
                                            src={vid.preview}
                                            className="w-full h-32 object-cover rounded-lg"
                                            controls
                                        />
                                        <button
                                            onClick={() => removeVideo(vid.id)}
                                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => handleSubmit('draft')}
                            disabled={saving}
                            className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
                        >
                            <Save className="h-5 w-5" />
                            <span>Save as Draft</span>
                        </button>

                        <button
                            onClick={() => handleSubmit('pending')}
                            disabled={saving}
                            className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg disabled:opacity-50"
                        >
                            <Send className="h-5 w-5" />
                            <span>Submit for Review</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitStory;
