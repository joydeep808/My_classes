import '@/app/ui/global.css';
import Head from 'next/head';
import { Metadata } from 'next'

import { Source_Sans_3} from 'next/font/google';

export const metadata: Metadata = {

  title: 'My Classes - Premier Destination for Offline Teachers in Agartala" could be a suitable title.',
  metadataBase: new URL('https://www.myclassestripura.com/'),
  description: "Discover My Classes Tripura, your top choice for connecting with experienced teachers in Agartala, Tripura. Find elite educators with 5+ years of expertise across TBSE, CBSE, and ICSE, as well as coaching for exams like JEE and NEET. Benefit from personalized learning and easy session booking, whether for in-person or online lessons. Our platform ensures quality education accessible to students across Tripura, including Udaipur and Belonia. Join thousands of successful students who've achieved academic excellence with My Classes Tripura. Start your journey today!",
  keywords: ['my' , 'my classes', 'my classes tripura', 'my classes app', 'my classes have started', 'my classroom', 'my classes coaching center', 'my class camput', 'my classes login', 'my clases games','my clases classlink','my clases for students', 'my classes video','TBSE'],

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
