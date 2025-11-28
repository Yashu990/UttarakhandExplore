import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, MapPin, Mountain, Compass } from 'lucide-react';



const CharDhamSection = () => {
    // const { t } = useLanguage();
    const charDhams = [
        {
            id: 1,
            name: 'Yamunotri',
            description: 'The source of the holy Yamuna river and seat of Goddess Yamuna.',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
            altitude: '3,293m',
            icon: Mountain,
        },
        {
            id: 2,
            name: 'Gangotri',
            description: 'The origin of the sacred River Ganges and seat of Goddess Ganga.',
            image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800',
            altitude: '3,100m',
            icon: Landmark,
        },
        {
            id: 3,
            name: 'Kedarnath',
            description: 'One of the twelve Jyotirlingas of Lord Shiva, amidst snow-clad peaks.',
            image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
            altitude: '3,583m',
            icon: Landmark,
        },
        {
            id: 4,
            name: 'Badrinath',
            description: 'The abode of Lord Vishnu, situated on the banks of Alaknanda river.',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800',
            altitude: '3,300m',
            icon: Landmark,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="px-6 py-2 bg-accent rounded-full text-white text-sm font-medium">
                            🕉️ Sacred Pilgrimage
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        The Char Dham Yatra
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
                    >
                        Embark on a spiritual journey to the four holiest shrines in the Himalayas - Yamunotri, Gangotri, Kedarnath, and Badrinath.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {charDhams.map((dham, index) => {
                        const IconComponent = dham.icon;
                        return (
                            <motion.div
                                key={dham.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <Link
                                    to={`/char-dham/${dham.name.toLowerCase()}`}
                                    className="block bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${dham.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                        {/* Altitude Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="flex items-center space-x-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                                                <Mountain className="h-3 w-3" />
                                                <span>{dham.altitude}</span>
                                            </span>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="p-3 bg-accent rounded-full">
                                                <IconComponent className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                            {dham.name}
                                        </h3>
                                        <p className="text-white/80 text-sm">
                                            {dham.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/char-dham"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                    >
                        <Compass className="h-5 w-5" />
                        <span>Plan Your Yatra</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CharDhamSection;
