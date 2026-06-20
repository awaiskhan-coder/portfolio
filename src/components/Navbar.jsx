import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          <span className="text-white">Awais</span>
          <span className="text-blue-500">Dev</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {link}
            </a>
          ))}

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition">
            Resume
          </button>
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col p-6 gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400"
              >
                {link}
              </a>
            ))}

            <button className="bg-blue-600 py-3 rounded-lg">
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;