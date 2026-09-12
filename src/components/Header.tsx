import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, Instagram } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Patient Care', href: '#patient-care' },
    { label: 'Locations', href: '#locations' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D9]'
          : 'bg-[#FAF8F5] border-b border-[#EAE3D9]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name & Credentials */}
          <a
            href="#hero"
            className="flex flex-col group cursor-pointer text-left"
            id="header-brand"
          >
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#0F1E36] tracking-tight group-hover:text-[#8A4B42] transition-colors">
              {DOCTOR_PROFILE.name}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-medium text-[#735A52] tracking-wide">
                Gynaecologist & Obstetrician
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#B87D70]"></span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-500">
                <MapPin className="w-3 h-3 text-[#B87D70]" />
                Dwarka, New Delhi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#2E3A4E] hover:text-[#8A4B42] transition-colors relative py-1 hover:border-b hover:border-[#8A4B42]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3" id="header-actions">
            <a
              href={DOCTOR_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#7A3644] bg-[#FDF2F4] hover:bg-[#fae2e6] border border-[#E7B8C1] rounded-full transition-colors"
              title="Dr. Nidhi Singh Instagram (@drgynaesingh)"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C13584]" />
              <span className="hidden xl:inline">@drgynaesingh</span>
            </a>

            <a
              href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#0F1E36] bg-[#FAF8F5] border border-[#D5CEC5] hover:border-[#0F1E36] rounded-full transition-colors"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87D70]" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="header-book-appointment-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-full shadow-sm hover:shadow transition cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4A396]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-[#0F1E36] hover:text-[#8A4B42] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#EAE3D9] px-4 pt-3 pb-6 space-y-3 shadow-md animate-fadeIn">
          <div className="flex flex-col space-y-2.5 pb-3 border-b border-[#EAE3D9]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#0F1E36] hover:text-[#8A4B42] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] rounded-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D4A396]" />
              <span>Book An Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
                className="py-2.5 px-3 text-center text-xs font-medium text-[#0F1E36] bg-white border border-[#D5CEC5] rounded-xl flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B87D70]" />
                <span>Call Clinic</span>
              </a>
              <a
                href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Dr. Nidhi Singh, I would like to inquire about an appointment in Dwarka.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 text-center text-xs font-medium text-[#0F1E36] bg-[#E2E8E0] border border-[#8F9D88]/30 rounded-xl flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href={DOCTOR_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 text-center text-xs font-medium text-[#7A3644] bg-[#FDF2F4] border border-[#E7B8C1] rounded-xl flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#C13584]" />
              <span>Follow @drgynaesingh on Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
