'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentTheme, toggleTheme, getNextTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'shadow-lg' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            {/* Logo */}
            <Link href="/" className="logo-text" style={{ textDecoration: 'none' }} aria-label="Abetworks Home">
              <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                Abetworks
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link href="/tools" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem' }}>
                Tools
              </Link>
              <a
                href="https://abetworks.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem' }}
              >
                Website
              </a>
              <a
                href="https://tripetto.app/run/BKR1M1PACY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
              >
                Contact
              </a>
              <button
                className="theme-toggle-btn"
                onClick={handleThemeToggle}
                title={`Switch to ${getNextTheme().name} theme`}
                aria-label="Toggle theme"
                type="button"
              >
                {currentTheme.icon}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: 'var(--foreground)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--muted)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: '24px', height: '24px' }}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link
            href="/tools"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              padding: '0.75rem 1rem',
              color: 'var(--foreground)',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md)',
              fontWeight: 500,
            }}
          >
            Tools
          </Link>
          <a
            href="https://abetworks.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1rem',
              color: 'var(--foreground)',
              textDecoration: 'none',
              borderRadius: 'var(--radius-md)',
              fontWeight: 500,
            }}
          >
            Website
          </a>
          <a
            href="https://tripetto.app/run/BKR1M1PACY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ margin: '0.5rem 1rem' }}
          >
            Contact
          </a>
          <button
            onClick={handleThemeToggle}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              background: 'var(--secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--foreground)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{currentTheme.icon}</span>
            <span>{currentTheme.name} Theme</span>
          </button>
        </div>
      </div>
    </>
  );
}
