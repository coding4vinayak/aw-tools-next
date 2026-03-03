// Type definitions for Abetworks Tools

export interface Tool {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: ToolCategory;
  isAI: boolean;
  isPopular?: boolean;
  path: string;
}

export type ToolCategory =
  | 'Most Popular'
  | 'Utility'
  | 'Calculators'
  | 'Sitemap'
  | 'Converters'
  | 'Analytics'
  | 'Scraping'
  | 'Business'
  | 'Text Tools'
  | 'Developer Tools'
  | 'AI Tools';

export interface Theme {
  id: string;
  name: string;
  icon: string;
  label: string;
  colors: ThemeColors;
}

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  border: string;
  input: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  ring: string;
}
