/**
 * Shared Knowledge Base - Bank of Brand Names and Related Services
 * Use this to provide consistent context or lookup data for tools.
 */

const BUSINESS_BANK = {
    "Abetworks": {
        "service": "AI Automation, Custom Websites, CRM Integration, Business Strategy",
        "description": "Enterprise-grade AI solutions and digital transformation. We build AI agents, automated workflows, and high-converting websites.",
        "keywords": ["AI Agents", "Automation", "Lead Generation", "Digital Transformation"]
    },
    "AI Agents": {
        "service": "Custom AI Workforce",
        "description": "Automated agents for lead sourcing, qualification, and multi-channel follow-up.",
        "keywords": ["Automation", "Lead Sourcing", "SDR", "BDR"]
    },
    "Web Automation": {
        "service": "Browser & Workflow Automation",
        "description": "Custom scripts and flows to automate repetitive web tasks, data extraction, and syncing.",
        "keywords": ["Scraping", "API Sync", "Workflow", "Efficiency"]
    },
    "Data Analytics": {
        "service": "Business Intelligence & Insights",
        "description": "Advanced data processing, reporting, and visualization to drive business decisions.",
        "keywords": ["Reporting", "BI", "Dashboards", "Data Mining"]
    },
    "Business Consultancy": {
        "service": "Strategy & Scaling Advice",
        "description": "Expert advice on technical architecture, pricing strategy, and digital growth.",
        "keywords": ["Strategy", "Scaling", "Growth", "Architecture"]
    },
    "SiteGPT": {
        "service": "Custom AI Chatbot Builder",
        "description": "Instantly create AI chatbots trained on your website data.",
        "keywords": ["Chatbots", "Customer Support", "AI Training"]
    },
    "Vercel": {
        "service": "Frontend Cloud & Deployment Platform",
        "description": "The best place to deploy and host modern web applications.",
        "keywords": ["Hosting", "Frontend", "Next.js"]
    },
    "HubSpot": {
        "service": "CRM & Marketing Platform",
        "description": "All-in-one platform for inbound marketing, sales, and service.",
        "keywords": ["CRM", "Marketing", "Sales"]
    },
    "Salesforce": {
        "service": "Enterprise CRM",
        "description": "The world's #1 customer relationship management platform.",
        "keywords": ["CRM", "Enterprise", "Sales Cloud"]
    },
    "OpenRouter": {
        "service": "Unified AI Model API",
        "description": "Access all top AI models (GPT-4, Claude, Gemini) via a single API key.",
        "keywords": ["AI Models", "LLM", "API Gateway"]
    }
};

// Make it globally accessible
if (window.AbetworksTools) {
    window.AbetworksTools.businessBank = BUSINESS_BANK;
} else {
    // If components.js hasn't loaded yet, wait or define global
    window.BUSINESS_BANK = BUSINESS_BANK;
}
