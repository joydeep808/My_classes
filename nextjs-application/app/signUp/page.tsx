import Link from 'next/link';
import {MyClassLogoWhite} from '../ui/myclass-logo';
import SignUpForm from './ui/signupForm';

export default function SignUpPage(){
    return(
        <main>
            <Link href='./' className='flex w-40 h-16 md:h-20
         items-center bg-indigo-700 shadow-lg rounded-e-full text-white'>
                <div className='item-center '>
                    <MyClassLogoWhite />
                </div>
            
            </Link>

            <div className="flex items-center  justify-center ">
                <SignUpForm />
            </div>
           

        </main>

    );
}