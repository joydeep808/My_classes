import Link from 'next/link';
import {MyClassLogoWhite} from '../ui/myclass-logo';
import SignUpForm from './ui/signupForm';

export default function SignUpPage(){
    return(
        <main>
            <Link href='./' className='flex w-[44vw] h-[45vw]  absolute sm:w-[30vw] sm:h-[32vw]
             -left-6 -top-16 items-start bg-violet-700 shadow-lg rounded-full text-white'>
            <MyClassLogoWhite />
            </Link>

            <div className="flex items-center  justify-center ">
                <SignUpForm />
            </div>
           

        </main>

    );
}