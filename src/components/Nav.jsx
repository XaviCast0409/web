import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsOpen(false); // Cierra el menú en móvil
  };

  return (
    <nav className="bg-blue-500 fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold cursor-pointer">
          MyLogo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('home')}>Home</li>
          <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('about')}>About Us</li>
          <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('services')}>Services</li>
          <li className="cursor-pointer hover:text-gray-200" onClick={() => handleScroll('contact')}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 text-white text-center space-y-4 py-4">
          <li className="cursor-pointer" onClick={() => handleScroll('home')}>Home</li>
          <li className="cursor-pointer" onClick={() => handleScroll('about')}>About Us</li>
          <li className="cursor-pointer" onClick={() => handleScroll('services')}>Services</li>
          <li className="cursor-pointer" onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
