import { Link } from "react-router-dom";
import { Fa500Px } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-deepPurple-darker text-neutral-light py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Fa500Px className="h-10 w-10 text-deepPurple-accent" />
            <span className="text-3xl font-bold text-white">Berimbolo</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-neutral-medium">
            <div>
              <Link
                to="/"
                className="hover:text-deepPurple-lightest transition duration-300"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/services"
                className="hover:text-deepPurple-lightest transition duration-300"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                className="hover:text-deepPurple-lightest transition duration-300"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover:text-deepPurple-lightest transition duration-300"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-neutral-medium"></div>

        {/* Bottom Section */}
        <div className="text-center text-neutral-medium text-sm">
          © {new Date().getFullYear()} Berimbolo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
