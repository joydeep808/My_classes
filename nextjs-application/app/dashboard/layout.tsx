import SideNav from '@/app/dashboard/ui/sidenav';
import Footer from '../ui/footer';
import ScrollToTop from '../ui/scrollToTop';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <SideNav />
      <div className="flex-grow   ">
        <ScrollToTop />
        {children}
      </div>
      <Footer />
    </div>
  );
}