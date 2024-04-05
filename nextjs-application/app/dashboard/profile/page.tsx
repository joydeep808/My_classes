"use client"
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { userdata } from "@/app/lib/actions";
import { Session } from "next-auth";

export default function ProfilePage(){


    const [data, setData] = useState<Session | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };

        fetchData();
    }, []);

    const contentlist= [
    {name:'dashboard', href:''},
    {name:'Payment', href:''},
    {name:'Teachers & Mentors', href:''},
    {name:'Settings', href:''},
    {name:'Help & feedback', href:''},
    {name:'About', href:''},
    {name:'T&C', href:''},
    ];

    return (
        <main>

            <div className="">
                <div className='text-center'>
                <span className=''> here is the user profile: </span><br />
                <span>{data?.user?.name}</span><br />
                <span>{data?.user?.email}</span><br />
                <span>{data?.user?.image}</span><br />
                </div>
                <div className='text-center mb-10'>
                    <Link rel="stylesheet" href="/rana" />
                    <a className='cursor-pointer'href=''>View Profile &gt;</a>
                    
                </div>
                <div  className='flex flex-col gap-2'>
                    {contentlist.map((cont , index) =>(
                        <Link  href={cont.href} key={index} 
                        className="flex justify-center rounded-md h-16 bg-violet-500 mx-4 hover:bg-violet-300">
            
                                <span className='font-bold text-2xl flex self-center'>
                                {cont.name}
                                </span>
                        </Link>
                    ))}
                    
                    
                </div>

            </div>
        </main>
    );
}
