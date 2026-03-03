'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import type { Tool } from '@/types';

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  relatedTools?: Tool[];
  hideIframeNav?: boolean;
  iframeRef?: React.RefObject<HTMLIFrameElement>;
}

/**
 * ToolLayout - Consistent wrapper for all tool pages
 * 
 * Provides:
 * - Breadcrumb navigation
 * - Tool header with icon and badges
 * - Workspace area for tool content
 * - Related tools section
 * - SEO content section
 * - Proper theme syncing with iframes
 */
export default function ToolLayout({
  tool,
  children,
  relatedTools = [],
  hideIframeNav = true,
  iframeRef,
}: ToolLayoutProps) {
  const { currentTheme } = useTheme();
  const workspaceRef = useRef<HTMLDivElement>(null);

  // Sync theme with iframe content
  useEffect(() => {
    if (!iframeRef?.current || !hideIframeNav) return;

    const iframe = iframeRef.current;
    
    const syncThemeToIframe = () => {
      if (!iframe.contentWindow) return;
      
      // Send theme via postMessage
      iframe.contentWindow.postMessage(
        {
          type: 'ABETWORKS_THEME_UPDATE',
          theme: currentTheme,
          timestamp: Date.now(),
        },
        window.location.origin
      );

      // Also inject CSS to hide navbar/footer in iframe
      const styleId = 'abetworks-iframe-styles';
      const iframeDoc = iframe.contentDocument;
      
      if (iframeDoc && !iframeDoc.getElementById(styleId)) {
        const style = iframeDoc.createElement('style');
        style.id = styleId;
        style.textContent = `
          /* Hide navbar and footer in embedded tools */
          .navbar, .footer, .abetworks-social-footer {
            display: none !important;
          }
          
          /* Remove top margin from main content */
          .main-content {
            padding-top: 16px !important;
          }
          
          /* Adjust breadcrumb for embedded context */
          .sitegpt-breadcrumb {
            display: none !important;
          }
          
          /* Make tool workspace fill container */
          .tool-workspace {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            background: transparent !important;
          }
        `;
        iframeDoc.head.appendChild(style);
      }
    };

    // Sync on load
    iframe.addEventListener('load', syncThemeToIframe);
    
    // Initial sync with delay
    const timer = setTimeout(syncThemeToIframe, 500);

    return () => {
      iframe.removeEventListener('load', syncThemeToIframe);
      clearTimeout(timer);
    };
  }, [currentTheme, iframeRef, hideIframeNav]);

  // Listen for messages from iframe
  useEffect(() => {
    if (!hideIframeNav) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      
      if (event.data?.type === 'ABETWORKS_THEME_REQUEST') {
        // Iframe is requesting current theme
        if (iframeRef?.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            {
              type: 'ABETWORKS_THEME_UPDATE',
              theme: currentTheme,
              timestamp: Date.now(),
            },
            window.location.origin
          );
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [currentTheme, iframeRef, hideIframeNav]);

  return (
    <div className="animate-fade-in">
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '1400px' }}>
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: 'var(--muted-foreground)' }}>
            Home
          </Link>
          <span className="breadcrumb-separator" style={{ color: 'var(--border)' }}>
            /
          </span>
          <Link href="/tools" style={{ color: 'var(--muted-foreground)' }}>
            Tools
          </Link>
          <span className="breadcrumb-separator" style={{ color: 'var(--border)' }}>
            /
          </span>
          <span aria-current="page" style={{ color: 'var(--foreground)' }}>
            {tool.title}
          </span>
        </nav>

        {/* Tool Header */}
        <header style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            {/* Tool Icon */}
            <span
              className="tool-icon"
              style={{ fontSize: '3rem', flexShrink: 0 }}
              role="img"
              aria-label={tool.title}
            >
              {tool.icon}
            </span>

            {/* Title and Badges */}
            <div style={{ flex: 1 }}>
              <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 700 }}>
                {tool.title}
              </h1>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {tool.isAI ? (
                  <span className="badge badge-ai" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>🤖</span>
                    <span>AI Powered</span>
                  </span>
                ) : (
                  <span className="badge badge-free" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>✓</span>
                    <span>Free</span>
                  </span>
                )}
                <span
                  className="badge"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--secondary-foreground)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {tool.category}
                </span>
              </div>
            </div>
          </div>

          {/* Tool Description */}
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem', maxWidth: '800px', lineHeight: 1.6 }}>
            {tool.description}
          </p>
        </header>

        {/* Back to Tools Button */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href="/tools"
            className="btn btn-ghost"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>&larr;</span>
            <span>Back to All Tools</span>
          </Link>
        </div>

        {/* Tool Workspace */}
        <div
          ref={workspaceRef}
          className="tool-workspace"
          style={{
            marginBottom: '3rem',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
          }}
        >
          {children}
        </div>

        {/* Related Tools Section */}
        {relatedTools.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>🔗</span>
              <span>Related Tools</span>
            </h2>
            <div className="grid-responsive">
              {relatedTools.map((relatedTool) => (
                <ToolCard key={relatedTool.slug} tool={relatedTool} />
              ))}
            </div>
          </section>
        )}

        {/* SEO Content Section */}
        <article
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            About {tool.title}
          </h2>
          <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
            <p>
              {tool.title} is a free online tool that helps you {tool.description.toLowerCase()}.
              This tool is part of the Abetworks suite of 100+ free tools designed to make your work
              easier and more efficient.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Key Features:</strong>
            </p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>✓ 100% Free - No signup required</li>
              <li>✓ Fast and reliable</li>
              <li>✓ Works directly in your browser</li>
              <li>✓ No installation needed</li>
              <li>✓ Mobile-friendly design</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              Whether you&apos;re a developer, marketer, or business professional, {tool.title} is
              designed to help you get things done quickly and efficiently. Try it now and experience
              the power of free, accessible tools.
            </p>
          </div>
        </article>

        {/* All Tools CTA */}
        <section style={{ textAlign: 'center', padding: '2rem 0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
            Explore More Tools
          </h3>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
            Discover our complete collection of 100+ free tools
          </p>
          <Link href="/tools" className="btn btn-primary">
            Browse All Tools
          </Link>
        </section>
      </div>
    </div>
  );
}

// Import ToolCard dynamically to avoid circular dependency
function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="tool-card"
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
      aria-label={`Open ${tool.title} tool`}
    >
      <div className="tool-card-header">
        <span className="tool-icon" role="img" aria-label={tool.title}>
          {tool.icon}
        </span>
        <h3 className="tool-card-title" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>
          {tool.title}
        </h3>
      </div>

      <p
        className="tool-card-desc"
        style={{
          margin: '1rem 0',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          flexGrow: 1,
          color: 'var(--muted-foreground)',
        }}
      >
        {tool.description}
      </p>

      <div className="tool-card-badges" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {tool.isAI ? (
          <span className="badge badge-ai">
            <span>🤖</span>
            <span>AI Powered</span>
          </span>
        ) : (
          <span className="badge badge-free">
            <span>✓</span>
            <span>Free</span>
          </span>
        )}
      </div>

      <div
        className="tool-card-action"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          fontWeight: 600,
          fontSize: '0.875rem',
          color: 'var(--primary)',
        }}
      >
        <span>Try Tool</span>
        <span style={{ transition: 'transform 0.2s ease' }}>&rarr;</span>
      </div>
    </Link>
  );
}
