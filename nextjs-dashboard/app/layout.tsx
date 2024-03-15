import '@/app/ui/global.css';
import  {inter,raleway1,source_Sans_3} from '@/app/ui/fonts';

export default function RootLayout({ children,}: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${source_Sans_3.className} antialiased`}>{children}</body>
    </html>
  );
}
