/**
 * Shared logic for Abetworks Tools
 * Includes multi-theme system with 6 themes
 * Includes Q&A Box component
 */

// ────────────────────────────────────────────────────────────────
// THEME CONFIGURATION
// ────────────────────────────────────────────────────────────────
const THEMES = [
  { id: 'dark', name: 'Dark', icon: '☀️', label: 'Dark (Default)' },
  { id: 'light', name: 'Light', icon: '🌙', label: 'Light' },
  { id: 'ocean', name: 'Ocean', icon: '🌊', label: 'Ocean Blue' },
  { id: 'forest', name: 'Forest', icon: '🌲', label: 'Forest Green' },
  { id: 'sunset', name: 'Sunset', icon: '🌅', label: 'Sunset Orange' },
  { id: 'midnight', name: 'Midnight', icon: '🌙', label: 'Midnight Purple' }
];

const THEME_STORAGE_KEY = 'abet_theme_preference';
const DEFAULT_THEME = 'dark';

// ────────────────────────────────────────────────────────────────
// Q&A BOX COMPONENT
// ────────────────────────────────────────────────────────────────

/**
 * Create Q&A Box HTML
 * @param {string} question - The question text
 * @param {string} answerId - Unique ID for the answer element
 * @param {string} emptyText - Text to show when answer is empty
 * @returns {string} HTML string
 */
function createQABox(question, answerId = 'qaAnswer', emptyText = 'Answer will appear here...') {
  return `
    <div class="qa-container">
      <div class="qa-question">
        <span class="qa-question-icon">❓</span>
        <span>${question}</span>
      </div>
      <div class="qa-answer-wrapper">
        <div id="${answerId}" class="qa-answer qa-answer-empty">${emptyText}</div>
      </div>
      <div class="qa-actions">
        <button class="qa-action-btn" onclick="copyQAAnswer('${answerId}', this)">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <span>Copy</span>
        </button>
        <button class="qa-action-btn" onclick="downloadQAAnswer('${answerId}', 'txt', this)">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          <span>Download TXT</span>
        </button>
        <button class="qa-action-btn" onclick="downloadQAAnswer('${answerId}', 'pdf', this)">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  `;
}

/**
 * Set Q&A Answer text
 * @param {string} answerId - ID of answer element
 * @param {string} answerText - Answer text to display
 */
function setQAAnswer(answerId, answerText) {
  const answerEl = document.getElementById(answerId);
  if (!answerEl) return;
  
  answerEl.textContent = answerText;
  answerEl.classList.remove('qa-answer-empty');
}

/**
 * Append to Q&A Answer (for streaming/chunked responses)
 * @param {string} answerId - ID of answer element
 * @param {string} chunkText - Text chunk to append
 */
function appendToQAAnswer(answerId, chunkText) {
  const answerEl = document.getElementById(answerId);
  if (!answerEl) return;
  
  answerEl.textContent += chunkText;
  answerEl.classList.remove('qa-answer-empty');
  answerEl.scrollTop = answerEl.scrollHeight;
}

/**
 * Copy Q&A Answer to clipboard
 * @param {string} answerId - ID of answer element
 * @param {HTMLElement} button - Button that was clicked
 */
function copyQAAnswer(answerId, button) {
  const answerEl = document.getElementById(answerId);
  if (!answerEl || answerEl.classList.contains('qa-answer-empty')) return;
  
  const text = answerEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Copied!</span>
    `;
    button.classList.add('copied');
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    alert('Failed to copy. Please select and copy manually.');
  });
}

/**
 * Download Q&A Answer as file
 * @param {string} answerId - ID of answer element
 * @param {string} format - 'txt' or 'pdf'
 * @param {HTMLElement} button - Button that was clicked
 */
function downloadQAAnswer(answerId, format, button) {
  const answerEl = document.getElementById(answerId);
  if (!answerEl || answerEl.classList.contains('qa-answer-empty')) return;
  
  const text = answerEl.textContent;
  const originalHTML = button.innerHTML;
  
  if (format === 'txt') {
    // Download as TXT
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `answer_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success state
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Downloaded!</span>
    `;
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
    
  } else if (format === 'pdf') {
    // Download as PDF (using browser's print dialog)
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
      </svg>
      <span>Opening PDF...</span>
    `;
    
    // Create print-friendly window
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Answer - ${new Date().toLocaleString()}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
          h1 { font-size: 18px; margin-bottom: 20px; }
          pre { white-space: pre-wrap; word-wrap: break-word; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <h1>Answer - ${new Date().toLocaleString()}</h1>
        <pre>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(() => window.close(), 500);
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  }
}

/**
 * Clear Q&A Answer
 * @param {string} answerId - ID of answer element
 */
function clearQAAnswer(answerId) {
  const answerEl = document.getElementById(answerId);
  if (!answerEl) return;
  
  answerEl.textContent = '';
  answerEl.classList.add('qa-answer-empty');
}

// Export Q&A functions
window.AbetworksQA = {
  create: createQABox,
  set: setQAAnswer,
  append: appendToQAAnswer,
  copy: copyQAAnswer,
  download: downloadQAAnswer,
  clear: clearQAAnswer
};

// ────────────────────────────────────────────────────────────────
// GENERIC RESULT ACTION FUNCTIONS (Copy/Download for any result area)
// ────────────────────────────────────────────────────────────────

/**
 * Copy result content to clipboard
 * @param {string} elementId - ID of result element
 * @param {HTMLElement} button - Button that was clicked
 */
function copyResult(elementId, button) {
  const el = document.getElementById(elementId);
  if (!el) {
    console.error('Result element not found:', elementId);
    return;
  }

  const text = el.innerText || el.textContent;
  if (!text || text.trim() === '') {
    console.warn('No content to copy');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Copied!</span>
    `;

    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    alert('Failed to copy. Please select and copy manually.');
  });
}

/**
 * Download result content as file
 * @param {string} elementId - ID of result element
 * @param {string} format - 'txt' or 'pdf'
 * @param {HTMLElement} button - Button that was clicked
 */
function downloadResult(elementId, format, button) {
  const el = document.getElementById(elementId);
  if (!el) {
    console.error('Result element not found:', elementId);
    return;
  }

  const text = el.innerText || el.textContent;
  if (!text || text.trim() === '') {
    console.warn('No content to download');
    return;
  }

  const originalHTML = button.innerHTML;

  if (format === 'txt') {
    // Download as TXT
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `result_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show success state
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Downloaded!</span>
    `;
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);

  } else if (format === 'pdf') {
    // Download as PDF (using browser's print dialog)
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
      </svg>
      <span>Opening PDF...</span>
    `;

    // Create print-friendly window
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download PDF');
      button.innerHTML = originalHTML;
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Result - ${new Date().toLocaleString()}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333; }
          h1 { font-size: 18px; margin-bottom: 20px; color: #1a1a1a; }
          pre { white-space: pre-wrap; word-wrap: break-word; font-family: 'Courier New', monospace; font-size: 14px; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <h1>Result - ${new Date().toLocaleString()}</h1>
        <pre>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(() => window.close(), 500);
          };
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  }
}

/**
 * Copy chat conversation history
 * @param {string} chatHistoryId - ID of chat history element
 * @param {HTMLElement} button - Button that was clicked
 */
function copyChatHistory(chatHistoryId, button) {
  const chatHistory = document.getElementById(chatHistoryId);
  if (!chatHistory) {
    console.error('Chat history element not found:', chatHistoryId);
    return;
  }

  const messages = chatHistory.querySelectorAll('.chat-msg');
  if (messages.length === 0) {
    console.warn('No chat messages to copy');
    return;
  }

  let text = '';
  messages.forEach(msg => {
    const role = msg.classList.contains('msg-user') ? 'You' : 'AI';
    const content = msg.innerText || msg.textContent;
    text += `${role}: ${content}\n\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Copied!</span>
    `;

    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy chat: ', err);
    alert('Failed to copy chat. Please select and copy manually.');
  });
}

/**
 * Download chat conversation history as file
 * @param {string} chatHistoryId - ID of chat history element
 * @param {string} format - 'txt' or 'pdf'
 * @param {HTMLElement} button - Button that was clicked
 */
function downloadChatHistory(chatHistoryId, format, button) {
  const chatHistory = document.getElementById(chatHistoryId);
  if (!chatHistory) {
    console.error('Chat history element not found:', chatHistoryId);
    return;
  }

  const messages = chatHistory.querySelectorAll('.chat-msg');
  if (messages.length === 0) {
    console.warn('No chat messages to download');
    return;
  }

  let text = '';
  messages.forEach(msg => {
    const role = msg.classList.contains('msg-user') ? 'You' : 'AI';
    const content = msg.innerText || msg.textContent;
    text += `${role}: ${content}\n\n`;
  });

  const originalHTML = button.innerHTML;

  if (format === 'txt') {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Downloaded!</span>
    `;
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);

  } else if (format === 'pdf') {
    button.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
      </svg>
      <span>Opening PDF...</span>
    `;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download PDF');
      button.innerHTML = originalHTML;
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Chat Conversation - ${new Date().toLocaleString()}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333; }
          h1 { font-size: 18px; margin-bottom: 20px; color: #1a1a1a; }
          .message { margin-bottom: 15px; padding: 10px; border-left: 3px solid #2563EB; }
          .message strong { color: #2563EB; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <h1>Chat Conversation - ${new Date().toLocaleString()}</h1>
        ${text.split('\n\n').filter(t => t.trim()).map(t => {
          const parts = t.split(': ');
          const role = parts[0];
          const content = parts.slice(1).join(': ');
          return `<div class="message"><strong>${role}:</strong> ${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>`;
        }).join('')}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(() => window.close(), 500);
          };
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  }
}

// Export generic result functions
window.AbetworksResult = {
  copy: copyResult,
  download: downloadResult,
  copyChat: copyChatHistory,
  downloadChat: downloadChatHistory
};

// ────────────────────────────────────────────────────────────────
// THEME MANAGEMENT FUNCTIONS
// ────────────────────────────────────────────────────────────────

/**
 * Get the current theme index
 */
function getCurrentThemeIndex() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
  return THEMES.findIndex(t => t.id === currentTheme);
}

/**
 * Get theme by ID
 */
function getThemeById(themeId) {
  return THEMES.find(t => t.id === themeId) || THEMES[0];
}

/**
 * Apply a theme by ID
 */
function applyTheme(themeId) {
  const theme = getThemeById(themeId);
  if (!theme) return;
  
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem(THEME_STORAGE_KEY, themeId);
  updateThemeButtonIcon(themeId);
  updateThemeSwitcherDropdown(themeId);
  
  // Announce theme change for accessibility
  announceThemeChange(theme);
}

/**
 * Cycle to the next theme in the list
 */
function cycleTheme() {
  const currentIndex = getCurrentThemeIndex();
  const nextIndex = (currentIndex + 1) % THEMES.length;
  const nextTheme = THEMES[nextIndex];
  applyTheme(nextTheme.id);
}

/**
 * Update the theme toggle button icon based on current theme
 */
function updateThemeButtonIcon(themeId) {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;
  
  const theme = getThemeById(themeId);
  themeBtn.innerHTML = theme.icon;
  themeBtn.setAttribute('title', `Theme: ${theme.label} (click to cycle)`);
  themeBtn.setAttribute('aria-label', `Current theme: ${theme.label}. Click to switch to next theme.`);
}

/**
 * Update the theme switcher dropdown if it exists
 */
function updateThemeSwitcherDropdown(themeId) {
  const dropdown = document.getElementById('theme-switcher-select');
  if (!dropdown) return;
  dropdown.value = themeId;
}

/**
 * Announce theme change for screen readers
 */
function announceThemeChange(theme) {
  const announcer = document.getElementById('theme-announcer');
  if (announcer) {
    announcer.textContent = `Theme changed to ${theme.label}`;
  }
}

/**
 * Initialize theme from localStorage or default
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
  applyTheme(savedTheme);
}

// ────────────────────────────────────────────────────────────────
// SHARED NAVBAR & FOOTER
// ────────────────────────────────────────────────────────────────

const SHARED_NAVBAR = `
    <nav class="navbar">
        <a href="https://abetworks.in" class="logo-container">
            <span class="logo-text">Abetworks</span>
        </a>
        <div class="nav-links">
            <a href="/tools/index.html" class="nav-link">← All Tools</a>
            <a href="https://abetworks.in" class="nav-link hide-mobile" target="_blank">AbetWorks.in ↗</a>
            <div class="theme-switcher-container">
                <select id="theme-switcher-select" class="theme-switcher-dropdown" onchange="applyTheme(this.value)" aria-label="Select theme">
                    ${THEMES.map(t => `<option value="${t.id}">${t.icon} ${t.label}</option>`).join('')}
                </select>
            </div>
            <button class="theme-toggle" id="theme-toggle-btn" onclick="cycleTheme()" title="Cycle themes" aria-label="Cycle through themes">☀️</button>
        </div>
    </nav>
    <!-- Accessibility: Screen reader announcements -->
    <div id="theme-announcer" class="sr-only" aria-live="polite" aria-atomic="true"></div>
`;

const SHARED_FOOTER = `
    <footer class="footer">
        <p>&copy; 2026 Abetworks. All rights reserved. Designed with Midnight Glass aesthetic.</p>
    </footer>
`;

function injectSharedElements() {
    // Inject Navbar
    if (!document.querySelector('.navbar')) {
        document.body.insertAdjacentHTML('afterbegin', SHARED_NAVBAR);
    }

    // Inject Footer
    if (!document.querySelector('.footer')) {
        document.body.insertAdjacentHTML('beforeend', SHARED_FOOTER);
    }
}

// Global Exports
window.AbetworksTools = {
    copyToClipboard: function (text, buttonElement) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = buttonElement.innerText;
            buttonElement.innerText = "Copied!";
            buttonElement.classList.add('btn-success');
            setTimeout(() => {
                buttonElement.innerText = originalText;
                buttonElement.classList.remove('btn-success');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    },
    setupDropZone: function (dropZoneId, fileInputId, callback) {
        const dropZone = document.getElementById(dropZoneId);
        const fileInput = document.getElementById(fileInputId);
        if (!dropZone || !fileInput) return;
        dropZone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) callback(e.target.files[0]);
        });
        ['dragenter', 'dragover'].forEach(e => dropZone.addEventListener(e, (ev) => {
            ev.preventDefault();
            dropZone.classList.add('dragover');
        }));
        ['dragleave', 'drop'].forEach(e => dropZone.addEventListener(e, (ev) => {
            ev.preventDefault();
            dropZone.classList.remove('dragover');
            if (ev.type === 'drop') callback(ev.dataTransfer.files[0]);
        }));
    },
    simulateApiCall: function (callback, delay = 2000) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(callback()), delay);
        });
    },
    showElement: function (id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove('hidden');
    },
    hideElement: function (id) {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    },
    callAiBackend: async function (toolId, prompt, contextData = "") {
        if (!isLeadCaptured() && getUsageCount() >= USAGE_LIMIT) {
            showLeadModal(toolId);
            return "LIMIT_REACHED";
        }

        // Logic to pull from Business Bank "Backup"
        let bankContext = "";
        const bank = window.AbetworksTools.businessBank || window.BUSINESS_BANK;
        if (bank) {
            for (const [name, info] of Object.entries(bank)) {
                if (prompt.toLowerCase().includes(name.toLowerCase()) ||
                    (info.keywords && info.keywords.some(k => prompt.toLowerCase().includes(k.toLowerCase())))) {
                    bankContext += `\n[Business Info for ${name}: ${info.service}. ${info.description}]`;
                }
            }
        }

        const finalContext = contextData + bankContext;
        if (bankContext) console.log("Enriched AI context with bank data:", bankContext);

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tool_id: toolId, prompt, context: finalContext })
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const json = await response.json();
            if (json.success) {
                incrementUsageCount();
                return json.data;
            }
            throw new Error(json.detail || "Backend failure");
        } catch (error) {
            console.error("AI Generation Error:", error);
            throw error; // Throw so the tool's catch block can catch it
        }
    },
    hideLeadModal: function () {
        const modal = document.getElementById('awLeadModal');
        if (modal) modal.classList.remove('active');
    },
    handleWhatsAppLead: function () {
        setLeadCaptured();
        setTimeout(() => this.hideLeadModal(), 500);
    },
    generateSitemap: async function (url, maxPages = 50) {
        try {
            const response = await fetch('/api/advanced/generate-sitemap', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url, max_pages: maxPages })
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const json = await response.json();
            if (json.success) return json.data;
            throw new Error("Backend failure");
        } catch (error) {
            console.error("Sitemap Generation Error:", error);
            throw error;
        }
    }
};

// --- Gating Logic ---
const USAGE_LIMIT = 100;
const STORAGE_KEY = 'aw_usage_count';
const LEAD_KEY = 'aw_lead_captured';

function getUsageCount() { return parseInt(localStorage.getItem(STORAGE_KEY)) || 0; }
function incrementUsageCount() {
    const count = getUsageCount() + 1;
    localStorage.setItem(STORAGE_KEY, count);
    return count;
}
function isLeadCaptured() { return localStorage.getItem(LEAD_KEY) === 'true'; }
function setLeadCaptured() { localStorage.setItem(LEAD_KEY, 'true'); }

function showLeadModal(toolId) {
    let modal = document.getElementById('awLeadModal');
    if (!modal) {
        const modalHtml = `
            <div id="awLeadModal" class="aw-modal-overlay">
                <div class="aw-modal-card">
                    <button class="aw-modal-close" onclick="AbetworksTools.hideLeadModal()">&times;</button>
                    <span class="aw-modal-logo">Abetworks</span>
                    <h2 class="aw-modal-title">Usage Limit Reached</h2>
                    <p class="aw-modal-sub">You've reached your free usage limit. Enter your email to unlock unlimited access.</p>
                    <form class="aw-modal-form" id="awLeadForm">
                        <input type="email" id="awLeadEmail" class="aw-modal-input" placeholder="Enter your business email" required>
                        <button type="submit" class="aw-modal-btn">Unlock Now ✨</button>
                    </form>
                    <div class="aw-modal-divider">OR</div>
                    <a href="https://wa.me/918850777453?text=Hi%20AbetWorks%2C%20I%20want%20to%20unlock%20unlimited%20tool%20access." 
                       target="_blank" class="aw-modal-wa-btn" onclick="AbetworksTools.handleWhatsAppLead()">
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modal = document.getElementById('awLeadModal');
        document.getElementById('awLeadForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('awLeadEmail').value;
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, tool_id: toolId })
            });
            if (res.ok) {
                setLeadCaptured();
                AbetworksTools.hideLeadModal();
                location.reload();
            }
        });
    }
    setTimeout(() => modal.classList.add('active'), 10);
}

// ────────────────────────────────────────────────────────────────
// DEPRECATED: Old toggleTheme function (kept for backward compatibility)
// ────────────────────────────────────────────────────────────────
function toggleTheme() {
    console.warn('toggleTheme() is deprecated. Use cycleTheme() instead.');
    cycleTheme();
}

// ────────────────────────────────────────────────────────────────
// INITIALIZATION
// ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme from localStorage
    initializeTheme();

    // Auto-detect if running in Next.js app router (hide navbar/footer)
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const isEmbedded = urlParams.get('embedded') === 'true';

    // If path matches /tools/[slug]/ pattern (not ending with index.html)
    const isInNextJs = path.match(/^\/tools\/[^\/]+\/$/) && !path.includes('/index.html');

    if (isInNextJs || isEmbedded) {
        document.body.classList.add('nextjs-embedded');
        console.log('Running in Next.js - hiding navbar/footer');
        
        // Auto-resize iframe height to fit content
        const resizeObserver = new MutationObserver(() => {
            const height = document.body.scrollHeight;
            window.parent.postMessage({ type: 'RESIZE_IFRAME', height }, '*');
        });
        
        resizeObserver.observe(document.body, { 
            childList: true, 
            subtree: true, 
            attributes: true 
        });
        
        // Initial resize
        window.addEventListener('load', () => {
            window.parent.postMessage({ type: 'RESIZE_IFRAME', height: document.body.scrollHeight }, '*');
        });
        
        // Prevent links from breaking out of iframe improperly
        // Intercept clicks on relative links to ensure they stay in iframe
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
                const href = link.getAttribute('href');
                // If it's a relative link without target="_blank", ensure it stays in iframe
                if (href && !href.startsWith('http') && !href.startsWith('//') && !link.hasAttribute('target')) {
                    // Let it navigate normally within iframe
                    // But prevent any window.open attempts
                    e.stopPropagation();
                }
            }
        }, true);
    }

    // Inject shared elements (navbar and footer)
    injectSharedElements();
});

