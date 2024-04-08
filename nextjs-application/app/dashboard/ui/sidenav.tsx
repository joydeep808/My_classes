"use client"
import Link from 'next/link';
import NavLinks from '@/app/dashboard/ui/nav-links';
import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import React,{useState, useEffect} from "react";
import {  userdata } from "@/app/lib/actions";
import { Session } from "next-auth";
import { UserIcon } from '@heroicons/react/24/solid';

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
    <div className="flex h-16  sticky top-0 z-10 bg-white bg-opacity-30 backdrop-blur-lg  ">
      <Link href="/dashboard/profile" className=" flex  items-center justify-end 
      h-16 bg-violet-700 rounded-full w-36  text-white   px-8 absolute -left-12 ">
          {/* <MyClassLogoWhite /> */}
          <UserIcon className='h-12'/>
      </Link>

      <div className="flex grow justify-evenluy self-center mx-2 gap-2 absolute left-24 z-30">
        <NavLinks />
      </div>

      
    </div>
  );
}
