'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { fetchTeachers } from '@/app/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,

} from "./ui/select"
import FindProfileCard from './ui/find-profileCard';
import { Input } from "./ui/input"

import dotenv from 'dotenv'
import { useStore } from './ui/Management';
import { backendFetch} from '@/app/lib/actions';


export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const profileImg = '/default_profile.svg';
  const {Teachers ,addTeacher , alradyFetchedTeacher ,changeAlradyFetchedTeacher} = useStore()
  let value= 0
  useEffect(() => {
    
    async function fetchTeachers() {
      if(alradyFetchedTeacher === true || value !== 0)return;
      setLoading(true);
      const backendurl = await backendFetch()
      const apiEndpoint = `${backendurl}/student/showTeachers`;
      

      try {
        const response = await axios.get(apiEndpoint);
      await addTeacher(response.data.data)
      await changeAlradyFetchedTeacher()
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  fetchTeachers();
  ++value
});


  return (
    <main className="flex flex-col rounded-xl bg-gray-200 p-3">
      

      <h1 className="m-4 text-center text-4xl font-bold">Our Teachers</h1>
      <div className='flex items-center justify-around sm:gap-20  gap-4 px-4' >
       <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Experience</SelectItem>
          <SelectItem value="banana">Subject</SelectItem>
          <SelectItem value="blueberry">Rating</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
<Input />
          </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
        

          {
          Teachers.map((teacher, index) => (
            <div
              key={index}
              className=" hover: ease-linea m-4 flex items-center justify-between rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 p-4 shadow-lg transition-all hover:shadow-xl"
            >
              <Image
                height={70}
                width={70}
                src={profileImg}
                alt="pfp"
                className="w-12 "
              />
              <div className="flex flex-1 flex-col text-center">
                <h2 className="px-2 text-base font-bold md:text-xl">
                  {teacher.name}
                </h2>
                <p>{teacher.subjectTeaching}</p>
              </div>
              <div>
                <Link href={`/dashboard/teacher-profile-page/${teacher.teacherId}`}>
                  <button>
                    <ArrowRightCircleIcon className="w-10 text-violet-700 transition-all ease-linear hover:text-violet-400 md:w-7 hover:translate-x-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
          </>
        )
        
        }

      </div>
    </main>
  );
}
