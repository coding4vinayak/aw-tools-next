# Related Tools System Documentation

## Overview

The Related Tools system automatically displays 3-4 similar tools at the bottom of every tool page, helping users discover related functionality and improving cross-tool navigation.

**Status:** ✅ Complete - All 76 tools now have Related Tools sections

---

## System Components

### 1. Mapping File
**Location:** `tools/shared/related-tools-mapping.js`

This file contains the smart grouping of all tools with their related tools. Each tool maps to 3-4 similar tools based on category/use case.

**Structure:**
```javascript
const RELATED_TOOLS_MAPPING = {
  'tool-slug': {
    title: 'Tool Display Name',
    icon: '🔧',
    related: [
      { slug: 'related-tool-1', title: 'Related Tool 1', icon: '🔧', desc: 'Short description' },
      { slug: 'related-tool-2', title: 'Related Tool 2', icon: '🔧', desc: 'Short description' },
      { slug: 'related-tool-3', title: 'Related Tool 3', icon: '🔧', desc: 'Short description' }
    ]
  }
};
```

### 2. Injection Script
**Location:** `inject_related_tools.py`

Python script that automatically injects Related Tools sections into all tool pages.

**Usage:**
```bash
# Preview changes without modifying files
python inject_related_tools.py --dry-run

# Apply changes to all tools
python inject_related_tools.py

# Force re-injection (even if section exists)
python inject_related_tools.py --force
```

---

## Smart Grouping Categories

Tools are intelligently grouped by category and use case:

### QR Code Tools
- qr-code-generator
- bulk-qr-code-generator

### URL Tools
- url-shortener
- bulk-url-shortener
- url-expander
- link-preview-generator

### Color/Image Tools
- color-converter
- website-color-extractor
- image-compressor

### Location/Data Tools
- ip-location-finder
- user-agent-parser
- company-lookup

### Currency/Financial Tools
- currency-converter
- eu-vat-validator
- ifsc-validator

### Calculators
- cpl-calculator
- roas-quick-checker
- chatbot-roi-calculator
- whatsapp-response-time-calculator
- chat-engagement-scorer
- lead-follow-up-gap-finder

### Validators/Checkers
- email-validity-checker
- phone-spam-checker
- fake-lead-probability-checker
- lead-quality-checker
- company-buying-power-checker
- landing-page-grader

### Sitemap Tools (11 tools)
- sitemap-finder-checker
- sitemap-validator
- xml-sitemap-generator
- sitemap-url-extractor
- sitemap-urls-comparison-tool
- sitemap-split-merger-tool
- sitemap-analytics-insights
- sitemap-index-generator
- sitemap-to-robots-txt-generator
- sitemap-frequency-analyzer
- website-url-extractor

### File Converters (11 tools)
- convert-csv-to-markdown
- convert-json-to-markdown
- convert-html-to-markdown
- convert-paste-to-markdown
- convert-webpage-to-markdown
- text-to-pdf-converter
- pdf-carousel-maker
- convert-pdf-to-markdown
- convert-docx-to-markdown
- convert-rtf-to-markdown
- convert-xml-to-markdown
- convert-notion-to-markdown
- convert-google-docs-to-markdown

### AI Tools (25+ tools)
- ai-answer-generator
- ai-faq-generator
- text-to-faq-generator
- website-faq-generator
- csv-to-faq-generator
- json-to-faq-generator
- ai-email-response-generator
- ai-letter-generator
- ai-reply-generator
- ai-prompt-generator
- best-ai-prompt-generator
- ai-prompt-optimizer
- ai-chat-with-your-text-data
- ai-chat-with-your-website-data
- ai-chat-with-your-document-data
- ai-chat-with-your-pdf-document-data
- ai-chat-with-your-word-document-data
- ai-chatbot-conversation-analysis
- ai-chatbot-name-generator
- ai-saas-brand-name-generator
- And more...

### Other Tools
- ai-blog-title-generator
- customer-service-script-generator
- docx-to-faq-generator
- email-signature-generator
- pdf-to-faq-generator
- uuid-generator
- website-to-faq-generator
- website-business-analyzer

---

## HTML Structure

The Related Tools section uses this HTML structure:

```html
<!-- Related Tools Section -->
<section class="related-tools" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
    <h3 style="font-size: 1.35rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-primary);">
        🔗 Related Tools
    </h3>
    <div class="related-tools-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
        <a href="../related-tool/index.html" class="related-tool-card">
            <span class="related-tool-icon">🔧</span>
            <div>
                <span class="related-tool-title">Tool Name</span>
                <span class="related-tool-desc">Short description</span>
            </div>
        </a>
        <!-- More cards... -->
    </div>
</section>

<style>
.related-tool-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent-blue);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.15);
}
</style>
```

---

## Features

### ✅ Visual Design
- Clean card-based layout
- Hover effects with elevation
- Icon + title + description format
- Responsive grid (auto-fit)
- Theme-compatible (uses CSS variables)

### ✅ Smart Grouping
- Related by category (sitemap tools link to sitemap tools)
- Related by use case (calculators link to calculators)
- Cross-category connections where relevant

### ✅ Mobile Responsive
- Grid adapts to screen size
- Cards stack on mobile
- Touch-friendly tap targets

### ✅ SEO Benefits
- Internal linking structure
- Semantic HTML
- Descriptive anchor text

---

## Adding Related Tools to NEW Tools

When creating a new tool, follow these steps:

### Step 1: Add to Mapping File

Edit `tools/shared/related-tools-mapping.js`:

```javascript
'your-new-tool': {
  title: 'Your New Tool',
  icon: '🔧',
  related: [
    { slug: 'existing-tool-1', title: 'Existing Tool 1', icon: '🔧', desc: 'Description' },
    { slug: 'existing-tool-2', title: 'Existing Tool 2', icon: '🔧', desc: 'Description' },
    { slug: 'existing-tool-3', title: 'Existing Tool 3', icon: '🔧', desc: 'Description' }
  ]
},
```

### Step 2: Add Reverse Links

For each related tool you added, also add your new tool to their related list:

```javascript
'existing-tool-1': {
  // ... existing config ...
  related: [
    // ... existing related tools ...
    { slug: 'your-new-tool', title: 'Your New Tool', icon: '🔧', desc: 'Description' }
  ]
},
```

### Step 3: Run Injection Script

```bash
python inject_related_tools.py
```

### Step 4: Verify

Open the new tool page and verify:
- Related Tools section appears before `</main>`
- Links work correctly
- Cards display properly on mobile
- Hover effects work

---

## Best Practices

### DO:
- ✅ Choose 3-4 truly related tools
- ✅ Use descriptive, action-oriented descriptions
- ✅ Keep descriptions under 50 characters
- ✅ Use relevant emoji icons
- ✅ Add reverse links (bidirectional)
- ✅ Group by category first, then use case

### DON'T:
- ❌ Add more than 4 related tools (clutters UI)
- ❌ Add unrelated tools just for links
- ❌ Use generic descriptions like "Useful tool"
- ❌ Forget to add reverse links
- ❌ Use inconsistent icon styles

---

## Troubleshooting

### Related Tools section not appearing

1. Check if tool slug exists in `related-tools-mapping.js`
2. Verify the injection script ran successfully
3. Check browser console for JavaScript errors
4. Ensure `index.html` has valid HTML structure

### Links returning 404

1. Verify the related tool directory exists
2. Check the slug spelling in mapping file
3. Ensure `index.html` exists in the tool directory

### Styling issues

1. Check if `ui-system.css` is loaded
2. Verify CSS variables are defined
3. Test in different browsers

---

## Future Enhancements

Potential improvements for the Related Tools system:

1. **Dynamic Related Tools**: Calculate relatedness based on usage analytics
2. **Personalization**: Show different related tools based on user behavior
3. **A/B Testing**: Test different groupings for engagement
4. **Related Tools API**: Expose related tools data for external use
5. **Admin Dashboard**: UI for managing related tools mappings

---

## Files Reference

| File | Purpose |
|------|---------|
| `tools/shared/related-tools-mapping.js` | Master mapping of all related tools |
| `inject_related_tools.py` | Script to inject Related Tools sections |
| `tools/*/index.html` | Individual tool pages (auto-updated) |
| `tools/shared/ui-system.css` | Base UI styles (theme support) |

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-02-28 | 1.0.0 | Initial implementation - All 76 tools updated |

---

## Support

For issues or questions about the Related Tools system:
- Check this documentation first
- Review the injection script output
- Examine `tools/shared/related-tools-mapping.js` for mapping issues

**Maintained by:** Abetworks Development Team
