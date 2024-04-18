"use client"
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { userdata } from "@/app/lib/actions";
import { Session } from "next-auth";
import Image from 'next/image';
import { signUserOut } from '@/app/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';

const contentlist = [
    
    // {name:'Payment', href:''},
    
    { name: 'change profile picture', href: './profile/profilePic' },
    
];

export default function ProfilePage() {
    const [data, setData] = useState<Session | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="font-semibold h-[90vh] flex flex-col justify-center">
            <div className=' flex flex-col   items-center my-4'>
                <div className=" flex items-center mx-2 md:mx-6">
                    <Image className='rounded-full w-44 ' src='/default_profile.svg'
                        width={100} height={100} alt='session user profile picture' />
                </div>
                <span className=' text-4xl'>{data?.user?.name}</span>
                <span>{data?.user?.email}</span>

            </div>

            <div className='flex flex-col gap-10 justify-center p-10 items-center'>
                <div className='flex items-center justify-center flex-col gap-4'>
                    {contentlist.map((item, index) => (
                        <Link href={item.href} key={index}
                            className="flex justify-center rounded-sm w-max mx-4 items-center">

                            <span className=' p-1 rounded-md bg-slate-700/60 text-white  text-center
                            hover:bg-indigo-700 hover:text-white transition-all ease-linear duration-100 hover:shadow-xl  '>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
                <div >
                    <button onClick={()=> signUserOut()} className='flex rounded-full bg-red-600 font-xl w-28 text-white hover:bg-red-500 items-center justify-center gap-2 p-3  transition-all duration-100 ease-linear hover:shadow-xl hover:text-white'>
                        <PowerIcon className='w-8'/>
                        <span className=' whitespace-nowrap'>Sign Out</span>
                    </button>
                </div>
                

            </div>

        </div>

    );
}
