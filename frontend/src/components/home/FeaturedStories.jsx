import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Bookmark, Share2, Clock, User } from 'lucide-react';

const FeaturedStories = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const stories = [
        {
            id: 1,
            title: 'The Mystical Char Dham Yatra: A Spiritual Journey Through the Himalayas',
            excerpt: 'Embark on a sacred pilgrimage through the four holiest shrines of Uttarakhand, where spirituality meets breathtaking natural beauty.',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070',
            author: 'Rajesh Kumar',
            date: '15 Nov 2024',
            readTime: '8 min read',
            category: 'Temples & Char Dham',
            likes: 234,
            saves: 89,
        },
        {
            id: 2,
            title: 'Hidden Waterfalls of Uttarakhand: Nature\'s Best Kept Secrets',
            excerpt: 'Discover the most spectacular and lesser-known waterfalls tucked away in the valleys and forests of Devbhoomi.',
            image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070',
            author: 'Priya Sharma',
            date: '12 Nov 2024',
            readTime: '6 min read',
            category: 'Hidden Places',
            likes: 189,
            saves: 67,
        },
        {
            id: 3,
            title: 'Traditional Kumaoni Cuisine: A Culinary Journey',
            excerpt: 'Explore the authentic flavors of Kumaon region, from Bhatt ki Churkani to Bal Mithai, and the stories behind each dish.',
            image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013',
            author: 'Anita Bisht',
            date: '10 Nov 2024',
            readTime: '5 min read',
            category: 'Food & Lifestyle',
            likes: 312,
            saves: 145,
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
                    >
                        Featured Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-textSecondary max-w-2xl mx-auto"
                    >
                        Dive deep into our most captivating stories, featuring hidden gems, spiritual journeys, and local experiences.
                    </motion.p>
                </div>

                {/* Slider */}
                <div className="relative">
                    <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${stories[currentSlide].image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                                    <div className="max-w-3xl">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-white text-sm font-medium mb-4">
                                                {stories[currentSlide].category}
                                            </span>
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight"
                                        >
                                            {stories[currentSlide].title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-lg text-white/90 mb-6 leading-relaxed"
                                        >
                                            {stories[currentSlide].excerpt}
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex flex-wrap items-center gap-4 mb-6"
                                        >
                                            <div className="flex items-center space-x-2 text-white/80">
                                                <User className="h-4 w-4" />
                                                <span className="text-sm">{stories[currentSlide].author}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-white/80">
                                                <Clock className="h-4 w-4" />
                                                <span className="text-sm">{stories[currentSlide].readTime}</span>
                                            </div>
                                            <span className="text-white/60 text-sm">{stories[currentSlide].date}</span>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="flex items-center gap-4"
                                        >
                                            <Link
                                                to={`/blog/${stories[currentSlide].id}`}
                                                className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                            >
                                                Read Full Story
                                            </Link>

                                            <div className="flex items-center gap-3">
                                                <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white">
                                                    <Heart className="h-5 w-5" />
                                                </button>
                                                <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white">
                                                    <Bookmark className="h-5 w-5" />
                                                </button>
                                                <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white">
                                                    <Share2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                            {stories.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all ${index === currentSlide
                                        ? 'w-12 h-2 bg-white'
                                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                        } rounded-full`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedStories;
