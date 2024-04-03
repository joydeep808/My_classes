"use client"
import Link from 'next/link';
import NavLinks from '@/app/dashboard/ui/nav-links';
import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import React,{useState, useEffect} from "react";
import { signUserOut, userdata } from "@/app/lib/actions";
import { Session } from "next-auth";

export default function SideNav() {
  const [data, setData] = useState<Session | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };
        fetchData()
    },[])

  return (
    <div className="flex h-16  sticky top-0 z-10 bg-slate-100 ">
      <Link href="/dashboard" className=" flex  items-center justify-start 
      h-16 bg-violet-700 rounded-sm w-24 md:w-40  text-white  self-center px-3 ">
          {/* <MyClassLogoWhite /> */}
          {data?.user?.name}
      </Link>

      <div className="flex grow justify-evenluy self-center mx-2 gap-2">
        <NavLinks />
      </div>

      <form action= {signUserOut} className='self-center'>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-violet-600 md:w-32 md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-8" />
            <span className="hidden md:block font-semibold ">Sign Out</span>
          </button>
      </form>
    </div>
  );
}
