
import {batchList} from '@/app/pageData';
import Link from 'next/link';

export default function Batches(){
    return(
        <div className="flex flex-col gap-4 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 " >
          <strong className='font-extrabold text-2xl'>
            Batches</strong>
            <div className='flex  flex-col md:flex-row'>
              {batchList.map((batches) => (
                <Link key={batches.name} href={batches.href} className='p-4 bg-indigo-400 m-2 shadow-lg rounded-2xl hover:bg-indigo-300'>
                  <strong>{batches.name}</strong>
                  
                  <div className='flex'>
                    {batches.classes.map((cls, index) => (
                      <div key={index} className='flex bg-slate-700 w-20 justify-center rounded-full p-2 text-white m-2'>
                        <strong>{cls}</strong>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          

        </div>
    );
}