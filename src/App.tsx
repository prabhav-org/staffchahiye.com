import React, { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { VacancyModal } from "./components/VacancyModal";
import { usePhoneValidation } from "./hooks/usePhoneValidation";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/RefundPolicy";
import Pricing from "./components/Pricing";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import logo from './assets/Untitled design (3).svg';

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(0); // First FAQ expanded by default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("right"); // or "left"
  const [nextIndex, setNextIndex] = useState<number|null>(null);
  const [showMoreRoles, setShowMoreRoles] = useState<boolean>(false);

  // Phone validation hook
  const {
    phoneNumber,
    phoneError,
    validatePhone,
    handlePhoneChange
  } = usePhoneValidation();

  const features = [
    {
      title: "1. Tell us your staff requirements in < 30 seconds",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop&auto=format"
    },
    {
      title: "Get pre-screened candidates right on your whatsapp",
      image: "\Untitled design (100).png"
    },
    {
      title: "Connect with them and start your hiring process in less than 30 minutes!",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop&auto=format"
    }
  ];

  const faqData = [
    {
      question: "Why should I use StaffChahiye over others?",
      answer: "StaffChahiye boasts the largest pool of active candidates, achieving a candidate base of over 1 lakh in just five years. The platform personalizes the hiring experience, allowing you to opt for callbacks from relevant candidates, send bulk WhatsApp messages, or use the dashboard to shortlist candidates effectively. Additionally, you can enhance your job visibility by posting premium or super premium jobs, tailored to meet your specific hiring needs."
    },
    {
      question: "What happens if I don't receive enough candidates?",
      answer: "Our support team will work to boost your job post and help improve reach and relevance."
    },
    {
      question: "In which cities can I hire via StaffChahiye?",
      answer: "We operate in 100+ cities and towns across India."
    },
    {
      question: "I want to hire more than 10 candidates, do you have any bulk-hiring plans?",
      answer: "Yes, sure! Get in touch with our team to discover high-volume/bulk-hiring solutions."
    }
  ];

  const testimonials = [
    {
      image: "/testimonials/Picture1.jpg",
      quote: "We hired waitstaff and kitchen helpers for our annual corporate event, and the team was absolutely professional. They handled everything smoothly. Our guests were genuinely impressed!",
      author: "Aman Raghuvanshi",
      role: "Manager",
      company: "Bikanerwala",
      logo: "/Brands/Bikanervala_logo main.png"
    },
    {
      image: "/testimonials/Picture2.jpg",
      quote: "Finding good chefs and kitchen staff is always tough, but they made it incredibly easy. The chef was skilled and well-mannered. Definitely coming back for future staffing needs",
      author: "Sameer Khanna",
      role: "Manager",
      company: "Barbeque Nation",
      logo: "/Brands/barbeque-nation-seeklogo.png"
    },
    {
      image: "/testimonials/Picture3.jpg",
      quote: "Reliable and professional staff every time. Whether it's a last-minute kitchen helper or a full housekeeping team, they always deliver quality. Great coordination and service.",
      author: "Ajay Sahu",
      role: "HR",
      company: "Radisson Blu",
      logo: "/Brands/Radisson_Blu_logo.png"
    },
    {
      image: "/testimonials/Picture4.jpg",
      quote: "Being a hotel, it's hard to find reliable housekeeping and kitchen help on short notice. But this service has been our go-to. Their team is responsive and always sends well-trained people",
      author: "Tushar Sharma",
      role: "Operations Head",
      company: "OYO",
      logo: "/Brands/OYO_Rooms_(logo).png"
    },
    {
      image: "/testimonials/Picture5.jpg",
      quote: "We hired additional kitchen helpers and servers for a big outdoor catering event. They arrived on time and didn't need much supervision. Their energy and attitude made a big difference.",
      author: "Jasleen Kaur",
      role: "Manager",
      company: "Haldiram's",
      logo: "/Brands/haldirams-seeklogo.png"
    }
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    if (!isSliding) {
      const interval = setInterval(() => {
        setDirection("right");
        setNextIndex((testimonialIndex + 1) % testimonials.length);
        setIsSliding(true);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length, testimonialIndex, isSliding]);

  useEffect(() => {
    if (isSliding && nextIndex !== null) {
      const timeout = setTimeout(() => {
        setTestimonialIndex(nextIndex);
        setIsSliding(false);
        setNextIndex(null);
      }, 400); // match duration-400
      return () => clearTimeout(timeout);
    }
  }, [isSliding, nextIndex]);

  // Auto-rotation effect - cycle through features every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length, isPaused]);

  // Handle manual feature selection
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setIsPaused(true);

    // Resume auto-rotation after 3 seconds of user inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Handle FAQ toggle
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  // Handle Continue button click (with phone validation)
  const handleContinueClick = () => {
    if (validatePhone(phoneNumber)) {
      setIsModalOpen(true);
    }
  };

  // Handle "Post a job now" button click (direct modal open)
  const handlePostJobClick = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setDirection("left");
    setNextIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length);
    setIsSliding(true);
  };

  const handleNext = () => {
    if (isSliding) return;
    setDirection("right");
    setNextIndex((testimonialIndex + 1) % testimonials.length);
    setIsSliding(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Vacancy Modal */}
      <VacancyModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        initialPhone={phoneNumber}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              {/* Hero Section */}
              <section className="w-full bg-white border-b border-gray-100">
                <header className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-30 py-2 flex items-center justify-between relative nav-separator">
                  {/* Logo container */}
                  <div className="h-12 lg:h-20 flex items-center overflow-hidden mx-3 py-2">
                    <img src={logo} alt="logo" className="h-12 lg:h-20 w-auto object-contain m-0 p-0 align-middle" />
                  </div>
                  
                  {/* Hamburger Menu Button (Mobile) */}
                  <button 
                    className="lg:hidden flex items-center justify-center h-8 w-8 p-0 m-0 rounded-md hover:bg-gray-100 focus:outline-none mx-3 py-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <svg 
                      className="w-6 h-6 text-gray-700" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      style={{display: 'block', margin: 'auto'}}
                    >
                      {isMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>

                  {/* Navigation - Desktop */}
                  <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                    <a href="/" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Home</a>
                    <a href="/about-us" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">About Us</a>
                    <a href="/contact-us" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Contact Us</a>
                  </nav>

                  {/* Mobile Menu */}
                  <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <nav className="flex flex-col py-4">
                      <a href="/" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">Home</a>
                      <a href="/about-us" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">About Us</a>
                      <a href="/contact-us" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">Contact Us</a>
                    </nav>
                  </div>
                </header>


                {/* Hero Content */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-10">
                  {/* Hero Content Row - Two Column Layout */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-8 lg:gap-12 mb-8 min-h-[200px] lg:min-h-[200px]">
                    {/* Left Column: All Text Content */}
                    <div className="flex-1 max-w-xl flex flex-col">
                      {/* Hero Text */}
                      <div className="mb-8">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                          Hire candidates in &lt;30 minutes with <span style={{ color: 'var(--brand-orange)' }}>StaffChahiye</span>.
                        </h1>
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">Streamline your recruitment with AI-driven precision. Single solution from Fresher to experienced hiring.</p>
                      </div>

                      {/* Statistics Section */}
                      <div className="flex flex-wrap items-center gap-6 lg:gap-8 mb-8">
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-gray-900">50,000+</div>
                          <div className="text-xs lg:text-sm text-gray-500">Pre-Screened candidates</div>
                        </div>
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-gray-900">1,000+</div>
                          <div className="text-xs lg:text-sm text-gray-500">Businesses</div>
                        </div>
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-gray-900">50+</div>
                          <div className="text-xs lg:text-sm text-gray-500">Available cities</div>
                        </div>
                      </div>

                      {/* Phone Input Section */}
                      <div className="max-w-xl">
                        <div className="mb-2 font-bold text-lg lg:text-xl text-gray-900">Let's get started</div>
                        <div className="mb-4 text-sm lg:text-base text-gray-600">Hire much faster with StaffChahiye</div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="Enter 10 digit mobile number"
                            className={`flex-1 px-4 py-3 text-sm lg:text-base border rounded-lg text-gray-900 focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-[var(--brand-orange)] focus:outline-none transition-all ${phoneError ? 'border-red-500' : 'border-gray-300'
                              }`}
                          />
                          <button
                            onClick={handleContinueClick}
                            className="bg-[var(--brand-orange)] text-white px-6 py-3 text-sm lg:text-base rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
                          >
                            Continue
                          </button>
                        </div>
                        {phoneError && (
                          <div className="mt-2 text-sm text-red-500 font-medium">
                            {phoneError}
                          </div>
                        )}
                        <div className="mt-3 text-xs text-gray-500">
                          By clicking continue, you agree to the StaffChahiye <Link to="/terms-of-service" className="text-[var(--brand-orange)] hover:underline">Terms of service</Link> & <Link to="/privacy-policy" className="text-[var(--brand-orange)] hover:underline">Privacy policy</Link>.
                        </div>
                      </div>
                    </div>

                    {/* Right Column: YouTube Video (Desktop) */}
                    <div className="hidden lg:block flex-1">
                      <div className="video-responsive h-full min-h-[500px]">
                        <iframe
                          src="https://www.youtube.com/embed/Ges88aDHRHg?si=PZAj4wI2HJqmJV3w"
                          title="StaffChahiye Demo Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* YouTube Video (Mobile) - Below all content on mobile */}
                  <div className="block lg:hidden mb-8">
                    <div className="video-responsive">
                      <iframe
                        src="https://www.youtube.com/embed/Ges88aDHRHg?si=PZAj4wI2HJqmJV3w"
                        title="StaffChahiye Demo Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Marquee Brands Section */}
                <div className="bg-gray-50 py-6">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12 mt-6 text-center">
                      <h3 className="text-sm lg:text-base font-semibold text-gray-900">Trusted by 1000+ businesses for hiring</h3>
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center whitespace-nowrap marquee">
                        <img src="/Brands/Adani-Green-Energy-PNG-Image.png" alt="logo1" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/barbeque-nation-seeklogo.png" alt="logo2" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/bhu.jpg" alt="logo3" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/Bikanervala_logo main.png" alt="logo4" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/haldirams-seeklogo.png" alt="logo5" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/IRCTC-Symbol.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/OYO_Rooms_(logo).png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/Radisson_Blu_logo.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/Saravanaa_Bhavan_Logo.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/Taj_Hotels_Untitled design (3).svg.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                        <img src="/Brands/logo_nsdc.svg" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI-First Tech Platform Section */}
              <section className="feature-section py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  {/* Section Header with Tri-Color Underline */}
                  <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      AI first tech platform for you
                    </h2>
                    <div className="tri-color-underline mx-auto"></div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Feature Content */}
                    <div className="lg:order-1 order-1">
                      <div className="feature-tag mb-4">
                        📋 SMART JOB POSTING
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                        Get access to pre-screened candidates
                      </h3>
                      <div className="space-y-0 mb-8">
                        {features.map((feature, index) => (
                          <React.Fragment key={index}>
                            <div
                              className={`feature-point-clickable ${activeFeature === index ? 'active' : ''}`}
                              onClick={() => handleFeatureClick(index)}
                            >
                              <div className="flex items-center">
                                <span className="checkmark font-bold mr-3">✓</span>
                                <span className="text-gray-700 font-medium">{feature.title}</span>
                              </div>
                            </div>
                            {index < features.length - 1 && <div className="feature-separator"></div>}
                          </React.Fragment>
                        ))}
                      </div>
                      <button
                        onClick={handlePostJobClick}
                        className="cta-button"
                      >
                        Post a job now
                      </button>
                    </div>

                    {/* Right Column: Illustration */}
                    <div className="lg:order-2 order-2">
                      <div className="enhanced-illustration-container">
                        <img
                          src={features[activeFeature].image}
                          alt={features[activeFeature].title}
                          className="w-full object-cover rounded-2xl  transition-all duration-500 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Role Selection Section - Enhanced */}
              <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <svg width="100%" height="100%" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80%" cy="20%" r="200" fill="#fdba74" />
                    <circle cx="20%" cy="80%" r="150" fill="#fbbf24" />
                  </svg>
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                  <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">What kind of a role do you want?</span>
                    <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                  </h2>
                  <div className="grid grid-cols-2 gap-6 px-4">
                    {[
                      { name: 'Waiter', image: '/JOBS/waiter.png' },
                      { name: 'Chef', image: '/JOBS/chef.webp' },
                      { name: 'Housekeeping', image: '/JOBS/housekeeping.webp' },
                      { name: 'Driver', image: '/JOBS/driver.webp' },
                      { name: 'Helper', image: '/JOBS/helper.webp' },
                      { name: 'Labour', image: '/JOBS/manufacturing.webp' },
                      { name: 'Kitchen Staff', image: '/JOBS/cook_chef.webp' },
                      { name: 'Security Guard', image: '/JOBS/security_guard.webp' },
                    ].map((role, index) => (
                      <div
                        key={index}
                        className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                          index >= 4 && !showMoreRoles ? 'hidden md:block' : ''
                        }`}
                      >
                        <div className="relative h-40 overflow-hidden rounded-t-2xl">
                          <img
                            src={role.image}
                            alt={role.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 text-center">{role.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center md:hidden">
                    <button
                      type="button"
                      onClick={() => setShowMoreRoles(!showMoreRoles)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                    >
                      {showMoreRoles ? 'Show Less' : 'Show More Jobs'}
                      <svg
                        className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                          showMoreRoles ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </section>

              {/* Testimonial & Stats Section */}
              <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                      Why use StaffChahiye?
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 max-w-4xl mx-auto">
                      From startups to SMEs to established enterprises, StaffChahiye revolutionizes the way businesses find high-quality talent quickly & effortlessly.
                    </p>
                  </div>

                  {/* Stats Grid with Separators */}
                  <div className="mb-16 lg:mb-20">
                    {/* Desktop Layout with Vertical Separators */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="flex items-center divide-x divide-gray-200">
                        <div className="px-8 text-center">
                          <div className="text-3xl xl:text-4xl font-bold text-orange-400 mb-2">1Lakh+</div>
                          <div className="text-sm text-gray-600">New candidates join StaffChahiye every month.</div>
                        </div>
                        <div className="px-8 text-center">
                          <div className="text-3xl xl:text-4xl font-bold text-orange-400 mb-2">200+</div>
                          <div className="text-sm text-gray-600">Job categories to publish your job.</div>
                        </div>
                        <div className="px-8 text-center">
                          <div className="text-3xl xl:text-4xl font-bold text-orange-400 mb-2">80%</div>
                          <div className="text-sm text-gray-600">Business get qualified candidates within 24 hrs</div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout - Stacked */}
                    <div className="lg:hidden space-y-8">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">1</div>
                          <div className="ml-4">
                            <div className="text-2xl font-bold text-orange-400">1Lakh+</div>
                            <div className="text-sm text-gray-600">New candidates join StaffChahiye every month.</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">2</div>
                          <div className="ml-4">
                            <div className="text-2xl font-bold text-orange-400">200+</div>
                            <div className="text-sm text-gray-600">Job categories to publish your job.</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-xl">3</div>
                          <div className="ml-4">
                            <div className="text-2xl font-bold text-orange-400">80%</div>
                            <div className="text-sm text-gray-600">Business get qualified candidates within 24 hrs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Slideshow */}
                  <div className="relative h-[400px] lg:h-[320px] overflow-hidden">
                    {/* Current card */}
                    <div className={`
                      testimonial-container rounded-2xl p-6 lg:p-8 absolute inset-0 w-full transition-all duration-400 ease-in-out overflow-hidden
                      ${isSliding
                        ? (direction === "right"
                            ? "-translate-x-32 opacity-0"
                            : "translate-x-32 opacity-0")
                        : "translate-x-0 opacity-100"}
                      z-10
                    `}>
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 h-full">
                        {/* Testimonial Photo */}
                        <div className="flex-shrink-0">
                          <div className="testimonial-photo w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-lg">
                            <img
                              src={testimonials[testimonialIndex].image}
                              alt={testimonials[testimonialIndex].author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Testimonial Content */}
                        <div className="flex-1 text-center lg:text-left overflow-y-auto max-h-[280px] lg:max-h-[240px] flex flex-col justify-center">
                          <div className="mb-4">
                            <p className="testimonial-quote text-base lg:text-lg text-gray-800 leading-relaxed mb-4">
                              {testimonials[testimonialIndex].quote}
                            </p>
                          </div>
                          {/* Author Info */}
                          <div className="mb-2">
                            <div className="font-semibold text-gray-900 text-lg">{testimonials[testimonialIndex].author}</div>
                            <div className="text-gray-600 text-base">{testimonials[testimonialIndex].role}</div>
                            <div className="mt-2">
                              <img 
                                src={testimonials[testimonialIndex].logo} 
                                alt={testimonials[testimonialIndex].company}
                                className="h-8 lg:h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next card (only during transition) */}
                    {isSliding && nextIndex !== null && (
                      <div className={`
                        testimonial-container rounded-2xl p-6 lg:p-8 absolute inset-0 w-full transition-all duration-400 ease-in-out overflow-hidden
                        ${direction === "right"
                          ? "translate-x-32 opacity-0"
                          : "-translate-x-32 opacity-0"}
                        z-20
                      `}>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 h-full">
                          {/* Testimonial Photo */}
                          <div className="flex-shrink-0">
                            <div className="testimonial-photo w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-lg">
                              <img
                                src={testimonials[nextIndex].image}
                                alt={testimonials[nextIndex].author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          {/* Testimonial Content */}
                          <div className="flex-1 text-center lg:text-left overflow-y-auto max-h-[280px] lg:max-h-[240px] flex flex-col justify-center">
                            <div className="mb-4">
                              <p className="testimonial-quote text-base lg:text-lg text-gray-800 leading-relaxed mb-4">
                                {testimonials[nextIndex].quote}
                              </p>
                            </div>
                            {/* Author Info */}
                            <div className="mb-2">
                              <div className="font-semibold text-gray-900 text-lg">{testimonials[nextIndex].author}</div>
                              <div className="text-gray-600 text-base">{testimonials[nextIndex].role}</div>
                              <div className="mt-2">
                                <img 
                                  src={testimonials[nextIndex].logo} 
                                  alt={testimonials[nextIndex].company}
                                  className="h-8 lg:h-10 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Slideshow Controls - Positioned on sides */}
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-[100] pointer-events-none">
                      <button
                        onClick={handlePrev}
                        disabled={isSliding}
                        className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg pointer-events-auto transition-colors"
                        aria-label="Previous"
                      >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={isSliding}
                        className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg pointer-events-auto transition-colors"
                        aria-label="Next"
                      >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="mb-12 lg:mb-16">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8">
                      Frequently asked questions
                    </h2>

                    {/* FAQ Items */}
                    <div className="space-y-0">
                      {faqData.map((faq, index) => (
                        <div
                          key={index}
                          className="faq-item border-b border-gray-200 last:border-b-0 px-2"
                        >
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="faq-button w-full py-6 lg:py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                          >
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-8 leading-relaxed">
                              {faq.question}
                            </h3>
                            <div className="flex-shrink-0">
                              <svg
                                className={`faq-chevron w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedFAQ === index ? 'rotated' : ''
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>

                          <div className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? 'max-h-96 opacity-100 expanded' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="pb-6 lg:pb-8 pr-14">
                              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tri-color Bottom Bar */}
                  <div className="flex justify-center">
                    <div className="tri-color-bar w-full max-w-2xl h-1"></div>
                  </div>
                </div>
              </section>

              {/* Footer Section */}
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
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/staffchahiye/" className="text-gray-400 hover:text-white transition-colors">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a> */}
                        <a href="https://www.instagram.com/staffchahiye" className="text-gray-400 hover:text-white transition-colors">
                          <span className="sr-only">Instagram</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.42.333 4.844.63c-.611.324-1.13.748-1.65 1.268a4.493 4.493 0 00-1.268 1.65c-.297.576-.499 1.25-.558 2.197C.975 7.613.96 8.02.96 11.641c0 3.622.014 4.029.072 4.977.06.946.262 1.62.558 2.197.324.611.748 1.13 1.268 1.65a4.493 4.493 0 001.65 1.268c.576.297 1.25.499 2.197.558.948.059 1.355.072 4.976.072 3.622 0 4.029-.014 4.977-.072.946-.06 1.62-.262 2.197-.558a4.493 4.493 0 001.65-1.268 4.493 4.493 0 001.268-1.65c.297-.576.499-1.25-.558-2.197.059-.948.072-1.355.072-4.976 0-3.622-.014-4.029-.072-4.977-.06-.946-.262-1.62-.558-2.197a4.493 4.493 0 00-1.268-1.65A4.493 4.493 0 0019.5.63c-.576-.297-1.25-.499-2.197-.558C16.355.013 15.948 0 12.327 0H12.017zm-.017 2.17c3.548 0 3.97.014 5.373.072.918.042 1.416.196 1.747.327.44.171.754.375 1.084.705.33.33.534.644.705 1.084.131.331.285.829.327 1.747.058 1.403.072 1.825.072 5.373 0 3.548-.014 3.97-.072 5.373-.042.918-.196 1.416-.327 1.747-.171.44-.375.754-.705 1.084a2.919 2.919 0 01-1.084.705c-.331.131-.829.285-1.747.327-1.403.058-1.825.072-5.373.072-3.548 0-3.97-.014-5.373-.072-.918-.042-1.416-.196-1.747-.327a2.919 2.919 0 01-1.084-.705 2.919 2.919 0 01-.705-1.084c-.131-.331-.285-.829-.327-1.747-.058-1.403-.072-1.825-.072-5.373 0-3.548.014-3.97.072-5.373.042-.918.196-1.416.327-1.747.171-.44.375-.754.705-1.084a2.919 2.919 0 011.084-.705c.331-.131.829-.285 1.747-.327 1.403-.058 1.825-.072 5.373-.072z" />
                            <path d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8z" />
                            <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                          </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC5684PS7y0OSH1V_WE8uPmA" className="text-gray-400 hover:text-white transition-colors">
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
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Mumbai</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Delhi</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Varanasi</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Hire in Lucknow</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">HIRE BY JOBS</h3>
                      <ul className="space-y-3">
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Waiter</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Helper</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Chef/Cook</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Housekeeping</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Other</a></li>
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
                        © 2024 StaffChahiye | All rights reserved | Managed by Sujan Kumar
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
            </React.Fragment>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;