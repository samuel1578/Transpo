import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore Ghana</h3>
          <p className="text-gray-400">
            Discover the beauty, history, and culture of Ghana with our guided tours and travel experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
            <li><a href="/tours" className="text-gray-400 hover:text-yellow-400">Tours</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
            <li><a href="/blog" className="text-gray-400 hover:text-yellow-400">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 flex items-center"><FaMapMarkerAlt className="mr-2" /> Accra, Ghana</p>
          <p className="text-gray-400 flex items-center"><FaEnvelope className="mr-2" /> info@exploreghana.com</p>
          <p className="text-gray-400 flex items-center"><FaPhone className="mr-2" /> +233 123 456 789</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 text-2xl hover:text-yellow-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 text-2xl hover:text-yellow-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 text-2xl hover:text-yellow-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; 2025 Explore Ghana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;