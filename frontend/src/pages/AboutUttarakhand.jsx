import React from 'react';
import { motion } from 'framer-motion';
import {
    Mountain,
    Heart,
    Users,
    Map,
    TreePine,
    Landmark,
    UtensilsCrossed,
    Palette,
    Languages,
    BookOpen,
} from 'lucide-react';



const AboutUttarakhand = () => {
    // const { t } = useLanguage();
    const sections = [
        {
            id: 'history',
            title: 'History',
            icon: BookOpen,
            color: 'from-amber-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1604580864840-e4504fec7e12?q=80&w=800',
            content: 'Uttarakhand has a long and rich history, dating back to the Vedic age. It has been ruled by various dynasties, including the Katyuris, Chands, and Parmars. The region played a significant role in the Indian independence movement and was carved out of Uttar Pradesh as a separate state in 2000.',
        },
        {
            id: 'culture',
            title: 'Culture & Traditions',
            icon: Palette,
            color: 'from-purple-500 to-pink-600',
            image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800',
            content: 'The culture of Uttarakhand is a vibrant blend of Kumaoni and Garhwali traditions. From colorful festivals like Harela and Phool Dei to traditional dances like Langvir Nritya and Barada Nati, the state is a treasure trove of cultural heritage.',
        },
        {
            id: 'languages',
            title: 'Languages',
            icon: Languages,
            color: 'from-blue-500 to-cyan-600',
            image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800',
            content: 'The primary languages spoken in Uttarakhand are Hindi, Garhwali, and Kumaoni. Sanskrit is also given the status of a second official language. The dialects vary from region to region, adding to the linguistic diversity of the state.',
        },
        {
            id: 'people',
            title: 'People',
            icon: Users,
            color: 'from-green-500 to-emerald-600',
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800',
            content: 'The people of Uttarakhand, known as Pahadis, are known for their simplicity, honesty, and hospitality. They live in close harmony with nature and have a deep respect for their traditions and customs.',
        },
        {
            id: 'districts',
            title: 'Districts',
            icon: Map,
            color: 'from-red-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            content: 'Uttarakhand is divided into two administrative divisions: Garhwal and Kumaon. It has 13 districts, each with its unique charm and attractions. From the bustling city of Dehradun to the serene villages of Pithoragarh, every district has something to offer.',
        },
        {
            id: 'nature',
            title: 'Flora & Fauna',
            icon: TreePine,
            color: 'from-teal-500 to-green-600',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
            content: 'The state is home to a diverse range of flora and fauna. It boasts of national parks like Jim Corbett and Rajaji, and the UNESCO World Heritage Site, Valley of Flowers. The rich biodiversity includes rare species like the snow leopard, musk deer, and Himalayan monal.',
        },
        {
            id: 'chardham',
            title: 'Char Dham',
            icon: Landmark,
            color: 'from-indigo-500 to-purple-600',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
            content: 'Uttarakhand is known as Devbhoomi (Land of Gods) primarily because of the Char Dham Yatra. The four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath attract millions of pilgrims every year, seeking spiritual salvation.',
        },
        {
            id: 'food',
            title: 'Cuisine',
            icon: UtensilsCrossed,
            color: 'from-yellow-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
            content: 'Uttarakhandi cuisine is simple yet nutritious. Dishes like Kafuli, Phaanu, Thechwani, and Chainsoo are made with locally grown ingredients. Bal Mithai and Singori are popular sweets that you must try.',
        },
        {
            id: 'art',
            title: 'Art & Craft',
            icon: Palette,
            color: 'from-pink-500 to-rose-600',
            image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800',
            content: 'The state is famous for its wood carving, Aipan art (traditional folk art), and woolen handicrafts. The intricate designs and patterns reflect the artistic skills of the local artisans.',
        },
    ];

    const stats = [
        { label: 'Established', value: '2000' },
        { label: 'Districts', value: '13' },
        { label: 'Area (sq km)', value: '53,483' },
        { label: 'Capital', value: 'Dehradun' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                🏔️ Know Devbhoomi
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6">
                            About Uttarakhand
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                            A land of myths and mountains, where every stone tells a story and every river sings a song.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                                >
                                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                                    <div className="text-white/80 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </motion.div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {sections.map((section, index) => {
                    const IconComponent = section.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-32 last:mb-0"
                        >
                            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                {/* Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group">
                                        <div className={`absolute -inset-4 bg-gradient-to-r ${section.color} opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${section.image})` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <div className={`inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gradient-to-r ${section.color} rounded-full text-white`}>
                                        <IconComponent className="h-6 w-6" />
                                        <span className="font-semibold text-lg">{section.title}</span>
                                    </div>

                                    <p className="text-lg text-textSecondary leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-6">
                            <Heart className="h-12 w-12 text-accent" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Experience the Magic
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Ready to explore the land of gods? Start your journey today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/blogs"
                                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Read Blogs
                            </a>
                            <a
                                href="/videos"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                Watch Videos
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUttarakhand;
