/**
 * Abetworks Backend API Client
 * Unified API client for all new backend endpoints
 * Unlimited free usage - no LLM required
 */

window.AbetworksAPI = {
    
    /**
     * Compare two URL lists
     * @param {string[]} urls1 - First list of URLs
     * @param {string[]} urls2 - Second list of URLs
     * @returns {Promise<Object>} Comparison results
     */
    async compareSitemaps(urls1, urls2) {
        const response = await fetch('/api/tools/compare-sitemaps', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urls1, urls2 })
        });
        
        if (!response.ok) throw new Error('Comparison failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Comparison failed');
        return result.data;
    },
    
    /**
     * Generate XML sitemap index
     * @param {string[]} sitemapUrls - List of sitemap URLs
     * @returns {Promise<string>} XML sitemap index
     */
    async generateSitemapIndex(sitemapUrls) {
        const response = await fetch('/api/tools/generate-sitemap-index', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sitemap_urls: sitemapUrls })
        });
        
        if (!response.ok) throw new Error('Generation failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Generation failed');
        return result.data;
    },
    
    /**
     * Generate robots.txt from sitemap URLs
     * @param {string[]} sitemapUrls - List of sitemap URLs
     * @returns {Promise<string>} robots.txt content
     */
    async generateRobotsTxt(sitemapUrls) {
        const response = await fetch('/api/tools/generate-robots-txt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sitemap_urls: sitemapUrls })
        });
        
        if (!response.ok) throw new Error('Generation failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Generation failed');
        return result.data;
    },
    
    /**
     * Find sitemap for a website
     * @param {string} url - Website URL
     * @returns {Promise<Object>} Sitemap location
     */
    async findSitemap(url) {
        const response = await fetch('/api/tools/find-sitemap', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        
        if (!response.ok) throw new Error('Search failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Search failed');
        return result.data;
    },
    
    /**
     * Analyze sitemap XML
     * @param {string} xmlContent - Sitemap XML content
     * @returns {Promise<Object>} Sitemap statistics
     */
    async analyzeSitemap(xmlContent) {
        const response = await fetch('/api/tools/analyze-sitemap', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ xml_content: xmlContent })
        });
        
        if (!response.ok) throw new Error('Analysis failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Analysis failed');
        return result.data;
    },
    
    /**
     * Extract URLs from webpage
     * @param {string} url - Webpage URL
     * @param {number} maxUrls - Maximum URLs to extract (default: 100)
     * @returns {Promise<Object>} Extracted URLs
     */
    async extractUrls(url, maxUrls = 100) {
        const response = await fetch('/api/tools/extract-urls', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, max_urls: maxUrls })
        });
        
        if (!response.ok) throw new Error('Extraction failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Extraction failed');
        return result.data;
    },
    
    /**
     * Grade landing page
     * @param {string} url - Landing page URL
     * @returns {Promise<Object>} Grade and score
     */
    async gradeLandingPage(url) {
        const response = await fetch('/api/tools/grade-landing-page', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        
        if (!response.ok) throw new Error('Grading failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Grading failed');
        return result.data;
    },
    
    /**
     * Validate email address
     * @param {string} email - Email to validate
     * @returns {Promise<Object>} Validation result
     */
    async validateEmail(email) {
        const response = await fetch('/api/tools/validate-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        if (!response.ok) throw new Error('Validation failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Validation failed');
        return result.data;
    },
    
    /**
     * Check phone number
     * @param {string} phone - Phone number to check
     * @returns {Promise<Object>} Risk assessment
     */
    async checkPhone(phone) {
        const response = await fetch('/api/tools/check-phone', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });
        
        if (!response.ok) throw new Error('Check failed');
        const result = await response.json();
        
        if (!result.success) throw new Error(result.error || 'Check failed');
        return result.data;
    }
};

// Helper functions for UI
window.AbetworksUI = {
    
    /**
     * Show loading state
     * @param {string} buttonId - Button element ID
     */
    showLoading(buttonId) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.classList.add('loading');
            btn.disabled = true;
        }
    },
    
    /**
     * Hide loading state
     * @param {string} buttonId - Button element ID
     */
    hideLoading(buttonId) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.classList.remove('loading');
            btn.disabled = false;
        }
    },
    
    /**
     * Show result area
     * @param {string} resultAreaId - Result area element ID
     */
    showResult(resultAreaId) {
        const area = document.getElementById(resultAreaId);
        if (area) {
            area.style.display = 'block';
            area.classList.add('active');
        }
    },
    
    /**
     * Hide result area
     * @param {string} resultAreaId - Result area element ID
     */
    hideResult(resultAreaId) {
        const area = document.getElementById(resultAreaId);
        if (area) {
            area.style.display = 'none';
            area.classList.remove('active');
        }
    },
    
    /**
     * Display error message
     * @param {string} message - Error message
     */
    showError(message) {
        alert('Error: ' + message);
    },
    
    /**
     * Copy text to clipboard
     * @param {string} text - Text to copy
     */
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast('Copied to clipboard!');
        } catch (err) {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast('Copied to clipboard!');
        }
    },
    
    /**
     * Show toast notification
     * @param {string} message - Toast message
     * @param {number} duration - Duration in ms (default: 3000)
     */
    showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #2563EB, #3b82f6);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },
    
    /**
     * Download text as file
     * @param {string} content - File content
     * @param {string} filename - Filename
     * @param {string} type - MIME type (default: text/plain)
     */
    downloadFile(content, filename, type = 'text/plain') {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast(`Downloaded ${filename}!`);
    }
};

// Add CSS animations for toast
if (!document.getElementById('abetworks-toast-styles')) {
    const style = document.createElement('style');
    style.id = 'abetworks-toast-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
