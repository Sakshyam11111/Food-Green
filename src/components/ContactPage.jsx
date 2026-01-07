import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneCountry: '+977',
        phoneNumber: '',
        message: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneCountry: '+977',
            phoneNumber: '',
            message: '',
            agree: false,
        });
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Section - Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                        className="space-y-10"
                    >
                        <div>
                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-bold text-gray-900"
                            >
                                Get in touch
                            </motion.h1>
                            <motion.p
                                variants={fadeInUp}
                                className="text-lg text-gray-600 mt-4 max-w-lg"
                            >
                                We'd love to connect with you and hear your thoughts, questions, or feedback!
                            </motion.p>
                        </div>

                        {/* Contact Details */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {[
                                {
                                    icon: (
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    ),
                                    title: "Contact",
                                    detail: "+977-984-565-8765"
                                },
                                {
                                    icon: (
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    title: "Email",
                                    detail: "info@organicmart.com"
                                },
                                {
                                    icon: (
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    title: "Our Address",
                                    detail: "Kirtipur, Kathmandu, Nepal"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariant}
                                    className="flex items-start space-x-4 group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="flex-shrink-0 w-14 h-14 bg-[#088E57] rounded-lg flex items-center justify-center"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 mt-1">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="mt-12"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-2xl font-semibold text-gray-900 mb-6"
                            >
                                Our Location
                            </motion.h3>
                            <div className="rounded-xl overflow-hidden h-80 border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14134.425916155944!2d85.27579!3d27.67706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb174f3f6f8e65%3A0x6e9c6e2e8e8e8e8e!2sKirtipur%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Organic Mart Location"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInRight}
                        className="bg-white rounded-2xl p-8 lg:p-12"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl font-semibold text-gray-900 mb-8"
                        >
                            Contact Us
                        </motion.h2>

                        <motion.form
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.div variants={itemVariant}>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="First Name"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariant}>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="Last Name"
                                    />
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariant}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                />
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="flex">
                                    <select
                                        name="phoneCountry"
                                        value={formData.phoneCountry}
                                        onChange={handleChange}
                                        className="px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 transition-all"
                                    >
                                        <option value="+977">+977 (Nepal)</option>
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+91">+91 (India)</option>
                                        <option value="+44">+44 (UK)</option>
                                    </select>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all"
                                    placeholder="Type something..."
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariant}
                                className="flex items-center"
                            >
                                <input
                                    type="checkbox"
                                    id="agree"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500 transition-all"
                                />
                                <label htmlFor="agree" className="ml-3 block text-sm text-gray-700">
                                    I agree to the terms and conditions as well as privacy policy.
                                </label>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#0AB972] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#088E57] transition-all duration-300"
                                >
                                    Send Message
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}