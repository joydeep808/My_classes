"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Teacher {
    id: number;
    name: string;
    videoLink: string;
    description: string;
   }

export default function Page() {
 const [searchQuery, setSearchQuery] = useState<string>('');
 const [searchResults, setSearchResults] = useState<Teacher[]>([]);
 const [loading, setLoading] = useState<boolean>(false);
 const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setItemsPerPage] = useState(10);

 useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Teacher[]>('YOUR_API_ENDPOINT');
        setAllTeachers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
 }, []);

 useEffect(() => {
    const filteredTeachers = allTeachers.filter(teacher =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredTeachers);
 }, [searchQuery, allTeachers]);

 useEffect(() => {
    const indexOfLastTeacher = currentPage * itemsPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
    const currentTeachers = searchResults.slice(indexOfFirstTeacher, indexOfLastTeacher);
    // You can set a state here if you need to use currentTeachers outside this useEffect
 }, [searchResults, currentPage, itemsPerPage]);

 useEffect(() => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchResults.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    // You can set a state here if you need to use pageNumbers outside this useEffect
 }, [searchResults, itemsPerPage]);

 const search = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get<Teacher[]>(`YOUR_API_ENDPOINT?query=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
 };

 const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchQuery);
 };

 return (
    <main className="flex flex-col bg-gray-200 rounded-xl p-3">
      <div>
        {/* <form onSubmit={handleSearch} className='flex'> */}
        <form  className='flex'>
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
      

      <div className="flex flex-col bg-red-300 my-3">
        <strong>List of teachers</strong>
        {loading ? (
          <p>Loading...</p>
        ) : (
          searchResults.map((teacher) => (
            <div key={teacher.id} style={{ width: '18rem', marginBottom: '1rem' }}>
              <div>
                <div>{teacher.name}</div>
                <div className="mb-2 text-muted">Teacher ID: {teacher.id}</div>
                <div>{teacher.description}</div>
                <a href={teacher.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
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
