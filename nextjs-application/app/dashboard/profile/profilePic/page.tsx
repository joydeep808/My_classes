'use client'
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { userdata } from "@/app/lib/actions";
import { Session } from "next-auth";
import Image from 'next/image';
import { signUserOut } from '@/app/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { backendFetch } from '@/app/lib/actions';

export default function ProfilePage() {
    const [data, setData] = useState<Session | null>(null);
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await userdata();
            setData(result);
        };
        fetchData();
    }, []);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Check if the file size is within the allowed limit (2MB)
            if (file.size <= 2 * 1024 * 1024) {
                setImage(file);
            } else {
                alert('Please select an image file with a size less than or equal to 2MB.');
            }
        }
    };

    const handleImageUpload = async () => {
        if (image) {
            // Create a FormData object to send the image file
            const formData = new FormData();
            formData.append('profileImage', image);

            try {
                // Send the image file to the backend using Axios PATCH request

                const backendurl = await backendFetch()
                const apiEndpoint = `${backendurl}/user/set/avatar`;

                const response = await axios.patch(apiEndpoint, formData);
                // await axios.patch(apiEndpoint, formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }
                // });

                console.log(response)

                alert('Image uploaded successfully!');
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Failed to upload image. Please try again.');
            }
        } else {
            alert('Please select an image file first.');
        }
    };

    return (
        <div className="font-semibold h-[90vh] flex flex-col justify-center">

            <div className='flex flex-col items-center my-4'>


                <div className="flex items-center mx-2 md:mx-6">
                    <Image className='rounded-full w-44' src='/default_profile.svg'
                        width={100} height={100} alt='session user profile picture' />
                </div>
                <span className='text-4xl'>{data?.user?.name}</span>
                <span>{data?.user?.email}</span>

            </div>

            <div className='flex flex-col justify-center mx-auto my-32'>
                
                <input type="file" accept="image/*" onChange={handleImageChange} 
                className=''/>
                <button onClick={handleImageUpload}
                className='p-1 rounded-sm bg-indigo-700/80 text-white text-center text-xl my-4
                hover:bg-indigo-700  transition-all ease-linear duration-100 hover:shadow-xl hover:scale-105'
                >Upload Image</button>
            </div>

            
        </div>
    );
}
