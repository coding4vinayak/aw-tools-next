'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ToolIframeProps {
  src: string;
  title: string;
}

export default function ToolIframe({ src, title }: ToolIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(1200);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'RESIZE_IFRAME') {
        const newHeight = Math.max(event.data.height, 1200);
        setIframeHeight(newHeight);
        if (iframeRef.current) {
          iframeRef.current.style.height = `${newHeight}px`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    // Request initial height from iframe content
    iframeRef.current?.contentWindow?.postMessage({ type: 'REQUEST_HEIGHT' }, '*');
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        id="tool-iframe"
        src={src}
        title={title}
        loading="eager"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
        onLoad={handleLoad}
        style={{
          width: '100%',
          height: `${iframeHeight}px`,
          border: 'none',
          display: 'block',
          overflow: 'hidden',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
        scrolling="no"
      />
    </div>
  );
}
