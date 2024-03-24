import '@/app/ui/global.css';
import Head from 'next/head';
import { Metadata } from 'next'

import { Source_Sans_3} from 'next/font/google';

export const metadata: Metadata = {
  title: 'My Classes',
  
  description: 'an online learnign platform',
  keywords: ['teacher', 'alive', 'find'],
}

const source_Sans_3 = Source_Sans_3({
  subsets: ['latin'],

})

export default function RootLayout({ children,}: {children: React.ReactNode }) {
  return (
    
    <html lang="en">
      <body className={`${source_Sans_3.className} antialiased font-medium `}>{children}</body>
    </html>
  );
}
