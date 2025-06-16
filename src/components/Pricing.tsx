import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { VacancyModal } from './VacancyModal';
import { usePhoneValidation } from '../hooks/usePhoneValidation';

const Pricing: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const {
        phoneNumber,
        phoneError,
        validatePhone,
        handlePhoneChange
    } = usePhoneValidation();

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
            <Header />
            <main className="flex-grow pt-8 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 opacity-50 rounded-3xl transform -skew-y-2"></div>
                        <div className="relative">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                Simple, Transparent Pricing
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Get access to verified staff at a fixed price
                            </p>
                        </div>
                    </div>

                    {/* Pricing Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Staff Hiring Package</h3>
                                    <p className="text-gray-600">Perfect for businesses looking to hire verified staff quickly</p>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex-1">
                                        <div className="text-4xl font-bold text-gray-900 mb-2">₹700</div>
                                        <p className="text-gray-600 mb-6">per staff member</p>
                                        
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Verified staff profiles</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Background checks included</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Quick staff matching</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">24/7 support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex-1 bg-orange-50 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Access to verified candidate database</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Detailed staff profiles and work history</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Skill verification and assessment</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">Dedicated hiring support</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                                    >
                                        Get Started Now
                                    </button>
                                    <p className="mt-4 text-sm text-gray-600">No hidden fees.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <VacancyModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                initialPhone={phoneNumber}
            />
        </div>
    );
};

export default Pricing; 