import React, { useState, useRef, useEffect } from 'react';
import {
    MapPinIcon,
    PhoneIcon,
    BoltIcon,
    TruckIcon,
    UserIcon,
    GlobeAltIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline';
import { Menu, ChevronDown, Plus } from 'lucide-react';
import Image1 from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TopBar = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isBrowseOpen, setIsBrowseOpen] = useState(false);
    const [currentFlashIndex, setCurrentFlashIndex] = useState(0);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'np', name: 'Nepali' },
        { code: 'hi', name: 'Hindi' },
    ];

    const categories = [
        'All Categories',
        'Electronics',
        'Fashion',
        'Home & Garden',
        'Sports',
        'Books',
        'Toys',
        'Beauty',
        'Health'
    ];

    const flashMessages = [
        { text: "Flash Sale - Hurry, deals ending soon!", highlight: "Flash Sale" },
        { text: "Discounts up to 50% on top picks", highlight: "Save Big" },
        { text: "Limited Time: Free Delivery on Orders Over Rs.5000", highlight: "Free Delivery" },
        { text: "Grab your favorite products now", highlight: "Special Offers" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFlashIndex((prev) => (prev + 1) % flashMessages.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const dropdownRef = useRef(null);
    const categoryRef = useRef(null);
    const browseRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsLanguageOpen(false);
            if (categoryRef.current && !categoryRef.current.contains(event.target)) setIsCategoryOpen(false);
            if (browseRef.current && !browseRef.current.contains(event.target)) setIsBrowseOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (langName) => {
        setSelectedLanguage(langName);
        setIsLanguageOpen(false);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsCategoryOpen(false);
    };

    // Framer Motion variants
    const flashVariant = {
        enter: { opacity: 0, y: 10 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    const dropdownVariants = {
        hidden: { opacity: 0, scale: 0.95, y: -10 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -10 }
    };

    const megaMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05 } })
    };

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-white text-gray-900 py-2 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-2"
                            >
                                <MapPinIcon className="h-4 w-4 text-gray-600" />
                                <span>Kirtipur, Kathmandu</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-2"
                            >
                                <PhoneIcon className="h-4 w-4 text-gray-600" />
                                <span>+977 984 665 876</span>
                            </motion.div>
                        </div>

                        {/* Rotating Flash Sale - Desktop */}
                        <div className="hidden md:flex items-center gap-3 font-medium overflow-hidden">
                            <BoltIcon className="h-5 w-5 text-pink-600 animate-pulse flex-shrink-0" />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentFlashIndex}
                                    variants={flashVariant}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <span>
                                        <span className="text-pink-600 font-bold">
                                            {flashMessages[currentFlashIndex].highlight}
                                        </span>
                                        {flashMessages[currentFlashIndex].text.includes(flashMessages[currentFlashIndex].highlight)
                                            ? flashMessages[currentFlashIndex].text.split(flashMessages[currentFlashIndex].highlight)[1]
                                            : ` - ${flashMessages[currentFlashIndex].text}`}
                                    </span>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="underline cursor-pointer text-pink-600 hover:text-pink-700"
                                    >
                                        Shop Now →
                                    </motion.span>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex gap-1 ml-4">
                                {flashMessages.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        animate={{ scale: index === currentFlashIndex ? 1.4 : 1 }}
                                        className={`w-1.5 h-1.5 rounded-full ${index === currentFlashIndex ? 'bg-pink-600 w-4' : 'bg-pink-300'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right section */}
                        <div className="flex flex-wrap items-center justify-center gap-6" ref={dropdownRef}>
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer hover:underline">
                                <TruckIcon className="h-4 w-4 text-gray-600" />
                                <span>Order Tracking</span>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer hover:underline">
                                <UserIcon className="h-4 w-4 text-gray-600" />
                                <span>Sign Up</span>
                            </motion.div>

                            <div className="relative">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="flex items-center gap-2 cursor-pointer hover:underline focus:outline-none"
                                >
                                    <GlobeAltIcon className="h-4 w-4 text-gray-600" />
                                    <span>{selectedLanguage}</span>
                                    <ChevronDown size={16} className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                                </motion.button>

                                <AnimatePresence>
                                    {isLanguageOpen && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                                        >
                                            <ul className="py-1">
                                                {languages.map((lang, i) => (
                                                    <motion.li
                                                        key={lang.code}
                                                        custom={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        onClick={() => handleLanguageSelect(lang.name)}
                                                        className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                                                            selectedLanguage === lang.name
                                                                ? 'bg-green-50 text-green-700 font-medium'
                                                                : 'hover:bg-gray-100'
                                                        }`}
                                                    >
                                                        {lang.name}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Flash Sale */}
                    <div className="md:hidden flex items-center justify-center gap-2 text-pink-600 font-medium mt-3">
                        <BoltIcon className="h-5 w-5 animate-pulse" />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentFlashIndex}
                                variants={flashVariant}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                <span className="font-bold">{flashMessages[currentFlashIndex].highlight}</span>
                                {flashMessages[currentFlashIndex].text.includes(flashMessages[currentFlashIndex].highlight)
                                    ? flashMessages[currentFlashIndex].text.split(flashMessages[currentFlashIndex].highlight)[1]
                                    : ` - ${flashMessages[currentFlashIndex].text}`}
                            </motion.span>
                        </AnimatePresence>
                        <span className="underline cursor-pointer hover:text-pink-700">Shop Now</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-4">
                        <motion.a
                            href="/"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
                        >
                            <img src={Image1} alt="GreenHUB Logo" className="h-20 w-20 object-contain" />
                        </motion.a>

                        {/* Desktop Search */}
                        <div className="flex-1 max-w-3xl mx-4 hidden md:block" ref={categoryRef}>
                            <div className="relative flex items-center border-2 border-gray-300 rounded-lg hover:border-green-500 transition-colors focus-within:border-green-500">
                                <motion.button
                                    whileHover={{ backgroundColor: '#f3f4f6' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-r-2 border-gray-300 whitespace-nowrap"
                                >
                                    <span className="text-sm font-medium text-gray-700">{selectedCategory}</span>
                                    <ChevronDown size={16} className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                                </motion.button>

                                <AnimatePresence>
                                    {isCategoryOpen && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                                        >
                                            <ul className="py-1 max-h-80 overflow-y-auto">
                                                {categories.map((cat, i) => (
                                                    <motion.li
                                                        key={cat}
                                                        custom={i}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: i * 0.03 }}
                                                        onClick={() => handleCategorySelect(cat)}
                                                        className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                                                            selectedCategory === cat
                                                                ? 'bg-green-50 text-green-700 font-medium'
                                                                : 'hover:bg-gray-100'
                                                        }`}
                                                    >
                                                        {cat}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <input
                                    type="text"
                                    placeholder="Search for products"
                                    className="flex-1 px-4 py-3 text-sm focus:outline-none"
                                />

                                <motion.button
                                    whileHover={{ backgroundColor: '#16a34a' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-green-700"
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Wishlist & Cart */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: HeartIcon, label: 'Wishlist', count: 0 },
                                { icon: ShoppingCartIcon, label: 'Cart', count: 0 }
                            ].map((item, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    <div className="relative">
                                        <item.icon className="h-6 w-6 text-gray-700" />
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: item.count > 0 ? 1 : 0 }}
                                            className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                                        >
                                            {item.count}
                                        </motion.span>
                                    </div>
                                    <span className="hidden lg:block text-md font-medium text-gray-700">{item.label}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="md:hidden mt-4">
                        <div className="flex items-center border-2 border-gray-300 rounded-lg">
                            <input type="text" placeholder="Search for products" className="flex-1 px-4 py-2 text-sm focus:outline-none" />
                            <motion.button whileTap={{ scale: 0.9 }} className="px-4 py-2 bg-green-700">
                                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white shadow-sm relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-start h-16 gap-8">
                        <div className="relative" ref={browseRef}>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setIsBrowseOpen(!isBrowseOpen)}
                                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                                <Menu size={20} />
                                <span className="font-medium">Browse All Categories</span>
                                <ChevronDown size={20} className={`transition-transform ${isBrowseOpen ? 'rotate-180' : ''}`} />
                            </motion.button>

                            <AnimatePresence>
                                {isBrowseOpen && (
                                    <motion.div
                                        variants={megaMenuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { img: "https://static.vecteezy.com/system/resources/previews/021/949/582/non_2x/vegetables-flat-icon-set-include-salad-peas-pepper-lime-lemon-onion-pickles-groceries-broccoli-cabbage-corn-and-cucumber-and-carrot-and-chives-chili-eps-file-vector.jpg", label: "Vegetable" },
                                                { img: "https://static.vecteezy.com/system/resources/previews/048/510/214/non_2x/bread-icon-bread-loaf-flat-icon-vector.jpg", label: "Bread and bakery" },
                                                { img: "https://static.vecteezy.com/system/resources/previews/008/849/510/small/juice-orange-icons-set-flat-isolated-vector.jpg", label: "Juice" },
                                                { img: "https://static.vecteezy.com/system/resources/previews/055/861/704/small/assorted-fresh-fruits-grapes-green-and-red-apple-half-and-whole-fruits-collection-of-organic-vitamins-and-healthy-nutrition-flat-illustration-isolated-on-white-background-vector.jpg", label: "Fresh Fruit" },
                                                { img: "https://thumbs.dreamstime.com/z/assorted-mixed-nuts-icon-healthy-snacks-food-packaging-vector-design-generative-ai-natural-featuring-delightful-assortment-410963843.jpg", label: "Dry Food" },
                                                { img: "https://static.vecteezy.com/system/resources/previews/002/405/634/non_2x/milk-and-dairy-products-flat-style-icons-set-isolated-on-white-background-vector.jpg", label: "Milk and Dairy" },
                                                { img: "https://static.vecteezy.com/system/resources/previews/044/181/215/non_2x/seafood-set-cartoon-style-marine-animal-like-salmon-tuna-shrimp-crab-and-mussel-fresh-fish-canned-food-meat-and-steaks-trendy-illustration-isolated-on-white-hand-drawn-flat-design-vector.jpg", label: "Fresh Seafood" },
                                                { img: "https://media.istockphoto.com/id/1128661613/vector/coffee-tea-cup-icon-in-flat-style-coffee-mug-vector-illustration-on-white-isolated-background.jpg?s=1024x1024&w=is&k=20&c=ya_JmshW_6fu9UEY4U5ZU-xa5TQplh3nBScsMmRNYhM=", label: "Coffee and Tea" }
                                            ].map((cat, i) => (
                                                <motion.div
                                                    key={i}
                                                    custom={i}
                                                    variants={itemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    whileHover={{ x: 8, backgroundColor: '#f9fafb' }}
                                                    className="flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-colors"
                                                >
                                                    <img src={cat.img} alt={cat.label} className="w-12 h-12 object-contain rounded" />
                                                    <span className="font-medium text-gray-700">{cat.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-emerald-700 font-medium cursor-pointer"
                                        >
                                            <Plus size={20} />
                                            <span>Show More...</span>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="hidden lg:flex items-center gap-8">
                            {['Home', 'Shop', 'About us', 'Blog', 'Contact Us'].map((link, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <NavLink
                                        to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' us', '').replace(' ', '-')}`}
                                        className={({ isActive }) =>
                                            `font-medium transition-colors ${isActive
                                                ? 'text-emerald-600 underline underline-offset-4'
                                                : 'text-gray-700 hover:text-emerald-600'
                                            }`
                                        }
                                    >
                                        {link}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TopBar;