
import {batchList} from '@/app/pageData';
import Link from 'next/link';

export default function Batches(){
    return(
        <div className="flex flex-col  gap-4 items-center  justify-center  md:w-screen  md:py-6 my-3" >

          <strong className='font-extrabold text-2xl'>
            Batches</strong>

          <div className='flex  justify-evenly flex-wrap  gap-6 md:gap-8 p-2 w-screen  '>

            {batchList.map((batches) => (
              <Link key={batches.name} href={batches.href} className='flex flex-col bg-gradient-to-b
              from-slate-50 to-indigo-200  shadow-lg rounded-2xl transition-all ease-in
               border hover:scale-105 hover:shadow-2xl   hover:border-indigo-700
                     h-auto  items-center p-4 m-2 
                  '>
                <strong className=' text-xl '>{batches.name}</strong>
                
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