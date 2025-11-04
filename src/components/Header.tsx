import logoImage from 'figma:asset/bd99da92dd9f5ac7a180da855b18f1afa56eac0a.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Enterprise', href: '#enterprise' },
    { label: 'Kursus', href: '#kursus' },
    { label: 'Teknologi', href: '#teknologi' },
    { label: 'Tentang', href: '#tentang' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-sm shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="MERISTEM - Where the Future Grows, Technology Leads" className="h-14 w-auto drop-shadow-sm" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700/90 hover:text-green-600 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
              Mulai Belajar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700/90 hover:bg-white/50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 bg-white/40 backdrop-blur-xl rounded-b-2xl -mx-4 px-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700/90 hover:text-green-600 hover:bg-white/50 transition-all duration-200 py-2 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 w-full">
                Mulai Belajar
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
