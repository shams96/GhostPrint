import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

// Font definitions with subsets and display settings
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Ghostprint - Your Data Has a Trail. Now You Can See It',
    template: '%s | Ghostprint',
  },
  description:
    'Scan your inbox and privacy policies to reveal which companies hold your data, assess privacy risks, and send one-tap deletion requests using GDPR/CCPA.',
  keywords: [
    'data privacy',
    'privacy control',
    'GDPR',
    'CCPA',
    'data deletion',
    'privacy score',
    'email scanner',
    'privacy policy scanner',
  ],
  authors: [{ name: 'Ghostprint Team' }],
  creator: 'Ghostprint',
  publisher: 'Ghostprint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'https://ghostprint.app'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ghostprint.app',
    title: 'Ghostprint - Your Data Has a Trail. Now You Can See It',
    description:
      'Scan your inbox and privacy policies to reveal which companies hold your data, assess privacy risks, and send one-tap deletion requests.',
    siteName: 'Ghostprint',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghostprint - Your Data Has a Trail. Now You Can See It',
    description:
      'Scan your inbox and privacy policies to reveal which companies hold your data, assess privacy risks, and send one-tap deletion requests.',
    creator: '@ghostprint_app',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
