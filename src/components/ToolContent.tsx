'use client';

import { useEffect, useRef } from 'react';

interface ToolContentProps {
  toolPath: string;
}

export default function ToolContent({ toolPath }: ToolContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadTool() {
      try {
        const response = await fetch(toolPath);
        const html = await response.text();
        
        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Get the main-content from the fetched HTML
        const mainContent = doc.querySelector('.main-content');
        
        if (mainContent && containerRef.current) {
          // Remove navbar, footer, and other wrapper elements
          const navbar = mainContent.querySelector('.navbar');
          const footer = mainContent.querySelector('.footer');
          
          if (navbar) navbar.remove();
          if (footer) footer.remove();
          
          // Clone and inject the content
          containerRef.current.innerHTML = mainContent.innerHTML;
          
          // Execute any scripts in the loaded content
          const scripts = containerRef.current.querySelectorAll('script');
          scripts.forEach((oldScript) => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach((attr) => {
              newScript.setAttribute(attr.name, attr.value);
            });
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode?.replaceChild(newScript, oldScript);
          });
        }
      } catch (error) {
        console.error('Failed to load tool:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = '<p style="color: var(--muted-foreground); text-align: center; padding: 2rem;">Failed to load tool. Please try again.</p>';
        }
      }
    }

    loadTool();
  }, [toolPath]);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', maxWidth: '100%' }}
    />
  );
}
