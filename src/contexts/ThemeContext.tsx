'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import type { Theme } from '@/types';

const THEMES: Theme[] = [
  {
    id: 'dark',
    name: 'Dark',
    icon: '☀️',
    label: 'Dark (Default)',
    colors: {
      background: '#0f172a',
      foreground: '#f1f5f9',
      card: '#1e293b',
      cardForeground: '#f1f5f9',
      border: '#334155',
      input: '#334155',
      primary: '#3b82f6',
      primaryForeground: '#ffffff',
      secondary: '#475569',
      secondaryForeground: '#f1f5f9',
      accent: '#8b5cf6',
      accentForeground: '#ffffff',
      muted: '#1e293b',
      mutedForeground: '#94a3b8',
      ring: '#3b82f6',
    },
  },
  {
    id: 'light',
    name: 'Light',
    icon: '🌙',
    label: 'Light',
    colors: {
      background: '#ffffff',
      foreground: '#1a1a1a',
      card: '#ffffff',
      cardForeground: '#1a1a1a',
      border: '#e5e7eb',
      input: '#f3f4f6',
      primary: '#2563eb',
      primaryForeground: '#ffffff',
      secondary: '#f3f4f6',
      secondaryForeground: '#1a1a1a',
      accent: '#7c3aed',
      accentForeground: '#ffffff',
      muted: '#f9fafb',
      mutedForeground: '#6b7280',
      ring: '#2563eb',
    },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    icon: '🌊',
    label: 'Ocean Blue',
    colors: {
      background: '#0c1929',
      foreground: '#e0f2fe',
      card: '#1e3a5f',
      cardForeground: '#e0f2fe',
      border: '#334155',
      input: '#1e3a5f',
      primary: '#0ea5e9',
      primaryForeground: '#ffffff',
      secondary: '#0c4a6e',
      secondaryForeground: '#e0f2fe',
      accent: '#14b8a6',
      accentForeground: '#ffffff',
      muted: '#1e3a5f',
      mutedForeground: '#7dd3fc',
      ring: '#0ea5e9',
    },
  },
  {
    id: 'forest',
    name: 'Forest',
    icon: '🌲',
    label: 'Forest Green',
    colors: {
      background: '#0a1f0d',
      foreground: '#dcfce7',
      card: '#14532d',
      cardForeground: '#dcfce7',
      border: '#166534',
      input: '#14532d',
      primary: '#22c55e',
      primaryForeground: '#ffffff',
      secondary: '#166534',
      secondaryForeground: '#dcfce7',
      accent: '#84cc16',
      accentForeground: '#ffffff',
      muted: '#14532d',
      mutedForeground: '#86efac',
      ring: '#22c55e',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    icon: '🌅',
    label: 'Sunset Orange',
    colors: {
      background: '#1a0f0a',
      foreground: '#ffedd5',
      card: '#7c2d12',
      cardForeground: '#ffedd5',
      border: '#9a3412',
      input: '#7c2d12',
      primary: '#f97316',
      primaryForeground: '#ffffff',
      secondary: '#9a3412',
      secondaryForeground: '#ffedd5',
      accent: '#eab308',
      accentForeground: '#ffffff',
      muted: '#7c2d12',
      mutedForeground: '#fdba74',
      ring: '#f97316',
    },
  },
  {
    id: 'midnight',
    name: 'Midnight',
    icon: '🌙',
    label: 'Midnight Purple',
    colors: {
      background: '#0f0a1f',
      foreground: '#f3e8ff',
      card: '#2e1065',
      cardForeground: '#f3e8ff',
      border: '#4c1d95',
      input: '#2e1065',
      primary: '#a855f7',
      primaryForeground: '#ffffff',
      secondary: '#4c1d95',
      secondaryForeground: '#f3e8ff',
      accent: '#ec4899',
      accentForeground: '#ffffff',
      muted: '#2e1065',
      mutedForeground: '#d8b4fe',
      ring: '#a855f7',
    },
  },
];

const THEME_STORAGE_KEY = 'abet_theme_preference';
const DEFAULT_THEME = 'dark';

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  setTheme: (themeId: string) => void;
  toggleTheme: () => void;
  getNextTheme: () => Theme;
  registerIframe: (iframe: HTMLIFrameElement | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [isMounted, setIsMounted] = useState(false);
  const iframeRefs = useRef<Set<HTMLIFrameElement>>(new Set());

  // Register an iframe for theme syncing
  const registerIframe = useCallback((iframe: HTMLIFrameElement | null) => {
    if (iframe) {
      iframeRefs.current.add(iframe);
      // Immediately sync current theme to newly registered iframe
      syncThemeToIframe(iframe, currentTheme);
    }
    return () => {
      if (iframe) {
        iframeRefs.current.delete(iframe);
      }
    };
  }, [currentTheme]);

  // Sync theme to a specific iframe
  const syncThemeToIframe = useCallback((iframe: HTMLIFrameElement, theme: Theme) => {
    if (!iframe.contentWindow) return;
    
    iframe.contentWindow.postMessage(
      {
        type: 'ABETWORKS_THEME_UPDATE',
        theme: theme,
        timestamp: Date.now(),
      },
      window.location.origin
    );
  }, []);

  // Broadcast theme change to all registered iframes
  const broadcastThemeChange = useCallback((theme: Theme) => {
    iframeRefs.current.forEach((iframe) => {
      syncThemeToIframe(iframe, theme);
    });
  }, [syncThemeToIframe]);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      const theme = THEMES.find((t) => t.id === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;
    const colors = currentTheme.colors;

    // Set CSS variables for the theme
    root.style.setProperty('--background', colors.background);
    root.style.setProperty('--foreground', colors.foreground);
    root.style.setProperty('--card', colors.card);
    root.style.setProperty('--card-foreground', colors.cardForeground);
    root.style.setProperty('--border', colors.border);
    root.style.setProperty('--input', colors.input);
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-foreground', colors.primaryForeground);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--secondary-foreground', colors.secondaryForeground);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accent-foreground', colors.accentForeground);
    root.style.setProperty('--muted', colors.muted);
    root.style.setProperty('--muted-foreground', colors.mutedForeground);
    root.style.setProperty('--ring', colors.ring);

    // Set data-theme attribute
    root.setAttribute('data-theme', currentTheme.id);

    // Save to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme.id);

    // Broadcast theme change to all iframes
    broadcastThemeChange(currentTheme);
  }, [currentTheme, isMounted, broadcastThemeChange]);

  // Listen for theme requests from iframes
  useEffect(() => {
    if (!isMounted) return;

    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from same origin
      if (event.origin !== window.location.origin) return;
      
      if (event.data?.type === 'ABETWORKS_THEME_REQUEST') {
        // Send current theme to requesting iframe
        const iframe = event.source instanceof Window 
          ? Array.from(iframeRefs.current).find(
              (ifr) => ifr.contentWindow === event.source
            )
          : null;
        
        if (iframe) {
          syncThemeToIframe(iframe, currentTheme);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [currentTheme, isMounted, syncThemeToIframe]);

  const setTheme = useCallback((themeId: string) => {
    const theme = THEMES.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const currentIndex = THEMES.findIndex((t) => t.id === currentTheme.id);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setCurrentTheme(THEMES[nextIndex]);
  }, [currentTheme]);

  const getNextTheme = useCallback(() => {
    const currentIndex = THEMES.findIndex((t) => t.id === currentTheme.id);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    return THEMES[nextIndex];
  }, [currentTheme]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themes: THEMES,
        setTheme,
        toggleTheme,
        getNextTheme,
        registerIframe,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { THEMES };
