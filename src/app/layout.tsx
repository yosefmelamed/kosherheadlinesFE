import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
 
export const metadata: Metadata = {
  title: 'Kosher Headlines',
  description: 'AI-curated daily Jewish and world news briefing',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1N1GV3FTZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L1N1GV3FTZ');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}