import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Mountain className="h-8 w-8 text-accent" />
                            <span className="text-2xl font-heading font-bold">Uttarakhand</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Explore the soul of Uttarakhand through our stories, guides, and cultural insights.
                            Discover the majestic Himalayas, ancient temples, and vibrant heritage.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-accent hover:scale-110 transition-all"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-white/80 hover:text-accent transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                                    About Uttarakhand
                                </Link>
                            </li>
                            <li>
                                <Link to="/videos" className="text-white/80 hover:text-accent transition-colors">
                                    Videos
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-white/80 hover:text-accent transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-heading font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/category/culture" className="text-white/80 hover:text-accent transition-colors">
                                    Culture & Heritage
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/temples-char-dham" className="text-white/80 hover:text-accent transition-colors">
                                    Temples & Char Dham
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/travel-guides" className="text-white/80 hover:text-accent transition-colors">
                                    Travel Guides
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/adventure" className="text-white/80 hover:text-accent transition-colors">
                                    Adventure Sports
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/food-lifestyle" className="text-white/80 hover:text-accent transition-colors">
                                    Food & Lifestyle
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-heading font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-white/80 text-sm">
                                    Dehradun, Uttarakhand, India
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:info@uttarakhandblog.com"
                                    className="text-white/80 hover:text-accent transition-colors text-sm"
                                >
                                    info@uttarakhandblog.com
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <p className="text-sm text-white/80 mb-2">Subscribe to our newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20"
                                />
                                <button className="px-6 py-2 bg-accent rounded-r-full hover:bg-accent/90 transition-colors font-medium">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/60 text-sm">
                            © {currentYear} Uttarakhand Blog. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-white/60 hover:text-accent transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-white/60 hover:text-accent transition-colors">
                                Terms of Service
                            </Link>
                            <button className="text-white/60 hover:text-accent transition-colors flex items-center space-x-1">
                                <span>Language: English</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
