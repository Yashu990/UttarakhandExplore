import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Landmark,
    Mountain,
    MapPin,
    Coffee,
    History,
    TreePine,
    Camera,
    Compass
} from 'lucide-react';

const CategoryCards = () => {
    const categories = [
        {
            id: 1,
            title: 'Culture & Heritage',
            description: 'Discover the rich cultural tapestry',
            icon: Landmark,
            color: 'from-purple-500 to-indigo-600',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
        },
        {
            id: 2,
            title: 'Temples & Char Dham',
            description: 'Sacred journeys and spiritual tales',
            icon: Landmark,
            color: 'from-orange-500 to-red-600',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
        },
        {
            id: 3,
            title: 'Travel Guides',
            description: 'Complete guides for your adventure',
            icon: Compass,
            color: 'from-blue-500 to-cyan-600',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
        },
        {
            id: 4,
            title: 'Hidden Places',
            description: 'Unexplored gems of Uttarakhand',
            icon: MapPin,
            color: 'from-green-500 to-teal-600',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
        },
        {
            id: 5,
            title: 'Food & Lifestyle',
            description: 'Authentic flavors and local living',
            icon: Coffee,
            color: 'from-yellow-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
        },
        {
            id: 6,
            title: 'History',
            description: 'Ancient stories and legends',
            icon: History,
            color: 'from-amber-500 to-yellow-600',
            image: 'https://images.unsplash.com/photo-1604580864840-e4504fec7e12?q=80&w=800',
        },
        {
            id: 7,
            title: 'Adventure',
            description: 'Thrilling experiences await',
            icon: Mountain,
            color: 'from-red-500 to-pink-600',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800',
        },
        {
            id: 8,
            title: 'Gallery',
            description: 'Visual stories of beauty',
            icon: Camera,
            color: 'from-pink-500 to-rose-600',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
        },
    ];

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
        <section className="py-20 bg-gradient-to-b from-bgLight to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
                    >
                        Explore by Category
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-textSecondary max-w-2xl mx-auto"
                    >
                        Dive deep into different aspects of Uttarakhand's beauty, culture, and adventures
                    </motion.p>
                </div>

                {/* Category Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div key={category.id} variants={item}>
                                <Link
                                    to={`/category/${category.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                                    className="group block relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />

                                    {/* Content */}
                                    <div className="relative h-full p-6 flex flex-col justify-end text-white">
                                        <div className="mb-3 transform group-hover:scale-110 transition-transform">
                                            <IconComponent className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-xl font-heading font-semibold mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-white/90 text-sm">
                                            {category.description}
                                        </p>

                                        {/* Hover Arrow */}
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default CategoryCards;
