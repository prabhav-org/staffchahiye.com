import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 py-12 bg-white border-b">
        {/* Logo & Nav */}
        <header className="flex items-center justify-between mb-8">
          <div className="text-2xl font-extrabold text-black tracking-tight" style={{ color: 'var(--brand-orange)' }}>
            StaffChahiye
          </div>
          <nav className="flex gap-6 text-base font-medium">
            <a href="#" className="hover:text-[var(--brand-orange)]">Product</a>
            <a href="#" className="hover:text-[var(--brand-orange)]">Blogs</a>
            <a href="#" className="hover:text-[var(--brand-orange)]">Pricing</a>
          </nav>
        </header>
        
        {/* Hero Content Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Left: Hero Text */}
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Hire top talent in 48 hours with <span style={{ color: 'var(--brand-orange)' }}>StaffChahiye</span>.
            </h1>
            <p className="text-lg text-gray-700 mb-6">Streamline your recruitment with AI-driven precision. Single solution from Fresher to experienced hiring.</p>
          </div>
          
          {/* Right: YouTube Video (Desktop) */}
          <div className="hidden md:block w-full max-w-md">
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

        {/* Statistics Section */}
        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-black">1Lakh+</div>
            <div className="text-sm text-gray-500">Qualified candidates</div>
          </div>
          <div>
            <div className="text-xl font-bold text-black">5,000+</div>
            <div className="text-sm text-gray-500">Employers</div>
          </div>
          <div>
            <div className="text-xl font-bold text-black">100+</div>
            <div className="text-sm text-gray-500">Available cities</div>
          </div>
        </div>

        {/* Phone Input Section (Below Stats) */}
        <div className="max-w-lg mb-8">
          <div className="mb-2 font-bold text-lg">Let's get started</div>
          <div className="mb-4 text-gray-500">Hire top talent faster with StaffChahiye</div>
          <form className="flex gap-3">
            <input 
              type="tel" 
              placeholder="Enter 10 digit mobile number" 
              className="flex-1 px-4 py-3 border rounded text-black focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-[var(--brand-orange)]" 
            />
            <button className="bg-[var(--brand-orange)] text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors">
              Continue
            </button>
          </form>
          <div className="mt-3 text-xs text-gray-400">
            By clicking continue, you agree to the StaffChahiye <a href="#" className="text-[var(--brand-orange)]">Terms of service</a> & <a href="#" className="text-[var(--brand-orange)]">Privacy policy</a>.
          </div>
        </div>

        {/* YouTube Video (Mobile) */}
        <div className="block md:hidden mb-8">
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/lcjdwSY2AzM"
              title="StaffChahiye Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Marquee Brands Section */}
        <div className="mt-10 overflow-hidden">
          <div className="mb-4 text-center font-semibold text-gray-600">Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for hiring</div>
          <div className="flex items-center whitespace-nowrap marquee">
            <img src="https://ext.same-assets.com/2583224959/3153208819.png" alt="logo1" className="h-8 mx-8" />
            <img src="https://ext.same-assets.com/2583224959/1201393804.png" alt="logo2" className="h-8 mx-8" />
            <img src="https://ext.same-assets.com/2583224959/2358811312.png" alt="logo3" className="h-8 mx-8" />
            <img src="https://ext.same-assets.com/2583224959/3153208819.png" alt="logo4" className="h-8 mx-8" />
            <img src="https://ext.same-assets.com/2583224959/1201393804.png" alt="logo5" className="h-8 mx-8" />
            <img src="https://ext.same-assets.com/2583224959/2358811312.png" alt="logo6" className="h-8 mx-8" />
          </div>
        </div>
      </section>
      {/* Features Sections Placeholders */}
      <section className="py-14 bg-[#f5f7fb]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">A single platform for your hiring needs</h2>
          {/* Feature cards and illustrations go here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-bold text-lg text-black mb-2">Smart Job Posting</div>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Relevant, high-intent candidates</li>
                <li>Advanced job filters & assessments</li>
                <li>AI lead management</li>
                <li>WhatsApp & Call alerts</li>
              </ul>
              <button className="mt-4 bg-[var(--brand-orange)] text-white px-4 py-2 rounded">Post a job now</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-bold text-lg text-black mb-2">StaffChahiye Database</div>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>AI powered search</li>
                <li>Area-based search</li>
                <li>Bulk WhatsApp invites</li>
              </ul>
              <button className="mt-4 bg-[var(--brand-orange)] text-white px-4 py-2 rounded">Search candidates</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-bold text-lg text-black mb-2">WhatsApp Fast Recruit</div>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Bulk communication</li>
                <li>Instant responses</li>
                <li>Delivered directly to your WhatsApp inbox</li>
              </ul>
              <button className="mt-4 bg-[var(--brand-orange)] text-white px-4 py-2 rounded">Install Chrome Extension</button>
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