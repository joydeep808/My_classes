"use client"
import React,{useState, useEffect} from "react";
import { userdata } from "@/app/lib/actions";
import { Session } from "next-auth";

export default function ProfilePage(){

    const [data, setData] = useState<Session | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };

        fetchData()
    },[])

    return(
        <main>
            <div>
                <span> here is the user profile: </span><br></br>
                <span>{data?.user?.name}</span><br></br>
                <span>{data?.user?.email}</span><br></br>
                <span>{data?.user?.image}</span><br></br>
            </div>
        </main>
    );
}