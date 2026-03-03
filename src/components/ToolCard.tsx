'use client';

import React from 'react';
import Link from 'next/link';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="tool-card-modern"
      aria-label={`Open ${tool.title} tool`}
    >
      <div className="tool-card-modern-inner">
        {/* Icon */}
        <div className="tool-card-icon-wrapper">
          <span className="tool-card-icon" role="img" aria-label={tool.title}>
            {tool.icon}
          </span>
        </div>

        {/* Content */}
        <div className="tool-card-content">
          <h3 className="tool-card-title">{tool.title}</h3>
          <p className="tool-card-description">{tool.description}</p>

          {/* Badges */}
          <div className="tool-card-badges">
            {tool.isAI ? (
              <span className="tool-badge tool-badge-ai">
                <span>🤖</span>
                <span>AI Powered</span>
              </span>
            ) : (
              <span className="tool-badge tool-badge-free">
                <span>✓</span>
                <span>Free</span>
              </span>
            )}
            {tool.category && tool.category !== 'Most Popular' && (
              <span className="tool-badge tool-badge-category">
                {tool.category}
              </span>
            )}
          </div>

          {/* Action */}
          <div className="tool-card-action">
            <span>Try Tool</span>
            <svg className="action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tool-card-modern {
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }

        .tool-card-modern-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .tool-card-modern:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        }

        .tool-card-modern:hover .action-arrow {
          transform: translateX(4px);
        }

        /* Icon Wrapper */
        .tool-card-icon-wrapper {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border-radius: var(--radius-lg);
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }

        .tool-card-modern:hover .tool-card-icon-wrapper {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          transform: scale(1.05);
        }

        .tool-card-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        /* Content */
        .tool-card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .tool-card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--foreground);
          margin: 0 0 0.75rem 0;
          line-height: 1.4;
        }

        .tool-card-description {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          line-height: 1.6;
          margin: 0 0 1rem 0;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Badges */
        .tool-card-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tool-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 50px;
          border: 1px solid;
          white-space: nowrap;
        }

        .tool-badge-free {
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.3);
        }

        .tool-badge-ai {
          background-color: rgba(124, 58, 237, 0.1);
          color: #7c3aed;
          border-color: rgba(124, 58, 237, 0.3);
        }

        .tool-badge-category {
          background-color: var(--secondary);
          color: var(--secondary-foreground);
          border-color: var(--border);
        }

        /* Action */
        .tool-card-action {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary);
          transition: color 0.2s ease;
        }

        .tool-card-modern:hover .tool-card-action {
          color: var(--accent);
        }

        .action-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }
      `}</style>
    </Link>
  );
}
