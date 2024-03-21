import '@/app/ui/global.css';

import { Source_Sans_3} from 'next/font/google';

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
