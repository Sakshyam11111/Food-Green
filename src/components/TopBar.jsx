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

const TopBar = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isBrowseOpen, setIsBrowseOpen] = useState(false);

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

    const dropdownRef = useRef(null);
    const categoryRef = useRef(null);
    const browseRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLanguageOpen(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setIsCategoryOpen(false);
            }
            if (browseRef.current && !browseRef.current.contains(event.target)) {
                setIsBrowseOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageSelect = (langName) => {
        setSelectedLanguage(langName);
        setIsLanguageOpen(false);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsCategoryOpen(false);
    };

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-white text-gray-900 py-2 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                        {/* Left section: Location and Phone */}
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-4 w-4 text-gray-600" />
                                <span>Kirtipur, Kathmandu</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon className="h-4 w-4 text-gray-600" />
                                <span>+977 984 665 876</span>
                            </div>
                        </div>

                        {/* Center section: Flash Sale (desktop only) */}
                        <div className="hidden md:flex items-center gap-2 font-medium">
                            <BoltIcon className="h-5 w-5 text-pink-600" />
                            <span>
                                <span className='text-pink-600'>Flash Sale </span>
                                - Hurry, deals ending soon.
                            </span>
                            <span className="underline cursor-pointer text-pink-600 hover:text-pink-700">
                                Shop Now
                            </span>
                        </div>

                        {/* Right section: Links + Language */}
                        <div className="flex flex-wrap items-center justify-center gap-6" ref={dropdownRef}>
                            <div className="flex items-center gap-2 cursor-pointer hover:underline">
                                <TruckIcon className="h-4 w-4 text-gray-600" />
                                <span>Order Tracking</span>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer hover:underline">
                                <UserIcon className="h-4 w-4 text-gray-600" />
                                <span>Sign Up</span>
                            </div>

                            {/* Language Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                    className="flex items-center gap-2 cursor-pointer hover:underline focus:outline-none"
                                >
                                    <GlobeAltIcon className="h-4 w-4 text-gray-600" />
                                    <span>{selectedLanguage}</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isLanguageOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                        <ul className="py-1">
                                            {languages.map((lang) => (
                                                <li
                                                    key={lang.code}
                                                    onClick={() => handleLanguageSelect(lang.name)}
                                                    className={`px-4 py-2 text-sm cursor-pointer transition-colors ${selectedLanguage === lang.name
                                                        ? 'bg-green-50 text-green-700 font-medium'
                                                        : 'hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {lang.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Flash Sale */}
                    <div className="md:hidden flex items-center justify-center gap-2 text-green-600 font-medium mt-3">
                        <BoltIcon className="h-5 w-5" />
                        <span>Flash Sale - Hurry, deals ending soon.</span>
                        <span className="underline cursor-pointer hover:text-green-700">Shop Now</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center gap-3 cursor-pointer">
                                <img
                                    src={Image1}
                                    alt="GreenHUB Logo"
                                    className="h-20 w-20 object-contain"
                                />
                            </a>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="flex-1 max-w-3xl mx-4 hidden md:block">
                            <div className="relative flex items-center border-2 border-gray-300 rounded-lg hover:border-green-500 transition-colors focus-within:border-green-500">
                                {/* Category Selector */}
                                <div className="relative" ref={categoryRef}>
                                    <button
                                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                        className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-r-2 border-gray-300 hover:bg-gray-100 transition-colors focus:outline-none whitespace-nowrap z-10"
                                    >
                                        <span className="text-sm font-medium text-gray-700">{selectedCategory}</span>
                                        <svg
                                            className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isCategoryOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                            <ul className="py-1 max-h-80 overflow-y-auto">
                                                {categories.map((category) => (
                                                    <li
                                                        key={category}
                                                        onClick={() => handleCategorySelect(category)}
                                                        className={`px-4 py-2 text-sm cursor-pointer transition-colors ${selectedCategory === category
                                                            ? 'bg-green-50 text-green-700 font-medium'
                                                            : 'hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        {category}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <input
                                    type="text"
                                    placeholder="Search for products"
                                    className="flex-1 px-4 py-3 text-sm focus:outline-none"
                                />

                                <button className="px-6 py-3 bg-green-700">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Wishlist and Cart */}
                        <div className="flex items-center gap-4">
                            <button className="relative flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="relative">
                                    <HeartIcon className="h-6 w-6 text-gray-700" />
                                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        0
                                    </span>
                                </div>
                                <span className="hidden lg:block text-md font-medium text-gray-700">Wishlist</span>
                            </button>

                            <button className="relative flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="relative">
                                    <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        0
                                    </span>
                                </div>
                                <span className="hidden lg:block text-md font-medium text-gray-700">Cart</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="md:hidden mt-4">
                        <div className="flex items-center border-2 border-gray-300 rounded-lg">
                            <input
                                type="text"
                                placeholder="Search for products"
                                className="flex-1 px-4 py-2 text-sm focus:outline-none"
                            />
                            <button className="px-4 py-2 bg-green-700">
                                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation - Updated Layout */}
            <nav className="bg-white shadow-sm relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-start h-16 gap-8">
                        {/* Browse All Categories Button */}
                        <div className="relative" ref={browseRef}>
                            <button
                                onClick={() => setIsBrowseOpen(!isBrowseOpen)}
                                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                                <Menu size={20} />
                                <span className="font-medium">Browse All Categories</span>
                                <ChevronDown size={20} className={`transition-transform ${isBrowseOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isBrowseOpen && (
                                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        {/* Left Column */}
                                        <div className="space-y-1 text-sm">
                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://static.vecteezy.com/system/resources/previews/021/949/582/non_2x/vegetables-flat-icon-set-include-salad-peas-pepper-lime-lemon-onion-pickles-groceries-broccoli-cabbage-corn-and-cucumber-and-carrot-and-chives-chili-eps-file-vector.jpg" alt="Vegetable" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Vegetable</span>
                                            </div>

                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://static.vecteezy.com/system/resources/previews/048/510/214/non_2x/bread-icon-bread-loaf-flat-icon-vector.jpg" alt="Bread and bakery" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Bread and bakery</span>
                                            </div>

                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/849/510/small/juice-orange-icons-set-flat-isolated-vector.jpg" alt="Juice" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Juice</span>
                                            </div>

                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/055/861/704/small/assorted-fresh-fruits-grapes-green-and-red-apple-half-and-whole-fruits-collection-of-organic-vitamins-and-healthy-nutrition-flat-illustration-isolated-on-white-background-vector.jpg" alt="Fresh Fruit" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Fresh Fruit</span>
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-1 text-sm">
                                            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://thumbs.dreamstime.com/z/assorted-mixed-nuts-icon-healthy-snacks-food-packaging-vector-design-generative-ai-natural-featuring-delightful-assortment-410963843.jpg" alt="Dry Food" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Dry Food</span>
                                            </div>

                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://static.vecteezy.com/system/resources/previews/002/405/634/non_2x/milk-and-dairy-products-flat-style-icons-set-isolated-on-white-background-vector.jpg" alt="Milk and Dairy" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Milk and Dairy</span>
                                            </div>

                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://static.vecteezy.com/system/resources/previews/044/181/215/non_2x/seafood-set-cartoon-style-marine-animal-like-salmon-tuna-shrimp-crab-and-mussel-fresh-fish-canned-food-meat-and-steaks-trendy-illustration-isolated-on-white-hand-drawn-flat-design-vector.jpg" alt="Fresh Seafood" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Fresh Seafood</span>
                                            </div>

                                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                                <img src="https://media.istockphoto.com/id/1128661613/vector/coffee-tea-cup-icon-in-flat-style-coffee-mug-vector-illustration-on-white-isolated-background.jpg?s=1024x1024&w=is&k=20&c=ya_JmshW_6fu9UEY4U5ZU-xa5TQplh3nBScsMmRNYhM=" alt="Coffee and Tea" className="w-12 h-12 object-contain" />
                                                <span className="font-medium text-gray-600">Coffee and Tea</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Show More */}
                                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-green-800 font-medium cursor-pointer hover:text-emerald-700">
                                        <Plus size={20} />
                                        <span>Show More...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive
                                        ? 'text-emerald-600 underline underline-offset-4'
                                        : 'text-gray-700 hover:text-emerald-600'
                                    }`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive
                                        ? 'text-emerald-600 underline underline-offset-4'
                                        : 'text-gray-700 hover:text-emerald-600'
                                    }`
                                }
                            >
                                Shop
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive
                                        ? 'text-emerald-600 underline underline-offset-4'
                                        : 'text-gray-700 hover:text-emerald-600'
                                    }`
                                }
                            >
                                About us
                            </NavLink>

                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive
                                        ? 'text-emerald-600 underline underline-offset-4'
                                        : 'text-gray-700 hover:text-emerald-600'
                                    }`
                                }
                            >
                                Blog
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `font-medium transition-colors ${isActive
                                        ? 'text-emerald-600 underline underline-offset-4'
                                        : 'text-gray-700 hover:text-emerald-600'
                                    }`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TopBar;