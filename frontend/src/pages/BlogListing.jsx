import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    Bookmark,
    Share2,
    Clock,
    User,
    ArrowRight,
    Filter,
    SlidersHorizontal,
    ChevronDown,
    TrendingUp,
    Calendar,
    X
} from 'lucide-react';



const BlogListing = () => {
    // const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);

    const categories = [
        'All',
        'Culture',
        'Temples & Char Dham',
        'Travel Guides',
        'Hidden Places',
        'Food & Lifestyle',
        'History',
        'Adventure',
    ];

    const sortOptions = [
        { value: 'newest', label: 'Newest First', icon: Calendar },
        { value: 'oldest', label: 'Oldest First', icon: Calendar },
        { value: 'trending', label: 'Trending', icon: TrendingUp },
    ];

    // Sample blog data (in real app, this would come from API)
    const allBlogs = [
        {
            id: 1,
            title: 'Valley of Flowers: A Photographer\'s Paradise',
            excerpt: 'Witness the mesmerizing carpet of alpine flowers in one of the most beautiful national parks in the world.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            author: 'Amit Singh',
            date: '18 Nov 2024',
            readTime: '7 min',
            category: 'Travel Guides',
            likes: 156,
            saves: 45,
            trending: true,
        },
        {
            id: 2,
            title: 'Ancient Temples of Garhwal: Architectural Marvels',
            excerpt: 'Explore the intricate stone carvings and spiritual significance of centuries-old temples.',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
            author: 'Meera Joshi',
            date: '17 Nov 2024',
            readTime: '6 min',
            category: 'Temples & Char Dham',
            likes: 203,
            saves: 78,
            trending: true,
        },
        {
            id: 3,
            title: 'Trekking to Roopkund: The Mysterious Skeleton Lake',
            excerpt: 'Join us on an adventure to one of the most enigmatic high-altitude lakes in the Himalayas.',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
            author: 'Vikram Rawat',
            date: '16 Nov 2024',
            readTime: '9 min',
            category: 'Adventure',
            likes: 287,
            saves: 112,
            trending: true,
        },
        {
            id: 4,
            title: 'Kumaoni Folk Music: Echoes of the Hills',
            excerpt: 'Discover the rich musical heritage that has been passed down through generations.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
            author: 'Sunita Negi',
            date: '15 Nov 2024',
            readTime: '5 min',
            category: 'Culture',
            likes: 134,
            saves: 56,
            trending: false,
        },
        {
            id: 5,
            title: 'Wildlife Safari in Jim Corbett National Park',
            excerpt: 'Experience thrilling encounters with Bengal tigers in India\'s oldest national park.',
            image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
            author: 'Ravi Chauhan',
            date: '14 Nov 2024',
            readTime: '8 min',
            category: 'Adventure',
            likes: 245,
            saves: 98,
            trending: false,
        },
        {
            id: 6,
            title: 'Traditional Uttarakhandi Festivals and Celebrations',
            excerpt: 'Immerse yourself in the vibrant festivals that bring communities together.',
            image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800',
            author: 'Kavita Bhatt',
            date: '13 Nov 2024',
            readTime: '6 min',
            category: 'Culture',
            likes: 178,
            saves: 67,
            trending: false,
        },
        {
            id: 7,
            title: 'Hidden Gems of Kumaon: Off the Beaten Path',
            excerpt: 'Discover secret villages and pristine locations rarely visited by tourists.',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
            author: 'Deepak Joshi',
            date: '12 Nov 2024',
            readTime: '7 min',
            category: 'Hidden Places',
            likes: 198,
            saves: 89,
            trending: false,
        },
        {
            id: 8,
            title: 'Authentic Garhwali Cuisine: A Food Lover\'s Guide',
            excerpt: 'From Chainsoo to Kafuli, explore the delicious dishes that define Garhwal.',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
            author: 'Rekha Rawat',
            date: '11 Nov 2024',
            readTime: '6 min',
            category: 'Food & Lifestyle',
            likes: 221,
            saves: 93,
            trending: false,
        },
        {
            id: 9,
            title: 'The History of Kumaon Kingdom',
            excerpt: 'Trace the fascinating history of the Chand dynasty and their legacy.',
            image: 'https://images.unsplash.com/photo-1604580864840-e4504fec7e12?q=80&w=800',
            author: 'Dr. Ramesh Pandey',
            date: '10 Nov 2024',
            readTime: '10 min',
            category: 'History',
            likes: 156,
            saves: 71,
            trending: false,
        },
    ];

    // Filter and sort blogs
    const filteredBlogs = allBlogs
        .filter(blog => selectedCategory === 'All' || blog.category === selectedCategory)
        .sort((a, b) => {
            if (sortBy === 'newest') {
                return new Date(b.date) - new Date(a.date);
            } else if (sortBy === 'oldest') {
                return new Date(a.date) - new Date(b.date);
            } else if (sortBy === 'trending') {
                return b.likes - a.likes;
            }
            return 0;
        });

    // Pagination
    const blogsPerPage = 6;
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                            {selectedCategory === 'All' ? 'Explore Our Stories' : selectedCategory}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Discover {filteredBlogs.length} stories about the culture, nature, and people of Uttarakhand.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters and Sorting Bar */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center justify-center space-x-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <Filter className="h-5 w-5 text-primary" />
                            <span className="font-semibold text-textPrimary">Filters</span>
                        </button>

                        {/* Desktop Categories */}
                        <div className="hidden lg:flex items-center flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-5 py-2.5 rounded-full font-medium transition-all ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-white text-textPrimary hover:bg-primary/10 hover:text-primary'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Desktop Sort */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <SlidersHorizontal className="h-5 w-5 text-textSecondary" />
                            <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
                                {sortOptions.map((option) => {
                                    const IconComponent = option.icon;
                                    return (
                                        <button
                                            key={option.value}
                                            onClick={() => setSortBy(option.value)}
                                            className={`px-4 py-2.5 flex items-center space-x-2 transition-all ${sortBy === option.value
                                                ? 'bg-primary text-white'
                                                : 'text-textPrimary hover:bg-gray-50'
                                                }`}
                                        >
                                            <IconComponent className="h-4 w-4" />
                                            <span className="text-sm font-medium">{option.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filters Panel */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-heading font-semibold text-textPrimary">
                                        Filters
                                    </h3>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="h-5 w-5 text-textSecondary" />
                                    </button>
                                </div>

                                {/* Mobile Categories */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-textSecondary mb-3">Categories</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    setCurrentPage(1);
                                                }}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                                    ? 'bg-primary text-white'
                                                    : 'bg-gray-100 text-textPrimary hover:bg-primary/10'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Sort */}
                                <div>
                                    <h4 className="text-sm font-semibold text-textSecondary mb-3">Sort By</h4>
                                    <div className="space-y-2">
                                        {sortOptions.map((option) => {
                                            const IconComponent = option.icon;
                                            return (
                                                <button
                                                    key={option.value}
                                                    onClick={() => setSortBy(option.value)}
                                                    className={`w-full px-4 py-3 rounded-xl flex items-center space-x-3 transition-all ${sortBy === option.value
                                                        ? 'bg-primary text-white'
                                                        : 'bg-gray-50 text-textPrimary hover:bg-gray-100'
                                                        }`}
                                                >
                                                    <IconComponent className="h-5 w-5" />
                                                    <span className="font-medium">{option.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-textSecondary">
                        Showing <span className="font-semibold text-textPrimary">{paginatedBlogs.length}</span> of{' '}
                        <span className="font-semibold text-textPrimary">{filteredBlogs.length}</span> results
                    </p>
                </div>

                {/* Blog Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    <AnimatePresence mode="popLayout">
                        {paginatedBlogs.map((blog, index) => (
                            <motion.article
                                key={blog.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
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

                                    {/* Trending Badge */}
                                    {blog.trending && (
                                        <div className="absolute top-4 right-4">
                                            <span className="flex items-center space-x-1 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                                <TrendingUp className="h-3 w-3" />
                                                <span>Trending</span>
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
                                            <span>Read Story</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-textPrimary hover:bg-primary hover:text-white shadow-md'
                                }`}
                        >
                            Previous
                        </button>

                        <div className="flex items-center gap-2">
                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 rounded-lg font-semibold transition-all ${currentPage === page
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-white text-textPrimary hover:bg-primary/10'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-textPrimary hover:bg-primary hover:text-white shadow-md'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogListing;
