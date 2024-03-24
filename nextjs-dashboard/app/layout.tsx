import '@/app/ui/global.css';
import Head from 'next/head';
import { Metadata } from 'next'

import { Source_Sans_3} from 'next/font/google';

export const metadata: Metadata = {
  title: 'My Classes',
  metadataBase: new URL('www.myclassestripura.com'),
  description: "Welcome to My Classes Tripura, your premier destination for connecting with Agartala's most experienced offline teachers. Our platform specializes in matching students with elite educators boasting 5+ years of teaching experience across a diverse array of subjects and curricula, including TBSE, CBSE, and ICSE, as well as preparation for competitive exams like JEE, NEET, and CUET.  Experience personalized learning like never before as you explore detailed profiles of seasoned teachers, each equipped with extensive qualifications and a proven track record of success. Whether you're navigating the intricacies of mathematics, mastering the sciences, delving into humanities, or honing your language skills, our platform ensures access to expert guidance tailored to your unique academic journey.  Booking sessions with your chosen teacher is effortless, allowing you to schedule in-person or online lessons at your convenience. Whether you're seeking additional support to excel in board exams or aiming to secure top scores in competitive entrance tests, My Classes Tripura offers flexible learning options to suit your needs. Our commitment to excellence extends beyond Agartala, reaching students in cities across Tripura, including Udaipur, Belonia, and beyond. Wherever you reside in the state, My Classes Tripura ensures that quality education is readily accessible, empowering you to achieve your academic aspirations with confidence.Join the ranks of thousands of successful students who have unlocked their full potential with My Classes Tripura. Whether you're embarking on your academic journey, aiming to enhance your subject proficiency, or pursuing ambitious career goals, our platform provides the resources and support you need to thrive. Start your path to success today with My Classes Tripura.",
  keywords: ['teacher', 'alive', 'find','TBSE','Tripura','CBSE', 'ICSE', 'JEE', 'NEET'],
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
