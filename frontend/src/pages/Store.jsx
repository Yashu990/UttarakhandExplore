import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    Sparkles,
    Mountain,
    Backpack,
    BookOpen,
    Utensils,
    ArrowRight,
    TrendingUp,
    Shield,
    Truck,
} from 'lucide-react';

const Store = () => {
    const categories = [
        {
            id: 1,
            name: 'Temple Essentials',
            description: 'Sacred items for your spiritual journey',
            icon: Sparkles,
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
            itemCount: 45,
            color: 'from-orange-500 to-amber-600',
            slug: 'temple-essentials',
        },
        {
            id: 2,
            name: 'Local Handicrafts',
            description: 'Authentic handmade treasures from local artisans',
            icon: Mountain,
            image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
            itemCount: 78,
            color: 'from-green-500 to-emerald-600',
            slug: 'handicrafts',
        },
        {
            id: 3,
            name: 'Adventure Gear',
            description: 'Essential equipment for mountain adventures',
            icon: Backpack,
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
            itemCount: 56,
            color: 'from-blue-500 to-cyan-600',
            slug: 'adventure-gear',
        },
        {
            id: 4,
            name: 'Books & Guides',
            description: 'Knowledge about Uttarakhand culture and trails',
            icon: BookOpen,
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
            itemCount: 34,
            color: 'from-purple-500 to-indigo-600',
            slug: 'books-guides',
        },
        {
            id: 5,
            name: 'Local Food',
            description: 'Authentic flavors from the mountains',
            icon: Utensils,
            image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800',
            itemCount: 42,
            color: 'from-rose-500 to-pink-600',
            slug: 'local-food',
        },
    ];

    const features = [
        {
            icon: Shield,
            title: 'Authentic Products',
            description: 'All items sourced directly from local artisans',
        },
        {
            icon: Truck,
            title: 'Fast Delivery',
            description: 'Quick shipping across India and beyond',
        },
        {
            icon: TrendingUp,
            title: 'Support Local',
            description: 'Every purchase supports mountain communities',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white">
            {/* Hero Section */}
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
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className="px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg">
                                🛍️ Shop Authentic Uttarakhand
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                            Uttarakhand Store
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                            Discover authentic products from the heart of the Himalayas. Every purchase supports local artisans and communities.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 mt-12">
                            <div className="text-center">
                                <p className="text-4xl font-bold">250+</p>
                                <p className="text-white/80 text-sm mt-1">Products</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">50+</p>
                                <p className="text-white/80 text-sm mt-1">Artisans</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">5K+</p>
                                <p className="text-white/80 text-sm mt-1">Happy Customers</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our curated collection of authentic Uttarakhand products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/store/${category.slug}`}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />

                                        {/* Icon */}
                                        <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                            <IconComponent className="h-6 w-6 text-white" />
                                        </div>

                                        {/* Item Count Badge */}
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                                                {category.itemCount} items
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {category.description}
                                        </p>
                                        <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                                            <span>Browse Collection</span>
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
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
                            <ShoppingBag className="h-12 w-12" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            New to Our Store?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Sign up to get exclusive access to new products, special discounts, and support local artisans.
                        </p>
                        <Link
                            to="/signup"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Store;
