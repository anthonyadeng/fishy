import type { Metadata } from 'next';
import { inter } from './util/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fishy',
  description: 'A webapp to manage home aquariums',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
