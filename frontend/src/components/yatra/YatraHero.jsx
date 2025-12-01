import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Map, Calendar, Compass } from 'lucide-react';

const YatraHero = () => {
    return (
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2070')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-6 py-2 bg-accent/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
                            <Mountain className="h-4 w-4" />
                            <span>Plan Your Sacred Journey</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Plan Your
                        <br />
                        <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                            Perfect Yatra
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Create your personalized pilgrimage or adventure itinerary to explore the divine beauty of Uttarakhand
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {[
                            { icon: Map, label: '13+ Destinations', value: 'Curated Locations' },
                            { icon: Mountain, label: 'Char Dham', value: 'Sacred Circuit' },
                            { icon: Calendar, label: 'All Seasons', value: 'Year Round' },
                            { icon: Compass, label: 'Custom Plans', value: 'Personalized' }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                            >
                                <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                                <p className="text-white font-semibold text-sm">{stat.label}</p>
                                <p className="text-white/70 text-xs">{stat.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default YatraHero;
