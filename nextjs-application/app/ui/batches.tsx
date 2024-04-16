
import {batchList} from '@/app/pageData';
import Link from 'next/link';

export default function Batches(){
    return(
        <div className="flex flex-col  gap-4 items-center justify-center  md:w-screen  md:py-6 " >
          <strong className='font-extrabold text-2xl'>
            Batches</strong>
            <div className='flex  flex-col flex-wrap md:flex-row  w-screen justify-evenly'>
              {batchList.map((batches) => (
                <Link key={batches.name} href={batches.href} className='p-4 m-2 shadow-lg rounded-2xl
                  transition-all ease-in hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-b from-slate-200 to-indigo-500/50 border-none border hover:border-indigo-700/50'>
                  <strong className=' text-xl'>{batches.name}</strong>
                  
                  <div className='flex justify-center'>
                    {batches.classes.map((cls, index) => (
                      <div key={index} className='flex bg-indigo-700 w-20 justify-center rounded-full p-2 text-slate-50 m-2 hover:text-indigo-700 hover:bg-slate-200 transition-all ease-linear border border-indigo-700/50 active:bg-slate-300'>
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