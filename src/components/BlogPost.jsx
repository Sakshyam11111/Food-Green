import React from 'react';

const BlogPost = () => {
    return (
        <>
            {/* Hero Image */}
            <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&fit=crop"
                alt="Fresh organic vegetables in basket"
                className="w-full h-96 md:h-screen max-h-96 object-cover"
            />

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Intro Section */}
                <section className="bg-white rounded-xl p-8 md:p-12 -mt-20 relative z-10 mb-12">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">5 Easy Ways to Include Organic Foods in Your Diet</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Eating organic is more than just a lifestyle—it’s about making healthier choices for your body and the planet. Organic foods are free from harmful chemicals and pesticides, offering you natural nutrition with every bite.Choosing organic also supports local farmers and eco-friendly farming methods that protect the environment. Even small steps, like switching a few essentials, can make a big difference.                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Here are five simple ways to begin adding organic foods to your everyday diet.                    </p>
                </section>

                {/* Section 1 */}
                <section className="bg-white p-8 mb-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">1. Start with the Basics</h2>
                        <p className="text-gray-600 mb-6">
                            Your journey to organic living can begin with the foods you eat every single day—staples like rice, flour, pulses, and bread. Replacing these essentials with organic alternatives ensures you reduce your intake of chemicals while still enjoying the familiar meals you love. These small changes quickly add up, creating a foundation for healthier eating.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                            <strong className="text-green-800">Why it matters:</strong>{' '}
                            <span className="text-gray-700">
                                Basics form the bulk of most diets, so switching them to organic creates a big impact on your health and lifestyle.
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-80 order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&fit=crop"
                            alt="Organic grains in jars"
                            className="w-full h-64 object-cover rounded-4xl shadow-md"
                        />
                    </div>
                </section>

                {/* Section 2 */}
                <section className="bg-white p-8 mb-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">2. Choose Organic Fruits and Vegetables</h2>
                        <p className="text-gray-600 mb-6">
                            Fresh fruits and vegetables are some of the easiest and most rewarding organic swaps. Opting for seasonal and local organic produce not only guarantees freshness but also delivers richer flavor and higher nutritional value. Shopping for organics at a local farmers' market can also be a fun and engaging experience.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                            <strong className="text-green-800">Why it matters:</strong>{' '}
                            <span className="text-gray-700">
                                You gain more vitamins, minerals, and antioxidants while supporting local farmers who follow sustainable growing practices.
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-80">
                        <img
                            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&fit=crop"
                            alt="Organic fruits and vegetables"
                            className="w-full h-64 object-cover rounded-4xl shadow-md"
                        />
                    </div>
                </section>

                {/* Section 3 */}
                <section className="bg-white p-8 mb-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">3. Incorporate Organic Snacks</h2>
                        <p className="text-gray-600 mb-6">
                            Snacking doesn't have to be unhealthy. By swapping processed chips and sugary packaged foods for organic nuts, seeds, and dried fruits, you can enjoy delicious snacks that give you long-lasting energy. Organic snacks are also free from artificial additives, making them a better option for both kids and adults.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                            <strong className="text-green-800">Why it matters:</strong>{' '}
                            <span className="text-gray-700">
                                You avoid hidden sugars, preservatives, and additives while fueling your body with natural proteins and healthy fats.
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-80 order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&fit=crop"
                            alt="Organic nuts and dried fruits"
                            className="w-full h-64 object-cover rounded-4xl shadow-md"
                        />
                    </div>
                </section>

                {/* Section 4 */}
                <section className="bg-white p-8 mb-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">4. Try Simple Organic Recipes</h2>
                        <p className="text-gray-600 mb-6">
                            Cooking with organic ingredients doesn't need to be complicated. Start with easy recipes such as fresh salads, smoothies, soups, or stir-fries using organic produce. These dishes are quick to prepare and highlight the natural flavors of your food. Over time, you can expand into more creative recipes.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                            <strong className="text-green-800">Why it matters:</strong>{' '}
                            <span className="text-gray-700">
                                Cooking with organic ingredients helps your body absorb nutrients more effectively, keeps your meals chemical-free, and allows you to enjoy the true taste of food.
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-80">
                        <img
                            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&fit=crop"
                            alt="Healthy organic salad"
                            className="w-full h-64 object-cover rounded-4xl shadow-md"
                        />
                    </div>
                </section>

                {/* Section 5 */}
                <section className="bg-white p-8 mb-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">5. Switch to Organic Dairy</h2>
                        <p className="text-gray-600 mb-6">
                            Dairy is another key part of many households, and switching to organic milk, yogurt, and cheese is a great step toward healthier eating. Organic dairy is produced without synthetic hormones or antibiotics, ensuring purity and better nutrition. Whether it's a glass of milk with breakfast or cheese in your favorite recipe, organic choices make a noticeable difference.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                            <strong className="text-green-800">Why it matters:</strong>{' '}
                            <span className="text-gray-700">
                                Organic dairy is safer, richer in nutrients, and a healthier option for children, adults, and the elderly alike.
                            </span>
                        </div>
                    </div>
                    <div className="w-full md:w-80 order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&fit=crop"
                            alt="Organic dairy products"
                            className="w-full h-64 object-cover rounded-4xl shadow-md"
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogPost;