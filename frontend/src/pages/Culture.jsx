import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music,
    Heart,
    Calendar,
    Users,
    PlayCircle,
    ChevronRight,
    Sparkles,
    Mountain,
} from 'lucide-react';

const Culture = () => {
    const [activeInstrument, setActiveInstrument] = useState(null);

    const instruments = [
        {
            id: 1,
            name: 'Dhol',
            description: 'A double-headed drum that forms the heartbeat of Kumaoni celebrations. Played with wooden sticks, creating rhythmic patterns that guide dancers.',
            image: 'https://images.unsplash.com/photo-1586694680938-d3b8e0715c57?q=80&w=800',
            significance: 'Essential in festivals and wedding ceremonies',
        },
        {
            id: 2,
            name: 'Damau',
            description: 'A small kettle drum played with curved sticks. Its sharp, penetrating sound cuts through the mountain air during religious processions.',
            image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?q=80&w=800',
            significance: 'Used in temple rituals and processions',
        },
        {
            id: 3,
            name: 'Hurka',
            description: 'A cylindrical drum with a deep, resonant tone. Traditionally made from hollowed wood with goat skin stretched across both ends.',
            image: 'https://images.unsplash.com/photo-1582556111968-3c0c1a8e5d7e?q=80&w=800',
            significance: 'Accompanies folk dances and songs',
        },
        {
            id: 4,
            name: 'Ransingha',
            description: 'A long brass horn that produces haunting melodies echoing through the valleys. Its sound announces festivals and important events.',
            image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800',
            significance: 'Ceremonial instrument for announcements',
        },
        {
            id: 5,
            name: 'Algoja',
            description: 'A double flute made from bamboo, producing sweet, melodious tones. Requires exceptional breath control to play both pipes simultaneously.',
            image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800',
            significance: 'Used in pastoral and romantic songs',
        },
        {
            id: 6,
            name: 'Manjira',
            description: 'Small hand cymbals creating crisp, rhythmic sounds. Often played by women in devotional songs and bhajans.',
            image: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?q=80&w=800',
            significance: 'Devotional music and prayers',
        },
    ];

    const folkSongs = [
        {
            id: 1,
            name: 'Jagar',
            description: 'Sacred ritual songs invoking local deities and spirits. Performed during night-long ceremonies with drumming and dancing.',
            color: 'from-orange-500 to-red-600',
            icon: Sparkles,
        },
        {
            id: 2,
            name: 'Nyoli & Chounphula',
            description: 'Seasonal love songs expressing the beauty of nature and romantic emotions. Traditionally sung during spring and monsoon.',
            color: 'from-pink-500 to-rose-600',
            icon: Heart,
        },
        {
            id: 3,
            name: 'Bhailo',
            description: 'Harvest festival songs celebrating abundance. Women sing these while dancing in circular formations during autumn.',
            color: 'from-green-500 to-emerald-600',
            icon: Calendar,
        },
        {
            id: 4,
            name: 'Choliya',
            description: 'Warrior dance songs performed with swords and shields. Showcases valor and martial traditions of the Kumaon region.',
            color: 'from-blue-500 to-indigo-600',
            icon: Users,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white">
            {/* Hero Section */}
            <div className="relative h-screen mt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1593115057857-e87a9bb13d14?q=80&w=2070')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>

                <div className="relative h-full flex items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block mb-6">
                                <span className="px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center space-x-2">
                                    <Music className="h-4 w-4" />
                                    <span>Cultural Heritage</span>
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                                Kumaoni Folk Music
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                                The Soul of the Hills - Where Ancient Melodies Echo Through Time
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-center space-x-4"
                            >
                                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-xl flex items-center space-x-2">
                                    <PlayCircle className="h-5 w-5" />
                                    <span>Listen to Samples</span>
                                </button>
                                <button className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full font-semibold transition-all hover:scale-105 border border-white/30">
                                    Explore Culture
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="flex flex-col items-center space-y-2 text-white/80">
                        <span className="text-sm">Scroll to Explore</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ChevronRight className="h-6 w-6 rotate-90" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                        A Living Tradition
                    </h2>
                    <p className="text-lg text-textSecondary max-w-4xl mx-auto leading-relaxed">
                        For centuries, the mountains of Kumaon have resonated with the sounds of folk music—a sacred
                        tradition passed down through generations. This musical heritage is not merely entertainment;
                        it is the voice of the people, expressing their joys, sorrows, devotion, and connection to the
                        land. Each song tells a story, each rhythm carries the heartbeat of a culture that has thrived
                        in these Himalayan valleys since time immemorial.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: Mountain,
                            title: 'Mountain Heritage',
                            desc: 'Rooted in the traditions of hill communities',
                        },
                        {
                            icon: Users,
                            title: 'Community Spirit',
                            desc: 'Bringing people together in celebration',
                        },
                        {
                            icon: Heart,
                            title: 'Cultural Identity',
                            desc: 'Preserving the essence of Kumaoni culture',
                        },
                    ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform">
                                    <IconComponent className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-textSecondary">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Traditional Instruments Section */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Traditional Instruments
                        </h2>
                        <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                            The rich tapestry of Kumaoni music is woven with diverse instruments,
                            each adding its unique voice to the symphony of the hills.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {instruments.map((instrument, index) => (
                            <motion.div
                                key={instrument.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveInstrument(instrument.id)}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${instrument.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-heading font-bold text-white mb-1">
                                            {instrument.name}
                                        </h3>
                                        <p className="text-sm text-white/80">{instrument.significance}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-textSecondary leading-relaxed">
                                        {instrument.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Folk Song Types Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                            Types of Folk Songs
                        </h2>
                        <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                            Each form of Kumaoni folk music serves a unique purpose in the cultural fabric,
                            from sacred rituals to celebratory harvests.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {folkSongs.map((song, index) => {
                            const IconComponent = song.icon;
                            return (
                                <motion.div
                                    key={song.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group"
                                >
                                    <div className="flex items-start space-x-6">
                                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${song.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-bold text-textPrimary mb-3">
                                                {song.name}
                                            </h3>
                                            <p className="text-textSecondary leading-relaxed">
                                                {song.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Cultural Context Section */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Cultural Significance
                        </h2>
                        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Kumaoni folk music is the heartbeat of community life, marking every significant
                            occasion from birth to harvest, from worship to celebration.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {[
                                {
                                    title: 'Festivals & Ceremonies',
                                    text: 'Music is integral to festivals like Harela, Phool Dei, and Nanda Devi Raj Jat, where communities gather to sing and dance in harmony.',
                                },
                                {
                                    title: 'Oral History',
                                    text: 'Folk songs preserve historical events, legends, and wisdom, passing knowledge from generation to generation through melody.',
                                },
                                {
                                    title: 'Social Bonding',
                                    text: 'Collective singing and dancing strengthen community ties, bringing people together across age and social barriers.',
                                },
                                {
                                    title: 'Spiritual Connection',
                                    text: 'Religious songs and jagars create a bridge between the earthly and divine, invoking blessings and expressing devotion.',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                                >
                                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                                    <p className="text-white/80">{item.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070')`,
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Preservation Efforts Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            Preserving Our Musical Heritage
                        </h2>
                        <p className="text-lg text-textSecondary max-w-3xl mx-auto mb-8 leading-relaxed">
                            As modernization sweeps through the hills, efforts are underway to preserve and promote
                            Kumaoni folk music. Cultural organizations, schools, and artists are working together to
                            ensure this precious heritage continues to resonate with future generations.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
                                Support Cultural Initiatives
                            </button>
                            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-primary rounded-full font-semibold transition-all hover:scale-105 shadow-lg border-2 border-primary">
                                Learn & Participate
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Culture;
