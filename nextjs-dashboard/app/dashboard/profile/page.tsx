// "use client"
// import Link from 'next/link';
// import React, { useState, useEffect } from "react";
// import { userdata } from "@/app/lib/actions";
// import { Session } from "next-auth";

// export default function ProfilePage() {

//     const [data, setData] = useState<Session | null>(null);
//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await userdata();
//             setData(result);
//         };

//         fetchData()
//     }, [])

//     return (
//         <main>
//             <div className="flex h-full flex-col  pb-4 ">
//                 <span> here is the user profile: </span><br></br>
//                 <span>{data?.user?.name}</span><br></br>
//                 <span>{data?.user?.email}</span><br></br>
//                 <span>{data?.user?.image}</span><br></br>
//                 <Link
//                     className="mb-2 flex  items-end justify-start  bg-violet-600  md:h-40"
//                     href="/dashboard"
//                 >
//             </div>
//         </main>
//     );
// }
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
                <div className='container '>
                    <Link legacyBehavior href="/dashboard">
                        <div className=''>
                            <a className="text=center rounded-full  pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">Dashboard</a>
                        </div>
                    </Link>
                    <Link legacyBehavior href="">
                        <div className=''>
                            <a className="cursor-default rounded-full pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">Payment</a>
                        </div>
                    </Link>
                    <Link legacyBehavior href="">
                        <div className=''>
                            <a className="cursor-default rounded-full pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">Teachers & Mentors</a>
                        </div>
                    </Link>
                    <Link legacyBehavior href="">
                        <div className=''>
                            <a className="cursor-default rounded-full pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">Settings</a>
                        </div>
                    </Link>
                    <Link legacyBehavior href="">
                        <div className=''>
                            <a className="cursor-default rounded-full pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">Help & feedback</a>
                        </div>
                    </Link>
                    <Link legacyBehavior href="">
                        <div className=''>
                            <a className="cursor-default rounded-full pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">About</a>
                        </div>
                    </Link>
                    <Link legacyBehavior href="">
                        <div className=''>
                            <a className="cursor-default rounded-full pl-10 pt-5 pb-4 mb-2 w-full flex  items-end justify-start  bg-blue-400">T&C</a>
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
