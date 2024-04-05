"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { fetchTeachers } from '@/app/lib/actions';
import { handleAxiosError } from '@/app/lib/handleAxiosError';
import { Teacher } from './responseType';

import FindProfileCard from './find-profileCard';

export default function Page() {
 const [searchQuery, setSearchQuery] = useState<string>('');
 const [searchResults, setSearchResults] = useState<Teacher[]>([]);
 const [loading, setLoading] = useState<boolean>(false);
 const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);


 useEffect(() => {

  async function fetchTeachers(){
    setLoading(true);
    const apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/student/showTeachers';
  
    try{
      const response = await axios.get(apiEndpoint)
      console.log('the data')
      console.log(response.data.data);
      setAllTeachers(response.data.data)
    }catch (error){
      const message = handleAxiosError(error);
      console.log(message)
    }finally{
      setLoading(false);
    }
  };
    

  fetchTeachers();
 }, []);



 return (
    <main className="flex flex-col   p-1">
      
      {/* <form  className='flex' action='fetchTeachers()'>
        <input
          type="text"
          className='w-10/12 rounded-3xl border-0 border-b-fuchsia-900'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for teachers..."
        />
        <button type="submit" className='bg-violet-700 w-2/12 h-8 text-white self-center mx-1 rounded-full'>Search</button>
      </form> */}
      
      <div className="flex flex-col  ">
        <strong className='font-bold flex justify-center text-3xl py-4'>List of teachers</strong>
        {loading ? (
          <p>Loading...</p>
        ) : (

          <div className='flex gap-3 overflow-y-auto flex-col  pb-20 '>
            {allTeachers.map((teacher, index) => (
              
                <FindProfileCard key={index} pictureSrc='/default_profile.svg' 
                name = {teacher.TeacherInfo.name }  subject={teacher.subjectTeaching.join()} 
                qualifications={teacher.qualification} experience={teacher.description} 
                locality={teacher.locality}/>

            ))}
          </div>
        )}
      </div>
      <div>
        {/* page numbers */}
      </div>
    </main>
 );
}
