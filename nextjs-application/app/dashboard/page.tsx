"use client"
import { Suspense } from 'react';
import Home from '@/app/ui/home'
import Performance from './(performance)/user_performance';
import Services from '../ui/services';
import Batches from '../ui/batches';
import ProfileList from '../ui/teachers/profileList';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
 

export default function Page() {

  useEffect(()=>{
    
      toast("hello! \nthis site is under construction \nwe are launching soon ");
    
  },[])


    return (
      <main >
        <div className='bg-slate-300'>
        <Home/>
        </div>
        {/* <Performance  score={90} maxScore={100} circleRadius={85} stroke={20}/> */}
        <ProfileList/>
        <Services/>
        
        
        <Batches/>
        <Toaster/>
        
      </main>
    );
  }