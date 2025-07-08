import { Geist_Sans, Geist_Mono } from 'next/font/geist';
import type { Metadata } from 'next';
import './globals.css';
const geistSans = Geist_Sans({ variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono' });
export const metadata: Metadata = {
  title: 'Next Solutions - Digital Transformation Experts',
  description: 'Industry-leading digital solutions for modern businesses',
  keywords: ['digital transformation'],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {' '}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {' '}
        <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          {' '}
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            {' '}
            <Link href="/" className="text-xl font-bold">
              {' '}
              Next Solutions{' '}
            </Link>{' '}
            <div className="space-x-6">
              {' '}
              <Link
                href="/why-us"
                className="hover:text-blue-600 transition-colors"
              >
                {' '}
                Why Us{' '}
              </Link>{' '}
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                {' '}
                Contact{' '}
              </Link>{' '}
            </div>{' '}
          </div>{' '}
        </nav>{' '}
        {children}{' '}
      </body>{' '}
    </html>
  );
}

        </nav>{' '}
        {children}{' '}
      </body>{' '}
    </html>
  );
}

  return (
    <html lang="en">
      {' '}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {' '}
        <nav className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          {' '}
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            {' '}
            <Link href="/" className="text-xl font-bold">
              {' '}
              Next Solutions{' '}
            </Link>{' '}
            <div className="space-x-6">
              {' '}
              <Link
                href="/why-us"
                className="hover:text-blue-600 transition-colors"
              >
                {' '}
                Why Us{' '}
              </Link>{' '}
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                {' '}
                Contact{' '}
              </Link>{' '}
            </div>{' '}
          </div>{' '}
        </nav>{' '}
        {children}{' '}
      </body>{' '}
    </html>
  );
}
