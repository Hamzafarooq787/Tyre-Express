import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tyre Express - 24/7 Mobile Tyre Fitting & Roadside Assistance",
    template: "%s | Tyre Express"
  },
  description: "Professional roadside assistance at your doorstep. 24/7 Mobile Tyre Fitting, JumpStart, and Fuel Delivery services across the UK. Fast, reliable, and available when you need us most.",
  keywords: ["mobile tyre fitting", "roadside assistance", "jump start", "fuel delivery", "emergency tyre repair", "24/7 tyre service"],
  authors: [{ name: "Tyre Express" }],
  creator: "Tyre Express",
  publisher: "Tyre Express",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tyre-express.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tyre Express - Mobile Tyre Fitting & Roadside Assistance",
    description: "24/7 emergency roadside assistance. We come to you with mobile tyre fitting, jump starts, and fuel delivery.",
    url: "https://tyre-express.com",
    siteName: "Tyre Express",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tyre Express Mobile Service",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyre Express - 24/7 Mobile Tyre Fitting",
    description: "Professional roadside assistance at your doorstep. Available 24/7.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0d7ff2",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Tyre Express",
    statusBarStyle: "black-translucent",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d7ff2" },
    { media: "(prefers-color-scheme: dark)", color: "#101922" },
  ],
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,1&display=swap"
          rel="stylesheet"
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Phone number detection */}
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Emergency contact meta */}
        <meta name="emergency-contact" content="0745047871" />
        
        {/* Apple specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tyre Express" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#0d7ff2" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0d7ff2" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#101922" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-[100]">
          Skip to main content
        </a>
        
        {/* Main content */}
        <main id="main-content">
          {children}
        </main>
        
        {/* Emergency contact button - mobile sticky */}
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <a
            href="tel:0745047871"
            className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-xl shadow-primary/50 hover:bg-primary/90 transition-all animate-pulse"
            aria-label="Call emergency number 0745047871"
          >
            <span className="material-symbols-outlined">emergency</span>
            <span className="font-bold">0745047871</span>
          </a>
        </div>
      </body>
    </html>
  );
}