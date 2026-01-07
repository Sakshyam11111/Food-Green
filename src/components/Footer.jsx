import React from 'react';
import { Facebook, Twitter, Linkedin, MessageCircle, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from "../assets/logo.png";
import { motion } from 'framer-motion';

export default function Footer() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const socialHover = {
        hover: { scale: 1.15, rotate: 5, transition: { duration: 0.3 } }
    };

    const linkHover = {
        hover: { x: 8, transition: { duration: 0.3 } }
    };

    return (
        <footer className="bg-[#E5FFF5] py-16 px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Section */}
                    <motion.div variants={fadeInUp}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <img src={Logo} alt="Organic Mart Logo" className="h-20 w-20 object-contain" />
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-700 text-sm mb-8 leading-relaxed max-w-xs"
                        >
                            We bring you pure, safe, and sustainable products straight to your home. From fresh organics to travel solutions, we are your trusted partner in living better every day.
                        </motion.p>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex gap-4"
                        >
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Twitter, label: "Twitter" },
                                { Icon: Linkedin, label: "LinkedIn" },
                                { Icon: MessageCircle, label: "Messenger" },
                                { Icon: Instagram, label: "Instagram" }
                            ].map(({ Icon, label }, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    aria-label={label}
                                    variants={itemVariant}
                                    whileHover="hover"
                                    variants={socialHover}
                                    className="w-12 h-12 bg-[#AAFBDA] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <Icon className="w-6 h-6 text-[#05643D]" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Shop', 'About Us', 'Blog', 'Contact Us'].map((link) => (
                                <motion.li
                                    key={link}
                                    variants={itemVariant}
                                    whileHover="hover"
                                    variants={linkHover}
                                >
                                    <a href="#" className="text-gray-700 hover:text-teal-600 text-sm transition-colors inline-block">
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Customer Support */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Customer Support</h3>
                        <ul className="space-y-3">
                            {['Order Tracking', 'Privacy Policy', 'Terms & Conditions', 'Returns & Refunds'].map((link) => (
                                <motion.li
                                    key={link}
                                    variants={itemVariant}
                                    whileHover="hover"
                                    variants={linkHover}
                                >
                                    <a href="#" className="text-gray-700 hover:text-teal-600 text-sm transition-colors inline-block">
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Us */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <motion.li variants={itemVariant} className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#05643D] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">Kirtipur, Kathmandu, Nepal</span>
                            </motion.li>
                            <motion.li variants={itemVariant} className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#05643D] flex-shrink-0" />
                                <span className="text-gray-700 text-sm">+977-984-565-8765</span>
                            </motion.li>
                            <motion.li variants={itemVariant} className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#05643D] flex-shrink-0" />
                                <span className="text-gray-700 text-sm">info@organicmart.com</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-teal-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-gray-600 text-md"
                    >
                        © 2026 Organic Mart. All rights reserved.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex gap-3 flex-wrap justify-center"
                    >
                        {[
                            { name: "VISA", color: "blue-600" },
                            { circles: ["red-500", "orange-500"] },
                            { name: "PayPal", color: "blue-700" },
                            { name: "AMEX", color: "blue-600" },
                            { name: "VISA", color: "blue-700" },
                            { circles: ["red-600", "blue-600"] }
                        ].map((payment, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="w-14 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                {payment.name ? (
                                    <span className={`text-${payment.color} font-bold text-xs`}>{payment.name}</span>
                                ) : (
                                    <div className="flex gap-1">
                                        <div className={`w-3 h-3 rounded-full bg-${payment.circles[0]}`}></div>
                                        <div className={`w-3 h-3 rounded-full bg-${payment.circles[1]}`}></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </footer>
    );
}