"use client";

import { useState, FormEvent, ChangeEvent, MouseEvent, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiLock, 
  FiBriefcase,
  FiFileText,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiArrowLeft,
  FiCheck
} from "react-icons/fi";

// Types for our modals
type AuthModalType = 'auth' | 'find-my-trip';

interface AuthModalsProps {
  isOpen: boolean;
  defaultModal?: AuthModalType;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  itineraryNumber: string;
}

// Carousel data with images and content
const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discover Amazing Destinations",
    description: "Join millions of happy travelers worldwide"
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exclusive Member Deals",
    description: "Get access to special discounts and offers"
  },
  {
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium Travel Experience",
    description: "Enjoy seamless booking and premium services"
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "24/7 Customer Support",
    description: "Our team is always here to help you"
  }
];

// Mock function to check if user exists (replace with actual API call)
const checkUserExists = async (email: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return email.includes('existing');
};

// Separate Carousel Component to prevent unnecessary re-renders
const Carousel = ({ 
isOpen
}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Auto-rotate carousel - use useCallback to prevent recreation
  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isOpen]);
  
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselData.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  }, []);

  const selectImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <div className="hidden md:flex flex-col w-2/5 relative overflow-hidden">
      {/* Carousel Background with Smooth Transition */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(37, 99, 235, 0.8), rgba(79, 70, 229, 0.8)), url(${carouselData[currentImageIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Static Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {carouselData[currentImageIndex].title}
          </h3>
          <p className="text-blue-100">
            {carouselData[currentImageIndex].description}
          </p>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
        <button
          onClick={prevImage}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <FiArrowLeft className="w-4 h-4" />
        </button>
        
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextImage}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const AuthModals = ({ isOpen, defaultModal = 'auth', onClose }: AuthModalsProps) => {
  const [activeModal, setActiveModal] = useState<AuthModalType>(defaultModal);
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckingUser, setIsCheckingUser] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState<boolean | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    itineraryNumber: ''
  });

  // Sync with parent component's open state
  useEffect(() => {
    if (isOpen && defaultModal) {
      setActiveModal(defaultModal);
      if (defaultModal === 'auth') {
        setIsExistingUser(null);
        setFormData(prev => ({ ...prev, password: '', confirmPassword: '' }));
      }
    }
  }, [isOpen, defaultModal]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleEmailBlur = useCallback(async () => {
    if (!formData.email || !formData.email.includes('@')) return;
    
    setIsCheckingUser(true);
    try {
      const exists = await checkUserExists(formData.email);
      setIsExistingUser(exists);
    } catch (error) {
      console.error('Error checking user:', error);
      setIsExistingUser(false);
    } finally {
      setIsCheckingUser(false);
    }
  }, [formData.email]);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }, [formData]);

  const closeModal = useCallback(() => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      itineraryNumber: ''
    });
    setIsExistingUser(null);
    onClose();
  }, [onClose]);

  

  const ModalContainer = ({ children }: { children: React.ReactNode }) => (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[600px] overflow-hidden flex"
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <ModalContainer>
      {/* Left Side - Image Carousel */}
      <Carousel 
        isOpen={isOpen}
      />

      {/* Right Side - Form with Tabs */}
      <div className="flex-1 flex flex-col">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          type="button"
        >
          <FiX className="w-5 h-5 text-gray-600" />
        </button>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {(['auth', 'find-my-trip'] as AuthModalType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveModal(tab)}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-300 ${
                activeModal === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'auth' && 'Sign In'}
              {tab === 'find-my-trip' && 'Find My Trip'}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Auth Form (Sign In / Register) */}
          {activeModal === 'auth' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isExistingUser === null ? 'Sign in or Join' : isExistingUser ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-gray-600">
                  {isExistingUser === null ? 'Enter your email to continue' : 
                   isExistingUser ? 'Sign in to access your account' : 'Join 10 crore+ happy travellers'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field (Always visible) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleEmailBlur}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      disabled={isExistingUser !== null}
                    />
                    {isCheckingUser && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      </div>
                    )}
                    {isExistingUser !== null && !isCheckingUser && (
                      <FiCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Registration Fields (Show only for new users) */}
                {isExistingUser === false && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="First name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+91 Enter mobile number"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Password Fields (Show for both new and existing users) */}
                {isExistingUser !== null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder={isExistingUser ? "Enter your password" : "Create a password"}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <FiEyeOff className="w-5 h-5 text-gray-400" />
                          ) : (
                            <FiEye className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password (Show only for new users) */}
                    {isExistingUser === false && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            required
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Confirm your password"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  disabled={isCheckingUser}
                >
                  {isCheckingUser ? 'Checking...' : 
                   isExistingUser === null ? 'Continue' :
                   isExistingUser ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Social Login (Show only when user is detected) */}
              {isExistingUser !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
                      Google
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
                      Facebook
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Find My Trip Form */}
          {activeModal === 'find-my-trip' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBriefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Find My Trip</h2>
                <p className="text-gray-600">Retrieve your booking details</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Itinerary Number
                  </label>
                  <div className="relative">
                    <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      name="itineraryNumber"
                      type="text"
                      required
                      value={formData.itineraryNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter itinerary number"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Find My Trip
                </button>
              </form>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 text-center">
                  <strong>AVIS Code: PREMIUMRIDE</strong> - Use this code for special offers
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default AuthModals;