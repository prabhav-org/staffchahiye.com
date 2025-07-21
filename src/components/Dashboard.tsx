import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// Mock data for a small restaurant
const mockBusinessData = {
  name: "Sample Dashboard",
  type: "Restaurant",
  location: "Delhi",
  activeJobPosts: [
    {
      title: "Waiter",
      applicants: 12,
      status: "Open"
    },
    {
      title: "Chef",
      applicants: 8,
      status: "Open"
    }
  ]
};

const mockApplicants = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Chef',
    age: 28,
    gender: 'Male',
    experience: '5 years',
    status: 'New',
    phone: '+91 98765 43210',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&h=200&fit=crop'
  },
  {
    id: 2,
    name: 'Priya Singh',
    position: 'Chef',
    age: 25,
    gender: 'Female',
    experience: '4 years',
    status: 'Contacted',
    phone: '+91 98765 43211',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=200&h=200&fit=crop'
  },
  {
    id: 3,
    name: 'Amit Sharma',
    position: 'Chef',
    age: 30,
    gender: 'Male',
    experience: '3 years',
    status: 'Interviewed',
    phone: '+91 98765 43212',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=200&fit=crop'
  },
  {
    id: 4,
    name: 'Sneha Patel',
    position: 'Waiter',
    age: 22,
    gender: 'Female',
    experience: '2 years',
    status: 'New',
    phone: '+91 98765 43213',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Waiter',
    age: 24,
    gender: 'Male',
    experience: '1 year',
    status: 'Contacted',
    phone: '+91 98765 43214',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
  }
];

const Dashboard: React.FC = () => {
  // const [activeTab, setActiveTab] = useState('overview');
  // const [showSupportModal, setShowSupportModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const handlePostJobClick = () => {
    window.location.href = '/';
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const filteredApplicants = mockApplicants.filter(applicant => {
    const positionMatch = selectedPosition === 'All' || applicant.position === selectedPosition;
    const statusMatch = selectedStatus === 'All' || applicant.status === selectedStatus;
    return positionMatch && statusMatch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Restaurant Profile Box */}
          <div className="bg-white rounded-xl shadow-sm mb-8 p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{mockBusinessData.name}</h1>
                <p className="text-gray-600 mt-2 text-lg">{mockBusinessData.type} • {mockBusinessData.location}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Active Job Posts */}
          <div className="bg-white rounded-xl shadow-sm mb-8 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Active Job Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockBusinessData.activeJobPosts.map((job, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-orange-200 ${
                    selectedPosition === job.title ? 'ring-2 ring-orange-500 border-orange-500' : ''
                  }`}
                  onClick={() => setSelectedPosition(job.title)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 shadow-sm">
                          <span className="text-2xl font-bold text-orange-600">{job.applicants}</span>
                        </div>
                        <span className="ml-4 text-gray-600 font-medium">Candidates Applied</span>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-green-50 to-green-100 text-green-700 border border-green-200">
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applicants Section */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Applicants</h3>
                <p className="text-gray-500 text-sm">
                  {filteredApplicants.length} {filteredApplicants.length === 1 ? 'candidate' : 'candidates'} found
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto mt-4 md:mt-0">
                <select 
                  className="rounded-lg border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white text-gray-700 font-medium"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                >
                  <option value="All">All Positions</option>
                  <option value="Chef">Chef</option>
                  <option value="Waiter">Waiter</option>
                </select>
                <select 
                  className="rounded-lg border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white text-gray-700 font-medium"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Interviewed">Interviewed</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredApplicants.map((applicant) => (
                <div key={applicant.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <img
                        src={applicant.image}
                        alt={applicant.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                        applicant.status === 'New' ? 'bg-blue-500' :
                        applicant.status === 'Contacted' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{applicant.name}</h4>
                          <p className="text-gray-600 font-medium">{applicant.position}</p>
                        </div>
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
                          applicant.status === 'New' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                          applicant.status === 'Contacted' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' :
                          'bg-green-50 text-green-700 border border-green-200'
                        }`}>
                          {applicant.status}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">Age: {applicant.age}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="font-medium">{applicant.gender}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{applicant.experience} experience</span>
                        </div>
                      </div>

                      <div className="mt-6 flex space-x-3">
                        <button 
                          onClick={() => handleWhatsApp(applicant.phone)}
                          className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-sm"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                          </svg>
                          WhatsApp
                        </button>
                        <button 
                          onClick={() => handleCall(applicant.phone)}
                          className="inline-flex items-center px-5 py-2.5 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer handlePostJobClick={handlePostJobClick} />
    </div>
  );
};

export default Dashboard; 