import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  handlePostJobClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ handlePostJobClick }) => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo + Social Media Icons */}
            <div className="md:col-span-1">
              <div className="flex items-start mb-6 -ml-4">
                <img src="/footerLogo.png" alt="StaffChahiye" className="h-16 lg:h-20" />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 items-start">
                <a href="https://www.facebook.com/people/StaffChahiyecom/61573601822928/" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <FacebookLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/company/staffchahiye/" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedinLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <XLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                </a> */}
                <a href="https://www.instagram.com/staffchahiye" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <InstagramLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/channel/UC5684PS7y0OSH1V_WE8uPmA" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <YoutubeLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            {/* <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">HIRE BY CITY</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Mumbai</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Delhi</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Varanasi</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Lucknow</a></li>
              </ul>
            </div> */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">HIRE BY JOBS</h3>
              <ul className="space-y-3">
                <li><button onClick={handlePostJobClick} className="text-gray-400 hover:text-white transition-colors text-sm">Waiter</button></li>
                <li><button onClick={handlePostJobClick} className="text-gray-400 hover:text-white transition-colors text-sm">Helper</button></li>
                <li><button onClick={handlePostJobClick} className="text-gray-400 hover:text-white transition-colors text-sm">Chef/Cook</button></li>
                <li><button onClick={handlePostJobClick} className="text-gray-400 hover:text-white transition-colors text-sm">Housekeeping</button></li>
                <li><button onClick={handlePostJobClick} className="text-gray-400 hover:text-white transition-colors text-sm">Other</button></li>
              </ul>
            </div>
            {/* Get to Know Us Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">PAGES</h3>
              <ul className="space-y-3">
                {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blogs</a></li> */}
                <li><a href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm">Help</a></li>
                <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2026 StaffChahiye | All rights reserved | Managed by SUDEEP MISHRA
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy policy</Link>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of service</Link>
                <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Large Brand Text Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold leading-none tracking-tight text-orange-400">
              StaffChahiye
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer; 
