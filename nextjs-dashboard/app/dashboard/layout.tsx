import SideNav from '@/app/ui/dashboard/sidenav';
import { MyClassLogoWhite } from '../ui/myclass-logo';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60">
      
        <SideNav />
      </div>
      <div className="flex-grow p-1 md:overflow-y-auto md:p-6">{children}</div>
    </div>
  );
}