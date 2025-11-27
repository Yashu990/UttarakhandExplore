import React from 'react';
import { motion } from 'framer-motion';
import {
    Target,
    Lightbulb,
    Users,
    Eye,
    Mail,
    Phone,
    MapPin,
    Heart,
    Rocket,
    MessageCircle,
} from 'lucide-react';

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Rajesh Sharma',
            role: 'Founder & Chief Editor',
            image: 'https://ui-avatars.com/api/?name=Rajesh+Sharma&background=1F4E79&color=fff&size=200',
            bio: 'Travel enthusiast and storyteller passionate about preserving Uttarakhand\'s cultural heritage.',
        },
        {
            name: 'Priya Negi',
            role: 'Content Manager',
            image: 'https://ui-avatars.com/api/?name=Priya+Negi&background=2E7D32&color=fff&size=200',
            bio: 'Writer and cultural researcher dedicated to sharing authentic stories from the hills.',
        },
        {
            name: 'Vikram Rawat',
            role: 'Photography Lead',
            image: 'https://ui-avatars.com/api/?name=Vikram+Rawat&background=FF9F1C&color=fff&size=200',
            bio: 'Professional photographer capturing the breathtaking beauty of the Himalayas.',
        },
        {
            name: 'Anita Bisht',
            role: 'Community Manager',
            image: 'https://ui-avatars.com/api/?name=Anita+Bisht&background=9C27B0&color=fff&size=200',
            bio: 'Connecting people with Uttarakhand through engaging content and community building.',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] mt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

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
                                ❤️ Made with Love for Uttarakhand
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            About Us
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            A passionate team dedicated to sharing the stories, culture, and beauty of Devbhoomi
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white">
                        <Target className="h-6 w-6" />
                        <span className="font-semibold text-lg">Our Mission</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-textPrimary mb-6 max-w-4xl mx-auto">
                        Preserving Heritage, Inspiring Exploration
                    </h2>

                    <p className="text-xl text-textSecondary leading-relaxed max-w-4xl mx-auto">
                        Our mission is to celebrate and preserve the rich cultural heritage of Uttarakhand while inspiring
                        people around the world to explore its breathtaking landscapes, sacred temples, and vibrant
                        traditions. We believe that every mountain peak, every ancient temple, and every local story
                        deserves to be shared and cherished.
                    </p>
                </motion.div>

                {/* Why We Built This */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-20"
                >
                    <div>
                        <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gradient-to-r from-accent to-orange-600 rounded-full text-white">
                            <Lightbulb className="h-6 w-6" />
                            <span className="font-semibold text-lg">Why We Built This</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-6">
                            Bridging Tradition with Technology
                        </h3>

                        <div className="space-y-4 text-lg text-textSecondary leading-relaxed">
                            <p>
                                Growing up in the mountains of Uttarakhand, we witnessed the incredible richness of our
                                culture, the warmth of our people, and the majesty of the Himalayas. Yet, we noticed that
                                many of these stories were not reaching the wider world.
                            </p>
                            <p>
                                In an age of digital connectivity, we saw an opportunity to create a platform that brings
                                together authentic stories, stunning visuals, and practical travel information - all in one
                                place. This website is our love letter to Devbhoomi.
                            </p>
                            <p>
                                Whether you're planning your first visit to the Char Dham, researching local cuisine, or
                                simply seeking to connect with Uttarakhand's spiritual essence, we're here to guide you with
                                genuine, heartfelt content.
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent to-orange-600 opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800')`,
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Meet the Team */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white">
                            <Users className="h-6 w-6" />
                            <span className="font-semibold text-lg">Meet the Team</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-textPrimary mb-4">
                            The Faces Behind the Stories
                        </h2>
                        <p className="text-xl text-textSecondary max-w-3xl mx-auto">
                            A diverse team of writers, photographers, and storytellers united by our love for Uttarakhand
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-64 bg-gray-200 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-heading font-bold text-textPrimary mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-textSecondary text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Our Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-20"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800')`,
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white">
                            <Eye className="h-6 w-6" />
                            <span className="font-semibold text-lg">Our Vision</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-6">
                            Building a Global Community
                        </h3>

                        <div className="space-y-4 text-lg text-textSecondary leading-relaxed">
                            <p>
                                We envision a world where Uttarakhand's cultural heritage is celebrated globally, where
                                travelers can connect authentically with local communities, and where the next generation
                                grows up proud of their roots.
                            </p>
                            <p>
                                Our platform will continue to evolve, adding more stories, more voices, and more resources.
                                We dream of creating a comprehensive digital archive that preserves folk tales, traditional
                                recipes, architectural marvels, and local wisdom for generations to come.
                            </p>
                            <p>
                                Join us on this journey as we build bridges between mountains and cities, tradition and
                                innovation, past and future.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                                <div className="text-textSecondary text-sm">Articles Published</div>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-accent/10 to-orange-600/10 rounded-2xl">
                                <div className="text-3xl font-bold text-accent mb-2">50K+</div>
                                <div className="text-textSecondary text-sm">Monthly Readers</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-6">
                            <MessageCircle className="h-12 w-12" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            Have a story to share? Questions about Uttarakhand? We'd love to hear from you!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <a
                                href="mailto:contact@uttarakhandblog.com"
                                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                            >
                                <Mail className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-semibold mb-2">Email Us</h4>
                                <p className="text-white/80 text-sm">contact@uttarakhandblog.com</p>
                            </a>

                            <a
                                href="tel:+911234567890"
                                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                            >
                                <Phone className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-semibold mb-2">Call Us</h4>
                                <p className="text-white/80 text-sm">+91 123 456 7890</p>
                            </a>

                            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                                <MapPin className="h-8 w-8 mx-auto mb-3" />
                                <h4 className="font-semibold mb-2">Visit Us</h4>
                                <p className="text-white/80 text-sm">Dehradun, Uttarakhand, India</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:contact@uttarakhandblog.com"
                                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Send Us a Message
                            </a>
                            <a
                                href="/blogs"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                Explore Our Blogs
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
