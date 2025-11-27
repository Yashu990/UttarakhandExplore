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
    const sections = [
        {
            id: 'history',
            title: 'Rich History',
            icon: BookOpen,
            color: 'from-amber-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1604580864840-e4504fec7e12?q=80&w=800',
            content: `Uttarakhand, often referred to as "Devbhoomi" or the Land of Gods, has a rich and diverse history dating back to ancient times. The region finds mention in Hindu scriptures and epics, including the Mahabharata and Ramayana. Historically, it was part of the Kuru and Panchala kingdoms. The region saw the rise of powerful dynasties like the Katyuris in the 7th century and the Chand dynasty in the medieval period. British colonial rule brought significant changes, and after India's independence, Uttarakhand was initially part of Uttar Pradesh before becoming a separate state on November 9, 2000.`,
        },
        {
            id: 'culture',
            title: 'Vibrant Culture',
            icon: Palette,
            color: 'from-purple-500 to-pink-600',
            image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800',
            content: `The culture of Uttarakhand is a beautiful tapestry woven from ancient traditions, folk arts, and spiritual practices. The people celebrate numerous festivals with great enthusiasm, including Makar Sankranti, Phool Dei, and Harela. Traditional dance forms like Langvir Nritya, Barada Nati, and Pandav Nritya showcase the region's artistic heritage. Music is an integral part of life, with folk songs passed down through generations telling stories of love, nature, and daily life. The culture is deeply rooted in respect for nature and the divine, reflected in every aspect of daily life.`,
        },
        {
            id: 'languages',
            title: 'Languages',
            icon: Languages,
            color: 'from-blue-500 to-cyan-600',
            image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800',
            content: `Uttarakhand is linguistically diverse, with Hindi being the official language. The state is home to several regional languages and dialects that reflect its cultural richness. Garhwali and Kumaoni are the two major regional languages spoken across different parts of the state. Garhwali is predominantly spoken in the Garhwal region, while Kumaoni is prevalent in the Kumaon region. Other languages include Jaunsari and Bhotiyas dialects. Despite modernization, these languages continue to thrive, carrying forward centuries of oral traditions, folk songs, and local wisdom.`,
        },
        {
            id: 'people',
            title: 'Warm People',
            icon: Users,
            color: 'from-green-500 to-emerald-600',
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800',
            content: `The people of Uttarakhand, known as "Paharis" (mountain people), are renowned for their warmth, hospitality, and strong community bonds. Living in challenging mountain terrain has instilled in them resilience, hard work, and a deep connection with nature. The society is predominantly agrarian, with terrace farming being a common practice. Women play a crucial role in agriculture and household management. The people maintain strong cultural traditions while embracing progress. Their simple lifestyle, traditional values, and welcoming nature make every visitor feel at home in the mountains.`,
        },
        {
            id: 'districts',
            title: 'Districts',
            icon: Map,
            color: 'from-red-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
            content: `Uttarakhand comprises 13 districts, each with its unique character and attractions. The state is divided into two regions: Garhwal and Kumaon. Garhwal region includes Dehradun (the capital), Haridwar, Tehri Garhwal, Uttarkashi, Chamoli, Rudraprayag, and Pauri Garhwal. The Kumaon region consists of Nainital, Almora, Pithoragarh, Bageshwar, Champawat, and Udham Singh Nagar. Each district offers diverse landscapes, from the plains of Haridwar to the snow-capped peaks of Chamoli, from the serene lakes of Nainital to the spiritual atmosphere of Haridwar.`,
        },
        {
            id: 'nature',
            title: 'Respect for Nature',
            icon: TreePine,
            color: 'from-teal-500 to-green-600',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
            content: `Uttarakhand exemplifies the harmonious coexistence of humans and nature. The state is home to numerous national parks and wildlife sanctuaries, including Jim Corbett National Park, Valley of Flowers, and Nanda Devi Biosphere Reserve. The famous Chipko Movement originated here, where villagers hugged trees to prevent deforestation. Dense forests of oak, pine, deodar, and rhododendron cover the hillsides. The people worship nature, with many trees and forests considered sacred. Rivers like the Ganges and Yamuna originate from these mountains, making environmental conservation not just a practice but a spiritual duty.`,
        },
        {
            id: 'chardham',
            title: 'Char Dham Yatra',
            icon: Landmark,
            color: 'from-indigo-500 to-purple-600',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
            content: `The Char Dham Yatra is one of the most sacred pilgrimages in Hinduism, comprising four holy shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath. Located in the Garhwal Himalayas, these temples are believed to wash away sins and grant moksha (liberation). Yamunotri, dedicated to Goddess Yamuna, sits at 3,293 meters. Gangotri, the origin of the holy Ganges, is at 3,100 meters. Kedarnath, one of the twelve Jyotirlingas of Lord Shiva, stands at 3,583 meters. Badrinath, dedicated to Lord Vishnu, is at 3,300 meters. The yatra is undertaken between April-May and November when the temples are accessible.`,
        },
        {
            id: 'food',
            title: 'Famous Food',
            icon: UtensilsCrossed,
            color: 'from-yellow-500 to-orange-600',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
            content: `Uttarakhandi cuisine is simple yet flavorful, using locally grown ingredients and traditional cooking methods. Popular dishes include Kafuli (spinach curry), Chainsoo (black gram curry), Bhatt ki Churkani (black soybean curry), and Aloo ke Gutke (spiced potatoes). The region is famous for its variety of rotis made from different grains. Bal Mithai and Singodi are beloved sweets. Madua (finger millet) is a staple grain used in various preparations. The cuisine reflects the agricultural lifestyle and cold climate, with many dishes being highly nutritious and warming. Traditional cooking in iron utensils adds to the authentic taste.`,
        },
        {
            id: 'art',
            title: 'Art & Handicraft',
            icon: Palette,
            color: 'from-pink-500 to-rose-600',
            image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800',
            content: `Uttarakhand's art and handicraft traditions are centuries old, showcasing exceptional skill and creativity. Aipan is a traditional floor and wall art using natural colors and geometric patterns. Wood carving is prominent, with intricately carved doors, windows, and temples. The region is famous for its handwoven carpets, shawls, and woolen products. Ringal (bamboo) craft produces beautiful baskets and decorative items. Metal work, particularly copper and brass utensils, is another specialty. These crafts are not just artistic expressions but also represent the cultural identity and livelihood of local artisans who have preserved these traditions through generations.`,
        },
    ];

    const stats = [
        { label: 'Year Established', value: '2000' },
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
                                🏔️ Devbhoomi - Land of Gods
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6">
                            Uttarakhand
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Where the mountains touch the heavens and rivers flow with divine grace
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
                            Experience the Magic of Uttarakhand
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Plan your journey to the Land of Gods. Explore our travel guides, connect with local stories,
                            and immerse yourself in the beauty of the Himalayas.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/blogs"
                                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Read Our Blogs
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
