import { Suspense } from 'react';
import Home from '@/app/ui/home'
import Performance from './(performance)/user_performance';
import Services from '../ui/services';
import Batches from '../ui/batches';

export default async function Page() {
    return (
      <main >
        <div className='bg-slate-300'>
        <Home/>
        </div>
        <Performance  score={90} maxScore={100} circleRadius={85} stroke={20}/>
        <Services/>
        <Batches/>
        
      </main>
    );
  }