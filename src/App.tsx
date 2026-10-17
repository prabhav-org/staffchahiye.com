import { CaretDown, CaretLeft, CaretRight, Check, FacebookLogo, InstagramLogo, LinkedinLogo, Star, StarHalf, YoutubeLogo, ArrowUpRight, CheckCircle, ClipboardText } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { VacancyModal } from "./components/VacancyModal";
import Header from "./components/Header";
import { STAFFING_FORM_URL } from "./constants/links";
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/RefundPolicy";
import Pricing from "./components/Pricing";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";

import PaymentVerification from "./components/PaymentVerification";
import PopularSearches from "./components/PopularSearch";

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(0); // First FAQ expanded by default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("right"); // or "left"
  const [nextIndex, setNextIndex] = useState<number|null>(null);
  const [showMoreRoles, setShowMoreRoles] = useState<boolean>(false);
  const [activeJobCard, setActiveJobCard] = useState(1);

  const features = [
    {
      title: "Tell us what kind of staff you need.",
      image: "first.png"
    },
    {
      title: "We send you ready-to-hire profiles instantly.",
      image: "section2_wapp.png"
    },
    {
      title: "Connect with them and start your hiring process in less than 30 minutes!",
      image: "third.png"
    }
  ];


  const faqData = [
    {
      question: "Can I interview the candidates before hiring?",
      answer: "Yes, you can. We’ll share candidate profiles, and you can schedule interviews at your convenience. If you need help setting this up, feel free to email us at team@staffchahiye.com"
    },
    {
      question: "If the candidate provided is not as per my requirement, then what?",
      answer: "No worries. If the candidate doesn't meet your expectations, we will continuously provide screened candidates to you for 7 days, ensuring up to 35 verified and pre-screened profiles are shared. Your dedicated account manager will personally assist you until the hiring is successfully completed."
    },
    {
      question: "What do you mean by “pre-screened candidates”?",
      answer: "Pre-screened candidates are individuals who have been evaluated by our team based on your job requirements. We speak to them directly to confirm their experience, interest, availability, and suitability before sharing their profiles with you."
    },
    {
      question: "For any doubt or support, how can I contact you?",
      answer: "We’re here to help! If you have any questions or need assistance at any stage, feel free to reach out to us at team@staffchahiye.com or call/WhatsApp us at ‪+91 7304216059‬."
    },
    {
      question: "How does StaffChahiye.com work?",
      answer: "Just tell us what kind of staff you need. We'll send pre-screened candidates directly to your WhatsApp so you can connect and start hiring instantly."
    },
    {
      question: "How fast can I get candidates?",
      answer: "Typically within 30 minutes. We're built for speed so you never have to delay hiring again."
    },
    {
      question: "What kind of staff can I hire?",
      answer: "We provide operational and support staff like: Waiters & kitchen helpers Housekeeping staff Retail & counter staff , Delivery executives, Receptionists, and more."
    },
    {
      question: " Are the candidates verified or trained?",
      answer: "Yes. All candidates are pre-screened for basic suitability, experience, and intent to join."
    },
    {
      question: "Do you support bulk hiring?",
      answer: "Absolutely. Whether you need one staff member or a full team, we can help."
    }
  ];

  const testimonials = [
    {
      image: "/testimonials/Picture1.jpg",
      quote: "We hired waitstaff and kitchen helpers for our annual corporate event, and the team was absolutely professional. They handled everything smoothly. Our guests were genuinely impressed!",
      author: "Aman Raghuvanshi",
      role: "Manager",
      company: "Bikanerwala",
      logo: "/brands/Bikanervala_logo main.png"
    },
    {
      image: "/testimonials/Picture2.jpg",
      quote: "Finding good chefs and kitchen staff is always tough, but they made it incredibly easy. The chef was skilled and well-mannered. Definitely coming back for future staffing needs",
      author: "Sameer Khanna",
      role: "Manager",
      company: "Barbeque Nation",
      logo: "/brands/barbeque-nation-seeklogo.png"
    },
    {
      image: "/testimonials/Picture3.jpg",
      quote: "Reliable and professional staff every time. Whether it's a last-minute kitchen helper or a full housekeeping team, they always deliver quality. Great coordination and service.",
      author: "Ajay Sahu",
      role: "HR",
      company: "Radisson Blu",
      logo: "/brands/Radisson_Blu_logo.png"
    },
    {
      image: "/testimonials/Picture4.jpg",
      quote: "Being a hotel, it's hard to find reliable housekeeping and kitchen help on short notice. But this service has been our go-to. Their team is responsive and always sends well-trained people",
      author: "Tushar Sharma",
      role: "Operations Head",
      company: "OYO",
      logo: "/brands/OYO_Rooms_(logo).png"
    },
    {
      image: "/testimonials/Picture5.jpg",
      quote: "We hired additional kitchen helpers and servers for a big outdoor catering event. They arrived on time and didn't need much supervision. Their energy and attitude made a big difference.",
      author: "Jasleen Kaur",
      role: "Manager",
      company: "Haldiram's",
      logo: "/brands/haldirams-seeklogo.png"
    }
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const location = useLocation();

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

  // Handle "Get Staff" button click (direct modal open)
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
      />

      <Routes>
        <Route path="/" element={
          <React.Fragment>
            {/* Hero Section */}
            <section className="w-full bg-white border-b border-gray-100">
              <Header />


              {/* Hero Content */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-10">
                {/* Hero Content Row - Two Column Layout */}
                <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-8 lg:gap-12 mb-8 min-h-[200px] lg:min-h-[200px]">
                  {/* Left Column: All Text Content */}
                  <div className="flex-1 max-w-xl flex flex-col">
                    {/* Hero Text */}
                    <div className="mb-8">
                      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Get job-ready staff on <span style={{ color: 'var(--brand-orange)' }}>WhatsApp, fast</span>.
                      </h1>
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">Voice AI agents talk to businesses and candidates on WhatsApp, screen the fit, and share matched profiles without any app download.</p>
                      <div className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-gray-900">
                        Matches can start coming in 15-30 minutes
                      </div>
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
                        <div className="text-xl lg:text-2xl font-bold text-gray-900">100+</div>
                        <div className="text-xs lg:text-sm text-gray-500">Available cities</div>
                      </div>
                    </div>

                    <div className="hiring-start-card">
                      <h2>Ready to build your team?</h2>
                      <p>Tell us the role, location and experience you need. We’ll help you find the right staff.</p>
                      <a href={STAFFING_FORM_URL} target="_blank" rel="noopener noreferrer" className="staff-cta">
                        Get Staff <ArrowUpRight size={20} aria-hidden="true" />
                      </a>
                      <p className="hiring-start-note">Share your requirements in our hiring form.</p>
                    </div>
                  </div>

                  {/* Right Column: Hiring Loop Infographic (Desktop) */}
                  <div className="hidden lg:flex flex-1">
                    <div className="hiring-loop-graphic w-full min-h-[500px]" aria-label="StaffChahiye WhatsApp voice AI hiring loop">
                      <div className="loop-status-bar">
                        <span className="status-dot"></span>
                        Live WhatsApp hiring loop
                      </div>
                      <div className="loop-node business-node">
                        <span className="node-kicker">Business</span>
                        <strong>Needs staff today</strong>
                        <span>Role, location, pay, shift</span>
                      </div>
                      <div className="loop-connector loop-connector-one"></div>
                      <div className="loop-node ai-node">
                        <span className="node-kicker">Voice AI agent</span>
                        <strong>Calls, asks, verifies</strong>
                        <span>Experience, intent, availability</span>
                      </div>
                      <div className="loop-connector loop-connector-two"></div>
                      <div className="loop-node candidate-node">
                        <span className="node-kicker">Candidates</span>
                        <strong>Matched on WhatsApp</strong>
                        <span>Pre-screened profiles shared fast</span>
                      </div>
                      <div className="loop-phone" aria-hidden="true">
                        <div className="phone-speaker"></div>
                        <div className="message-bubble inbound">Need 3 waiters tonight</div>
                        <div className="message-bubble outbound">Screening nearby candidates</div>
                        <div className="voice-wave">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="loop-match-pill">AI match score: High</div>
                    </div>
                  </div>
                </div>

                {/* Hiring Loop Infographic (Mobile) - Below all content on mobile */}
                <div className="block lg:hidden mb-8">
                  <div className="hiring-loop-graphic min-h-[430px]" aria-label="StaffChahiye WhatsApp voice AI hiring loop">
                    <div className="loop-status-bar">
                      <span className="status-dot"></span>
                      Live WhatsApp hiring loop
                    </div>
                    <div className="loop-node business-node">
                      <span className="node-kicker">Business</span>
                      <strong>Needs staff today</strong>
                      <span>Role, location, pay, shift</span>
                    </div>
                    <div className="loop-connector loop-connector-one"></div>
                    <div className="loop-node ai-node">
                      <span className="node-kicker">Voice AI agent</span>
                      <strong>Calls, asks, verifies</strong>
                      <span>Experience, intent, availability</span>
                    </div>
                    <div className="loop-connector loop-connector-two"></div>
                    <div className="loop-node candidate-node">
                      <span className="node-kicker">Candidates</span>
                      <strong>Matched on WhatsApp</strong>
                      <span>Pre-screened profiles shared fast</span>
                    </div>
                    <div className="loop-phone" aria-hidden="true">
                      <div className="phone-speaker"></div>
                      <div className="message-bubble inbound">Need 3 helpers</div>
                      <div className="message-bubble outbound">Finding nearby matches</div>
                      <div className="voice-wave">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="loop-match-pill">AI match score: High</div>
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
                      <img src="/brands/Adani-Green-Energy-PNG-Image.png" alt="logo1" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/barbeque-nation-seeklogo.png" alt="logo2" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/bhu.jpg" alt="logo3" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/Bikanervala_logo main.png" alt="logo4" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/haldirams-seeklogo.png" alt="logo5" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/IRCTC-Symbol.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/OYO_Rooms_(logo).png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/Radisson_Blu_logo.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/Saravanaa_Bhavan_Logo.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/Taj_Hotels_logo.svg.png" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
                      <img src="/brands/logo_nsdc.svg" alt="logo6" className="h-18 mx-10 opacity-100 transition-opacity duration-100" />
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
                      <ClipboardText size={20} weight="duotone" className="inline-block align-middle" aria-hidden="true" /> SMART JOB POSTING
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                      Get access to pre-screened candidates
                    </h3>
                    <div className="space-y-0 mb-8">
                      {features.map((feature, index) => (
                        <React.Fragment key={index}>
                          <button
                            type="button"
                            aria-pressed={activeFeature === index}
                            className={`feature-point-clickable ${activeFeature === index ? 'active' : ''}`}
                            onClick={() => handleFeatureClick(index)}
                          >
                            <div className="flex items-center">
                              <span className="checkmark font-bold mr-3"><CheckCircle size={20} weight="duotone" className="inline-block align-middle" aria-hidden="true" /></span>
                              <span className="text-gray-700 font-medium">{feature.title}</span>
                            </div>
                          </button>
                          {index < features.length - 1 && <div className="feature-separator"></div>}
                        </React.Fragment>
                      ))}
                    </div>
                    <button
                      onClick={handlePostJobClick}
                      className="cta-button"
                    >
                      Get Staff
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
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Who are you looking to hire?</span>
                  <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                </h2>
                <div className="role-grid grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'Waiter', image: '/JOBS/waiter.png' },
                    { name: 'Chef', image: '/JOBS/chef.webp' },
                    { name: 'Housekeeping', image: '/JOBS/housekeeping.webp' },
                    { name: 'Driver', image: '/JOBS/driver.webp' },
                    { name: 'Helper', image: '/JOBS/helper.webp' },
                    { name: 'Un/Semi-skilled', image: '/JOBS/manufacturing.webp' },
                    { name: 'Kitchen Staff', image: '/JOBS/cook_chef.webp' },
                    { name: 'Security Guard', image: '/JOBS/security_guard.webp' },
                  ].map((role, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`role-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        index >= 4 && !showMoreRoles ? 'hidden md:block' : ''
                      }`}
                      onClick={() => setIsModalOpen(true)}
                      style={{ cursor: 'pointer' }}
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
                    </button>
                  ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                  <button
                    type="button"
                    onClick={() => setShowMoreRoles(!showMoreRoles)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                  >
                    {showMoreRoles ? 'Show Less' : 'Explore more roles'}
                    <CaretDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                        showMoreRoles ? 'rotate-180' : ''
                      }`} weight="regular" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </section>

            <PopularSearches/>

            {/*Testimonial Section*/}
<section className="py-16 lg:py-20 bg-white">
<div className="max-w-7xl mx-auto px-8 lg:px-16">

    {/* Section Header */}
    <div className="text-center mb-8 lg:mb-12">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
        Why use StaffChahiye?
      </h2>
      <p className="text-base lg:text-lg text-gray-600 max-w-4xl mx-auto">
        From startups to SMEs to established enterprises, StaffChahiye revolutionizes the way businesses find high-quality talent quickly & effortlessly.
      </p>
    </div>

    {/* Stats Section */}
    <div className="mb-16 lg:mb-20">
      {/* Desktop Stats */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="flex items-center divide-x divide-gray-200">
          {[
            { value: '10,000+', label: 'New candidates join StaffChahiye every month.' },
            { value: '100+', label: 'Cities to publish your job.' },
            { value: '92%', label: 'Business get qualified candidates within 24 hrs' }
          ].map((stat, index) => (
            <div key={index} className="px-8 text-center">
              <div className="text-3xl xl:text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stats */}
      <div className="lg:hidden space-y-8">
        {[
          { value: '10,000+', label: 'New candidates join StaffChahiye every month.' },
          { value: '100+', label: 'Cities to publish your job.' },
          { value: '92%', label: 'Business get qualified candidates within 24 hrs' }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Testimonial Slider */}
<div className="relative h-[300px] lg:h-[300px] overflow-visible px-10 lg:px-20">
      {/* Reusable Testimonial Card */}
      {[
        { data: testimonials[testimonialIndex], active: true },
        isSliding && nextIndex !== null ? { data: testimonials[nextIndex], active: false } : null
      ]
        .filter(Boolean)
        .map((item, idx) => {
          const { data, active } = item!;
          const baseClasses = "absolute inset-0 w-full transition-all duration-400 ease-in-out z-10";
          const animationClasses = isSliding
            ? direction === "right"
              ? active
                ? "-translate-x-32 opacity-0 z-10"
                : "translate-x-32 opacity-0 z-20"
              : active
              ? "translate-x-32 opacity-0 z-10"
              : "-translate-x-32 opacity-0 z-20"
            : "translate-x-0 opacity-100";

          return (
            <div key={idx} className={`${baseClasses} ${animationClasses}`}>
<div className="bg-gray-50 rounded-2xl shadow-lg p-4 lg:p-4 w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-start lg:h-[200px]">
                <img
                  src={data.image}
                  alt={`${data.author} avatar`}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold text-gray-900">{data.author}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Check className="w-4 h-4" weight="regular" aria-hidden="true" />
                      Hired
                    </span>
                  </div>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="text-sm font-semibold text-gray-900 mr-1">4.5</span>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star className="w-4 h-4" key={i} weight="fill" aria-hidden="true" />
                      ))}
                      <StarHalf className="w-4 h-4" weight="fill" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{data.quote}</p>
                </div>
              </div>
            </div>
          );
        })}

      {/* Controls */}
<div className="absolute top-1/2 -translate-y-1/2 w-full z-50 flex items-center justify-between pointer-events-none">
  <button
    onClick={handlePrev}
    disabled={isSliding}
    className="pointer-events-auto bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg -ml-10 transition"
    aria-label="Previous"
      style={{ left: '-45px', position: 'absolute' }}

  >
    <CaretLeft className="w-6 h-6 text-gray-700" weight="regular" aria-hidden="true" />
  </button>
  <button
    onClick={handleNext}
    disabled={isSliding}
    className="pointer-events-auto bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg -mr-10 transition"
    aria-label="Next"
      style={{ right: '45px', position: 'absolute' }}

  >
    <CaretRight className="w-6 h-6 text-gray-700" weight="regular" aria-hidden="true" />
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
                          aria-expanded={expandedFAQ === index}
                          aria-controls={`faq-answer-${index}`}
                          className="faq-button w-full py-6 lg:py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-8 leading-relaxed">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <CaretDown className={`faq-chevron w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedFAQ === index ? 'rotated' : ''
                                }`} weight="regular" aria-hidden="true" />
                          </div>
                        </button>

                        <div id={`faq-answer-${index}`} hidden={expandedFAQ !== index} className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? 'max-h-96 opacity-100 expanded' : 'max-h-0 opacity-0'
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
                        <FacebookLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                      </a>
                      <a href="https://www.linkedin.com/company/staffchahiye/" className="text-gray-400 hover:text-white transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedinLogo className="w-5 h-5" weight="regular" aria-hidden="true" />
                      </a>
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
                      © 2026 StaffChahiye | All rights reserved | Managed by SUJAN KUMAR
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-payment" element={<PaymentVerification />} />
        <Route path="/next-route" element={<div>Next Route</div>} />
      </Routes>
    </div>
  );
}

export default App;
