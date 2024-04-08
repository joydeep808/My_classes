import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import LoginForm from '@/app/login/login-form';
import Link from 'next/link';
 
export default function LoginPage() {
  return (
    <main >
      <Link href='./' className='flex w-40 h-16 md:h-20
         items-center bg-indigo-700 shadow-lg rounded-e-full text-white'>
        <div className='item-center '>
            <MyClassLogoWhite />
        </div>
            
      </Link>


      <div className="flex items-center h-screen justify-center ">
      <LoginForm />
      </div>
        
      
    </main>
  );
}