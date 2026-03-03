'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div
          style={{
            padding: '3rem 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Brand Section */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                Abetworks
              </span>
            </Link>
            <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              A comprehensive suite of 100+ free AI, SEO, and productivity tools for SaaS, lead generation, and business automation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {/* Social Links */}
              <a
                href="https://twitter.com/abetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'var(--secondary)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--foreground)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/abetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'var(--secondary)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--foreground)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/abetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'var(--secondary)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--foreground)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  All Tools
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools?category=ai"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  AI Tools
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools?category=popular"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Popular Tools
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="https://abetworks.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Main Website
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="https://tripetto.app/run/BKR1M1PACY"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>
              Categories
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools#utility"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Utility Tools
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools#calculators"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Calculators
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools#sitemap"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Sitemap Tools
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools#converters"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Converters
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/tools#analytics"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Analytics Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/privacy"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/terms"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Terms of Service
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link
                  href="/disclaimer"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
            paddingBottom: '2rem',
          }}
        >
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
            © {currentYear} Abetworks. All rights reserved. Built with ❤️ for the community.
          </p>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
            100+ Free AI & SEO Tools • No Signup Required
          </p>
        </div>
      </div>
    </footer>
  );
}
