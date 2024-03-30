import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
 
export default function LoginPage() {
  return (
    <main >
      <Link href='./' className='flex w-[60vw] h-[20vw]  absolute md:w-[30vw] md:h-[10vw] sm:w-[50vw] sm:h-[15vw]
        -left-16 -top-1 items-center bg-violet-700 shadow-lg rounded-full text-white'>
        <div className='item-center mx-auto'>
            <MyClassLogoWhite />
        </div>
            
      </Link>


      <div className="flex items-center h-screen justify-center ">
      <LoginForm />
      </div>
        
      
    </main>
  );
}