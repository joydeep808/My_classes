import Link from 'next/link';
import {MyClassLogoWhite} from '../ui/myclass-logo';
import SignUpForm from './ui/signupForm';

export default function SignUpPage(){
    return(
        <main>
            <Link href='./' className='flex w-[60vw] h-[20vw]  absolute md:w-[30vw] md:h-[10vw] sm:w-[50vw] sm:h-[15vw]
             -left-16 -top-1 items-center bg-violet-700 shadow-lg rounded-full text-white'>
                <div className='item-center mx-auto'>
                    <MyClassLogoWhite />
                </div>
            
            </Link>

            <div className="flex items-center  justify-center ">
                <SignUpForm />
            </div>
           

        </main>

    );
}