import type { Metadata } from 'next';
import { PT_Sans_Narrow, PT_Serif } from 'next/font/google';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import SubNav from '@/components/SubNav';
import Footer from '@/components/Footer';
import ChatbotFab from '@/components/ChatbotFab';
import './globals.css';

const ptSansNarrow = PT_Sans_Narrow({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cancer Institute (WIA) | Adyar, Chennai | Comprehensive Cancer Care',
  description: 'Cancer Institute (WIA), Adyar, Chennai — India\'s pioneer in comprehensive cancer care. Expert oncologists, advanced treatment, and compassionate support from prevention to palliative care.',
  openGraph: {
    title: 'Cancer Institute (WIA) — Compassionate Cancer Care, Adyar',
    description: 'Serving patients with humanity and wisdom since 1954. Specialists in breast cancer, lung cancer, cervical cancer, and 20+ cancer types.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSansNarrow.variable} ${ptSerif.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <TopBar />
        <Header />
        <SubNav />
        {children}
        <Footer />
        <ChatbotFab />
      </body>
    </html>
  );
}
