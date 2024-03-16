// import AcmeLogo from '@/app/ui/acme-logo';
import MyClassLogo from './ui/myclass-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex h-20 shrink-0 items-end text-white p-2 md:h-28 gap-1 md:gap-3">
      
       <MyClassLogo /> 

        

        <Link href="/login" className="flex justify-center w-32 my-auto items-center gap-3 self-start rounded-full bg-indigo-700 px-6 py-3 text-sm font-medium  transition-colors hover:bg-indigo-500 md:text-base">
            <span>Log  in</span> 
            {/* <ArrowRightIcon className="w-5 md:w-6" /> */}
        </Link>



        <Link href="/sign_up" className="flex justify-center w-32 my-auto  items-center gap-3 self-start rounded-full bg-indigo-700 px-6 py-3 text-sm font-medium transition-colors hover:bg-indigo-500 md:text-base">
            <span>Sign Up</span> 
            {/* <ArrowRightIcon className="w-5 md:w-6" /> */}
        </Link>

      </div>
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center  rounded-2xl bg-gray-200 px-6 py-10 md:w-2/5 md:px-16">
          <p className="flex justify-center text-2xl text-center text-gray-800  md:leading-normal">
            <strong>Find the <span className="text-indigo-700">
              Perfect Teacher 
            </span><br></br>
            nearby </strong> 
          </p>
          
          <p className="text-center">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          
          <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
        </div>
      </div>
    </main>
  );
}
