import SideNav from '@/app/dashboard/ui/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col  ">
      <SideNav /> 
      <div className="flex-grow p-1 md:overflow-y-auto ">{children}</div>
    </div>
  );
}