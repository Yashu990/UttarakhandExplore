import React, { useState } from 'react';
import YatraHero from '../components/yatra/YatraHero';
import PopularPackages from '../components/yatra/PopularPackages';
import YatraPlanner from '../components/yatra/YatraPlanner';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PlanYatra = () => {
    const [showPlanner, setShowPlanner] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleSelectPackage = (pkg) => {
        setSelectedPackage(pkg);
        setShowPlanner(true);
        // Scroll to planner
        setTimeout(() => {
            document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleStartCustomPlanning = () => {
        setSelectedPackage(null);
        setShowPlanner(true);
        setTimeout(() => {
            document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <YatraHero />

            {/* Popular Packages */}
            <PopularPackages onSelectPackage={handleSelectPackage} />

            {/* Divider with CTA */}
            {!showPlanner && (
                <div className="py-16 bg-gradient-to-r from-primary via-accent to-primary">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
                            <h3 className="text-3xl font-heading font-bold text-white mb-4">
                                Ready to Plan Your Journey?
                            </h3>
                            <p className="text-white/90 mb-8 text-lg">
                                Use our interactive planner to create a customized itinerary based on your preferences
                            </p>
                            <button
                                onClick={handleStartCustomPlanning}
                                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Start Custom Planning
                            </button>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Yatra Planner */}
            {showPlanner && (
                <div id="planner-section" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                                    {selectedPackage ? `Customize: ${selectedPackage.name}` : 'Create Your Custom Yatra'}
                                </h2>
                                <p className="text-textSecondary max-w-2xl mx-auto">
                                    Answer a few questions to get your personalized itinerary
                                </p>
                            </div>
                            <YatraPlanner initialPackage={selectedPackage} />
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Why Plan with Us Section */}
            <div className="py-16 bg-bgLight">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                            Why Plan Your Yatra With Us?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🗺️',
                                title: 'Expert Guidance',
                                description: 'Curated routes and destinations based on years of local knowledge'
                            },
                            {
                                icon: '💰',
                                title: 'Budget Friendly',
                                description: 'Plans for every budget with transparent cost breakdowns'
                            },
                            {
                                icon: '⏰',
                                title: 'Time Optimized',
                                description: 'Efficient itineraries that maximize your experience'
                            },
                            {
                                icon: '🏔️',
                                title: 'Complete Info',
                                description: 'Weather, altitude, difficulty, and travel tips included'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                                <p className="text-textSecondary text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanYatra;
