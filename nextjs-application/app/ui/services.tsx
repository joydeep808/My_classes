
import Image from 'next/image';
import {servicesList} from '@/app/pageData';
import Link from 'next/link';

export default function Services(){
    return(
        <div className="mt-4 flex flex-col gap-2 items-center justify-center p-1 md:w-screen   ">
        
        <strong className='font-extrabold text-2xl'>
          Our Services</strong>


        <div className='flex justify-evenly flex-wrap gap-6 md:gap-8  w-screen'>

          {servicesList.map((item) => {
            return(
              <Link key={item.name} href={item.href} className=' hover:shadow-2xl relative flex flex-col w-40 shadow-lg rounded-3xl h-auto transition-all ease-in items-center hover:scale-105' >
              <Image src={item.imagesrc}  width={100} height={100} className='w-48 h-40 mx-3' alt={item.name} ></Image>
              <span className='font-bold text-sm p-2'>{item.name}
              </span>
              </Link>
            )
          })}
        </div>
    </div>
    );
}