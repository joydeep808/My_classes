
import Link from 'next/link';
import NavLinks from '@/app/dashboard/ui/nav-links';
import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import { UserIcon } from '@heroicons/react/24/solid';

export default function SideNav() {

  return (
    <div className="flex h-16  sticky top-0 z-10 bg-white bg-opacity-30 backdrop-blur-lg shadow-md rounded ">
      <Link href="/dashboard/profile" className=" flex  items-center justify-end 
      h-16 bg-indigo-700 rounded-e-full w-24  text-white   px-8  ">
          {/* <MyClassLogoWhite /> */}
          <UserIcon className='h-12'/>
      </Link>
      

      <div className="flex grow-0 justify-evenluy self-center mx-2 gap-2 md:grow z-30">
        <NavLinks />
      </div>

      
    </div>
  );
}
