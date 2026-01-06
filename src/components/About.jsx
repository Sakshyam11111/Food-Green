import React from 'react'
import About1 from '../assets/about1.png';
import About2 from '../assets/about2.png';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* About Us Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us.</h1>
                        <p className="text-xl font-semibold text-teal-700 mb-6">Fresh. Safe. Sustainable.</p>
                        <p className="text-gray-700 leading-relaxed">
                            At Organic Mart, we believe that healthy living begins with pure, safe, and high-quality food. That's why we carefully source fresh organic products directly from trusted local farmers and deliver them straight to your home. Our focus is on providing food that is nutritious, natural, and sustainably grown, so you and your family can enjoy meals that are both delicious and healthy. Our mission is to make organic living simple, convenient, and accessible for everyone, helping you embrace a lifestyle that supports your well-being and the environment.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-center pb-12">
                            <img src={About1} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission, Vision, Values Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="w-full max-w-md">
                                <div className="bg-white rounded-lg p-8">
                                    <img src = {About2}/>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Mission</h2>
                                <p className="text-gray-700">
                                    To provide fresh, nutritious, and certified organic foods that support a healthier lifestyle while promoting sustainable and eco-friendly farming practices.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Vision</h2>
                                <p className="text-gray-700">
                                    To be the most trusted source of organic products in Nepal, empowering families to make better, healthier food choices without compromising on quality, freshness, or safety.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Values</h2>
                                <ul className="space-y-3 text-gray-700">
                                    <li><span className="font-semibold">Quality First:</span> Every product is carefully sourced, fresh, and certified.</li>
                                    <li><span className="font-semibold">Sustainability:</span> We support local farmers and eco-friendly practices to protect the environment.</li>
                                    <li><span className="font-semibold">Customer-Centric:</span> Easy ordering, reliable delivery, and excellent service.</li>
                                    <li><span className="font-semibold">Transparency & Trust:</span> Clear information and honest labeling on all products.</li>
                                    <li><span className="font-semibold">Health & Wellness:</span> Products designed to nourish your body and mind.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Our Organic Family Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-[#033923] mb-6">Join Our Organic Family</h2>
                <p className="text-gray-700 leading-relaxed">
                    Become part of a community that truly values health, sustainability, and high-quality living. By subscribing to our newsletter, you'll receive regular updates on fresh arrivals, exclusive discounts, special offers, and practical tips for healthy living—all delivered straight to your inbox. Stay connected with us and be the first to know about seasonal products, new launches, and exciting promotions, so you never miss out on the best organic choices for you and your family.
                </p>
            </div>

            {/* Our Promise Section */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-[#033923] mb-6">Our Promise</h2>
                <p className="text-gray-700 leading-relaxed">
At Organic Mart, we are committed to providing pure, safe, and sustainable products that you can always trust. From farm to table, we focus on delivering fresh, high-quality, and ethically sourced foods that support a healthier lifestyle. Our promise extends beyond just products—we aim to enhance your daily life, promote wellness, and contribute to a more sustainable planet by working closely with local farmers and practicing responsible sourcing. With every purchase, you can feel confident that you are choosing quality, safety, and a better way of living.                </p>
            </div>
        </div>
    )
}

export default About