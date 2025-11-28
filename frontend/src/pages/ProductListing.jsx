import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
    SlidersHorizontal,
    Grid,
    List,
    Star,
    Heart,
    ShoppingCart,
    ArrowLeft,
} from 'lucide-react';

const ProductListing = () => {
    const { category } = useParams();
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [sortBy, setSortBy] = useState('featured');

    // Mock product data
    const products = [
        {
            id: 1,
            name: 'Brass Diya Set',
            price: 1299,
            originalPrice: 1799,
            image: 'https://images.unsplash.com/photo-1603893089691-5e78b1a7b2c7?w=800',
            rating: 4.8,
            reviews: 127,
            discount: 28,
            inStock: true,
        },
        {
            id: 2,
            name: 'Rudraksha Mala',
            price: 899,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800',
            rating: 4.9,
            reviews: 203,
            discount: null,
            inStock: true,
        },
        {
            id: 3,
            name: 'Copper Kalash',
            price: 1599,
            originalPrice: 2199,
            image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
            rating: 4.7,
            reviews: 89,
            discount: 27,
            inStock: false,
        },
        {
            id: 4,
            name: 'Incense Holder Set',
            price: 549,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1600093760250-1b5c34d99ddc?w=800',
            rating: 4.6,
            reviews: 156,
            discount: null,
            inStock: true,
        },
        {
            id: 5,
            name: 'Puja Thali',
            price: 2499,
            originalPrice: 3299,
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
            rating: 4.9,
            reviews: 234,
            discount: 24,
            inStock: true,
        },
        {
            id: 6,
            name: 'Sacred Bells',
            price: 799,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1612043024142-13881f5ac2c9?w=800',
            rating: 4.5,
            reviews: 72,
            discount: null,
            inStock: true,
        },
    ];

    const getCategoryTitle = (slug) => {
        const titles = {
            'temple-essentials': 'Temple Essentials',
            'handicrafts': 'Local Handicrafts',
            'adventure-gear': 'Adventure Gear',
            'books-guides': 'Books & Guides',
            'local-food': 'Local Food',
        };
        return titles[slug] || 'Products';
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white mt-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link
                        to="/store"
                        className="inline-flex items-center text-gray-600 hover:text-primary mb-4 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Store
                    </Link>
                    <h1 className="text-4xl font-heading font-bold text-gray-900">
                        {getCategoryTitle(category)}
                    </h1>
                    <p className="text-gray-600 mt-2">{products.length} products available</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters and Sorting */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    {/* View Toggle */}
                    <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                                    ? 'bg-primary text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <Grid className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                                    ? 'bg-primary text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <List className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Sort */}
                    <div className="flex items-center space-x-4">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                            <option value="newest">Newest First</option>
                        </select>

                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <SlidersHorizontal className="h-4 w-4" />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className={`grid gap-6 ${viewMode === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1'
                    }`}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/store/product/${product.id}`}
                                className={`group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64' : 'h-80'
                                    }`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Discount Badge */}
                                    {product.discount && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                                                {product.discount}% OFF
                                            </span>
                                        </div>
                                    )}

                                    {/* Out of Stock */}
                                    {!product.inStock && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold">
                                                Out of Stock
                                            </span>
                                        </div>
                                    )}

                                    {/* Quick Actions */}
                                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-colors">
                                            <Heart className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            <span className="ml-1 text-sm font-medium text-gray-900">
                                                {product.rating}
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className="text-2xl font-bold text-primary">
                                            ₹{product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-lg text-gray-500 line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        disabled={!product.inStock}
                                        className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${product.inStock
                                                ? 'bg-primary text-white hover:bg-primary/90 hover:scale-105'
                                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <ShoppingCart className="h-5 w-5" />
                                        <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                                    </button>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
