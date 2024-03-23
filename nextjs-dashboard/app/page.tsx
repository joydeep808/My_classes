import MyClassLogo from './ui/myclass-logo';
import Link from 'next/link';
import Image from 'next/image';
import ProfileList from './ui/teachers/profileList';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <nav className="flex shadow-lg sticky h-20 top-0 z-10 shrink-0 items-end bg-white text-white p-2 md:h-22 gap-1 md:gap-3">
      
       <MyClassLogo /> 

        <Link href="/login" className="flex justify-center  text-sm w-40 my-auto 
           rounded-full bg-indigo-700 px-1 py-2  transition-colors
          hover:bg-indigo-500 md:text-base">
            <span >Log  in / Sign up</span> 
        </Link>
        

      </nav>
      
      <div className="mt-4 flex grow flex-col gap-2 md:flex-row">
        <div className="flex flex-col justify-center items-center rounded-3xl bg-gray-300  pt-9 md:w-8/12 md:pt-2">
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
        
        <div className="flex flex-col items-center self-start justify-center  md:h-2/5 md:px-12 md:py-0 md:mb-auto">
          <strong className='font-extrabold text-2xl'>
            Teachers in Agartala</strong>
            <strong className='font-extrabold text-2xl'>
            (search bar)</strong>
            <ProfileList/>
          
        </div>

      </div>

      <div className="mt-4 flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col gap-4 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 " >
          <strong className='font-extrabold text-2xl'>
            Our Services</strong>
          <div className='flex gap-4'>
            <Link href='./dashboard' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Doubt.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='Dedicated  doubt solving' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>Dedicated  doubt solving</span></Link>

            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Mentorship.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='mentorship sessions' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>mentorship sessions</span></Link>
            
          </div>
          <div className='flex gap-4'>
            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Progress.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='progress tracking' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>progress tracking</span></Link>
            
            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Notes.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='notes and course material' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>notes and course material</span></Link>
            
            
          </div>
          <div className='flex gap-4'>
          <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Test series.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='test seeries' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>test seeries</span></Link>
            
            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Consultations.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='career consultation' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>career consultation</span></Link>
            
            
          </div>

        </div>

        <div className="flex flex-col gap-4 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 md:flex-row" >
          <strong className='font-extrabold text-2xl'>
            Batches</strong>
          <div className='flex gap-4'>
            <div  className=' flex w-60 h-20 bg-slate-300 p-2 rounded-xl'>Classes 8 to 12</div>

          </div>
          

        </div>


      </div>
    </main>
  );
}
