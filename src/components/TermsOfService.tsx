import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { VacancyModal } from './VacancyModal';
import { usePhoneValidation } from '../hooks/usePhoneValidation';

const TermsOfService: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">Effective Date: [01/01/2025]</p>
              
              <section className="mb-8">
                <p className="mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("You," "Business," or "Candidate," as applicable) and StaffChahiye.com ("StaffChahiye," "we," "us" or "our"). By accessing or using our website, platform and related services (collectively, the "Platform"), you agree to be bound by these Terms. If you do not agree, do not use the Platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
                <p className="mb-2">1.1 "Business" means an entity or individual that registers to use the Platform to identify, contact or engage Candidates for employment.</p>
                <p className="mb-2">1.2 "Candidate" means a blue collar worker (e.g., delivery personnel, drivers, kitchen staff, helpers) who registers to be matched with Business job opportunities. The pool of candidates to be offered may change in the future.</p>
                <p className="mb-2">1.3 "Services" means the candidate matching, lead generation, communication and related services provided via the Platform.</p>
                <p className="mb-2">1.4 "Fees" means the amounts payable by Businesses for use of the Services, as set forth in the applicable order form or invoice.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Scope of Services</h2>
                <p className="mb-2">2.1 Matching & Leads. StaffChahiye will use proprietary algorithms and manual review to match Business job requirements with Candidate profiles.</p>
                <p className="mb-2">2.2 Access. Businesses may view Candidate profiles and contact details; Candidates may apply to or accept job referrals.</p>
                <p className="mb-2">2.3 No Employment Relationship. StaffChahiye is not an employer, staffing agency or guarantor of employment; all hiring decisions and employment terms are solely between Business and Candidate.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Registration & Accounts</h2>
                <p className="mb-2">3.1 Eligibility. You must be legally authorized to enter into these Terms and to use the Platform.</p>
                <p className="mb-2">3.2 Account Information. You agree to provide complete, accurate and up‑to‑date information. You are responsible for maintaining confidentiality of your account credentials and for all activity under your account.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Fees & Payment</h2>
                <p className="mb-2">4.1 Fee Schedule. Businesses shall pay the Fees set forth in the applicable order form, rate card or invoice. All Fees are exclusive of taxes, which are the responsibility of the Business.</p>
                <p className="mb-2">4.2 Payment Terms. Unless otherwise agreed, payment processed for our services are pre-paid, hence, invoice would be generated and it has to be duly paid to use the service by the busienss.</p>
                <p className="mb-2">4.3 Refunds. All Fees are non‑refundable unless expressly agreed in writing by StaffChahiye.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Candidate Usage</h2>
                <p className="mb-2">5.1 No Guarantee. We do not guarantee that Candidates will receive job offers or placements.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Representations & Warranties</h2>
                <p className="mb-2">6.1 By You. You represent and warrant that (a) you have the right and authority to enter into these Terms; (b) all information you provide is true and accurate; and (c) your use of the Platform complies with all applicable laws.</p>
                <p className="mb-2">6.2 By Us. We warrant that we will perform the Services in a professional manner consistent with industry standards.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                <p className="mb-2">7.1 Ownership. All Platform content, software, trademarks and data are owned or licensed by StaffChahiye.</p>
                <p className="mb-2">7.2 License. Subject to these Terms, we grant you a limited, non‑exclusive, non‑transferable license to access and use the Platform for your internal business purposes.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Data Privacy</h2>
                <p className="mb-2">Your use of personal data via the Platform is governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. You agree to comply with all applicable data protection laws.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
                <p className="mb-2">Each party agrees to keep confidential all non‑public information disclosed by the other party in connection with these Terms and to use such information only to exercise its rights and perform its obligations hereunder.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
                <p className="mb-2 uppercase">THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND. STAFFCHAHIYE DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
                <p className="mb-2 uppercase">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL STAFFCHAHIYE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, DATA OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE PLATFORM, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE LIABILITY SHALL NOT EXCEED THE FEES PAID BY BUSINESS TO STAFFCHAHIYE IN THE SIX (6) MONTHS PRIOR TO THE CLAIM.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
                <p className="mb-2">You agree to indemnify, defend and hold harmless StaffChahiye and its officers, directors, employees and agents from any claims, liabilities, losses or expenses (including reasonable attorneys' fees) arising out of or related to (a) your breach of these Terms; (b) your violation of any law; or (c) your use of the Platform.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
                <p className="mb-2">13.1 For Cause. Either party may terminate for material breach if the breaching party fails to cure within 15 days of written notice.</p>
                <p className="mb-2">13.2 Effect. Upon termination, Business shall pay all accrued Fees; Sections 4, 6–13 survive.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. Governing Law & Dispute Resolution</h2>
                <p className="mb-2">These Terms are governed by the laws of India. Any dispute shall be resolved exclusively in the courts of Uttar Pradesh, India.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">15. Amendments</h2>
                <p className="mb-2">We may modify these Terms by posting a revised version on the Platform. Changes take effect upon posting; continued use constitutes acceptance.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">16. Contact</h2>
                <p className="mb-2">If you have questions, please email us at: contact@staffchahiye.com</p>
              </section>
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

export default TermsOfService; 