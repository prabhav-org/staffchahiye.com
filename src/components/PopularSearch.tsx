import React, { useState } from 'react';
import { VacancyForm } from './forms/VacancyForm';
import { VacancyModal } from './VacancyModal';
import { usePhoneValidation } from '../hooks/usePhoneValidation';

const jobCategories = [
  {
    rank: 1,
    title: 'Chef Jobs',
    image: '/JOBS/chef.webp',
    colorFrom: 'from-orange-100',
    colorTo: 'to-orange-50',
    btnColor: 'bg-orange-500',
  },
  {
    rank: 4,
    title: 'Waiter Jobs',
    image: '/JOBS/waiter.png',
    colorFrom: 'from-green-100',
    colorTo: 'to-green-50',
    btnColor: 'bg-green-600',
  },
  {
    rank: 2,
    title: 'Helper',
    image: '/JOBS/helper.webp',
    colorFrom: 'from-purple-100',
    colorTo: 'to-purple-50',
    btnColor: 'bg-purple-600',
  },
  {
    rank: 3,
    title: 'Driver Jobs',
    image: '/JOBS/driver.webp',
    colorFrom: 'from-blue-100',
    colorTo: 'to-blue-50',
    btnColor: 'bg-blue-600',
  },
  
];

const PopularSearches = () => {
  const {
    phoneNumber,
    phoneError,
    validatePhone,
    handlePhoneChange
  } = usePhoneValidation();


  const [isModalOpen, setIsModalOpen] = useState(false);


  const handlePostJobClick = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
<>
     <VacancyModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            initialPhone={phoneNumber}
          />
    <section className="py-14 px-4 md:px-20 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
        <span role="img" aria-label="search">🔍</span> Popular Searches on{' '}
        <span className="text-orange-500">StaffChahiye</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobCategories.map(({ rank, title, image, colorFrom, colorTo, btnColor }) => (
          <div
            key={title}
            className={`rounded-3xl p-6 bg-gradient-to-br ${colorFrom} ${colorTo} shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border border-gray-100 relative group`}
          >
            <span className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-bold text-gray-700 rounded-full shadow">
              #{rank} Trending
            </span>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">
                Find verified and nearby {title.toLowerCase()} easily.
              </p>
            </div>

            <div className="flex justify-between items-end mt-8">
              <button
                className={`text-white px-4 py-2 rounded-full text-sm font-semibold ${btnColor} hover:brightness-110 shadow-md`}
                onClick={() => {handlePostJobClick()}}
              >

                HIRE NOW
              </button>

              {/* ✅ FIXED IMAGE SIZE & UNIFORM LOOK */}
              <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default PopularSearches;
