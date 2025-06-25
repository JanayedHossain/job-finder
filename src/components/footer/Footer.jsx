import { NavLink, useNavigate } from "react-router";
import footerLogo from "../../assets/footerLogo.png";

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <a className="flex items-center text-xl sm:text-2xl font-semibold gap-1 mb-2">
            <img src={footerLogo} alt="" className="w-7 sm:w-10" />
            <h1
              className="font-seconderyFont cursor-pointer"
              onClick={() => navigate("/")}
            >
              Job<span className="text-[#2979BB]">Finder</span>
            </h1>
          </a>
          <p className="text-sm text-gray-300">
            Your trusted platform to explore top job opportunities across top
            companies.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">{navItems}</ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="https://www.facebook.com" target="blank">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="https://x.com/home" target="blank">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a href="https://github.com/" target="blank">
              <FaGithub className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
