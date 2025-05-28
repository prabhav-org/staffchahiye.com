import React, { useState, useEffect } from "react";

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      title: "Advanced Job Filters & Assessments",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop&auto=format"
    },
    {
      title: "Smart AI Lead Management", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&auto=format"
    },
    {
      title: "Inbound Calls & WhatsApp Alerts",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop&auto=format"
    }
  ];

  // Auto-rotation effect - cycle through features every 5 seconds
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
    
    // Resume auto-rotation after 10 seconds of user inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full bg-white border-b border-gray-100">
        {/* Logo & Nav */}
        <header className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between relative nav-separator">
          <div className="text-xl font-extrabold text-black tracking-tight" style={{ color: 'var(--brand-orange)' }}>
            StaffChahiye
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Product</a>
            <a href="#" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Blogs</a>
            <a href="#" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Pricing</a>
          </nav>
        </header>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-10">
          {/* Hero Content Row - Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-8 lg:gap-12 mb-8 min-h-[50px] lg:min-h-[50px]">
            {/* Left Column: All Text Content */}
            <div className="flex-1 max-w-xl flex flex-col">
              {/* Hero Text */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Hire top talent in 48 hours with <span style={{ color: 'var(--brand-orange)' }}>StaffChahiye</span>.
                </h1>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">Streamline your recruitment with AI-driven precision. Single solution from Fresher to experienced hiring.</p>
              </div>

              {/* Statistics Section */}
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 mb-8">
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">1Lakh+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Qualified candidates</div>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">5,000+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Employers</div>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Available cities</div>
                </div>
              </div>

              {/* Phone Input Section */}
              <div className="max-w-xl">
                <div className="mb-2 font-bold text-lg lg:text-xl text-gray-900">Let's get started</div>
                <div className="mb-4 text-sm lg:text-base text-gray-600">Hire top talent faster with StaffChahiye</div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="tel" 
                    placeholder="Enter 10 digit mobile number" 
                    className="flex-1 px-4 py-3 text-sm lg:text-base border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-[var(--brand-orange)] focus:outline-none transition-all" 
                  />
                  <button className="bg-[var(--brand-orange)] text-white px-6 py-3 text-sm lg:text-base rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                    Continue
                  </button>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  By clicking continue, you agree to the StaffChahiye <a href="#" className="text-[var(--brand-orange)] hover:underline">Terms of service</a> & <a href="#" className="text-[var(--brand-orange)] hover:underline">Privacy policy</a>.
                </div>
              </div>
            </div>
            
            {/* Right Column: YouTube Video (Desktop) */}
            <div className="hidden lg:block flex-1">
              <div className="video-responsive h-full min-h-[500px]">
                <iframe
                  src="https://www.youtube.com/embed/lcjdwSY2AzM"
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
                src="https://www.youtube.com/embed/lcjdwSY2AzM"
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
            <div className="mb-4 text-center">
              <h3 className="text-sm lg:text-base font-semibold text-gray-900">Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for hiring</h3>
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center whitespace-nowrap marquee">
                <img src="https://ext.same-assets.com/2583224959/3153208819.png" alt="logo1" className="h-8 mx-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://ext.same-assets.com/2583224959/1201393804.png" alt="logo2" className="h-8 mx-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://ext.same-assets.com/2583224959/2358811312.png" alt="logo3" className="h-8 mx-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://ext.same-assets.com/2583224959/3153208819.png" alt="logo4" className="h-8 mx-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://ext.same-assets.com/2583224959/1201393804.png" alt="logo5" className="h-8 mx-8 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="https://ext.same-assets.com/2583224959/2358811312.png" alt="logo6" className="h-8 mx-8 opacity-60 hover:opacity-100 transition-opacity" />
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
              <button className="cta-button">
                Post a job now
              </button>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:order-2 order-2">
              <div className="enhanced-illustration-container">
                <img 
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & Stats Section */}
      <section className="py-14 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Why hire from StaffChahiye?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-8">
            <div>
              <div className="text-2xl font-bold text-[var(--brand-orange)]">5Lakh+</div>
              <div className="text-xs text-white">New candidates/month</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--brand-orange)]">180+</div>
              <div className="text-xs text-white">Job categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--brand-orange)]">Up to 5x</div>
              <div className="text-xs text-white">More walk-ins</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--brand-orange)]">66%</div>
              <div className="text-xs text-white">Get qualified in 24hr</div>
            </div>
          </div>
          {/* Testimonial text card, no photo */}
          <div className="bg-white rounded-xl p-6 mx-auto max-w-2xl text-black shadow-inner mt-6">
            <div className="text-base mb-2">We are closely working with StaffChahiye for talent discovery and hiring across job families. Their fastest turn-around time enables us to continue daily functions without interruption.</div>
            <div className="text-sm font-semibold mt-2">Dr Varun<br/>SVP, Medical Affairs</div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-14 bg-[var(--brand-orange)] bg-opacity-10">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="divide-y divide-[var(--brand-orange)] bg-white rounded-lg">
            <details className="px-4 py-3 cursor-pointer">
              <summary className="font-semibold">Why should I use StaffChahiye over others?</summary>
              <div className="pl-4 mt-2 text-gray-600 text-sm">StaffChahiye enables recruiters to reach qualified candidates faster with the power of AI and automation.</div>
            </details>
            <details className="px-4 py-3 cursor-pointer">
              <summary className="font-semibold">What happens if I don't receive enough candidates?</summary>
              <div className="pl-4 mt-2 text-gray-600 text-sm">Our support team will work to boost your job post and help improve reach and relevance.</div>
            </details>
            <details className="px-4 py-3 cursor-pointer">
              <summary className="font-semibold">In which cities can I hire via StaffChahiye?</summary>
              <div className="pl-4 mt-2 text-gray-600 text-sm">We operate in 100+ cities and towns across India.</div>
            </details>
            <details className="px-4 py-3 cursor-pointer">
              <summary className="font-semibold">I want to hire more than 10 candidates, do you have bulk-hiring plans?</summary>
              <div className="pl-4 mt-2 text-gray-600 text-sm">Yes! Get in touch with our team to discover high-volume/bulk-hiring solutions.</div>
            </details>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-black text-white pt-10 pb-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 border-b border-gray-700 pb-8">
          {/* Logo + Social */}
          <div>
            <div className="font-extrabold text-lg mb-2" style={{ color: 'var(--brand-orange)' }}>StaffChahiye</div>
            <div className="flex gap-3 mb-2">
              <a href="#"><span className="sr-only">Facebook</span><svg width="20" height="20" fill="var(--brand-orange)"><circle cx="10" cy="10" r="9" /></svg></a>
              <a href="#"><span className="sr-only">LinkedIn</span><svg width="20" height="20" fill="var(--brand-orange)"><rect x="3" y="3" width="14" height="14" rx="2"/></svg></a>
              <a href="#"><span className="sr-only">Instagram</span><svg width="20" height="20" fill="var(--brand-orange)"><ellipse cx="10" cy="10" rx="8" ry="8"/></svg></a>
              <a href="#"><span className="sr-only">YouTube</span><svg width="20" height="20" fill="var(--brand-orange)"><rect x="5" y="7" width="10" height="6" rx="1"/></svg></a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="font-semibold mb-1">Product</div>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#">Job posting</a></li>
                <li><a href="#">Database</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Get to know us</div>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact support</a></li>
                <li><a href="#">Contact sales</a></li>
                <li><a href="#">Job seekers</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Resources</div>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#">Help center</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 pt-4 text-xs text-gray-400">
          <div>© 2024 StaffChahiye. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <button className="ml-auto bg-[var(--brand-orange)] text-white px-4 py-2 rounded">Start your job post</button>
        </div>
      </footer>
    </div>
  );
}

export default App;