import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { VacancyModal } from './VacancyModal';
import { usePhoneValidation } from '../hooks/usePhoneValidation';

const RefundPolicy: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        phoneNumber,
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                            No Refund Policy
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-6">
                                We value your trust and strive to provide the best services possible. However, please note that all purchases made through our platform are final and we maintain a strict No Refund Policy.
                            </p>

                            <p className="text-gray-600 mb-6">
                                Once a payment is processed, we do not offer refunds or cancellations under any circumstances.
                            </p>

                            <p className="text-gray-600 mb-8">
                                If you have any concerns, questions, or need assistance regarding your order or service, please do not hesitate to reach out to us.
                            </p>

                            <div className="bg-orange-50 rounded-xl p-6 sm:p-8 border border-orange-100">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us:</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-orange-500">📧</span>
                                        <a href="mailto:team@staffchahiye.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                                            team@staffchahiye.com
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-orange-500">📞</span>
                                        <a href="tel:+917304216050" className="text-gray-600 hover:text-orange-500 transition-colors">
                                            +91 7304216050
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 mt-8 text-center">
                                We are here to help you with any queries you may have.
                            </p>
                        </div>
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

export default RefundPolicy; 