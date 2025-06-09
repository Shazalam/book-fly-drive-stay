import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:px-20 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* Company Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3 ">Company</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/about-us" className="hover:text-gray-400">
                  About us
                </Link>
              </li> */}
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-gray-400"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-gray-400">
                Cancellation 
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/car-rentals" className="hover:text-gray-400">
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link href="/flights" className="hover:text-gray-400">
                  Flights
                </Link>
                <li>
                <Link href="/hotels" className="hover:text-gray-400">
                  Hotels
                </Link>
              </li>
                <li>
                <Link href="/cruise" className="hover:text-gray-400">
                  Cruise
                </Link>
              </li>
              </li>
            </ul>
          </div>

          {/* About / Some Text */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">About Us</h3>
            <p className="text-gray-400">
    Welcome to Book Fly Drive Stay – Your Trusted Travel Companion!

    At Book Fly Drive Stay, we believe that every journey is an opportunity for adventure, discovery, and memories. Our mission is to provide seamless travel experiences by offering a one-stop solution for all your travel needs – from flight bookings and car rentals to hotel stays. Whether you are planning a family vacation, a business trip, or a spontaneous getaway, we&rsquo;re here to make your travel plans as simple and enjoyable as possible.
    Who We Are
    We are a passionate team of travel experts dedicated to helping you find the best travel deals. With years of experience in the travel industry, we understand that convenience, affordability, and quality service are key to an unforgettable travel experience. Our platform connects you with reliable car rental services, hassle-free flight bookings, and comfortable accommodations, ensuring that every part of your trip is taken care of.
</p>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} Book Fly Drive Stay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
