import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outfit, Montserrat, Inter } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'HealthyHue - Your Guide to Holistic Wellness & Mindful Living',
  description: 'Discover evidence-based health tips, wellness strategies, nutrition advice, and mindful living practices. Join our community of health enthusiasts and transform your life.',
  keywords: 'health blog, wellness tips, nutrition advice, mental health, fitness guides, holistic health, mindful living, healthy lifestyle',
  openGraph: {
    title: 'HealthyHue - Your Guide to Holistic Wellness & Mindful Living',
    description: 'Transform your life with evidence-based health tips and wellness strategies.',
    images: '/og-image.jpg',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthyHue - Your Guide to Holistic Wellness & Mindful Living',
    description: 'Transform your life with evidence-based health tips and wellness strategies.',
    images: '/og-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${montserrat.variable} ${inter.variable} font-body bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
