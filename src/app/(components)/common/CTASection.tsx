import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

interface CTASectionProps {
  title: string;
  description: string;
  phoneNumber: string;
  phoneDisplay: string;
  email: string;
  emailDisplay?: string;
  gradientFrom?: string;
  gradientTo?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  phoneNumber,
  phoneDisplay,
  email,
  emailDisplay = "Email Us",
  gradientFrom = "from-blue-900",
  gradientTo = "to-indigo-900",
  buttonTextColor = "text-blue-900",
  buttonBgColor = "bg-white",
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={`tel:${phoneNumber}`}
            className={`group inline-flex items-center gap-3 ${buttonBgColor} ${buttonTextColor} hover:bg-gray-100 font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            <FiPhone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>{phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            <FiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{emailDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
