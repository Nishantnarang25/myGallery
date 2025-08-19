import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const links = [
      { name: "Home", href: "/" },

   // { name: "About", href: "/about" },
    { name: "UI/UX", href: "/ui-ux" },
    { name: "Web Dev", href: "/web-dev" },
    { name: "Logo Design", href: "/logo-design" },
    { name: "Let's Talk", href: "/lets-talk" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md py-2 backdrop-blur-sm bg-opacity-90"
          : "bg-[#F1F1F1] py-4"
        }`}
    >
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-md focus:z-50 focus:text-indigo-600"
      >
        Skip to content
      </a>

      <div className="mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 max-w-8xl w-full">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <a
            href="/"
            className="text-xl font-bold transition-all duration-300 text-[#6B6B6B] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:rounded-md"
            onClick={() => handleLinkClick("/")}
          >
            Nishant<span className="text-indigo-600">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <button
                  className="font-medium text-base lg:text-lg text-[#6B6B6B] transition-all focus:outline-none"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                  {/* Underline hover effect */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6B6B6B] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>


          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none p-2 -mr-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                  }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0 w-0" : "w-5"
                  }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
                  }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
            }`}
        >
          <ul className="flex flex-col space-y-3">
  {links.map((link) => (
    <li key={link.name} className="relative group">
      <button
        className="font-medium text-base text-[#6B6B6B] transition-all focus:outline-none"
        onClick={() => handleLinkClick(link.href)}
      >
        {link.name}
      </button>
    </li>
  ))}
</ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
