import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Headlines',
  description: 'AI-curated daily news briefing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  //test
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
