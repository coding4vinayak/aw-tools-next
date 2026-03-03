import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "100+ Free AI Tools & SEO Tools | Abetworks Suite",
    template: "%s | Abetworks",
  },
  description:
    "Access 100+ free AI tools, SEO tools, and productivity tools for SaaS, lead generation, and business automation. QR codes, URL shorteners, converters, analyzers & more. No signup required.",
  keywords: [
    "free AI tools",
    "SEO tools",
    "QR code generator",
    "URL shortener",
    "image compressor",
    "UUID generator",
    "color converter",
    "currency converter",
    "sitemap tools",
    "AI chatbot",
    "PDF tools",
    "markdown converter",
    "business tools",
    "productivity tools",
    "no signup",
    "free online tools",
  ],
  authors: [{ name: "Abetworks", url: "https://abetworks.in" }],
  creator: "Abetworks",
  publisher: "Abetworks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abetworks.in/tools/",
    title: "100+ Free AI Tools & SEO Tools | Abetworks Suite",
    description:
      "Access 100+ free AI tools, SEO tools, and productivity tools for SaaS, lead generation, and business automation. No signup required.",
    siteName: "Abetworks",
    images: [
      {
        url: "https://abetworks.in/tools/shared/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abetworks Free Tools Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100+ Free AI Tools & SEO Tools | Abetworks Suite",
    description:
      "Access 100+ free AI tools, SEO tools, and productivity tools. No signup required.",
    creator: "@abetworks",
    images: ["https://abetworks.in/tools/shared/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://abetworks.in"),
  alternates: {
    canonical: "https://abetworks.in/tools/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://abetworks.in" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
