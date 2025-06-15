import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <div className="min-h-screen flex flex-col">
          {/* <NavBar /> */}
          <main className="flex-grow pt-24 pb-12">
            <div className="container-custom max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">Last updated: 12/05/2025</p>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p>
                    This Privacy Policy explains how StaffChahiye.com ("we," "us," or "our") collects, uses, shares, and protects the personal information of job seekers and businesses using our platform.
                  </p>
                  <p className="mt-4">
                    By using our services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold mb-3">From Job Seekers</h3>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>Personal information, including name, age, gender, and contact details (phone number, email address)</li>
                    <li>Professional information, including work experience, skills, education, and certifications</li>
                    <li>Location data and job preferences</li>
                    <li>Information shared during phone calls with our team or interactions with our WhatsApp bot</li>
                    <li>Device information and usage data when accessing our digital platforms</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">From Businesses</h3>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Business name, contact information, and location</li>
                    <li>Information about job openings and staff requirements</li>
                    <li>Payment information for our services</li>
                    <li>Communication records with our team</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  
                  <h3 className="text-xl font-semibold mb-3">For Job Seekers</h3>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>To create and maintain your profile on our platform</li>
                    <li>To match you with potential employers based on your skills, location, and preferences</li>
                    <li>To communicate with you via phone calls, WhatsApp, or other channels about job opportunities</li>
                    <li>To improve our matching algorithms and services</li>
                    <li>To verify your information and conduct background checks when required</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
                  <ul className="list-disc pl-6 mt-2">
                    <li>To provide access to qualified candidates matching your requirements</li>
                    <li>To process payments for our services</li>
                    <li>To communicate about platform updates and available candidates</li>
                    <li>To improve our services and business offerings</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We share job seeker information with potential employers when a match is identified</li>
                    <li>We share business information with job seekers when recommending employment opportunities</li>
                    <li>We may share anonymized data with third-party analytics providers to improve our services</li>
                    <li>We may disclose information to comply with legal obligations or protect our rights</li>
                    <li>We do not sell personal information to third parties for marketing purposes</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We implement appropriate technical and organizational measures to protect your personal information</li>
                    <li>We use industry-standard encryption for data transmission and storage</li>
                    <li>We limit access to personal information to authorized personnel only</li>
                    <li>We regularly review and update our security practices</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
                  <ul className="list-disc pl-6 mt-2">
                    <li>You can review, update, or delete your personal information by contacting us</li>
                    <li>You can opt out of receiving communications from us at any time</li>
                    <li>You can request information about how your data is being used</li>
                    <li>You have the right to file a complaint with relevant data protection authorities</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We retain personal information as long as necessary to provide our services or as required by law</li>
                    <li>We delete or anonymize personal information when it is no longer needed for the purposes collected</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                  <ul className="list-disc pl-6 mt-2">
                    <li>We may update this Privacy Policy from time to time</li>
                    <li>Continued use of our services after such changes constitutes acceptance of the updated policy</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                  <p>
                    For questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mt-2">
                    Email: contact@staffchahiye.com<br />
                    Phone: +91 7304216059
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                  <p>
                    This Privacy Policy is governed by the laws of India and applicable data protection regulations.
                  </p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 