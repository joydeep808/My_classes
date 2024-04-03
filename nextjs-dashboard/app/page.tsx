'use client'
import { MyClassLogoBlack } from './ui/myclass-logo';
import Link from 'next/link';
import Home from '@/app/ui/home'
import ProfileList from './ui/teachers/profileList';
import Services from './ui/services';
import Batches from './ui/batches';

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col ">
      <nav className="flex shadow-lg sticky h-20 top-0 z-10 shrink-0 items-end bg-white  p-2 md:h-22 gap-1 md:gap-3">
        
       <MyClassLogoBlack/> 

        <Link href="/login" className=" text-white flex justify-center  text-sm w-40 my-auto 
           rounded-full bg-indigo-700 px-1 py-2  transition-colors
          hover:bg-indigo-500 md:text-base">
            <span >Log  in / Sign up</span> 
        </Link>
        

      </nav>

      <div className="mt-4 flex grow flex-col gap-2 md:flex-row">
      <Home/>
      <ProfileList/>
      </div>
      <Services/>
      <Batches/>
      
      
      
    </main>
  );
}
