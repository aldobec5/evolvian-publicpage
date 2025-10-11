import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-semibold text-brand-darkblue">
          Evolvian AI
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-brand-darkblue font-medium items-center">
          <li className="hover:text-brand-orange transition"><a href="#features">Features</a></li>
          <li className="hover:text-brand-orange transition"><a href="#pricing">Pricing</a></li>
          <li className="hover:text-brand-orange transition"><a href="#contact">Contact</a></li>
          <li>
            <a
              href="https://www.evolvianai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Log In
            </a>
          </li>
          <li>
            <a
              href="https://www.evolvianai.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-brand-darkblue hover:text-brand-orange transition"
            >
              Register here
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 pb-4 text-brand-darkblue font-medium">
          <a href="#features" className="block hover:text-brand-orange">Features</a>
          <a href="#pricing" className="block hover:text-brand-orange">Pricing</a>
          <a href="#contact" className="block hover:text-brand-orange">Contact</a>
          <a
            href="https://www.evolvianai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-brand-orange text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-center"
          >
            Log In
          </a>
          <a
            href="https://www.evolvianai.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm underline text-center hover:text-brand-orange"
          >
            Register here
          </a>
        </div>
      )}
    </nav>
  );
}
