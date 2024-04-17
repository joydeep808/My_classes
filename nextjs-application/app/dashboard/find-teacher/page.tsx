'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { fetchTeachers } from '@/app/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import {  Select,  SelectContent,  SelectGroup,  SelectItem,  SelectLabel,  SelectTrigger,  SelectValue,
} from "./ui/select"
import { Input } from "./ui/input"
import { useStore } from './ui/Management';
import { backendFetch } from '@/app/lib/actions';

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
      console.log(apiEndpoint)

      try {
        const response = await axios.get(apiEndpoint);
        addTeacher(response.data.data)
        changeAlradyFetchedTeacher()
      } catch (error) {
      
      } finally {
      setLoading(false);
    }
    }
  fetchTeachers();
  ++value
}, []);


  return (
    <main className="flex flex-col rounded-xl bg-gray-200 p-3">
      
      <h1 className="m-4 text-center text-4xl font-bold">Our Teachers</h1>
      <div className='flex items-center justify-around sm:gap-20  gap-4 px-4' >
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            
            <SelectItem value="apple">Science</SelectItem>
            <SelectItem value="banana">Biology</SelectItem>
            <SelectItem value="blueberry">Geography</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input id="input" className="truncate rounded-full border-0" type="search"  
       aria-controls="matches" placeholder="search" aria-expanded="false" aria-live="polite"/>
        
          </div>
      <div className="flex flex-col lg:flex-row gap-2 flex-wrap justify-evenly my-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>

          {
          Teachers.map((teacher, index) => (
            <Link href={`/dashboard/teacher-profile-page/${teacher.teacherId}`} key={index}
            className=" transition-all ease-in hover:scale-105 flex  items-center  rounded-xl
            border-gray-950/20 border-solid border-2 
            bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-700/20
             shadow-md hover:shadow-2xl lg:w-[48%] justify-evenly p-2 md:py-6 m-1  "
            >
              <Image height={70} width={70} src={profileImg}
                alt="profile picture" className="w-24 sm:w-36 md:w-44  "
              />
                <div className='flex flex-col w-1/2'>
                  <h2 className="  font-semibold text-base sm:text-xl">
                    {teacher.Teachers.name}
                  </h2>
                  <span className='text-base sm:text-xl'>{teacher.description}</span>
                  <span className='text-base sm:text-xl'>{teacher.subjectTeaching}</span>
                  <span className='text-base sm:text-xl'>{teacher.qualification}</span>
                </div>
            </Link>
          ))}
          </>
        )}
      </div>
    </main>
  );
}
