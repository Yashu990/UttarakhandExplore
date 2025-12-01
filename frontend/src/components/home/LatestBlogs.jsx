import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Bookmark, Share2, Clock, User, ArrowRight } from 'lucide-react';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    // Static blog data (fallback content)
    const staticBlogs = [
        {
            id: 1,
            title: 'The Mystical Char Dham Yatra',
            excerpt: 'A spiritual journey through the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            author: 'Amit Singh',
            date: '18 Nov 2024',
            readTime: '7 min',
            category: 'Travel Guides',
            likes: 156,
            saves: 45,
            isStatic: true,
        },
        {
            id: 2,
            title: 'Kumaoni Folk Art: Aipan',
            excerpt: 'Discover the traditional red and white folk art of Kumaon region used in festivals and ceremonies.',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
            author: 'Meera Joshi',
            date: '17 Nov 2024',
            readTime: '6 min',
            category: 'Culture',
            likes: 203,
            saves: 78,
            isStatic: true,
        },
        {
            id: 3,
            title: 'Trekking to Roopkund Lake',
            excerpt: 'An adventurous trek to the mysterious skeleton lake situated at an altitude of 5,029 meters.',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
            author: 'Vikram Rawat',
            date: '16 Nov 2024',
            readTime: '9 min',
            category: 'Adventure',
            likes: 287,
            saves: 112,
            isStatic: true,
        },
        {
            id: 4,
            title: 'Festivals of Uttarakhand',
            excerpt: 'Experience the vibrant culture through festivals like Harela, Phool Dei, and Nanda Devi Raj Jat.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
            author: 'Sunita Negi',
            date: '15 Nov 2024',
            readTime: '5 min',
            category: 'Culture',
            likes: 134,
            saves: 56,
            isStatic: true,
        },
        {
            id: 5,
            title: 'River Rafting in Rishikesh',
            excerpt: 'The ultimate guide to white water rafting in the Ganges at the adventure capital of India.',
            image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
            author: 'Ravi Chauhan',
            date: '14 Nov 2024',
            readTime: '8 min',
            category: 'Adventure',
            likes: 245,
            saves: 98,
            isStatic: true,
        },
        {
            id: 6,
            title: 'Traditional Pahadi Cuisine',
            excerpt: 'Explore the unique flavors of Uttarakhand with dishes like Kafuli, Phanu, and Bal Mithai.',
            image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800',
            author: 'Kavita Bhatt',
            date: '13 Nov 2024',
            readTime: '6 min',
            category: 'Culture',
            likes: 178,
            saves: 67,
            isStatic: true,
        },
    ];

    // Calculate read time based on content length
    const calculateReadTime = (content) => {
        if (!content) return '5 min';
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return `${minutes} min`;
    };

    // Transform submission to blog format
    const transformSubmissionToBlog = (submission) => {
        const publishedDate = new Date(submission.publishedAt || submission.submittedAt);

        return {
            id: submission.id,
            title: submission.title,
            excerpt: submission.excerpt || (submission.content ? submission.content.substring(0, 150) + '...' : 'No excerpt available'),
            image: submission.images?.[0]?.url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            author: submission.contributorName || 'Anonymous Contributor',
            date: publishedDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            readTime: calculateReadTime(submission.content),
            category: submission.category || 'General',
            likes: submission.likes || 0,
            saves: submission.saves || 0,
            isContributorPost: true,
            publishedTimestamp: publishedDate.getTime(),
        };
    };

    // Load blogs on component mount
    useEffect(() => {
        try {
            // Fetch approved submissions from localStorage
            const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
            const approvedPosts = submissions
                .filter(s => s.status === 'approved')
                .map(transformSubmissionToBlog);

            // Add timestamp to static blogs for sorting
            const staticBlogsWithTimestamp = staticBlogs.map(blog => ({
                ...blog,
                publishedTimestamp: new Date(blog.date).getTime(),
            }));

            // Merge approved posts with static blogs
            const allBlogs = [...approvedPosts, ...staticBlogsWithTimestamp];

            // Sort by published date (most recent first)
            allBlogs.sort((a, b) => b.publishedTimestamp - a.publishedTimestamp);

            // Limit to top 6 posts
            const topBlogs = allBlogs.slice(0, 6);

            setBlogs(topBlogs);
        } catch (error) {
            console.error('Error loading blogs:', error);
            // Fallback to static blogs if there's an error
            setBlogs(staticBlogs);
        }
    }, []);

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
        <section className="py-20 bg-gradient-to-b from-white to-bgLight">
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
                            Latest Stories
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-textSecondary"
                        >
                            Discover the untold stories, travel guides, and cultural insights from the Land of Gods.
                        </motion.p>
                    </div>
                    <Link
                        to="/blogs"
                        className="hidden md:flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors group"
                    >
                        <span>View All Blogs</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Blog Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogs.map((blog) => (
                        <motion.article
                            key={blog.id}
                            variants={item}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <Link to={`/blog/${blog.id}`} className="block relative h-56 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${blog.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                                        {blog.category}
                                    </span>
                                </div>

                                {/* Contributor Badge */}
                                {blog.isContributorPost && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                            Contributor
                                        </span>
                                    </div>
                                )}

                                {/* Quick Actions */}
                                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                        <Heart className="h-4 w-4 text-textPrimary" />
                                    </button>
                                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                        <Bookmark className="h-4 w-4 text-textPrimary" />
                                    </button>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="p-6">
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="block mb-3 group-hover:text-accent transition-colors"
                                >
                                    <h3 className="text-xl font-heading font-semibold text-textPrimary mb-2 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                </Link>

                                <p className="text-textSecondary text-sm mb-4 line-clamp-2">
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-xs text-textSecondary mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-1">
                                            <User className="h-3.5 w-3.5" />
                                            <span>{blog.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-3.5 w-3.5" />
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-4 text-xs text-textSecondary">
                                        <div className="flex items-center space-x-1">
                                            <Heart className="h-4 w-4" />
                                            <span>{blog.likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Bookmark className="h-4 w-4" />
                                            <span>{blog.saves}</span>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="flex items-center space-x-1 text-accent text-sm font-semibold hover:space-x-2 transition-all"
                                    >
                                        <span>Read More</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold"
                    >
                        <span>View All Blogs</span>
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
