import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Eye, ThumbsUp, Clock } from 'lucide-react';

const VideosPreview = () => {
    const videos = [
        {
            id: 1,
            title: 'Kedarnath Trek: A Spiritual Adventure',
            thumbnail: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
            duration: '12:45',
            views: '45K',
            likes: '2.3K',
        },
        {
            id: 2,
            title: 'Street Food Tour of Dehradun',
            thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
            duration: '8:30',
            views: '32K',
            likes: '1.8K',
        },
        {
            id: 3,
            title: 'Wildlife of Jim Corbett National Park',
            thumbnail: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
            duration: '15:20',
            views: '67K',
            likes: '3.4K',
        },
        {
            id: 4,
            title: 'Valley of Flowers in Full Bloom',
            thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            duration: '10:15',
            views: '89K',
            likes: '4.2K',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-bgLight to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
                        >
                            Video Gallery
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-textSecondary"
                        >
                            Experience Uttarakhand through our curated video content
                        </motion.p>
                    </div>
                    <Link
                        to="/videos"
                        className="hidden md:flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors group"
                    >
                        <span>Watch All</span>
                        <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link to={`/video/${video.id}`} className="block">
                                {/* Thumbnail */}
                                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all shadow-2xl">
                                            <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="absolute bottom-3 right-3">
                                        <span className="flex items-center space-x-1 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-white text-xs font-medium">
                                            <Clock className="h-3 w-3" />
                                            <span>{video.duration}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-lg font-heading font-semibold text-textPrimary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                    {video.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-textSecondary">
                                    <div className="flex items-center space-x-1">
                                        <Eye className="h-4 w-4" />
                                        <span>{video.views}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span>{video.likes}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/videos"
                        className="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold"
                    >
                        <Play className="h-5 w-5" />
                        <span>Watch All Videos</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VideosPreview;
