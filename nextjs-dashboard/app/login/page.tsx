import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
 
export default function LoginPage() {
  return (
    <main >
      <Link href='./' className='flex w-[44vw] h-[45vw]  absolute sm:w-[30vw] sm:h-[32vw]
       -left-6 -top-16 items-start bg-violet-700 shadow-lg rounded-full text-white'>
         <MyClassLogoWhite />
      </Link>


      <div className="flex items-center h-screen justify-center ">
      <LoginForm />
      </div>
        
      
    </main>
  );
}