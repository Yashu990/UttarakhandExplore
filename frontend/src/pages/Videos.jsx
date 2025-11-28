import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, ThumbsUp, Clock, Filter } from 'lucide-react';


const Videos = () => {
    // const { t } = useLanguage();
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = ['All', 'Travel', 'Temples', 'Stories'];

    // Sample video data with YouTube video IDs
    const videos = [
        {
            id: 1,
            title: 'Divine Kedarnath Yatra',
            description: 'Experience the spiritual journey to one of the holiest shrines in the Himalayas.',
            youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
            category: 'Temples',
            duration: '12:45',
            views: '45K',
            likes: '2.3K',
            uploadDate: '2 weeks ago',
        },
        {
            id: 2,
            title: 'Hidden Waterfalls of Uttarakhand',
            description: 'Discover the untouched beauty of cascading waterfalls in the deep forests.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Travel',
            duration: '15:20',
            views: '67K',
            likes: '3.4K',
            uploadDate: '1 month ago',
        },
        {
            id: 3,
            title: 'Life in a Himalayan Village',
            description: 'A glimpse into the simple and peaceful life of the mountain people.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Stories',
            duration: '18:30',
            views: '32K',
            likes: '1.9K',
            uploadDate: '3 weeks ago',
        },
        {
            id: 4,
            title: 'Valley of Flowers Trek',
            description: 'Trekking through the UNESCO World Heritage site in full bloom.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Travel',
            duration: '10:15',
            views: '89K',
            likes: '4.2K',
            uploadDate: '1 week ago',
        },
        {
            id: 5,
            title: 'Complete Char Dham Yatra Guide',
            description: 'Everything you need to know before planning your pilgrimage.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Temples',
            duration: '22:10',
            views: '56K',
            likes: '2.8K',
            uploadDate: '2 months ago',
        },
        {
            id: 6,
            title: 'Legends of the Hills',
            description: 'Fascinating stories and folklore passed down through generations.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Stories',
            duration: '14:55',
            views: '28K',
            likes: '1.5K',
            uploadDate: '3 weeks ago',
        },
        {
            id: 7,
            title: 'Rishikesh: Yoga Capital',
            description: 'Exploring the spiritual and adventure hub of Uttarakhand.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Travel',
            duration: '16:40',
            views: '78K',
            likes: '3.9K',
            uploadDate: '1 month ago',
        },
        {
            id: 8,
            title: 'Badrinath Temple History',
            description: 'The ancient history and significance of the Badrinath shrine.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Temples',
            duration: '11:25',
            views: '42K',
            likes: '2.1K',
            uploadDate: '2 weeks ago',
        },
        {
            id: 9,
            title: 'Traditional Pahadi Cuisine',
            description: 'Cooking and tasting the authentic flavors of Uttarakhand.',
            youtubeId: 'dQw4w9WgXcQ',
            category: 'Stories',
            duration: '13:50',
            views: '51K',
            likes: '2.6K',
            uploadDate: '1 week ago',
        },
    ];

    // Filter videos
    const filteredVideos = videos.filter(
        (video) => selectedFilter === 'All' || video.category === selectedFilter
    );

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className="px-6 py-2 bg-accent/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
                                🎥 Video Gallery
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                            Experience Uttarakhand
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Watch stunning videos of landscapes, culture, and spiritual journeys.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                        <Filter className="h-5 w-5 text-primary" />
                        <h2 className="text-xl font-heading font-semibold text-textPrimary">
                            Filter Videos
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all ${selectedFilter === filter
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-textPrimary hover:bg-primary/10 hover:text-primary shadow-md'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-textSecondary">
                        Showing <span className="font-semibold text-textPrimary">{filteredVideos.length}</span>{' '}
                        {filteredVideos.length === 1 ? 'Video' : 'Videos'}
                    </p>
                </div>

                {/* Video Grid */}
                <motion.div
                    layout
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredVideos.map((video) => (
                            <motion.div
                                key={video.id}
                                layout
                                variants={item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                {/* YouTube Embed */}
                                <div className="relative aspect-video bg-gray-900">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                            {video.category}
                                        </span>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute bottom-4 right-4 z-10">
                                        <span className="flex items-center space-x-1 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-white text-xs font-medium">
                                            <Clock className="h-3 w-3" />
                                            <span>{video.duration}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-heading font-semibold text-textPrimary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                        {video.title}
                                    </h3>

                                    <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                                        {video.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-4 text-xs text-textSecondary">
                                            <div className="flex items-center space-x-1">
                                                <Eye className="h-4 w-4" />
                                                <span>{video.views}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <ThumbsUp className="h-4 w-4" />
                                                <span>{video.likes}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-textSecondary">{video.uploadDate}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredVideos.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
                            <Play className="h-12 w-12 text-textSecondary" />
                        </div>
                        <h3 className="text-2xl font-heading font-semibold text-textPrimary mb-2">
                            No videos found
                        </h3>
                        <p className="text-textSecondary">
                            Try selecting a different category.
                        </p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-secondary p-12 text-center text-white"
                >
                    {/* Decorative Background */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-6">
                            <Play className="h-12 w-12" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Want to see more?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Subscribe to our YouTube channel for weekly updates and travel guides.
                        </p>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            <Play className="h-5 w-5" fill="currentColor" />
                            <span>Visit Channel</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Videos;
