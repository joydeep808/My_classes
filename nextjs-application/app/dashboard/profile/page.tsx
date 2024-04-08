"use client"
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { userdata } from "@/app/lib/actions";
import { Session } from "next-auth";
import Image from 'next/image';
import { signUserOut } from '@/app/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';

const contentlist= [
    // {name:'dashboard', href:''},
    // {name:'Payment', href:''},
    // {name:'Teachers & Mentors', href:''},
    {name:'Settings', href:''},
    {name:'Help & feedback', href:''},
    {name:'About', href:''},
    {name:'T&C', href:''},
    ];

export default function ProfilePage(){
    const [data, setData] = useState<Session | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="font-semibold h-[90vh] flex flex-col justify-between ">
            <div className=' flex flex-col   items-center my-4'>
                <div className=" flex items-center mx-2 md:mx-6">
                    <Image className='rounded-full w-44 ' src='/default_profile.svg' 
                    width={100} height={100} alt='session user profile picture' />
                </div>
                <span className=' text-4xl'>{data?.user?.name}</span>
                <span>{data?.user?.email}</span>
                
            </div>
            
            <div className='flex  flex-col md:flex-row gap-8 md:gap-0 justify-evenly '>
                {contentlist.map((cont , index) =>(
                    <Link href={cont.href} key={index} 

                    className="flex justify-center self-center rounded-sm w-full h-8  mx-4 ">
                            <span className=' text-2xl md:text-base flex self-center '>
                            {cont.name}
                            </span>
                    </Link>
                ))}


                <button onClick={() => signUserOut()} className="flex justify-center  self-center rounded-sm w-full h-8 mx-4">
                    <PowerIcon className="self-center w-8 mx-2" />
                    <span className="text-2xl md:text-base flex self-center">Sign Out</span>
                </button>

            </div>

        </div>
        
    );
}
