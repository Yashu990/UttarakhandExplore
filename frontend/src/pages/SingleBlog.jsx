import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Heart,
    Bookmark,
    Share2,
    Clock,
    User,
    Calendar,
    ChevronLeft,
    Facebook,
    Twitter,
    Linkedin,
    Copy,
    Check,
    MessageCircle,
    Send,
    Globe,
    ArrowRight,
} from 'lucide-react';



const SingleBlog = () => {
    // const { t, language } = useLanguage();
    const { id } = useParams();
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    // const [selectedLanguage, setSelectedLanguage] = useState(language === 'hi' ? 'hi' : 'en');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [commentName, setCommentName] = useState('');

    // Load comments from localStorage on mount
    useEffect(() => {
        const savedComments = localStorage.getItem(`blog-${id}-comments`);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }

        // Load saved/liked state
        const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]');
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
        setIsSaved(savedBlogs.includes(id));
        setIsLiked(likedBlogs.includes(id));
    }, [id]);

    // Update selectedLanguage when global language changes
    // useEffect(() => {
    //     if (language === 'hi') {
    //         setSelectedLanguage('hi');
    //     } else {
    //         setSelectedLanguage('en');
    //     }
    // }, [language]);

    // Sample blog data (in real app, this would come from API)
    const blog = {
        id: 1,
        title: 'The Mystical Char Dham Yatra: A Spiritual Journey Through the Himalayas',
        coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070',
        author: {
            name: 'Rajesh Kumar',
            avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=1F4E79&color=fff',
            bio: 'Travel writer and photographer specializing in Himalayan culture',
        },
        date: '15 November 2024',
        readTime: '8 min read',
        category: 'Temples & Char Dham',
        likes: 234,
        saves: 89,
        views: '2.4K',
        content: {
            en: {
                intro: 'The Char Dham Yatra is not just a pilgrimage; it\'s a transformative journey through some of the most breathtaking landscapes in the Indian Himalayas. Every year, thousands of devotees and adventure seekers embark on this sacred circuit, visiting the four holiest Hindu shrines nestled in the Garhwal region of Uttarakhand.',
                sections: [
                    {
                        heading: 'The Four Sacred Shrines',
                        text: 'Yamunotri, Gangotri, Kedarnath, and Badrinath - each of these divine destinations holds profound spiritual significance. The journey typically begins in April-May and continues until November, when the harsh winter forces the temples to close.',
                    },
                    {
                        heading: 'Yamunotri: Source of the Sacred Yamuna',
                        text: 'Your spiritual odyssey begins at Yamunotri, the source of the holy Yamuna River. Situated at an altitude of 3,293 meters, this temple dedicated to Goddess Yamuna requires a trek through pristine mountain trails. The hot springs at Janki Chatti offer a perfect spot for weary pilgrims to rejuvenate.',
                    },
                    {
                        heading: 'Gangotri: Origin of the Holy Ganges',
                        text: 'The second stop is Gangotri, where the sacred Ganges begins its journey. At 3,100 meters above sea level, this temple is surrounded by stunning snow-capped peaks. The sound of the rushing Bhagirathi River and the serene temple atmosphere create an unforgettable spiritual experience.',
                    },
                ],
            },
            hi: {
                intro: 'चार धाम यात्रा केवल एक तीर्थयात्रा नहीं है; यह भारतीय हिमालय के कुछ सबसे लुभावने परिदृश्यों के माध्यम से एक परिवर्तनकारी यात्रा है।',
                sections: [
                    {
                        heading: 'चार पवित्र स्थल',
                        text: 'यमुनोत्री, गंगोत्री, केदारनाथ और बद्रीनाथ - इनमें से प्रत्येक दिव्य गंतव्य गहरा आध्यात्मिक महत्व रखता है।',
                    },
                ],
            },
        },
        gallery: [
            'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
            'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
            'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800',
            'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
        ],
    };

    const relatedStories = [
        {
            id: 2,
            title: 'Ancient Temples of Garhwal',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400',
            category: 'Temples',
            readTime: '6 min',
        },
        {
            id: 3,
            title: 'Trekking to Kedarnath',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=400',
            category: 'Adventure',
            readTime: '9 min',
        },
        {
            id: 4,
            title: 'Spiritual Sites of Uttarakhand',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400',
            category: 'Culture',
            readTime: '7 min',
        },
    ];

    const handleLike = () => {
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
        if (isLiked) {
            const updated = likedBlogs.filter((blogId) => blogId !== id);
            localStorage.setItem('likedBlogs', JSON.stringify(updated));
        } else {
            likedBlogs.push(id);
            localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
        }
        setIsLiked(!isLiked);
    };

    const handleSave = () => {
        const savedBlogs = JSON.parse(localStorage.getItem('savedBlogs') || '[]');
        if (isSaved) {
            const updated = savedBlogs.filter((blogId) => blogId !== id);
            localStorage.setItem('savedBlogs', JSON.stringify(updated));
        } else {
            savedBlogs.push(id);
            localStorage.setItem('savedBlogs', JSON.stringify(savedBlogs));
        }
        setIsSaved(!isSaved);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newComment.trim() || !commentName.trim()) return;

        const comment = {
            id: Date.now(),
            name: commentName,
            text: newComment,
            date: new Date().toLocaleDateString(),
        };

        const updatedComments = [...comments, comment];
        setComments(updatedComments);
        localStorage.setItem(`blog-${id}-comments`, JSON.stringify(updatedComments));
        setNewComment('');
        setCommentName('');
    };

    const currentContent = blog.content.en;

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="fixed top-24 left-4 z-40">
                <Link
                    to="/blogs"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                    <ChevronLeft className="h-5 w-5 text-primary group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium text-primary">Back to Blogs</span>
                </Link>
            </div>

            {/* Cover Image */}
            <div className="relative h-[70vh] mt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${blog.coverImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-white text-sm font-medium mb-4">
                                {blog.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Metadata Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-gray-200 mb-8">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-14 h-14 rounded-full ring-4 ring-primary/10"
                        />
                        <div>
                            <p className="font-heading font-semibold text-textPrimary text-lg">
                                {blog.author.name}
                            </p>
                            <div className="flex items-center space-x-3 text-sm text-textSecondary">
                                <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{blog.date}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* Language Toggle */}
                        {/* <div className="flex bg-gray-100 rounded-full p-1">
                            <button
                                // onClick={() => setSelectedLanguage('en')}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedLanguage === 'en'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-textSecondary hover:text-primary'
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                // onClick={() => setSelectedLanguage('hi')}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedLanguage === 'hi'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-textSecondary hover:text-primary'
                                    }`}
                            >
                                हिं
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLike}
                            className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all ${isLiked
                                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                                : 'bg-gray-100 text-textPrimary hover:bg-gray-200'
                                }`}
                        >
                            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                            <span>{isLiked ? 'Liked' : 'Like'}</span>
                        </button>

                        <button
                            onClick={handleSave}
                            className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all ${isSaved
                                ? 'bg-accent/10 text-accent hover:bg-accent/20'
                                : 'bg-gray-100 text-textPrimary hover:bg-gray-200'
                                }`}
                        >
                            <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                            <span>{isSaved ? 'Saved' : 'Save'}</span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowShareMenu(!showShareMenu)}
                                className="flex items-center space-x-2 px-5 py-2.5 bg-gray-100 text-textPrimary rounded-full font-medium hover:bg-gray-200 transition-colors"
                            >
                                <Share2 className="h-5 w-5" />
                                <span>Share</span>
                            </button>

                            {showShareMenu && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl p-4 z-50">
                                    <p className="text-sm font-semibold text-textPrimary mb-3">Share this article</p>
                                    <div className="space-y-2">
                                        <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                                            <Facebook className="h-5 w-5" />
                                            <span className="font-medium">Facebook</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 px-4 py-3 bg-sky-50 text-sky-600 rounded-xl hover:bg-sky-100 transition-colors">
                                            <Twitter className="h-5 w-5" />
                                            <span className="font-medium">Twitter</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                                            <Linkedin className="h-5 w-5" />
                                            <span className="font-medium">LinkedIn</span>
                                        </button>
                                        <button
                                            onClick={handleCopyLink}
                                            className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-100 text-textPrimary rounded-xl hover:bg-gray-200 transition-colors"
                                        >
                                            {linkCopied ? (
                                                <>
                                                    <Check className="h-5 w-5 text-green-600" />
                                                    <span className="font-medium text-green-600">Link Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-5 w-5" />
                                                    <span className="font-medium">Copy Link</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="text-sm text-textSecondary">
                        {blog.views} Views
                    </div>
                </div>

                {/* Blog Content */}
                <article className="prose prose-lg max-w-none">
                    <p className="text-xl leading-relaxed text-textSecondary mb-8">
                        {currentContent.intro}
                    </p>

                    {currentContent.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-3xl font-heading font-bold text-textPrimary mb-4">
                                {section.heading}
                            </h2>
                            <p className="text-lg leading-relaxed text-textSecondary">
                                {section.text}
                            </p>
                        </div>
                    ))}
                </article>

                {/* Image Gallery */}
                <div className="my-12">
                    <h3 className="text-2xl font-heading font-bold text-textPrimary mb-6">Photo Gallery</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {blog.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Author Bio */}
                <div className="my-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
                    <div className="flex items-start space-x-4">
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-20 h-20 rounded-full ring-4 ring-white shadow-lg"
                        />
                        <div>
                            <h4 className="text-xl font-heading font-bold text-textPrimary mb-2">
                                About {blog.author.name}
                            </h4>
                            <p className="text-textSecondary mb-4">{blog.author.bio}</p>
                            <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                                View All Posts →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="my-12">
                    <h3 className="text-2xl font-heading font-bold text-textPrimary mb-6 flex items-center">
                        <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                        Comments ({comments.length})
                    </h3>

                    {/* Add Comment Form */}
                    <form onSubmit={handleAddComment} className="mb-8 p-6 bg-gray-50 rounded-2xl">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={commentName}
                                onChange={(e) => setCommentName(e.target.value)}
                                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Share your thoughts..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:outline-none resize-none transition-colors"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-semibold"
                        >
                            <Send className="h-4 w-4" />
                            <span>Post Comment</span>
                        </button>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex space-x-4 p-6 bg-gray-50 rounded-2xl">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h5 className="font-semibold text-textPrimary">{comment.name}</h5>
                                        <span className="text-sm text-textSecondary">{comment.date}</span>
                                    </div>
                                    <p className="text-textSecondary">{comment.text}</p>
                                </div>
                            </div>
                        ))}

                        {comments.length === 0 && (
                            <p className="text-center text-textSecondary py-8">
                                No comments yet. Be the first to share your thoughts!
                            </p>
                        )}
                    </div>
                </div>

                {/* Related Stories */}
                <div className="my-12">
                    <h3 className="text-2xl font-heading font-bold text-textPrimary mb-6">
                        Related Stories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedStories.map((story) => (
                            <Link
                                key={story.id}
                                to={`/blog/${story.id}`}
                                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${story.image})` }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                                            {story.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-heading font-semibold text-textPrimary mb-2 group-hover:text-accent transition-colors">
                                        {story.title}
                                    </h4>
                                    <div className="flex items-center text-sm text-textSecondary">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>{story.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
