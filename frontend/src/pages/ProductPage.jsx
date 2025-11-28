import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
    Heart,
    Share2,
    ShoppingCart,
    Star,
    ArrowLeft,
    Minus,
    Plus,
    Truck,
    Shield,
    RefreshCw,
    Check,
} from 'lucide-react';

const ProductPage = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Mock product data
    const product = {
        id: 1,
        name: 'Brass Diya Set (Set of 5)',
        price: 1299,
        originalPrice: 1799,
        discount: 28,
        rating: 4.8,
        reviews: 127,
        inStock: true,
        stockCount: 24,
        description: 'Handcrafted brass diyas perfect for your daily puja or special occasions. Each diya is meticulously crafted by local artisans in Uttarakhand using traditional techniques passed down through generations.',
        features: [
            '100% Pure Brass Construction',
            'Handcrafted by Local Artisans',
            'Set of 5 Diyas',
            'Traditional Design',
            'Perfect for Daily Puja',
            'Easy to Clean and Maintain',
        ],
        images: [
            'https://images.unsplash.com/photo-1603893089691-5e78b1a7b2c7?w=800',
            'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
            'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
            'https://images.unsplash.com/photo-1600093760250-1b5c34d99ddc?w=800',
        ],
        specifications: {
            Material: 'Pure Brass',
            Weight: '450g',
            Dimensions: '3" x 3" x 1.5"',
            Finish: 'Polished',
            'Country of Origin': 'India (Uttarakhand)',
        },
    };

    const relatedProducts = [
        {
            id: 2,
            name: 'Rudraksha Mala',
            price: 899,
            image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800',
            rating: 4.9,
        },
        {
            id: 3,
            name: 'Copper Kalash',
            price: 1599,
            image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
            rating: 4.7,
        },
        {
            id: 4,
            name: 'Incense Holder Set',
            price: 549,
            image: 'https://images.unsplash.com/photo-1600093760250-1b5c34d99ddc?w=800',
            rating: 4.6,
        },
        {
            id: 5,
            name: 'Puja Thali',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
            rating: 4.9,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-bgLight to-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <Link
                    to="/store/temple-essentials"
                    className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Temple Essentials
                </Link>

                {/* Product Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Images */}
                    <div>
                        {/* Main Image */}
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl mb-4"
                        >
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {product.discount && (
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold shadow-lg">
                                        {product.discount}% OFF
                                    </span>
                                </div>
                            )}
                        </motion.div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square rounded-lg overflow-hidden ${selectedImage === index
                                            ? 'ring-4 ring-primary'
                                            : 'ring-2 ring-gray-200 hover:ring-primary/50'
                                        } transition-all`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-yellow-400'
                                                    : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="font-semibold text-gray-900">{product.rating}</span>
                            </div>
                            <span className="text-gray-600">({product.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-4xl font-bold text-primary">
                                ₹{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                                <span className="text-2xl text-gray-500 line-through">
                                    ₹{product.originalPrice.toLocaleString()}
                                </span>
                            )}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center space-x-2 mb-6">
                            {product.inStock ? (
                                <>
                                    <Check className="h-5 w-5 text-green-500" />
                                    <span className="text-green-600 font-medium">
                                        In Stock ({product.stockCount} available)
                                    </span>
                                </>
                            ) : (
                                <span className="text-red-600 font-medium">Out of Stock</span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

                        {/* Quantity Selector */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-900 mb-3">
                                Quantity
                            </label>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-6 py-3 font-semibold text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            <button className="flex-1 flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
                                <ShoppingCart className="h-5 w-5" />
                                <span>Add to Cart</span>
                            </button>
                            <button className="p-4 border-2 border-gray-300 rounded-xl hover:border-red-500 hover:text-red-500 transition-colors">
                                <Heart className="h-6 w-6" />
                            </button>
                            <button className="p-4 border-2 border-gray-300 rounded-xl hover:border-primary hover:text-primary transition-colors">
                                <Share2 className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center p-4 bg-blue-50 rounded-xl">
                                <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                <p className="text-xs text-gray-700 font-medium">Free Delivery</p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-xl">
                                <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <p className="text-xs text-gray-700 font-medium">Authentic Product</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-xl">
                                <RefreshCw className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                                <p className="text-xs text-gray-700 font-medium">7-Day Returns</p>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Specifications</h3>
                            <dl className="space-y-3">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                                        <dt className="text-gray-600">{key}</dt>
                                        <dd className="font-medium text-gray-900">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                        You May Also Like
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.id}
                                to={`/store/product/${relatedProduct.id}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center space-x-1 mb-2">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-medium">{relatedProduct.rating}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {relatedProduct.name}
                                    </h3>
                                    <p className="text-lg font-bold text-primary">
                                        ₹{relatedProduct.price.toLocaleString()}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
