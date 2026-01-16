"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#values", label: "Our Values" },
    { href: "#welcome", label: "Welcome" },
    { href: "#therapist", label: "Therapist" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo and Site Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Video Logo - Replace src with your actual video path */}
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if video doesn't load - shows initials
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              >
                <source src="/icon.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="w-full h-full items-center justify-center text-white font-bold text-lg" style={{ display: 'none' }}>
                CC
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                Christ Compassion Network
              </span>
              <span className="text-xs text-gray-600">International</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full hover:from-teal-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full hover:from-teal-600 hover:to-teal-700 transition-all shadow-md text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}