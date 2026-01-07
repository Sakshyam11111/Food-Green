import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu } from 'lucide-react';

const GroceryShop = () => {
  const [favorites, setFavorites] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Garlic (China)',
      price: 2720,
      rating: 4,
      image: 'https://i.pinimg.com/736x/6d/42/bd/6d42bde700fb8b17a42cb064efdd268b.jpg',
      brand: 'Organic Mart',
      category: 'Vegetable'
    },
    {
      id: 2,
      name: 'Walnuts',
      price: 14870,
      rating: 4,
      image: 'https://wegotnuts.com/cdn/shop/files/41jqG9sFE9L_1024x1024.jpg?v=1756761280',
      brand: 'Fresh Harvest',
      category: 'Dry Food'
    },
    {
      id: 3,
      name: 'Tomatoes (Local)',
      price: 2250,
      rating: 4,
      image: 'https://i.pinimg.com/1200x/2b/d1/fe/2bd1feb9a59da17ca25723f5eec26b80.jpg',
      brand: 'Farm Fresh Nepal',
      category: 'Vegetable'
    },
    {
      id: 4,
      name: 'Honey (Wild Organic)',
      price: 7500,
      rating: 4,
      image: 'https://i.pinimg.com/1200x/d9/e6/bd/d9e6bd5c8d4522e63daa85c998af3b0c.jpg',
      brand: 'Himal Honey',
      category: 'Dry Food'
    },
    {
      id: 5,
      name: 'Spinach (Green leaf)',
      price: 1150,
      rating: 4,
      image: 'https://i.pinimg.com/736x/09/2b/28/092b28de2906261662f0a9d9e294f452.jpg',
      brand: 'Green Valley',
      category: 'Vegetable'
    },
    {
      id: 6,
      name: 'Apples (Jumla)',
      price: 3800,
      rating: 4,
      image: 'https://i.pinimg.com/736x/55/b3/ca/55b3ca9346b622fada2a5795d6608774.jpg',
      brand: 'Everest Orchard',
      category: 'Fresh Fruit'
    },
    {
      id: 7,
      name: 'Milk Splash',
      price: 4090,
      rating: 4,
      image: 'https://i.pinimg.com/1200x/88/55/aa/8855aaf8e017572b9e7787f8d6b7db5e.jpg',
      brand: 'Himalaya Dairy',
      category: 'Milk and Dairy'
    }
  ];

  const categories = [
    { icon: '🥬', name: 'Vegetable' },
    { icon: '🥫', name: 'Dry Food' },
    { icon: '🍞', name: 'Bread and bakery' },
    { icon: '🥛', name: 'Milk and Dairy' },
    { icon: '🧃', name: 'Juice' },
    { icon: '🦞', name: 'Fresh Seafood' },
    { icon: '🍎', name: 'Fresh Fruit' },
    { icon: '☕', name: 'Coffee and Tea' }
  ];

  const brands = [
    { icon: '🌿', name: 'Organic Mart' },
    { icon: '🌾', name: 'Fresh Harvest' },
    { icon: '🥛', name: 'Dairy Delight' },
    { icon: '🌍', name: 'Green Valley' },
    { icon: '🚜', name: 'Nepal Agro' },
    { icon: '🏔️', name: 'Himalaya Dairy' },
    { icon: '⛰️', name: 'Everest Organics' },
    { icon: '🍪', name: 'Healthy Bites' },
    { icon: '🏪', name: 'Farm Fresh Nepal' },
    { icon: '🍯', name: 'Himal Honey' },
    { icon: '🍎', name: 'Everest Orchard' }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryMatch && brandMatch;
  });

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          {i < rating ? '⭐' : '☆'}
        </span>
      ))}
    </div>
  );

  // Variants for product cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for filter items
  const filterItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar with slide-in animation */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-64 bg-white p-6 shadow-lg min-h-screen"
        >
          <div className="flex items-center gap-2 mb-6">
            <Menu className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
          </div>

          {/* Categories */}
          <div className="mb-10">
            <h3 className="font-bold text-lg mb-4 pb-2 border-b-4 border-green-600 inline-block">Categories</h3>
            <div className="space-y-3 mt-6">
              {categories.map((cat, index) => (
                <motion.label
                  key={cat.name}
                  variants={filterItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 cursor-pointer hover:bg-green-50 p-3 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.name)}
                    onChange={() => toggleCategory(cat.name)}
                    className="w-5 h-5 accent-green-600 rounded"
                  />
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-base font-medium">{cat.name}</span>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="mb-10">
            <h3 className="font-bold text-lg mb-4 pb-2 border-b-4 border-green-600 inline-block">Brands</h3>
            <div className="space-y-3 mt-6">
              {brands.map((brand, index) => (
                <motion.label
                  key={brand.name}
                  variants={filterItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="flex items-center gap-3 cursor-pointer hover:bg-green-50 p-3 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.name)}
                    onChange={() => toggleBrand(brand.name)}
                    className="w-5 h-5 accent-green-600 rounded"
                  />
                  <span className="text-2xl">{brand.icon}</span>
                  <span className="text-base font-medium">{brand.name}</span>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-bold text-lg mb-4 pb-2 border-b-4 border-green-600 inline-block">Price Range</h3>
            <p className="text-sm text-gray-600 mt-4">NPR 0 - NPR 24,000</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center mb-8"
          >
            <p className="text-lg text-gray-700">We found <span className="font-bold text-green-600">{filteredProducts.length}</span> items for you!</p>
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Sort By:</span>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500">
                <option>Recommendation</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid with AnimatePresence for smooth enter/exit */}
          <AnimatePresence mode="wait">
            <motion.div className="grid grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden relative cursor-pointer"
                >
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white shadow-md hover:bg-green-50 transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${favorites[product.id] ? 'fill-green-600 text-green-600' : 'text-gray-500'}`}
                    />
                  </button>

                  <div className="h-56 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
                    <StarRating rating={product.rating} />
                    <p className="text-sm text-gray-600 mt-3">Sold by <span className="font-medium">{product.brand}</span></p>
                    <p className="font-bold text-2xl mt-4 text-green-600">Rs. {product.price.toLocaleString()}</p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#0AB972] hover:bg-[#08a05c] text-white font-semibold py-4 rounded-xl mt-6 transition-colors"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GroceryShop;