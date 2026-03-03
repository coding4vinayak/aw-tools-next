import React from 'react';
import Link from 'next/link';
import { getToolBySlug, getRelatedTools, tools } from '@/lib/tools';
import ToolCard from '@/components/ToolCard';
import type { Tool } from '@/types';

// Generate static params for all tools
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for each tool page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The tool you\'re looking for doesn\'t exist.',
    };
  }

  return {
    title: `${tool.title} - Free ${tool.category} Tool | Abetworks`,
    description: tool.description,
    keywords: [
      tool.title,
      tool.category,
      'free tool',
      'online tool',
      tool.isAI ? 'AI tool' : 'productivity tool',
      'abetworks',
    ],
    openGraph: {
      title: `${tool.title} | Abetworks`,
      description: tool.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.title} | Abetworks`,
      description: tool.description,
    },
  };
}

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tool Not Found</h1>
        <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
          The tool you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/tools" className="btn btn-primary">
          Browse All Tools
        </Link>
      </div>
    );
  }

  const relatedTools = getRelatedTools(tool, 4);
  const toolPath = tool.path;

  return (
    <div className="animate-fade-in">
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '1400px' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/tools">Tools</Link>
          <span className="breadcrumb-separator">/</span>
          <span aria-current="page" style={{ color: 'var(--foreground)' }}>
            {tool.title}
          </span>
        </nav>

        {/* Tool Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span className="tool-icon" style={{ fontSize: '3rem' }} role="img" aria-label={tool.title}>
              {tool.icon}
            </span>
            <div>
              <h1 style={{ margin: 0, fontSize: '2rem' }}>{tool.title}</h1>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
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
                <span className="badge" style={{ background: 'var(--secondary)', color: 'var(--secondary-foreground)', borderColor: 'var(--border)' }}>
                  {tool.category}
                </span>
              </div>
            </div>
          </div>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem', maxWidth: '800px' }}>
            {tool.description}
          </p>
        </div>

        {/* Back to Tools Button */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/tools" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
            <span>&larr;</span>
            <span>Back to All Tools</span>
          </Link>
        </div>

        {/* Tool Workspace - iframe embedding the static HTML tool */}
        <div className="tool-workspace" style={{ marginBottom: '3rem' }}>
          <iframe
            src={toolPath}
            title={`${tool.title} - Tool Workspace`}
            loading="lazy"
            style={{
              width: '100%',
              minHeight: '600px',
              border: 'none',
            }}
          />
        </div>

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
              {tool.title} is a free online tool that helps you {tool.description.toLowerCase()}
              {' '}This tool is part of the Abetworks suite of 100+ free tools designed to make your work easier and more efficient.
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
              Whether you&apos;re a developer, marketer, or business professional, {tool.title} is designed to help you get things done quickly and efficiently. Try it now and experience the power of free, accessible tools.
            </p>
          </div>
        </article>

        {/* Related Tools Section */}
        {relatedTools.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Related Tools
            </h2>
            <div className="grid-responsive">
              {relatedTools.map((relatedTool) => (
                <ToolCard key={relatedTool.slug} tool={relatedTool} />
              ))}
            </div>
          </section>
        )}

        {/* All Tools Link */}
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
