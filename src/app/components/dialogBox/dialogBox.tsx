
'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import callCenter from "../../utils/assests/callCenter-1.png"
import callCenterProfile from "../../utils/assests/callCenterProfile.png"
import Image from 'next/image'
import useRouteChangeDetector from '@/app/hooks/useRouteChangeDetector'


const DialogBox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { routeChanged, setRouteChanged } = useRouteChangeDetector()

  useEffect(() => {
    setIsOpen(true)
  }, [])

  
  useEffect(() => {
    if (routeChanged) {

      setIsOpen(true)
    }

  }, [routeChanged])

  const handleClose = () => {
    setIsOpen(false)
    setRouteChanged(false)
  }

  const buttonItems = [
    { text: 'New Booking' },
    { text: 'Cancellations' },
    { text: 'Changes' },
    { text: 'Customer Support' }
  ];

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500/75" aria-hidden="true" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="relative w-full md:w-[55vw] max-w-6xl rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>

            {/* Content Area */}
            <div className="flex flex-col sm:flex-row ">
              {/* Left Image Section - Hidden on mobile */}
              <div className="hidden sm:block sm:w-2/5 px-1 pb-2 pt-6 h-auto flex items-end justify-center rounded-l-lg  overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={callCenter}
                    alt="Customer support"
                    className="w-full h-full object-cover scale-100" // Zoomed in 10%
                    priority
                    fill // Fills the container
                    style={{ objectPosition: 'center center' }} // Focus on center
                  />
                </div>
              </div>

              {/* Mobile Profile Image */}
              <div className="sm:hidden flex justify-center pt-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                  <Image
                    src={callCenterProfile}
                    alt="Customer support"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Content Section */}
              <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col">
                {/* Header Content */}
                <div className="text-center mb-4 sm:mb-6">
                  <Dialog.Title as="h1" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">
                    NEED HELP?
                  </Dialog.Title>

                  <div className="flex flex-col items-center space-y-1">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 tracking-wide">
                      Give Us a Call
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
                      {` We're here to assist you with`}
                    </p>
                  </div>
                </div>

                {/* Help Options - Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {buttonItems.map((item, index) => (
                    <a
                      key={index}
                      href="tel:+18449545425"
                      className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold 
        py-2 sm:py-3 px-4 rounded-lg transition-all duration-200 
        text-base sm:text-lg hover:shadow-md active:scale-[0.98] text-center"
                      onClick={(e) => {
                        if (window.innerWidth > 640) { // If desktop
                          e.preventDefault(); // Don't follow the link
                          setIsOpen(false);
                          // Optionally show a message for desktop users
                          alert('Call +1 (844) 954-5425 from your phone');
                        }
                      }}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-auto text-center">
                  <div className="bg-white py-1 sm:py-2 px-4 rounded-lg inline-block">
                    <p className="text-sm sm:text-base font-medium text-gray-700">No Hold - 24/7 Helpline</p>
                  </div>

                  <div className="mt-2 sm:mt-3">
                    <a
                      href="tel:+18449545425"
                      className="bg-[#00cb31] hover:bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-sm inline-flex items-center transition-colors text-sm sm:text-base"
                      aria-label="Call customer support"
                      onClick={(e) => {
                        if (window.innerWidth > 640) { // If desktop
                          e.preventDefault(); // Don't follow the link
                          setIsOpen(false);
                          // Optionally show a message for desktop users
                          alert('Call +1 (844) 954-5425 from your phone');
                        }
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold">+1 (844) 954-5425</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default DialogBox;
