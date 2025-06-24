import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { VacancyModal } from './VacancyModal';
import { usePhoneValidation } from '../hooks/usePhoneValidation';

const TermsAndConditions: React.FC = () => {
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
      <main className="flex-grow pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center relative">
              Terms and Conditions
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform scale-x-75"></div>
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Welcome to StaffChahiye.com ("we", "our", "us"). These Terms and Conditions govern your access to and use of our website and services, including booking, hiring, and managing blue-collar staff.
              </p>

              <p className="text-gray-600 mb-8">
                By accessing or using StaffChahiye.com, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility</h2>
                  <p className="text-gray-600">
                    You must be at least 18 years old and capable of forming a binding contract under applicable law to use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
                  <p className="text-gray-600 mb-4">StaffChahiye.com provides a platform for:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Businesses to book blue-collar staff (chefs, drivers, waiters, housekeeping, etc.)</li>
                    <li>Staff members to get job opportunities</li>
                    <li>Talent discovery and business-to-talent matching</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We do not guarantee employment or job performance. We facilitate connections only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>You must provide accurate, complete information when registering.</li>
                    <li>Keep your login credentials confidential.</li>
                    <li>You are responsible for all activities under your account.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking and Payments</h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>All bookings are subject to availability.</li>
                    <li>Partial payment and full payment options are available.</li>
                    <li>Refunds are not applicable unless otherwise specified.</li>
                    <li>We reserve the right to cancel bookings with prior notice.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Refund Policy</h2>
                  <p className="text-gray-600">
                    We strive for the best service to you ie, to connect you with the best staff for your needs. Please remember, StaffChahiye.com doesn't guarantee for you to hire the staff we connect you with. Once a payment is made, it is non-refundable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Conduct and Obligations</h2>
                  <p className="text-gray-600 mb-4">You agree:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Not to misuse the platform or post false information.</li>
                    <li>To treat staff members and business clients respectfully.</li>
                    <li>To comply with all applicable laws and regulations.</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We reserve the right to suspend or terminate accounts violating these conditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
                  <p className="text-gray-600">
                    Your use of our site is also governed by our <a href="/privacy-policy" className="text-orange-500 hover:text-orange-600">Privacy Policy</a>, which explains how we collect, use, and protect your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">StaffChahiye.com is not liable for:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Any direct or indirect damage or loss from the use of our platform</li>
                    <li>Disputes between businesses and staff members</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
                  <p className="text-gray-600">
                    All content on StaffChahiye.com (logo, designs, content, etc.) is our property and may not be used without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications</h2>
                  <p className="text-gray-600">
                    We may update these Terms at any time. Changes will be posted on this page with an updated "Effective Date".
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                  <p className="text-gray-600">
                    These Terms shall be governed by and construed in accordance with the laws of India. All disputes shall be subject to the jurisdiction of courts of Uttar Pradesh, India.
                  </p>
                </section>

                <section className="bg-orange-50 rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600">
                    If you have any questions or concerns, please contact:
                  </p>
                  <p className="text-gray-600 mt-2">
                    📧 Email: <a href="mailto:team@staffchahiye.com" className="text-orange-500 hover:text-orange-600">team@staffchahiye.com</a>
                  </p>
                </section>
              </div>
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

export default TermsAndConditions;