/**
 * WORKFLOW-BASED RECOMMENDATIONS
 * These mappings include tools that form natural workflows:
 * - QR Code workflow: QR Code → Bulk QR → URL Shortener → Link Preview
 * - Color workflow: Color Converter → Website Color Extractor → Color Harmony → Image Compressor
 * - URL workflow: URL Shortener → Bulk URL → URL Expander → Link Preview
 * - Validation workflow: IFSC → EU VAT → Email Validity → Phone Spam
 * - Content workflow: Text to PDF → PDF Carousel → PDF to Markdown
 */

/**
 * Related Tools Mapping for Abetworks Free Tools
 *
 * This file contains the smart grouping of all tools with their related tools.
 * Each tool maps to 3-4 similar tools based on category/use case.
 */

const RELATED_TOOLS_MAPPING = {
  // ==================== QR Code Tools ====================
  'qr-code-generator': {
    title: 'QR Code Generator',
    icon: '📱',
    related: [
      { slug: 'bulk-qr-code-generator', title: 'Bulk QR Code Generator', icon: '📱', desc: 'Generate 1-50 QR codes at once' },
      { slug: 'url-shortener', title: 'URL Shortener', icon: '🔗', desc: 'Shorten URLs for QR codes' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Preview QR code destinations' },
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Optimize QR code images' }
    ]
  },
  'bulk-qr-code-generator': {
    title: 'Bulk QR Code Generator',
    icon: '📱',
    related: [
      { slug: 'qr-code-generator', title: 'QR Code Generator', icon: '📱', desc: 'Create single QR codes' },
      { slug: 'bulk-url-shortener', title: 'Bulk URL Shortener', icon: '🔗', desc: 'Shorten multiple URLs first' },
      { slug: 'url-shortener', title: 'URL Shortener', icon: '🔗', desc: 'Shorten long URLs instantly' },
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Compress QR code images' }
    ]
  },

  // ==================== URL Tools ====================
  'url-shortener': {
    title: 'URL Shortener',
    icon: '🔗',
    related: [
      { slug: 'bulk-url-shortener', title: 'Bulk URL Shortener', icon: '🔗', desc: 'Shorten multiple URLs' },
      { slug: 'url-expander', title: 'URL Expander', icon: '🔗', desc: 'Expand shortened URLs' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Preview link destinations' },
      { slug: 'qr-code-generator', title: 'QR Code Generator', icon: '📱', desc: 'Create QR codes from short URLs' }
    ]
  },
  'bulk-url-shortener': {
    title: 'Bulk URL Shortener',
    icon: '🔗',
    related: [
      { slug: 'url-shortener', title: 'URL Shortener', icon: '🔗', desc: 'Shorten single URLs' },
      { slug: 'bulk-qr-code-generator', title: 'Bulk QR Code Generator', icon: '📱', desc: 'Generate QR codes for short URLs' },
      { slug: 'url-expander', title: 'URL Expander', icon: '🔗', desc: 'Verify shortened URLs' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Preview destination links' }
    ]
  },
  'url-expander': {
    title: 'URL Expander',
    icon: '🔗',
    related: [
      { slug: 'url-shortener', title: 'URL Shortener', icon: '🔗', desc: 'Shorten long URLs' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Preview expanded URLs' },
      { slug: 'ip-location-finder', title: 'IP Location Finder', icon: '🌍', desc: 'Check destination server location' },
      { slug: 'http-header-inspector', title: 'HTTP Header Inspector', icon: '🔎', desc: 'Inspect URL headers' }
    ]
  },
  'link-preview-generator': {
    title: 'Link Preview Generator',
    icon: '🔗',
    related: [
      { slug: 'url-expander', title: 'URL Expander', icon: '🔗', desc: 'Expand shortened URLs' },
      { slug: 'url-shortener', title: 'URL Shortener', icon: '🔗', desc: 'Shorten long URLs' },
      { slug: 'qr-code-generator', title: 'QR Code Generator', icon: '📱', desc: 'Create QR codes from links' },
      { slug: 'meta-tag-extractor', title: 'Meta Tag Extractor', icon: '🔍', desc: 'Extract page meta tags' }
    ]
  },

  // ==================== Color/Image Tools ====================
  'color-converter': {
    title: 'Color Converter',
    icon: '🎨',
    related: [
      { slug: 'website-color-extractor', title: 'Website Color Extractor', icon: '🎨', desc: 'Extract colors from websites' },
      { slug: 'color-harmony-checker', title: 'Color Harmony Checker', icon: '🎨', desc: 'Generate color palettes' },
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Optimize images with colors' },
      { slug: 'email-signature-generator', title: 'Email Signature Generator', icon: '🖊️', desc: 'Design with brand colors' }
    ]
  },
  'website-color-extractor': {
    title: 'Website Color Extractor',
    icon: '🎨',
    related: [
      { slug: 'color-converter', title: 'Color Converter', icon: '🎨', desc: 'Convert color formats' },
      { slug: 'color-harmony-checker', title: 'Color Harmony Checker', icon: '🎨', desc: 'Create harmonious palettes' },
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Optimize website images' },
      { slug: 'meta-tag-extractor', title: 'Meta Tag Extractor', icon: '🔍', desc: 'Extract website meta tags' }
    ]
  },
  'image-compressor': {
    title: 'Image Compressor',
    icon: '🖼️',
    related: [
      { slug: 'color-converter', title: 'Color Converter', icon: '🎨', desc: 'Convert color formats' },
      { slug: 'website-color-extractor', title: 'Website Color Extractor', icon: '🎨', desc: 'Extract website colors' },
      { slug: 'qr-code-generator', title: 'QR Code Generator', icon: '📱', desc: 'Create QR codes' },
      { slug: 'robot-avatar-generator', title: 'Robot Avatar Generator', icon: '🤖', desc: 'Generate avatars' }
    ]
  },
  'color-harmony-checker': {
    title: 'Color Harmony Checker',
    icon: '🎨',
    related: [
      { slug: 'color-converter', title: 'Color Converter', icon: '🎨', desc: 'Convert color formats' },
      { slug: 'website-color-extractor', title: 'Website Color Extractor', icon: '🎨', desc: 'Extract website colors' },
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Optimize images' }
    ]
  },

  // ==================== Location/Data Tools ====================
  'ip-location-finder': {
    title: 'IP Location Finder',
    icon: '🌍',
    related: [
      { slug: 'user-agent-parser', title: 'User Agent Parser', icon: '🖥️', desc: 'Parse browser user agents' },
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' },
      { slug: 'ifsc-validator', title: 'IFSC Validator', icon: '🏦', desc: 'Validate IFSC codes' },
      { slug: 'url-expander', title: 'URL Expander', icon: '🔗', desc: 'Expand shortened URLs' }
    ]
  },
  'user-agent-parser': {
    title: 'User Agent Parser',
    icon: '🖥️',
    related: [
      { slug: 'ip-location-finder', title: 'IP Location Finder', icon: '🌍', desc: 'Find IP geolocation' },
      { slug: 'url-expander', title: 'URL Expander', icon: '🔗', desc: 'Expand shortened URLs' },
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' },
      { slug: 'email-validity-checker', title: 'Email Validity Checker', icon: '📧', desc: 'Verify email addresses' }
    ]
  },
  'company-lookup': {
    title: 'Company Lookup',
    icon: '🏢',
    related: [
      { slug: 'ip-location-finder', title: 'IP Location Finder', icon: '🌍', desc: 'Find IP geolocation' },
      { slug: 'company-buying-power-checker', title: 'Company Buying Power Checker', icon: '💰', desc: 'Check buying power' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' }
    ]
  },

  // ==================== Currency/Financial Tools ====================
  'currency-converter': {
    title: 'Currency Converter',
    icon: '💱',
    related: [
      { slug: 'eu-vat-validator', title: 'EU VAT Validator', icon: '🇪🇺', desc: 'Validate EU VAT numbers' },
      { slug: 'ifsc-validator', title: 'IFSC Validator', icon: '🏦', desc: 'Validate IFSC codes' },
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate cost per lead' },
      { slug: 'roas-quick-checker', title: 'ROAS Quick Checker', icon: '📈', desc: 'Check ROAS quickly' }
    ]
  },
  'eu-vat-validator': {
    title: 'EU VAT Validator',
    icon: '🇪🇺',
    related: [
      { slug: 'ifsc-validator', title: 'IFSC Validator', icon: '🏦', desc: 'Validate IFSC codes' },
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' },
      { slug: 'company-buying-power-checker', title: 'Company Buying Power Checker', icon: '💰', desc: 'Check company budget' },
      { slug: 'currency-converter', title: 'Currency Converter', icon: '💱', desc: 'Convert currencies' }
    ]
  },
  'ifsc-validator': {
    title: 'IFSC Validator',
    icon: '🏦',
    related: [
      { slug: 'eu-vat-validator', title: 'EU VAT Validator', icon: '🇪🇺', desc: 'Validate EU VAT numbers' },
      { slug: 'email-validity-checker', title: 'Email Validity Checker', icon: '📧', desc: 'Verify email addresses' },
      { slug: 'phone-spam-checker', title: 'Phone Spam Checker', icon: '📱', desc: 'Check phone numbers' },
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company details' }
    ]
  },

  // ==================== Calculators ====================
  'cpl-calculator': {
    title: 'CPL Calculator',
    icon: '📊',
    related: [
      { slug: 'roas-quick-checker', title: 'ROAS Quick Checker', icon: '📈', desc: 'Check ROAS quickly' },
      { slug: 'chatbot-roi-calculator', title: 'Chatbot ROI Calculator', icon: '🤖', desc: 'Calculate chatbot ROI' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' },
      { slug: 'fake-lead-probability-checker', title: 'Fake Lead Probability Checker', icon: '⚠️', desc: 'Detect fake leads' }
    ]
  },
  'roas-quick-checker': {
    title: 'ROAS Quick Checker',
    icon: '📈',
    related: [
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate cost per lead' },
      { slug: 'chatbot-roi-calculator', title: 'Chatbot ROI Calculator', icon: '🤖', desc: 'Calculate chatbot ROI' },
      { slug: 'landing-page-grader', title: 'Landing Page Grader', icon: '📝', desc: 'Grade landing pages' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' }
    ]
  },
  'chatbot-roi-calculator': {
    title: 'Chatbot ROI Calculator',
    icon: '🤖',
    related: [
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate cost per lead' },
      { slug: 'roas-quick-checker', title: 'ROAS Quick Checker', icon: '📈', desc: 'Check ROAS quickly' },
      { slug: 'whatsapp-response-time-calculator', title: 'WhatsApp Response Time Calculator', icon: '⏱️', desc: 'Calculate response time' },
      { slug: 'chat-engagement-scorer', title: 'Chat Engagement Scorer', icon: '📊', desc: 'Score chat engagement' }
    ]
  },
  'whatsapp-response-time-calculator': {
    title: 'WhatsApp Response Time Calculator',
    icon: '⏱️',
    related: [
      { slug: 'chat-engagement-scorer', title: 'Chat Engagement Scorer', icon: '📊', desc: 'Score chat engagement' },
      { slug: 'lead-follow-up-gap-finder', title: 'Lead Follow-Up Gap Finder', icon: '📅', desc: 'Find follow-up gaps' },
      { slug: 'chatbot-roi-calculator', title: 'Chatbot ROI Calculator', icon: '🤖', desc: 'Calculate chatbot ROI' }
    ]
  },
  'chat-engagement-scorer': {
    title: 'Chat Engagement Scorer',
    icon: '📊',
    related: [
      { slug: 'whatsapp-response-time-calculator', title: 'WhatsApp Response Time Calculator', icon: '⏱️', desc: 'Calculate response time' },
      { slug: 'lead-follow-up-gap-finder', title: 'Lead Follow-Up Gap Finder', icon: '📅', desc: 'Find follow-up gaps' },
      { slug: 'chatbot-roi-calculator', title: 'Chatbot ROI Calculator', icon: '🤖', desc: 'Calculate chatbot ROI' }
    ]
  },
  'lead-follow-up-gap-finder': {
    title: 'Lead Follow-Up Gap Finder',
    icon: '📅',
    related: [
      { slug: 'chat-engagement-scorer', title: 'Chat Engagement Scorer', icon: '📊', desc: 'Score chat engagement' },
      { slug: 'whatsapp-response-time-calculator', title: 'WhatsApp Response Time Calculator', icon: '⏱️', desc: 'Calculate response time' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' }
    ]
  },

  // ==================== Validators/Checkers ====================
  'email-validity-checker': {
    title: 'Email Validity Checker',
    icon: '📧',
    related: [
      { slug: 'phone-spam-checker', title: 'Phone Spam Checker', icon: '📱', desc: 'Check spam numbers' },
      { slug: 'ifsc-validator', title: 'IFSC Validator', icon: '🏦', desc: 'Validate IFSC codes' },
      { slug: 'fake-lead-probability-checker', title: 'Fake Lead Probability Checker', icon: '⚠️', desc: 'Detect fake leads' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' }
    ]
  },
  'phone-spam-checker': {
    title: 'Phone Spam Checker',
    icon: '📱',
    related: [
      { slug: 'email-validity-checker', title: 'Email Validity Checker', icon: '📧', desc: 'Verify email addresses' },
      { slug: 'ifsc-validator', title: 'IFSC Validator', icon: '🏦', desc: 'Validate IFSC codes' },
      { slug: 'fake-lead-probability-checker', title: 'Fake Lead Probability Checker', icon: '⚠️', desc: 'Detect fake leads' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' }
    ]
  },
  'fake-lead-probability-checker': {
    title: 'Fake Lead Probability Checker',
    icon: '⚠️',
    related: [
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' },
      { slug: 'email-validity-checker', title: 'Email Validity Checker', icon: '📧', desc: 'Verify email addresses' },
      { slug: 'phone-spam-checker', title: 'Phone Spam Checker', icon: '📱', desc: 'Check spam numbers' },
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate cost per lead' }
    ]
  },
  'lead-quality-checker': {
    title: 'Lead Quality Checker',
    icon: '✅',
    related: [
      { slug: 'fake-lead-probability-checker', title: 'Fake Lead Probability Checker', icon: '⚠️', desc: 'Detect fake leads' },
      { slug: 'company-buying-power-checker', title: 'Company Buying Power Checker', icon: '💰', desc: 'Check buying power' },
      { slug: 'lead-follow-up-gap-finder', title: 'Lead Follow-Up Gap Finder', icon: '📅', desc: 'Find follow-up gaps' },
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate cost per lead' }
    ]
  },
  'company-buying-power-checker': {
    title: 'Company Buying Power Checker',
    icon: '💰',
    related: [
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' },
      { slug: 'roas-quick-checker', title: 'ROAS Quick Checker', icon: '📈', desc: 'Check ROAS quickly' }
    ]
  },
  'landing-page-grader': {
    title: 'Landing Page Grader',
    icon: '📝',
    related: [
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' },
      { slug: 'roas-quick-checker', title: 'ROAS Quick Checker', icon: '📈', desc: 'Check ROAS quickly' },
      { slug: 'sitemap-validator', title: 'Sitemap Validator', icon: '🗺️', desc: 'Validate sitemaps' },
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs' }
    ]
  },

  // ==================== Sitemap Tools ====================
  'sitemap-finder-checker': {
    title: 'Sitemap Finder & Checker',
    icon: '🗺️',
    related: [
      { slug: 'sitemap-validator', title: 'Sitemap Validator', icon: '🗺️', desc: 'Validate sitemaps' },
      { slug: 'xml-sitemap-generator', title: 'XML Sitemap Generator', icon: '🗺️', desc: 'Generate XML sitemaps' },
      { slug: 'sitemap-url-extractor', title: 'Sitemap URL Extractor', icon: '🗺️', desc: 'Extract URLs from sitemaps' }
    ]
  },
  'sitemap-validator': {
    title: 'Sitemap Validator',
    icon: '🗺️',
    related: [
      { slug: 'sitemap-finder-checker', title: 'Sitemap Finder & Checker', icon: '🗺️', desc: 'Find sitemaps' },
      { slug: 'sitemap-analytics-insights', title: 'Sitemap Analytics & Insights', icon: '📊', desc: 'Analyze sitemaps' },
      { slug: 'sitemap-to-robots-txt-generator', title: 'Sitemap to Robots.txt Generator', icon: '🗺️', desc: 'Generate robots.txt' }
    ]
  },
  'xml-sitemap-generator': {
    title: 'XML Sitemap Generator',
    icon: '🗺️',
    related: [
      { slug: 'sitemap-finder-checker', title: 'Sitemap Finder & Checker', icon: '🗺️', desc: 'Find sitemaps' },
      { slug: 'sitemap-index-generator', title: 'Sitemap Index Generator', icon: '🗺️', desc: 'Generate sitemap indexes' },
      { slug: 'sitemap-to-robots-txt-generator', title: 'Sitemap to Robots.txt Generator', icon: '🗺️', desc: 'Generate robots.txt' }
    ]
  },
  'sitemap-url-extractor': {
    title: 'Sitemap URL Extractor',
    icon: '🗺️',
    related: [
      { slug: 'website-url-extractor', title: 'Website URL Extractor', icon: '🌐', desc: 'Extract website URLs' },
      { slug: 'sitemap-finder-checker', title: 'Sitemap Finder & Checker', icon: '🗺️', desc: 'Find sitemaps' },
      { slug: 'sitemap-validator', title: 'Sitemap Validator', icon: '🗺️', desc: 'Validate sitemaps' }
    ]
  },
  'sitemap-urls-comparison-tool': {
    title: 'Sitemap URLs Comparison Tool',
    icon: '🗺️',
    related: [
      { slug: 'sitemap-split-merger-tool', title: 'Sitemap Split/Merger Tool', icon: '🗺️', desc: 'Split/merge sitemaps' },
      { slug: 'sitemap-url-extractor', title: 'Sitemap URL Extractor', icon: '🗺️', desc: 'Extract URLs from sitemaps' },
      { slug: 'sitemap-analytics-insights', title: 'Sitemap Analytics & Insights', icon: '📊', desc: 'Analyze sitemaps' }
    ]
  },
  'sitemap-split-merger-tool': {
    title: 'Sitemap Split/Merger Tool',
    icon: '🗺️',
    related: [
      { slug: 'sitemap-urls-comparison-tool', title: 'Sitemap URLs Comparison Tool', icon: '🗺️', desc: 'Compare sitemaps' },
      { slug: 'sitemap-index-generator', title: 'Sitemap Index Generator', icon: '🗺️', desc: 'Generate sitemap indexes' },
      { slug: 'sitemap-url-extractor', title: 'Sitemap URL Extractor', icon: '🗺️', desc: 'Extract URLs from sitemaps' }
    ]
  },
  'sitemap-analytics-insights': {
    title: 'Sitemap Analytics & Insights',
    icon: '📊',
    related: [
      { slug: 'sitemap-validator', title: 'Sitemap Validator', icon: '🗺️', desc: 'Validate sitemaps' },
      { slug: 'sitemap-frequency-analyzer', title: 'Sitemap Frequency Analyzer', icon: '📊', desc: 'Analyze update frequency' },
      { slug: 'sitemap-url-extractor', title: 'Sitemap URL Extractor', icon: '🗺️', desc: 'Extract URLs from sitemaps' }
    ]
  },
  'sitemap-index-generator': {
    title: 'Sitemap Index Generator',
    icon: '🗺️',
    related: [
      { slug: 'xml-sitemap-generator', title: 'XML Sitemap Generator', icon: '🗺️', desc: 'Generate XML sitemaps' },
      { slug: 'sitemap-split-merger-tool', title: 'Sitemap Split/Merger Tool', icon: '🗺️', desc: 'Split/merge sitemaps' },
      { slug: 'sitemap-to-robots-txt-generator', title: 'Sitemap to Robots.txt Generator', icon: '🗺️', desc: 'Generate robots.txt' }
    ]
  },
  'sitemap-to-robots-txt-generator': {
    title: 'Sitemap to Robots.txt Generator',
    icon: '🗺️',
    related: [
      { slug: 'xml-sitemap-generator', title: 'XML Sitemap Generator', icon: '🗺️', desc: 'Generate XML sitemaps' },
      { slug: 'sitemap-index-generator', title: 'Sitemap Index Generator', icon: '🗺️', desc: 'Generate sitemap indexes' },
      { slug: 'sitemap-validator', title: 'Sitemap Validator', icon: '🗺️', desc: 'Validate sitemaps' }
    ]
  },
  'sitemap-frequency-analyzer': {
    title: 'Sitemap Frequency Analyzer',
    icon: '📊',
    related: [
      { slug: 'sitemap-analytics-insights', title: 'Sitemap Analytics & Insights', icon: '📊', desc: 'Analyze sitemaps' },
      { slug: 'sitemap-validator', title: 'Sitemap Validator', icon: '🗺️', desc: 'Validate sitemaps' },
      { slug: 'sitemap-url-extractor', title: 'Sitemap URL Extractor', icon: '🗺️', desc: 'Extract URLs from sitemaps' }
    ]
  },
  'website-url-extractor': {
    title: 'Website URL Extractor',
    icon: '🌐',
    related: [
      { slug: 'sitemap-url-extractor', title: 'Sitemap URL Extractor', icon: '🗺️', desc: 'Extract URLs from sitemaps' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Generate link previews' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' }
    ]
  },

  // ==================== File Converters ====================
  'convert-csv-to-markdown': {
    title: 'Convert CSV to Markdown',
    icon: '📊',
    related: [
      { slug: 'convert-json-to-markdown', title: 'Convert JSON to Markdown', icon: '🧩', desc: 'Convert JSON to Markdown' },
      { slug: 'convert-html-to-markdown', title: 'Convert HTML to Markdown', icon: '🌐', desc: 'Convert HTML to Markdown' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' }
    ]
  },
  'convert-json-to-markdown': {
    title: 'Convert JSON to Markdown',
    icon: '🧩',
    related: [
      { slug: 'convert-csv-to-markdown', title: 'Convert CSV to Markdown', icon: '📊', desc: 'Convert CSV to Markdown' },
      { slug: 'convert-html-to-markdown', title: 'Convert HTML to Markdown', icon: '🌐', desc: 'Convert HTML to Markdown' },
      { slug: 'convert-xml-to-markdown', title: 'Convert XML to Markdown', icon: '📄', desc: 'Convert XML to Markdown' }
    ]
  },
  'convert-html-to-markdown': {
    title: 'Convert HTML to Markdown',
    icon: '🌐',
    related: [
      { slug: 'convert-webpage-to-markdown', title: 'Convert Webpage to Markdown', icon: '🌐', desc: 'Convert webpages to Markdown' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' },
      { slug: 'color-converter', title: 'Color Converter', icon: '🎨', desc: 'Convert color formats' }
    ]
  },
  'convert-paste-to-markdown': {
    title: 'Convert Paste to Markdown',
    icon: '📋',
    related: [
      { slug: 'convert-html-to-markdown', title: 'Convert HTML to Markdown', icon: '🌐', desc: 'Convert HTML to Markdown' },
      { slug: 'convert-csv-to-markdown', title: 'Convert CSV to Markdown', icon: '📊', desc: 'Convert CSV to Markdown' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' }
    ]
  },
  'convert-webpage-to-markdown': {
    title: 'Convert Webpage to Markdown',
    icon: '🌐',
    related: [
      { slug: 'convert-html-to-markdown', title: 'Convert HTML to Markdown', icon: '🌐', desc: 'Convert HTML to Markdown' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Generate link previews' },
      { slug: 'website-url-extractor', title: 'Website URL Extractor', icon: '🌐', desc: 'Extract website URLs' }
    ]
  },
  'text-to-pdf-converter': {
    title: 'Text to PDF Converter',
    icon: '📝',
    related: [
      { slug: 'pdf-carousel-maker', title: 'PDF Carousel Maker', icon: '🎠', desc: 'Create PDF carousels' },
      { slug: 'pdf-to-faq-generator', title: 'PDF to FAQ Generator', icon: '❓', desc: 'Generate FAQs from PDF' },
      { slug: 'convert-pdf-to-markdown', title: 'Convert PDF to Markdown', icon: '📄', desc: 'Convert PDF to Markdown' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' }
    ]
  },
  'pdf-carousel-maker': {
    title: 'PDF Carousel Maker',
    icon: '🎠',
    related: [
      { slug: 'text-to-pdf-converter', title: 'Text to PDF Converter', icon: '📝', desc: 'Convert text to PDF' },
      { slug: 'pdf-to-faq-generator', title: 'PDF to FAQ Generator', icon: '❓', desc: 'Generate FAQs from PDF' },
      { slug: 'email-signature-generator', title: 'Email Signature Generator', icon: '🖊️', desc: 'Design email signatures' },
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Optimize carousel images' }
    ]
  },
  'convert-pdf-to-markdown': {
    title: 'Convert PDF to Markdown',
    icon: '📄',
    related: [
      { slug: 'pdf-to-faq-generator', title: 'PDF to FAQ Generator', icon: '❓', desc: 'Generate FAQs from PDF' },
      { slug: 'text-to-pdf-converter', title: 'Text to PDF Converter', icon: '📝', desc: 'Convert text to PDF' },
      { slug: 'convert-docx-to-markdown', title: 'Convert DOCX to Markdown', icon: '📘', desc: 'Convert DOCX to Markdown' }
    ]
  },
  'convert-docx-to-markdown': {
    title: 'Convert DOCX to Markdown',
    icon: '📘',
    related: [
      { slug: 'convert-pdf-to-markdown', title: 'Convert PDF to Markdown', icon: '📄', desc: 'Convert PDF to Markdown' },
      { slug: 'docx-to-faq-generator', title: 'DOCX to FAQ Generator', icon: '❓', desc: 'Generate FAQs from DOCX' },
      { slug: 'convert-csv-to-markdown', title: 'Convert CSV to Markdown', icon: '📊', desc: 'Convert CSV to Markdown' }
    ]
  },
  'convert-rtf-to-markdown': {
    title: 'Convert RTF to Markdown',
    icon: '📝',
    related: [
      { slug: 'convert-docx-to-markdown', title: 'Convert DOCX to Markdown', icon: '📘', desc: 'Convert DOCX to Markdown' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' }
    ]
  },
  'convert-xml-to-markdown': {
    title: 'Convert XML to Markdown',
    icon: '📄',
    related: [
      { slug: 'convert-json-to-markdown', title: 'Convert JSON to Markdown', icon: '🧩', desc: 'Convert JSON to Markdown' },
      { slug: 'convert-html-to-markdown', title: 'Convert HTML to Markdown', icon: '🌐', desc: 'Convert HTML to Markdown' }
    ]
  },
  'convert-notion-to-markdown': {
    title: 'Convert Notion to Markdown',
    icon: '📓',
    related: [
      { slug: 'convert-google-docs-to-markdown', title: 'Convert Google Docs to Markdown', icon: '📗', desc: 'Convert Google Docs' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' }
    ]
  },
  'convert-google-docs-to-markdown': {
    title: 'Convert Google Docs to Markdown',
    icon: '📗',
    related: [
      { slug: 'convert-notion-to-markdown', title: 'Convert Notion to Markdown', icon: '📓', desc: 'Convert Notion to Markdown' },
      { slug: 'convert-docx-to-markdown', title: 'Convert DOCX to Markdown', icon: '📘', desc: 'Convert DOCX to Markdown' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' }
    ]
  },

  // ==================== AI Tools ====================
  'ai-answer-generator': {
    title: 'AI Answer Generator',
    icon: '🤖',
    related: [
      { slug: 'ai-faq-generator', title: 'AI FAQ Generator', icon: '❓', desc: 'Generate FAQs with AI' },
      { slug: 'ai-email-response-generator', title: 'AI Email Response Generator', icon: '📧', desc: 'Draft email replies' },
      { slug: 'ai-letter-generator', title: 'AI Letter Generator', icon: '✉️', desc: 'Write formal letters' },
      { slug: 'ai-reply-generator', title: 'AI Reply Generator', icon: '💬', desc: 'Generate quick replies' }
    ]
  },
  'ai-faq-generator': {
    title: 'AI FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' },
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs from website' },
      { slug: 'csv-to-faq-generator', title: 'CSV to FAQ Generator', icon: '❓', desc: 'Generate FAQs from CSV' },
      { slug: 'ai-answer-generator', title: 'AI Answer Generator', icon: '🤖', desc: 'Generate AI answers' }
    ]
  },
  'text-to-faq-generator': {
    title: 'Text to FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'ai-faq-generator', title: 'AI FAQ Generator', icon: '❓', desc: 'Generate FAQs with AI' },
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs from website' },
      { slug: 'csv-to-faq-generator', title: 'CSV to FAQ Generator', icon: '❓', desc: 'Generate FAQs from CSV' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' }
    ]
  },
  'website-faq-generator': {
    title: 'Website FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' },
      { slug: 'ai-faq-generator', title: 'AI FAQ Generator', icon: '❓', desc: 'Generate FAQs with AI' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' },
      { slug: 'landing-page-grader', title: 'Landing Page Grader', icon: '📝', desc: 'Grade landing pages' }
    ]
  },
  'ai-email-response-generator': {
    title: 'AI Email Response Generator',
    icon: '📧',
    related: [
      { slug: 'ai-reply-generator', title: 'AI Reply Generator', icon: '💬', desc: 'Generate quick replies' },
      { slug: 'ai-letter-generator', title: 'AI Letter Generator', icon: '✉️', desc: 'Write formal letters' },
      { slug: 'ai-answer-generator', title: 'AI Answer Generator', icon: '🤖', desc: 'Generate AI answers' },
      { slug: 'email-signature-generator', title: 'Email Signature Generator', icon: '🖊️', desc: 'Design email signatures' }
    ]
  },
  'ai-letter-generator': {
    title: 'AI Letter Generator',
    icon: '✉️',
    related: [
      { slug: 'ai-email-response-generator', title: 'AI Email Response Generator', icon: '📧', desc: 'Draft email replies' },
      { slug: 'ai-reply-generator', title: 'AI Reply Generator', icon: '💬', desc: 'Generate quick replies' },
      { slug: 'ai-answer-generator', title: 'AI Answer Generator', icon: '🤖', desc: 'Generate AI answers' },
      { slug: 'email-signature-generator', title: 'Email Signature Generator', icon: '🖊️', desc: 'Design email signatures' }
    ]
  },
  'ai-reply-generator': {
    title: 'AI Reply Generator',
    icon: '💬',
    related: [
      { slug: 'ai-email-response-generator', title: 'AI Email Response Generator', icon: '📧', desc: 'Draft email replies' },
      { slug: 'ai-letter-generator', title: 'AI Letter Generator', icon: '✉️', desc: 'Write formal letters' },
      { slug: 'ai-answer-generator', title: 'AI Answer Generator', icon: '🤖', desc: 'Generate AI answers' }
    ]
  },
  'best-ai-prompt-generator': {
    title: 'Best AI Prompt Generator',
    icon: '✨',
    related: [
      { slug: 'ai-prompt-optimizer', title: 'AI Prompt Optimizer', icon: '✨', desc: 'Optimize AI prompts' },
      { slug: 'ai-chatbot-name-generator', title: 'AI Chatbot Name Generator', icon: '🤖', desc: 'Generate chatbot names' },
      { slug: 'ai-saas-brand-name-generator', title: 'AI SaaS Brand Name Generator', icon: '🚀', desc: 'Generate SaaS names' }
    ]
  },
  'ai-prompt-optimizer': {
    title: 'AI Prompt Optimizer',
    icon: '✨',
    related: [
      { slug: 'best-ai-prompt-generator', title: 'Best AI Prompt Generator', icon: '✨', desc: 'Generate best prompts' },
      { slug: 'ai-chatbot-conversation-analysis', title: 'AI Chatbot Conversation Analysis', icon: '📊', desc: 'Analyze chatbot chats' }
    ]
  },
  'ai-chatbot-name-generator': {
    title: 'AI Chatbot Name Generator',
    icon: '🤖',
    related: [
      { slug: 'best-ai-prompt-generator', title: 'Best AI Prompt Generator', icon: '✨', desc: 'Generate best prompts' },
      { slug: 'ai-saas-brand-name-generator', title: 'AI SaaS Brand Name Generator', icon: '🚀', desc: 'Generate SaaS names' }
    ]
  },
  'ai-saas-brand-name-generator': {
    title: 'AI SaaS Brand Name Generator',
    icon: '🚀',
    related: [
      { slug: 'ai-chatbot-name-generator', title: 'AI Chatbot Name Generator', icon: '🤖', desc: 'Generate chatbot names' },
      { slug: 'best-ai-prompt-generator', title: 'Best AI Prompt Generator', icon: '✨', desc: 'Generate best prompts' },
      { slug: 'email-signature-generator', title: 'Email Signature Generator', icon: '🖊️', desc: 'Design email signatures' }
    ]
  },
  'ai-blog-title-generator': {
    title: 'AI Blog Title Generator',
    icon: '✍️',
    related: [
      { slug: 'ai-faq-generator', title: 'AI FAQ Generator', icon: '❓', desc: 'Generate FAQs with AI' },
      { slug: 'ai-answer-generator', title: 'AI Answer Generator', icon: '🤖', desc: 'Generate AI answers' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' }
    ]
  },
  'customer-service-script-generator': {
    title: 'Customer Service Script Generator',
    icon: '📞',
    related: [
      { slug: 'ai-email-response-generator', title: 'AI Email Response Generator', icon: '📧', desc: 'Draft email replies' },
      { slug: 'ai-reply-generator', title: 'AI Reply Generator', icon: '💬', desc: 'Generate quick replies' },
      { slug: 'ai-letter-generator', title: 'AI Letter Generator', icon: '✉️', desc: 'Write formal letters' }
    ]
  },
  'email-signature-generator': {
    title: 'Email Signature Generator',
    icon: '🖊️',
    related: [
      { slug: 'ai-email-response-generator', title: 'AI Email Response Generator', icon: '📧', desc: 'Draft email replies' },
      { slug: 'color-converter', title: 'Color Converter', icon: '🎨', desc: 'Convert color formats' },
      { slug: 'pdf-carousel-maker', title: 'PDF Carousel Maker', icon: '🎠', desc: 'Create PDF carousels' }
    ]
  },
  'pdf-to-faq-generator': {
    title: 'PDF to FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'convert-pdf-to-markdown', title: 'Convert PDF to Markdown', icon: '📄', desc: 'Convert PDF to Markdown' },
      { slug: 'text-to-pdf-converter', title: 'Text to PDF Converter', icon: '📝', desc: 'Convert text to PDF' },
      { slug: 'ai-faq-generator', title: 'AI FAQ Generator', icon: '❓', desc: 'Generate FAQs with AI' }
    ]
  },
  'uuid-generator': {
    title: 'UUID Generator',
    icon: '🔑',
    related: [
      { slug: 'qr-code-generator', title: 'QR Code Generator', icon: '📱', desc: 'Create custom QR codes' },
      { slug: 'url-shortener', title: 'URL Shortener', icon: '🔗', desc: 'Shorten long URLs' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert text to Markdown' }
    ]
  },
  'website-business-analyzer': {
    title: 'Website Business Analyzer',
    icon: '📊',
    related: [
      { slug: 'landing-page-grader', title: 'Landing Page Grader', icon: '📝', desc: 'Grade landing pages' },
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs from website' },
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' }
    ]
  },

  // ==================== Analytics Tools ====================
  'wikipedia-popularity-checker': {
    title: 'Wikipedia Popularity Checker',
    icon: '📄',
    related: [
      { slug: 'topic-trend-analyzer', title: 'Topic Trend Analyzer', icon: '📈', desc: 'Analyze search trends' },
      { slug: 'app-store-analyzer', title: 'App Store Analyzer', icon: '📱', desc: 'Analyze iOS apps' },
      { slug: 'competitor-app-tracker', title: 'Competitor App Tracker', icon: '📊', desc: 'Track competitor apps' }
    ]
  },
  'app-store-analyzer': {
    title: 'App Store Analyzer',
    icon: '📱',
    related: [
      { slug: 'competitor-app-tracker', title: 'Competitor App Tracker', icon: '📊', desc: 'Track competitor apps' },
      { slug: 'wikipedia-popularity-checker', title: 'Wikipedia Popularity Checker', icon: '📄', desc: 'Check Wikipedia popularity' }
    ]
  },
  'topic-trend-analyzer': {
    title: 'Topic Trend Analyzer',
    icon: '📈',
    related: [
      { slug: 'wikipedia-popularity-checker', title: 'Wikipedia Popularity Checker', icon: '📄', desc: 'Check Wikipedia popularity' },
      { slug: 'competitor-app-tracker', title: 'Competitor App Tracker', icon: '📊', desc: 'Track competitor apps' }
    ]
  },
  'competitor-app-tracker': {
    title: 'Competitor App Tracker',
    icon: '📊',
    related: [
      { slug: 'app-store-analyzer', title: 'App Store Analyzer', icon: '📱', desc: 'Analyze iOS apps' },
      { slug: 'topic-trend-analyzer', title: 'Topic Trend Analyzer', icon: '📈', desc: 'Analyze search trends' }
    ]
  },

  // ==================== Other Tools ====================
  'what-is-my-ip': {
    title: 'What Is My IP',
    icon: '🌐',
    related: [
      { slug: 'ip-location-finder', title: 'IP Location Finder', icon: '🌍', desc: 'Find IP geolocation' },
      { slug: 'browser-detector', title: 'Browser Detector', icon: '🖥️', desc: 'Detect browser info' },
      { slug: 'network-diagnostics', title: 'Network Diagnostics', icon: '📡', desc: 'Test network connection' }
    ]
  },
  'browser-detector': {
    title: 'Browser Detector',
    icon: '🖥️',
    related: [
      { slug: 'user-agent-parser', title: 'User Agent Parser', icon: '🖥️', desc: 'Parse user agents' },
      { slug: 'what-is-my-ip', title: 'What Is My IP', icon: '🌐', desc: 'Find your IP' },
      { slug: 'network-diagnostics', title: 'Network Diagnostics', icon: '📡', desc: 'Test network' }
    ]
  },
  'network-diagnostics': {
    title: 'Network Diagnostics',
    icon: '📡',
    related: [
      { slug: 'http-header-inspector', title: 'HTTP Header Inspector', icon: '🔎', desc: 'Inspect HTTP headers' },
      { slug: 'what-is-my-ip', title: 'What Is My IP', icon: '🌐', desc: 'Find your IP' },
      { slug: 'ip-location-finder', title: 'IP Location Finder', icon: '🌍', desc: 'Find IP location' }
    ]
  },
  'http-header-inspector': {
    title: 'HTTP Header Inspector',
    icon: '🔎',
    related: [
      { slug: 'meta-tag-extractor', title: 'Meta Tag Extractor', icon: '🔍', desc: 'Extract meta tags' },
      { slug: 'network-diagnostics', title: 'Network Diagnostics', icon: '📡', desc: 'Test network' },
      { slug: 'url-expander', title: 'URL Expander', icon: '🔗', desc: 'Expand URLs' }
    ]
  },
  'robot-avatar-generator': {
    title: 'Robot Avatar Generator',
    icon: '🤖',
    related: [
      { slug: 'image-compressor', title: 'Image Compressor', icon: '🖼️', desc: 'Compress images' },
      { slug: 'ai-chatbot-name-generator', title: 'AI Chatbot Name Generator', icon: '🤖', desc: 'Generate chatbot names' }
    ]
  },
  'bulk-uuid-generator': {
    title: 'Bulk UUID Generator',
    icon: '🆔',
    related: [
      { slug: 'uuid-generator', title: 'UUID Generator', icon: '🔑', desc: 'Generate single UUID' },
      { slug: 'bulk-qr-code-generator', title: 'Bulk QR Code Generator', icon: '📱', desc: 'Generate multiple QR codes' }
    ]
  },
  'historical-currency-converter': {
    title: 'Historical Currency Converter',
    icon: '📅',
    related: [
      { slug: 'currency-converter', title: 'Currency Converter', icon: '💱', desc: 'Convert currencies' },
      { slug: 'currency-trend-analyzer', title: 'Currency Trend Analyzer', icon: '📈', desc: 'Analyze currency trends' }
    ]
  },
  'currency-trend-analyzer': {
    title: 'Currency Trend Analyzer',
    icon: '📈',
    related: [
      { slug: 'currency-converter', title: 'Currency Converter', icon: '💱', desc: 'Convert currencies' },
      { slug: 'historical-currency-converter', title: 'Historical Currency Converter', icon: '📅', desc: 'Historical rates' }
    ]
  },
  'math-equation-solver': {
    title: 'Math Equation Solver',
    icon: '🧮',
    related: [
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate CPL' },
      { slug: 'roas-quick-checker', title: 'ROAS Quick Checker', icon: '📈', desc: 'Check ROAS' }
    ]
  },
  'meta-tag-extractor': {
    title: 'Meta Tag Extractor',
    icon: '🔍',
    related: [
      { slug: 'website-screenshot-tool', title: 'Website Screenshot Tool', icon: '📸', desc: 'Capture website screenshots' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Generate link previews' },
      { slug: 'http-header-inspector', title: 'HTTP Header Inspector', icon: '🔎', desc: 'Inspect HTTP headers' }
    ]
  },
  'website-screenshot-tool': {
    title: 'Website Screenshot Tool',
    icon: '📸',
    related: [
      { slug: 'meta-tag-extractor', title: 'Meta Tag Extractor', icon: '🔍', desc: 'Extract meta tags' },
      { slug: 'link-preview-generator', title: 'Link Preview Generator', icon: '🔗', desc: 'Generate link previews' }
    ]
  },
  'wordpress-content-extractor': {
    title: 'WordPress Content Extractor',
    icon: '📝',
    related: [
      { slug: 'website-url-extractor', title: 'Website URL Extractor', icon: '🌐', desc: 'Extract URLs' },
      { slug: 'list-data-extractor', title: 'List Data Extractor', icon: '📋', desc: 'Extract list data' }
    ]
  },
  'list-data-extractor': {
    title: 'List Data Extractor',
    icon: '📋',
    related: [
      { slug: 'convert-csv-to-markdown', title: 'Convert CSV to Markdown', icon: '📊', desc: 'CSV to Markdown' },
      { slug: 'wordpress-content-extractor', title: 'WordPress Content Extractor', icon: '📝', desc: 'Extract WordPress content' }
    ]
  },
  'wikipedia-content-extractor': {
    title: 'Wikipedia Content Extractor',
    icon: '📖',
    related: [
      { slug: 'wikipedia-popularity-checker', title: 'Wikipedia Popularity Checker', icon: '📄', desc: 'Check popularity' },
      { slug: 'website-url-extractor', title: 'Website URL Extractor', icon: '🌐', desc: 'Extract URLs' }
    ]
  },
  'b2b-lead-finder': {
    title: 'B2B Lead Finder',
    icon: '💼',
    related: [
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' },
      { slug: 'lead-quality-checker', title: 'Lead Quality Checker', icon: '✅', desc: 'Score lead quality' }
    ]
  },
  'university-finder': {
    title: 'University Finder',
    icon: '🎓',
    related: [
      { slug: 'b2b-lead-finder', title: 'B2B Lead Finder', icon: '💼', desc: 'Find B2B leads' },
      { slug: 'company-lookup', title: 'Company Lookup', icon: '🏢', desc: 'Lookup company info' }
    ]
  },
  'market-demographics-analyzer': {
    title: 'Market Demographics Analyzer',
    icon: '📊',
    related: [
      { slug: 'company-buying-power-checker', title: 'Company Buying Power Checker', icon: '💰', desc: 'Check buying power' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' }
    ]
  },
  'book-citation-generator': {
    title: 'Book Citation Generator',
    icon: '📚',
    related: [
      { slug: 'wikipedia-content-extractor', title: 'Wikipedia Content Extractor', icon: '📖', desc: 'Extract Wikipedia content' },
      { slug: 'convert-paste-to-markdown', title: 'Convert Paste to Markdown', icon: '📋', desc: 'Convert to Markdown' }
    ]
  },
  'content-safety-checker': {
    title: 'Content Safety Checker',
    icon: '🛡️',
    related: [
      { slug: 'email-validity-checker', title: 'Email Validity Checker', icon: '📧', desc: 'Verify emails' },
      { slug: 'phone-spam-checker', title: 'Phone Spam Checker', icon: '📱', desc: 'Check phone numbers' }
    ]
  },
  'carbon-footprint-calculator': {
    title: 'Carbon Footprint Calculator',
    icon: '🌍',
    related: [
      { slug: 'cpl-calculator', title: 'CPL Calculator', icon: '📊', desc: 'Calculate CPL' },
      { slug: 'chatbot-roi-calculator', title: 'Chatbot ROI Calculator', icon: '🤖', desc: 'Calculate ROI' }
    ]
  },
  'csv-to-faq-generator': {
    title: 'CSV to FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'json-to-faq-generator', title: 'JSON to FAQ Generator', icon: '❓', desc: 'Generate FAQs from JSON' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' },
      { slug: 'convert-csv-to-markdown', title: 'Convert CSV to Markdown', icon: '📊', desc: 'CSV to Markdown' }
    ]
  },
  'json-to-faq-generator': {
    title: 'JSON to FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'csv-to-faq-generator', title: 'CSV to FAQ Generator', icon: '❓', desc: 'Generate FAQs from CSV' },
      { slug: 'convert-json-to-markdown', title: 'Convert JSON to Markdown', icon: '🧩', desc: 'JSON to Markdown' }
    ]
  },
  'docx-to-faq-generator': {
    title: 'DOCX to FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'convert-docx-to-markdown', title: 'Convert DOCX to Markdown', icon: '📘', desc: 'Convert DOCX' },
      { slug: 'pdf-to-faq-generator', title: 'PDF to FAQ Generator', icon: '❓', desc: 'Generate FAQs from PDF' },
      { slug: 'ai-faq-generator', title: 'AI FAQ Generator', icon: '❓', desc: 'Generate FAQs with AI' }
    ]
  },
  'ai-chat-with-your-text-data': {
    title: 'AI Chat with Your Text Data',
    icon: '💬',
    related: [
      { slug: 'ai-chat-with-your-website-data', title: 'AI Chat with Your Website Data', icon: '💬', desc: 'Chat with website data' },
      { slug: 'ai-chat-with-your-document-data', title: 'AI Chat with Your Document Data', icon: '💬', desc: 'Chat with documents' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' }
    ]
  },
  'ai-chat-with-your-website-data': {
    title: 'AI Chat with Your Website Data',
    icon: '💬',
    related: [
      { slug: 'ai-chat-with-your-text-data', title: 'AI Chat with Your Text Data', icon: '💬', desc: 'Chat with text data' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' },
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs from website' }
    ]
  },
  'ai-chat-with-your-document-data': {
    title: 'AI Chat with Your Document Data',
    icon: '💬',
    related: [
      { slug: 'ai-chat-with-your-pdf-document-data', title: 'AI Chat with Your PDF Document Data', icon: '💬', desc: 'Chat with PDF' },
      { slug: 'ai-chat-with-your-word-document-data', title: 'AI Chat with Your Word Document Data', icon: '💬', desc: 'Chat with Word docs' },
      { slug: 'convert-docx-to-markdown', title: 'Convert DOCX to Markdown', icon: '📘', desc: 'Convert DOCX' }
    ]
  },
  'ai-chat-with-your-pdf-document-data': {
    title: 'AI Chat with Your PDF Document Data',
    icon: '💬',
    related: [
      { slug: 'ai-chat-with-your-document-data', title: 'AI Chat with Your Document Data', icon: '💬', desc: 'Chat with documents' },
      { slug: 'convert-pdf-to-markdown', title: 'Convert PDF to Markdown', icon: '📄', desc: 'Convert PDF' },
      { slug: 'pdf-to-faq-generator', title: 'PDF to FAQ Generator', icon: '❓', desc: 'Generate FAQs from PDF' }
    ]
  },
  'ai-chat-with-your-word-document-data': {
    title: 'AI Chat with Your Word Document Data',
    icon: '💬',
    related: [
      { slug: 'ai-chat-with-your-document-data', title: 'AI Chat with Your Document Data', icon: '💬', desc: 'Chat with documents' },
      { slug: 'convert-docx-to-markdown', title: 'Convert DOCX to Markdown', icon: '📘', desc: 'Convert DOCX' },
      { slug: 'docx-to-faq-generator', title: 'DOCX to FAQ Generator', icon: '❓', desc: 'Generate FAQs from DOCX' }
    ]
  },
  'ai-chatbot-conversation-analysis': {
    title: 'AI Chatbot Conversation Analysis',
    icon: '📊',
    related: [
      { slug: 'chat-engagement-scorer', title: 'Chat Engagement Scorer', icon: '📊', desc: 'Score chat engagement' },
      { slug: 'whatsapp-response-time-calculator', title: 'WhatsApp Response Time Calculator', icon: '⏱️', desc: 'Calculate response time' },
      { slug: 'ai-prompt-optimizer', title: 'AI Prompt Optimizer', icon: '✨', desc: 'Optimize AI prompts' }
    ]
  },
  'webpage-to-faq-generator': {
    title: 'Webpage to FAQ Generator',
    icon: '🖥️',
    related: [
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs from website' },
      { slug: 'text-to-faq-generator', title: 'Text to FAQ Generator', icon: '❓', desc: 'Generate FAQs from text' }
    ]
  },
  'html-to-faq-generator': {
    title: 'HTML to FAQ Generator',
    icon: '🌐',
    related: [
      { slug: 'convert-html-to-markdown', title: 'Convert HTML to Markdown', icon: '🌐', desc: 'Convert HTML' },
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs' }
    ]
  },
  'google-docs-to-faq-generator': {
    title: 'Google Docs to FAQ Generator',
    icon: '📗',
    related: [
      { slug: 'convert-google-docs-to-markdown', title: 'Convert Google Docs to Markdown', icon: '📗', desc: 'Convert Google Docs' },
      { slug: 'docx-to-faq-generator', title: 'DOCX to FAQ Generator', icon: '❓', desc: 'Generate FAQs from DOCX' }
    ]
  },
  'notion-to-faq-generator': {
    title: 'Notion to FAQ Generator',
    icon: '📓',
    related: [
      { slug: 'convert-notion-to-markdown', title: 'Convert Notion to Markdown', icon: '📓', desc: 'Convert Notion' },
      { slug: 'docx-to-faq-generator', title: 'DOCX to FAQ Generator', icon: '❓', desc: 'Generate FAQs from DOCX' }
    ]
  },
  'website-to-faq-generator': {
    title: 'Website to FAQ Generator',
    icon: '❓',
    related: [
      { slug: 'website-faq-generator', title: 'Website FAQ Generator', icon: '❓', desc: 'Generate FAQs from website' },
      { slug: 'ai-chat-with-your-website-data', title: 'AI Chat with Your Website Data', icon: '💬', desc: 'Chat with website data' },
      { slug: 'website-business-analyzer', title: 'Website Business Analyzer', icon: '📊', desc: 'Analyze websites' }
    ]
  }
};
