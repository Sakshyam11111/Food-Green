import React from 'react';
import About1 from '../assets/about1.png';
import About2 from '../assets/about2.png';
import { motion } from 'framer-motion';

const About = () => {
    // Reusable fade-in variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const listItem = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* About Us Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl font-bold text-gray-900 mb-4"
                        >
                            About Us.
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl font-semibold text-teal-700 mb-6"
                        >
                            Fresh. Safe. Sustainable.
                        </motion.p>
                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-700 leading-relaxed"
                        >
                            At Organic Mart, we believe that healthy living begins with pure, safe, and high-quality food. That's why we carefully source fresh organic products directly from trusted local farmers and deliver them straight to your home. Our focus is on providing food that is nutritious, natural, and sustainably grown, so you and your family can enjoy meals that are both delicious and healthy. Our mission is to make organic living simple, convenient, and accessible for everyone, helping you embrace a lifestyle that supports your well-being and the environment.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <img src={About1} alt="Organic farming" className="rounded-2xl shadow-2xl" />
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, Values Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex justify-center order-2 md:order-1"
                        >
                            <div className="w-full max-w-md">
                                <img src={About2} alt="Our values" className="rounded-2xl shadow-2xl" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="space-y-12 order-1 md:order-2"
                        >
                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Mission</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    To provide fresh, nutritious, and certified organic foods that support a healthier lifestyle while promoting sustainable and eco-friendly farming practices.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Vision</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    To be the most trusted source of organic products in Nepal, empowering families to make better, healthier food choices without compromising on quality, freshness, or safety.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl font-bold text-teal-700 mb-6">Our Values</h2>
                                <motion.ul className="space-y-4 text-gray-700">
                                    {[
                                        "Quality First: Every product is carefully sourced, fresh, and certified.",
                                        "Sustainability: We support local farmers and eco-friendly practices to protect the environment.",
                                        "Customer-Centric: Easy ordering, reliable delivery, and excellent service.",
                                        "Transparency & Trust: Clear information and honest labeling on all products.",
                                        "Health & Wellness: Products designed to nourish your body and mind."
                                    ].map((value, i) => (
                                        <motion.li
                                            key={i}
                                            variants={listItem}
                                            whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                            className="flex items-start"
                                        >
                                            <span className="text-teal-600 font-bold mr-3">•</span>
                                            <span>{value.split(":")[0]}:<span className="font-semibold"> {value.split(":")[1]}</span></span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Join Our Organic Family Section */}
            <motion.section
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            >
                <h2 className="text-3xl font-bold text-[#033923] mb-6">Join Our Organic Family</h2>
                <p className="text-gray-700 leading-relaxed max-w-4xl text-lg">
                    Become part of a community that truly values health, sustainability, and high-quality living. By subscribing to our newsletter, you'll receive regular updates on fresh arrivals, exclusive discounts, special offers, and practical tips for healthy living—all delivered straight to your inbox. Stay connected with us and be the first to know about seasonal products, new launches, and exciting promotions, so you never miss out on the best organic choices for you and your family.
                </p>
            </motion.section>

            {/* Our Promise Section */}
            <motion.section
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-teal-50 to-green-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8"
            >
                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-[#033923] mb-8"
                    >
                        Our Promise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-700 leading-relaxed text-lg"
                    >
                        At Organic Mart, we are committed to providing pure, safe, and sustainable products that you can always trust. From farm to table, we focus on delivering fresh, high-quality, and ethically sourced foods that support a healthier lifestyle. Our promise extends beyond just products—we aim to enhance your daily life, promote wellness, and contribute to a more sustainable planet by working closely with local farmers and practicing responsible sourcing. With every purchase, you can feel confident that you are choosing quality, safety, and a better way of living.
                    </motion.p>
                </div>
            </motion.section>
        </div>
    );
};

export default About;