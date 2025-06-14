import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.42.333 4.844.63c-.611.324-1.13.748-1.65 1.268a4.493 4.493 0 00-1.268 1.65c-.297.576-.499 1.25-.558 2.197C.975 7.613.96 8.02.96 11.641c0 3.622.014 4.029.072 4.977.06.946.262 1.62.558 2.197.324.611.748 1.13 1.268 1.65a4.493 4.493 0 001.65 1.268c.576.297 1.25.499 2.197.558.948.059 1.355.072 4.976.072 3.622 0 4.029-.014 4.977-.072.946-.06 1.62-.262 2.197-.558a4.493 4.493 0 001.65-1.268 4.493 4.493 0 001.268-1.65c.297-.576.499-1.25-.558-2.197.059-.948.072-1.355.072-4.976 0-3.622-.014-4.029-.072-4.977-.06-.946-.262-1.62-.558-2.197a4.493 4.493 0 00-1.268-1.65A4.493 4.493 0 0019.5.63c-.576-.297-1.25-.499-2.197-.558C16.355.013 15.948 0 12.327 0H12.017zm-.017 2.17c3.548 0 3.97.014 5.373.072.918.042 1.416.196 1.747.327.44.171.754.375 1.084.705.33.33.534.644.705 1.084.131.331.285.829.327 1.747.058 1.403.072 1.825.072 5.373 0 3.548-.014 3.97-.072 5.373-.042.918-.196 1.416-.327 1.747-.171.44-.375.754-.705 1.084a2.919 2.919 0 01-1.084.705c-.331.131-.829.285-1.747.327-1.403.058-1.825.072-5.373.072-3.548 0-3.97-.014-5.373-.072-.918-.042-1.416-.196-1.747-.327a2.919 2.919 0 01-1.084-.705 2.919 2.919 0 01-.705-1.084c-.131-.331-.285-.829-.327-1.747-.058-1.403-.072-1.825-.072-5.373 0-3.548.014-3.97.072-5.373.042-.918.196-1.416.327-1.747.171-.44.375-.754.705-1.084a2.919 2.919 0 011.084-.705c.331-.131.829-.285 1.747-.327 1.403-.058 1.825-.072 5.373-.072z" />
                    <path d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8z" />
                    <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">HIRE BY CITY</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Mumbai</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Delhi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Varanasi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Lucknow</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">HIRE BY JOBS</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Waiter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Helper</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Chef/Cook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Housekeeping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Other</a></li>
              </ul>
            </div>
            {/* Get to Know Us Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">PAGES</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blogs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 StaffChahiye | All rights reserved.
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