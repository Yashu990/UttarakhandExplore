import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    Clock,
    CheckCircle,
} from 'lucide-react';



const Contact = () => {
    // const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [feedbackData, setFeedbackData] = useState({
        name: '',
        email: '',
        rating: 5,
        feedback: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback Form:', feedbackData);
        setFeedbackSubmitted(true);
        setTimeout(() => {
            setFeedbackSubmitted(false);
            setFeedbackData({ name: '', email: '', rating: 5, feedback: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            info: 'contact@uttarakhandblog.com',
            link: 'mailto:contact@uttarakhandblog.com',
            color: 'from-blue-500 to-cyan-600',
        },
        {
            icon: Phone,
            title: 'Call Us',
            info: '+91 123 456 7890',
            link: 'tel:+911234567890',
            color: 'from-green-500 to-emerald-600',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            info: 'Dehradun, Uttarakhand, India',
            link: null,
            color: 'from-orange-500 to-red-600',
        },
        {
            icon: Clock,
            title: 'Working Hours',
            info: 'Mon - Fri: 9AM - 6PM',
            link: null,
            color: 'from-purple-500 to-indigo-600',
        },
    ];

    const socialLinks = [
        { icon: Facebook, name: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-600' },
        { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-sky-500' },
        { icon: Instagram, name: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-600' },
        { icon: Youtube, name: 'YouTube', url: 'https://youtube.com', color: 'hover:text-red-600' },
        { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-blue-700' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-20 mt-20">
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
                            <span className="px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-sm font-medium">
                                📧 Get in Touch
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                            We'd Love to Hear from You
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Whether you have a question about a destination, want to share your story, or just want to say hello, we're here for you.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {contactInfo.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    <IconComponent className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-textPrimary mb-2">
                                    {item.title}
                                </h3>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        className="text-textSecondary hover:text-accent transition-colors"
                                    >
                                        {item.info}
                                    </a>
                                ) : (
                                    <p className="text-textSecondary">{item.info}</p>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-textPrimary">
                                    Send us a Message
                                </h2>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-textPrimary mb-2">Message Sent!</h3>
                                    <p className="text-textSecondary">Thank you for contacting us. We'll get back to you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleContactSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                                    >
                                        <Send className="h-5 w-5" />
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Feedback Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-accent/10 rounded-xl">
                                    <MessageSquare className="h-6 w-6 text-accent" />
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-textPrimary">
                                    Share Your Feedback
                                </h2>
                            </div>

                            {feedbackSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-textPrimary mb-2">Thank You!</h3>
                                    <p className="text-textSecondary">We appreciate your feedback. It helps us improve.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Name (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            value={feedbackData.name}
                                            onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder="Optional"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Email (Optional)
                                        </label>
                                        <input
                                            type="email"
                                            value={feedbackData.email}
                                            onChange={(e) => setFeedbackData({ ...feedbackData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder="Optional"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Rating: {feedbackData.rating}/5
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            value={feedbackData.rating}
                                            onChange={(e) => setFeedbackData({ ...feedbackData, rating: parseInt(e.target.value) })}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                                        />
                                        <div className="flex justify-between text-xs text-textSecondary mt-1">
                                            <span>Poor</span>
                                            <span>Excellent</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">
                                            Your Feedback
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={feedbackData.feedback}
                                            onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="What did you like or dislike?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                                    >
                                        <Send className="h-5 w-5" />
                                        <span>Submit Feedback</span>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h3 className="text-2xl font-heading font-bold text-textPrimary mb-6">
                                {t('contactPage.social')}
                            </h3>
                            <div className="flex items-center justify-center space-x-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 bg-gray-100 rounded-full text-textSecondary ${social.color} transition-all hover:scale-110`}
                                            title={social.name}
                                        >
                                            <IconComponent className="h-6 w-6" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="p-8 pb-0">
                            <h2 className="text-3xl font-heading font-bold text-textPrimary mb-2">
                                Find Us on Map
                            </h2>
                            <p className="text-textSecondary mb-6">
                                Visit our office in the heart of Dehradun.
                            </p>
                        </div>
                        <div className="h-96 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.85371756214!2d77.94462737910156!3d30.316495800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dehradun Location"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
