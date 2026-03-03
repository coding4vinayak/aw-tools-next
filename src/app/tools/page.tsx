'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import ToolCard from '@/components/ToolCard';
import { tools, categories, getToolsByCategory, getAITools } from '@/lib/tools';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const aiTools = getAITools();

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.title.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Get popular tools for quick links
  const popularTools = tools.filter((t) => t.isPopular).slice(0, 6);

  return (
    <div className="animate-fade-in">
      {/* Hero Section - 99tools.net inspired */}
      <section className="hero-section-modern">
        <div className="hero-content">
          <h1 className="hero-title-modern">
            <span className="gradient-text">100+ Free AI & SEO Tools</span>
          </h1>
          <p className="hero-subtitle-modern">
            A comprehensive suite of free AI, SEO, and productivity tools designed for SaaS, lead generation, and business automation. No signup required.
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg
                className="search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search for tools (e.g., QR code, UUID, AI writer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search tools"
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Quick Tool Pills */}
          <div className="quick-tools">
            <span className="quick-tools-label">Popular:</span>
            {popularTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="quick-tool-pill"
              >
                {tool.icon} {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="container">
        <div className="category-filter">
          <button
            className={`category-pill ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Tools
          </button>
          {categories.map((category) => {
            const categoryIcons: Record<string, string> = {
              'Most Popular': '🔥',
              'Utility': '🛠️',
              'Calculators': '🧮',
              'Sitemap': '🗺️',
              'Converters': '🔄',
              'Analytics': '📊',
              'Scraping': '🔍',
              'Business': '🏢',
              'AI Tools': '🤖',
            };
            const toolCount = getToolsByCategory(category).length;
            return (
              <button
                key={category}
                className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span className="pill-icon">{categoryIcons[category]}</span>
                <span className="pill-text">{category}</span>
                <span className="pill-count">{toolCount}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container" style={{ paddingBottom: '4rem' }}>
        {searchQuery || selectedCategory ? (
          <>
            <div className="search-results-header">
              <h2 className="search-results-title">
                {searchQuery
                  ? `Search results for "${searchQuery}"`
                  : `${selectedCategory} Tools`}
              </h2>
              <p className="search-results-count">
                {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredTools.length > 0 ? (
              <div className="grid-responsive">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3 className="no-results-title">No tools found</h3>
                <p className="no-results-text">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                >
                  View All Tools
                </button>
              </div>
            )}
          </>
        ) : (
          /* Category-based view (default) */
          <>
            {categories.map((category) => {
              const categoryTools = getToolsByCategory(category);
              if (categoryTools.length === 0) return null;

              const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              const categoryIcons: Record<string, string> = {
                'Most Popular': '🔥',
                'Utility': '🛠️',
                'Calculators': '🧮',
                'Sitemap': '🗺️',
                'Converters': '🔄',
                'Analytics': '📊',
                'Scraping': '🔍',
                'Business': '🏢',
                'AI Tools': '🤖',
              };

              return (
                <div key={category} id={categorySlug} className="category-section-modern">
                  <div className="category-header-modern">
                    <h2 className="category-title-modern">
                      <span className="category-icon-modern">{categoryIcons[category] || '📦'}</span>
                      <span>{category}</span>
                      <span className="category-count">{categoryTools.length}</span>
                    </h2>
                    <p className="category-description-modern">
                      {getCategoryDescription(category)}
                    </p>
                  </div>

                  <div className="grid-responsive">
                    {categoryTools.map((tool) => (
                      <ToolCard key={tool.slug} tool={tool} />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* AI Tools Section - Highlighted */}
            {aiTools.length > 0 && (
              <div className="ai-tools-section">
                <div className="ai-tools-header">
                  <h2 className="category-title-modern" style={{ justifyContent: 'center' }}>
                    <span className="category-icon-modern">🤖</span>
                    <span>AI Powered Tools</span>
                    <span className="category-count">{aiTools.length}</span>
                  </h2>
                  <p className="category-description-modern" style={{ maxWidth: '600px' }}>
                    Advanced AI tools for content generation, analysis, and automation. Powered by cutting-edge machine learning.
                  </p>
                </div>

                <div className="grid-responsive">
                  {aiTools.slice(0, 8).map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <Link
                    href="#ai-tools"
                    className="btn btn-secondary"
                    style={{ textDecoration: 'none' }}
                  >
                    View All AI Tools ({aiTools.length})
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'Most Popular': 'Our most used tools — fast, reliable, and ready to use instantly.',
    'Utility': 'Practical tools that work instantly — no backend, just results.',
    'Calculators': 'Business and marketing calculators to measure performance and ROI.',
    'Sitemap': 'Complete suite for sitemap management, validation, and optimization.',
    'Converters': 'Convert files between different formats quickly and accurately.',
    'Analytics': 'Powerful analytics tools to track trends and measure performance.',
    'Scraping': 'Extract data from websites, APIs, and various sources.',
    'Business': 'B2B leads, university finder, demographics, and citation tools.',
    'AI Tools': 'Advanced AI tools for content generation, analysis, and automation.',
  };
  return descriptions[category] || 'Useful tools for your everyday needs.';
}
