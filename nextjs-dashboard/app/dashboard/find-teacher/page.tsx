"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { fetchTeachers } from '@/app/lib/actions';
import { handleAxiosError } from '@/app/lib/handleAxiosError';
import { Teacher } from './responseType';

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
    <main className="flex flex-col bg-gray-200 rounded-xl p-3">
      <div>
        {/* <form onSubmit={handleSearch} className='flex'> */}
        <form  className='flex' action='fetchTeachers()'>
          <input
            type="text"
            className='w-10/12 rounded-3xl border-0 border-b-fuchsia-900'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for teachers..."
          />
          <button type="submit" className='bg-violet-700 w-2/12 h-8 text-white self-center mx-1 rounded-full'>Search</button>
        </form>
      </div>
      

      <div className="flex flex-col bg-yellow-200 my-3">
        <strong>List of teachers</strong>
        {loading ? (
          <p>Loading...</p>
        ) : (


          allTeachers.map((teacher, index) => (
            <div key={index} className='bg-violet-300 rounded-lg p-3 m-3'>
              <h2>{teacher.description}</h2>
              <p>Locality: {teacher.locality}</p>
              <p>Complete Address: {teacher.completeAddress}</p>
              <p>Status: {teacher.status}</p>
              <h3>Teacher Information:</h3>
              <p>Name: {teacher.TeacherInfo.name}</p>
              <p>Email: {teacher.TeacherInfo.email}</p>
              <p>Phone Number: {teacher.TeacherInfo.phoneNumber}</p>
            </div>
          ))


        )}

      </div>
      <div>
        {/* page numbers */}
      </div>
    </main>
 );
}
