import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Landmark,
    Mountain,
    MapPin,
    History as HistoryIcon,
    PartyPopper,
    Compass,
    UtensilsCrossed,
    BookOpen,
    Tent,
} from 'lucide-react';


const Categories = () => {
    // const { t } = useLanguage();

    const categories = [
        {
            id: 1,
            title: 'Culture & Heritage',
            description: 'Explore the rich traditions, art, and customs of Uttarakhand.',
            icon: Landmark,
            color: 'from-purple-500 to-indigo-600',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
            count: '24 Articles',
        },
        {
            id: 2,
            title: 'History & Mythology',
            description: 'Dive into the ancient past and legendary tales of the land.',
            icon: HistoryIcon,
            color: 'from-amber-500 to-yellow-600',
            image: 'https://images.unsplash.com/photo-1604580864840-e4504fec7e12?q=80&w=800',
            count: '18 Articles',
        },
        {
            id: 3,
            title: 'Fairs & Festivals',
            description: 'Experience the vibrant celebrations and gatherings of the hills.',
            icon: PartyPopper,
            color: 'from-pink-500 to-rose-600',
            image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800',
            count: '15 Articles',
        },
        {
            id: 4,
            title: 'Temples & Shrines',
            description: 'Visit the sacred abodes of gods and goddesses.',
            icon: Landmark,
            color: 'from-orange-500 to-red-600',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
            count: '32 Articles',
        },
        {
            id: 5,
            title: 'Char Dham Yatra',
            description: 'A spiritual journey to the four holy shrines of the Himalayas.',
            icon: Mountain,
            color: 'from-teal-500 to-cyan-600',
            image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
            count: '28 Articles',
        },
        {
            id: 6,
            title: 'Places to Visit',
            description: 'Discover the must-visit destinations and tourist hotspots.',
            icon: Compass,
            color: 'from-blue-500 to-indigo-600',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
            count: '45 Articles',
        },
        {
            id: 7,
            title: 'Hidden Gems',
            description: 'Uncover the secret and unexplored beauty of Uttarakhand.',
            icon: MapPin,
            color: 'from-green-500 to-emerald-600',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            count: '21 Articles',
        },
        {
            id: 8,
            title: 'Adventure & Trekking',
            description: 'Embark on thrilling adventures and scenic treks.',
            icon: Tent,
            color: 'from-red-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
            count: '37 Articles',
        },
        {
            id: 9,
            title: 'Food & Cuisine',
            description: 'Savor the authentic flavors and local delicacies.',
            icon: UtensilsCrossed,
            color: 'from-yellow-500 to-amber-600',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
            count: '26 Articles',
        },
        {
            id: 10,
            title: 'Local Stories',
            description: 'Read heartwarming stories from the locals.',
            icon: BookOpen,
            color: 'from-violet-500 to-purple-600',
            image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
            count: '19 Articles',
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-24 mt-20">
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
                                📚 Explore Categories
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                            Discover Uttarakhand
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Browse through our curated collection of articles across various themes.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex items-center justify-center gap-8"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent">{categories.length}</div>
                                <div className="text-white/80 text-sm">Categories</div>
                            </div>
                            <div className="h-12 w-px bg-white/20" />
                            <div className="text-center">
                                <div className="text-4xl font-bold text-accent">265</div>
                                <div className="text-white/80 text-sm">Total Articles</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        // Use a fixed slug for routing to ensure URLs don't change with language
                        // Map category IDs to English slugs
                        const slugMap = {
                            1: 'culture',
                            2: 'history',
                            3: 'festivals',
                            4: 'temples',
                            5: 'char-dham-yatra',
                            6: 'places-to-visit',
                            7: 'hidden-places',
                            8: 'adventure',
                            9: 'food',
                            10: 'local-stories'
                        };
                        const categorySlug = slugMap[category.id];

                        return (
                            <motion.div key={category.id} variants={item}>
                                <Link
                                    to={`/category/${categorySlug}`}
                                    className="group block relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-75 group-hover:opacity-85 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="relative h-full p-6 flex flex-col justify-between text-white">
                                        {/* Icon */}
                                        <div className="flex justify-between items-start">
                                            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                <IconComponent className="h-8 w-8" />
                                            </div>

                                            {/* Article Count Badge */}
                                            <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">
                                                {category.count}
                                            </div>
                                        </div>

                                        {/* Title & Description */}
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold mb-2 transform group-hover:translate-x-1 transition-transform duration-500">
                                                {category.title}
                                            </h3>
                                            <p className="text-white/90 text-sm leading-relaxed mb-4">
                                                {category.description}
                                            </p>

                                            {/* Arrow Indicator */}
                                            <div className="flex items-center space-x-2 text-sm font-semibold">
                                                <span>Explore</span>
                                                <svg
                                                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Corner Element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-secondary p-12 text-center text-white"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Can't decide where to start?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Check out our latest blog posts for inspiration.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/blogs"
                                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                View All Blogs
                            </Link>
                            <Link
                                to="/"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Categories;
