import React from 'react';
import { motion } from 'framer-motion';

const BlogPost = () => {
    // Animation variants
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

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    return (
        <>
            {/* Hero Image with Parallax Effect - No Shadow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative overflow-hidden"
            >
                <motion.img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&fit=crop"
                    alt="Fresh organic vegetables in basket"
                    className="w-full h-96 md:h-screen max-h-96 object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 12, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Intro Section - Overlapping Hero - Removed shadow */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={scaleIn}
                    className="bg-white rounded-xl p-8 md:p-12 -mt-20 relative z-10 mb-12" // shadow-2xl removed
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
                    >
                        5 Easy Ways to Include Organic Foods in Your Diet
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 mb-6 leading-relaxed"
                    >
                        Eating organic is more than just a lifestyle—it’s about making healthier choices for your body and the planet. Organic foods are free from harmful chemicals and pesticides, offering you natural nutrition with every bite. Choosing organic also supports local farmers and eco-friendly farming methods that protect the environment. Even small steps, like switching a few essentials, can make a big difference.
                    </motion.p>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Here are five simple ways to begin adding organic foods to your everyday diet.
                    </motion.p>
                </motion.section>

                {/* Blog Sections */}
                {[
                    {
                        title: "1. Start with the Basics",
                        content: "Your journey to organic living can begin with the foods you eat every single day—staples like rice, flour, pulses, and bread. Replacing these essentials with organic alternatives ensures you reduce your intake of chemicals while still enjoying the familiar meals you love. These small changes quickly add up, creating a foundation for healthier eating.",
                        why: "Basics form the bulk of most diets, so switching them to organic creates a big impact on your health and lifestyle.",
                        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&fit=crop",
                        alt: "Organic grains in jars",
                        reverse: true
                    },
                    {
                        title: "2. Choose Organic Fruits and Vegetables",
                        content: "Fresh fruits and vegetables are some of the easiest and most rewarding organic swaps. Opting for seasonal and local organic produce not only guarantees freshness but also delivers richer flavor and higher nutritional value. Shopping for organics at a local farmers' market can also be a fun and engaging experience.",
                        why: "You gain more vitamins, minerals, and antioxidants while supporting local farmers who follow sustainable growing practices.",
                        img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&fit=crop",
                        alt: "Organic fruits and vegetables",
                        reverse: false
                    },
                    {
                        title: "3. Incorporate Organic Snacks",
                        content: "Snacking doesn't have to be unhealthy. By swapping processed chips and sugary packaged foods for organic nuts, seeds, and dried fruits, you can enjoy delicious snacks that give you long-lasting energy. Organic snacks are also free from artificial additives, making them a better option for both kids and adults.",
                        why: "You avoid hidden sugars, preservatives, and additives while fueling your body with natural proteins and healthy fats.",
                        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&fit=crop",
                        alt: "Organic nuts and dried fruits",
                        reverse: true
                    },
                    {
                        title: "4. Try Simple Organic Recipes",
                        content: "Cooking with organic ingredients doesn't need to be complicated. Start with easy recipes such as fresh salads, smoothies, soups, or stir-fries using organic produce. These dishes are quick to prepare and highlight the natural flavors of your food. Over time, you can expand into more creative recipes.",
                        why: "Cooking with organic ingredients helps your body absorb nutrients more effectively, keeps your meals chemical-free, and allows you to enjoy the true taste of food.",
                        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&fit=crop",
                        alt: "Healthy organic salad",
                        reverse: false
                    },
                    {
                        title: "5. Switch to Organic Dairy",
                        content: "Dairy is another key part of many households, and switching to organic milk, yogurt, and cheese is a great step toward healthier eating. Organic dairy is produced without synthetic hormones or antibiotics, ensuring purity and better nutrition. Whether it's a glass of milk with breakfast or cheese in your favorite recipe, organic choices make a noticeable difference.",
                        why: "Organic dairy is safer, richer in nutrients, and a healthier option for children, adults, and the elderly alike.",
                        img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&fit=crop",
                        alt: "Organic dairy products",
                        reverse: true
                    }
                ].map((section, index) => (
                    <motion.section
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className={`bg-white rounded-2xl p-8 md:p-12 mb-16 flex flex-col ${
                            section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                        } items-center gap-10 overflow-hidden`} // removed shadow-xl
                    >
                        {/* Text Content */}
                        <motion.div
                            variants={section.reverse ? fadeInRight : fadeInLeft}
                            className="flex-1"
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="text-3xl md:text-4xl font-bold text-green-600 mb-6"
                            >
                                {section.title}
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-gray-600 mb-8 leading-relaxed text-lg"
                            >
                                {section.content}
                            </motion.p>
                            <motion.div
                                variants={fadeInUp}
                                className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r" // removed shadow-md
                            >
                                <strong className="text-green-800 block mb-2 text-lg">Why it matters:</strong>
                                <span className="text-gray-700 text-base leading-relaxed">
                                    {section.why}
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Image - Removed shadow */}
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-96"
                        >
                            <img
                                src={section.img}
                                alt={section.alt}
                                className="w-full h-72 md:h-80 object-cover rounded-3xl" // removed shadow-2xl
                            />
                        </motion.div>
                    </motion.section>
                ))}
            </div>
        </>
    );
};

export default BlogPost;