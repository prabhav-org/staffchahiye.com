import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { VacancyModal } from './VacancyModal';
import { usePhoneValidation } from '../hooks/usePhoneValidation';

const AboutUs: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        phoneNumber,
        // phoneError,
        // validatePhone,
        // handlePhoneChange
    } = usePhoneValidation();

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handlePostJobClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
            <Header />
            <main className="flex-grow pt-8 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section with Animated Gradient */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 opacity-50 rounded-3xl transform -skew-y-2"></div>
                        <div className="relative">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                Tech-First Staffing Solutions
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Connecting verified staff with businesses in minutes, not days
                            </p>
                        </div>
                    </div>

                    {/* Main Content with Enhanced Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Who We Are
                            </h2>
                            <p className="text-lg text-gray-600">
                                StaffChahiye is a revolutionary tech-first platform that's transforming the way businesses find and hire staff. We've streamlined the traditional staffing process into a quick, efficient, and reliable solution that connects businesses with verified staff within minutes.
                            </p>
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Our Promise
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start group">
                                        <span className="text-orange-500 mr-2 transform group-hover:scale-110 transition-transform">✓</span>
                                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">All staff are thoroughly verified and background-checked</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <span className="text-orange-500 mr-2 transform group-hover:scale-110 transition-transform">✓</span>
                                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Connect with multiple staff options within 30 minutes</span>
                                    </li>
                                    <li className="flex items-start group">
                                        <span className="text-orange-500 mr-2 transform group-hover:scale-110 transition-transform">✓</span>
                                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Simple, tech-driven process from start to finish</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                How It Works
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-orange-500 font-bold group-hover:scale-110 transition-transform">
                                        1
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Post Your Job</h4>
                                        <p className="text-gray-600">Fill out a simple form with your staffing requirements</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-orange-500 font-bold group-hover:scale-110 transition-transform">
                                        2
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Quick Connection</h4>
                                        <p className="text-gray-600">Get connected with verified staff within 30 minutes</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-orange-500 font-bold group-hover:scale-110 transition-transform">
                                        3
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">Choose Your Staff</h4>
                                        <p className="text-gray-600">Review profiles and select the best match for your needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section with Hover Effects */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-orange-500 text-4xl mb-4 transform hover:scale-110 transition-transform">⚡</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                            <p className="text-gray-600">Connect with verified staff within 30 minutes of posting your job</p>
                        </div>
                        {/* <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-orange-500 text-4xl mb-4 transform hover:scale-110 transition-transform">✓</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Staff</h3>
                            <p className="text-gray-600">All staff undergo thorough verification and background checks</p>
                        </div> */}
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-orange-500 text-4xl mb-4 transform hover:scale-110 transition-transform">💼</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Business Focused</h3>
                            <p className="text-gray-600">Simple process designed for businesses of all sizes</p>
                        </div>
                    </div>

                    {/* CTA Section with Gradient Background */}
                    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 rounded-2xl p-8 sm:p-12 text-center shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Transform Your Staffing Process?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join the growing number of businesses that trust StaffChahiye for their staffing needs. Experience the future of staffing today.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </main>
            <Footer handlePostJobClick={handlePostJobClick} />
            <VacancyModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                initialPhone={phoneNumber}
            />
        </div>
    );
};

export default AboutUs; 