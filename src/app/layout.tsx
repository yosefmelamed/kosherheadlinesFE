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
<body>
{children}
<Footer />
</body>
</html>
);
}