import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mountain, TreePine, Sunrise, Camera } from 'lucide-react';



const ExploreSection = () => {
    // const { t } = useLanguage();
    const highlights = [
        {
            id: 1,
            title: 'Majestic Peaks',
            description: 'Home to Nanda Devi, Trishul, and Panchachuli peaks.',
            icon: Mountain,
            color: 'from-blue-500 to-cyan-600',
        },
        {
            id: 2,
            title: 'Dense Forests',
            description: 'Rich biodiversity in Corbett and Rajaji National Parks.',
            icon: TreePine,
            color: 'from-green-500 to-emerald-600',
        },
        {
            id: 3,
            title: 'Magical Sunrises',
            description: 'Witness golden hues over the snow-capped Himalayas.',
            icon: Sunrise,
            color: 'from-orange-500 to-yellow-600',
        },
        {
            id: 4,
            title: 'Photography',
            description: 'Capture the untouched beauty of nature and culture.',
            icon: Camera,
            color: 'from-purple-500 to-pink-600',
        },
    ];

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
                        Explore the Unexplored
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-textSecondary max-w-3xl mx-auto"
                    >
                        From snow-capped peaks to lush green valleys, Uttarakhand offers a diverse landscape for every traveler.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {highlights.map((highlight, index) => {
                        const IconComponent = highlight.icon;
                        return (
                            <motion.div
                                key={highlight.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                    <IconComponent className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-3">
                                    {highlight.title}
                                </h3>
                                <p className="text-textSecondary">
                                    {highlight.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Large Feature Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070')`,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Ready to start your journey?
                        </h3>
                        <p className="text-white/90 text-lg mb-6 max-w-2xl">
                            Plan your trip to the Land of Gods and experience the magic yourself.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
                        >
                            Learn More About Uttarakhand
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExploreSection;
