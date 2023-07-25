import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Footer Section 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">GoCampus</h3>
            <p className="text-sm text-gray-300">
              Where Dreams Soar and Knowledge Thrives. Embrace the Journey of
              Education and Success.
            </p>
          </div>

          {/* Footer Section 2 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-300">
              Email: contact@gocampus.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>

          {/* Footer Section 3 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-row gap-1">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaFacebookSquare size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaTwitterSquare size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaInstagramSquare size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Footer Section 4 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-5 pt-5 text-center md:text-left">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} GoCampus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
