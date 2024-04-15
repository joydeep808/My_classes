'use client';

import {  KeyIcon, } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import Cookie from 'js-cookie';
import {MyClassLogoWhite} from '@/app/ui/myclass-logo';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import {verifyotp} from '@/app/lib/actions';

 
export default function Page() {
    const [errorMessage, dispatch] = useFormState(verifyotp, undefined);
    const [email, setEmail] = useState('');


    useEffect(()=>{
        if (errorMessage === 'redirect'){
          redirect("../login")
        }
        if (errorMessage){
          toast(errorMessage.split('!')[0]);
        }
      },[errorMessage]);

    useEffect(() => {
        const userEmail = Cookie.get('userEmail'); // Get the email from cookies
        
        if (userEmail) {
            setEmail(userEmail);
        } else {
            toast("No email found in cookies, redirecting back to login.");
            redirect('./login');
        }
      }, [email]);

  return (
    <main >
      <Link href='./' className='flex w-40 h-16 md:h-20
         items-center bg-indigo-700 shadow-lg rounded-e-full text-white'>
        <div className='item-center '>
            <MyClassLogoWhite />
        </div>
      </Link>


      <div className="flex items-center h-screen justify-center flex-col">
      <form  action={dispatch} className="flex gap-1  flex-col w-full px-6 max-w-[600px] mx-2 pb-40">

        <strong className="  text-4xl font-normal my-3 py-2 z-10 text-center">
        an OTP has been sent to {email}, confirm your email, enter your OTP
        </strong >

        <div className="relative border-0" >
        
        
        <input  className="hidden"
            id="email" type="text"  name="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="OTP" 
        />

        <label className=" sr-only" htmlFor="OTP">OTP</label>
        
        <input  className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
            id="OTP" type="text"  name="OTP"
            placeholder="OTP" 
        />
        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
        <SubmitButton />
        </form>
      </div>
    </main>
  );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      
        <Button className="mt-4 w-4/12 rounded-full justify-center bg-indigo-700 hover:bg-indigo-400" aria-disabled={pending}>
        {pending? "processing":"verify"} 
        </Button>
      
      
    );
  }

 