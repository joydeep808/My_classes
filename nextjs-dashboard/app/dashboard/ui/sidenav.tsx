import Link from 'next/link';
import NavLinks from '@/app/dashboard/ui/nav-links';
import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';


export default function SideNav() {
  return (
    <div className="flex h-16 pb-4 sticky top-0 z-10 bg-slate-100">
      <Link
        className=" flex  items-center justify-start h-16 py-3 bg-violet-600 rounded-sm w-40  text-white  self-center "
        href="/dashboard"
      >
          <MyClassLogoWhite />
      </Link>
      <div className="flex grow justify-evenluy mx-2 gap-2">
        <NavLinks />

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form action={async () => {
            'use server';
            await signOut();
          }} 
          >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-violet-600 md:w-32 md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-8" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
