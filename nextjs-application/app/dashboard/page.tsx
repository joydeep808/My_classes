import { Suspense } from 'react';
import Home from '@/app/ui/home'
import Performance from './(performance)/user_performance';
import Services from '../ui/services';
import Batches from '../ui/batches';
import ProfileList from '../ui/teachers/profileList';

export default async function Page() {
    return (
      <main >
        <div className='bg-slate-300'>
        <Home/>
        </div>
        {/* <Performance  score={90} maxScore={100} circleRadius={85} stroke={20}/> */}
        <ProfileList/>
        <Services/>
        <Batches/>
        
      </main>
    );
  }