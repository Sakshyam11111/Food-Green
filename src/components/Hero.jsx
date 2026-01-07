import React, { useState, useEffect } from 'react';
import Banner from '../assets/banner1.png';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import V1 from '../assets/v1.png';
import V2 from '../assets/v2.png';
import V3 from '../assets/v3.png';
import T1 from '../assets/t1.png';
import T2 from '../assets/t2.png';
import T3 from '../assets/t3.png';
import T4 from '../assets/t4.png';
import T5 from '../assets/t5.png';
import T6 from '../assets/t6.png';
import T7 from '../assets/t7.png';
import T8 from '../assets/t8.png';
import { motion, AnimatePresence } from 'framer-motion';

// Plain Product Card (no motion)
const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-64 hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
        <div className="p-5">
            <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-1">{product.seller}</p>
            <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                    ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.rating}.0)</span>
            </div>

            <div className="flex flex-col items-start gap-3">
                <span className="text-xl font-bold text-gray-800">Rs. {product.price.toLocaleString()}</span>
                <button className="w-full bg-gradient-to-r from-[#088E57] to-[#0AB972] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:opacity-90 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
);

export default function Hero() {
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const banners = [
        { image: V1, title: "Choose Fresh Organics and Live Better", description: "Pure, safe, and sustainable food you can trust." },
        { image: V2, title: "Eat Natural, Stay Strong and Healthy", description: "Bringing you the goodness of nature every day." },
        { image: V3, title: "Go Organic Today for a Healthier Tomorrow", description: "Your Partner in building a healthy lifestyle." }
    ];

    const categories = [
        { name: "Vegetable", image: T1 },
        { name: "Bread & Bakery", image: T2 },
        { name: "Coffee & Tea", image: T3 },
        { name: "Dry Food", image: T4 },
        { name: "Milk & Dairy", image: T5 },
        { name: "Juice", image: T6 },
        { name: "Fresh Seafood", image: T7 },
        { name: "Fresh Fruit", image: T8 },
    ];

    const popularProducts = [
        { name: "Garlic (China)", seller: "Sold by Organic Mart", price: 2720, rating: 5, image: "https://i.pinimg.com/736x/6d/42/bd/6d42bde700fb8b17a42cb064efdd268b.jpg" },
        { name: "Walnuts", seller: "Sold by Fresh Harvest", price: 14870, rating: 5, image: "https://wegotnuts.com/cdn/shop/files/41jqG9sFE9L_1024x1024.jpg?v=1756761280" },
        { name: "Cheese", seller: "Sold by Dairy Delight", price: 12150, rating: 4, image: "https://www.cheesebros.com/cdn/shop/products/cinderblock-1.jpg?v=1762441483" },
        { name: "Potato", seller: "Sold by Green Valley", price: 3470, rating: 5, image: "https://media.istockphoto.com/id/1131865898/photo/potatoes.jpg?s=612x612&w=0&k=20&c=1OX5Qcx0Yz2w6JMiGKhFoIJIBmWCcppFrO1LjtFTgaI=" },
        { name: "Red Pepper", seller: "Sold by Nepal Agro", price: 4080, rating: 4, image: "https://www.southernliving.com/thmb/-QjlOnuY7HAUCoEakhPI4BaeXaM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bell_Peppers_005-1097cdef62074fad93cf590c546b0767.jpg" },
        { name: "Milk Splash", seller: "Sold by Himalaya Dairy", price: 4090, rating: 5, image: "https://png.pngtree.com/png-vector/20220225/ourmid/pngtree-milk-poured-into-bottle-for-water-diffusion-shape-closeup-organic-vector-png-image_44508728.jpg" },
    ];

    const newProducts = [...popularProducts.slice(0, 3), { ...popularProducts[3], name: "Fresh Potatoes" }, { ...popularProducts[4], name: "Bell Pepper" }, { ...popularProducts[5], name: "Organic Milk" }];
    const trendingProducts = [...popularProducts.slice(2, 5), ...popularProducts.slice(0, 3)];

    const discountOffers = [
        { title: "Up to 40% Off on Dairy Products", description: "Fresh milk, cheese, and yogurt at special prices. Organic, healthy, and straight to your home.", button: "Shop Now", bgClass: "bg-gradient-to-br from-cyan-50 to-cyan-100", image: S1 },
        { title: "Save 30% on Dry Fruits & Nuts", description: "Walnuts, almonds, and pistachios, nutritious snacks now with big savings.", button: "Shop Now", bgClass: "bg-gradient-to-br from-yellow-50 to-yellow-100", image: S2 },
        { title: "Flat 25% Off on Grains & Pulses", description: "High-quality rice, lentils, and beans for your daily meals at lower prices.", button: "Shop Now", bgClass: "bg-gradient-to-br from-teal-50 to-teal-100", image: S3 },
        { title: "Fresh Vegetables Daily", description: "Farm-fresh vegetables delivered to your doorstep. Quality guaranteed.", button: "Shop Now", bgClass: "bg-gradient-to-br from-green-50 to-green-100", image: S3 },
    ];

    // Plain Product Section (no Framer Motion)
    const ProductSection = ({ title, products }) => (
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-left">{title}</h2>

            <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Banner with Smooth Transition */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
                <div className="bg-gradient-to-br from-[#088E57] to-[#0AB972] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center p-6 lg:p-12">
                        <motion.div
                            key={currentBanner}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-6"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                            >
                                {banners[currentBanner].title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-lg text-white/90 leading-relaxed"
                            >
                                {banners[currentBanner].description}
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="bg-white text-[#088E57] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg text-base"
                            >
                                Shop Now
                            </motion.button>
                        </motion.div>

                        <motion.div
                            key={`img-${currentBanner}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex items-center justify-center h-72 md:h-96"
                        >
                            <img
                                src={banners[currentBanner].image}
                                alt={banners[currentBanner].title}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    <div className="flex justify-center gap-3 pb-8">
                        {banners.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentBanner(index)}
                                animate={{ scale: index === currentBanner ? 1.4 : 1 }}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentBanner ? 'bg-white w-10' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Top Categories - Staggered Animation */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-10 text-center"
                >
                    Top Categories
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            className="group cursor-pointer text-center"
                        >
                            <div className="relative mb-3">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-28 h-28 mx-auto object-cover rounded-full shadow-lg border-4 border-white group-hover:border-[#0AB972] transition-all duration-300"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-700 group-hover:text-[#088E57] transition-colors">
                                {cat.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Product Sections - No Framer Motion */}
            <ProductSection title="Popular Products" products={popularProducts} />
            <ProductSection title="New Products" products={newProducts} />
            <ProductSection title="Trending Products" products={trendingProducts} />

            {/* Special Discounts */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-10 text-left"
                >
                    Special Discounts Just for You!
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {discountOffers.map((offer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.7 }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
                            className={`${offer.bgClass} rounded-2xl p-8 shadow-lg relative overflow-hidden`}
                        >
                            <div className="relative z-10 space-y-4 max-w-md">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-2xl font-bold text-gray-800"
                                >
                                    {offer.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-700 leading-relaxed text-sm"
                                >
                                    {offer.description}
                                </motion.p>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-[#088E57] to-[#0AB972] text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                                >
                                    {offer.button}
                                </motion.button>
                            </div>

                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.4, scale: 1 }}
                                src={offer.image}
                                alt={offer.title}
                                className="absolute bottom-0 right-0 w-48 h-48 object-contain pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Newsletter Section */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#54F6B4] to-[#54F6B4]" />

                    <motion.img
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        viewport={{ once: true }}
                        src={Banner}
                        alt="Newsletter background"
                        className="absolute bottom-0 right-0 w-96 max-w-none hidden md:block"
                    />

                    <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl text-gray-800 space-y-6"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl lg:text-4xl font-bold leading-tight"
                            >
                                Join the Organic Family!
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-800 leading-relaxed"
                            >
                                Get fresh tips, healthy living ideas, and exclusive organic deals delivered to your inbox.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 max-w-xl"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-white/30 text-base bg-white shadow-inner"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#0AB972] text-white hover:bg-[#05643D] px-8 py-4 rounded-xl font-bold shadow-lg whitespace-nowrap"
                                >
                                    Subscribe Now
                                </motion.button>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-sm text-gray-800"
                            >
                                Read our <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}