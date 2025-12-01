import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { packages } from '../../data/yatraData';

const PopularPackages = ({ onSelectPackage }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'Pilgrimage': return '🙏';
            case 'Adventure': return '🏔️';
            case 'Leisure': return '🌄';
            case 'Wildlife': return '🐅';
            case 'Offbeat': return '🗺️';
            default: return '📍';
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'bg-green-100 text-green-700';
            case 'Moderate': return 'bg-yellow-100 text-yellow-700';
            case 'Moderate to Challenging': return 'bg-orange-100 text-orange-700';
            case 'Challenging': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="py-16 bg-bgLight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        Popular Yatra Packages
                    </h2>
                    <p className="text-textSecondary max-w-2xl mx-auto">
                        Choose from our curated packages or create your own custom itinerary
                    </p>
                </motion.div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            onClick={() => onSelectPackage && onSelectPackage(pkg)}
                        >
                            {/* Package Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Type Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                                        {getIcon(pkg.type)} {pkg.type}
                                    </span>
                                </div>

                                {/* Difficulty Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 ${getDifficultyColor(pkg.difficulty)} rounded-full text-xs font-semibold`}>
                                        {pkg.difficulty}
                                    </span>
                                </div>
                            </div>

                            {/* Package Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {pkg.name}
                                </h3>

                                {/* Info Row */}
                                <div className="flex items-center space-x-4 mb-4 text-sm text-textSecondary">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>{pkg.destinations.length} Places</span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="space-y-2 mb-4">
                                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                                        <div key={idx} className="flex items-start space-x-2 text-sm text-textSecondary">
                                            <span className="text-accent mt-0.5">✓</span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Price */}
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-textSecondary">Starting from</p>
                                            <p className="text-lg font-bold text-primary">
                                                {pkg.estimatedCost.budget.split('-')[0].trim()}
                                            </p>
                                        </div>
                                        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors group-hover:scale-105">
                                            <span className="text-sm font-medium">View Details</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Plan CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="inline-block bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                            Want a Custom Plan?
                        </h3>
                        <p className="text-textSecondary mb-6">
                            Create your own personalized itinerary with our interactive planner
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-accent to-yellow-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                            Start Custom Planning
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PopularPackages;
