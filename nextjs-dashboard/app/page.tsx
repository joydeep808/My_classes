import MyClassLogo from './ui/myclass-logo';
import Link from 'next/link';
import Image from 'next/image';
import ProfileList from './ui/teachers/profileList';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex h-20 shrink-0 items-end text-white p-2 md:h-28 gap-1 md:gap-3">
      
       <MyClassLogo /> 

        <Link href="/login" className="flex justify-center items-center text-sm font-medium  w-24 my-auto  gap-3 self-start rounded-full bg-indigo-700 px-1 py-2  transition-colors hover:bg-indigo-500 md:text-base">
            <span >Log  in</span> 
        </Link>
        <Link href="/sign_up" className="flex justify-center w-32 my-auto  items-center gap-3 self-start 
        rounded-full bg-indigo-700 px-1 py-2 text-sm font-medium transition-colors hover:bg-indigo-500 md:text-base">
            <span>Sign Up</span> 
            
        </Link>

      </div>
      
      <div className="mt-4 flex grow flex-col gap-2 md:flex-row">
        <div className="flex flex-col justify-center items-center rounded-3xl bg-gray-300  pt-9 md:w-4/5 md:pt-2">
          <p className="flex justify-center text-2xl text-center text-gray-800  md:leading-normal">
            <strong>
            Meet the <span className="text-indigo-700"> experienced tution teachers</span> of Agartala!  
            </strong>
          </p>
          <button className='rounded-2xl bg-indigo-700 w-20 text-white p-1 font-semibold'>explore</button>
         
          <Image src='/hero-home.svg' width={900} height={100} alt='headding image' ></Image>
          <div className='bg-indigo-700 w-full text-white ' >
            <span >
              Trusted by 100 teachers and 1000+ students</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center p-3 md:w-2/5 md:px-12 md:py-0">
          <strong className='font-extrabold text-2xl'>
            Teachers in Agartala</strong>
          <ProfileList/>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col gap-2 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 md:flex-row" >
          <strong className='font-extrabold text-2xl'>
            Our Services</strong><br></br>
          <div className='flex gap-2'>
            <Link href='./' className=' flex w-40 h-40 bg-red-600 p-2 rounded-xl'>progress tracking</Link>
            <Link href='./'className='flex w-40 h-40 bg-red-600 p-2 rounded-xl'>doubt solving</Link>
          </div>
          <div className='flex gap-2'>
            <Link href='./'className=' flex w-40 h-40 bg-red-600 p-2 rounded-xl'>mentorship</Link>
            <Link href='./'className='flex w-40 h-40 bg-red-600 p-2 rounded-xl'>notes</Link>
          </div>
          <div className='flex gap-2'>
            <Link href='./'className=' flex w-40 h-40 bg-red-600 p-2 rounded-xl'>test seeries</Link>
            <Link href='./'className='flex w-40 h-40 bg-red-600 p-2 rounded-xl'>consultation</Link>
          </div>

        </div>


      </div>
    </main>
  );
}
