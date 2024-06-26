'use client';

import {  AtSymbolIcon,  KeyIcon,EyeIcon,  ExclamationCircleIcon, UserCircleIcon,} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate, otprequest } from '@/app/lib/actions';
import Link from 'next/link';
import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { redirect } from 'next/navigation';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');

  


  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage.split('!')[0]);
      //console.log(errorMessage)

      if (errorMessage.split('!')[0] === "Please verify your email") {
        
        Cookie.remove('userEmail', { path: '/' });
        otprequest(email).then((mess: string) => {
          toast.error(mess.split('!')[0]);
          //console.log(mess)

          if (mess.split('!')[0] === "OTP send " ){
            Cookie.set('userEmail', email, { expires: 1, path: '/' });
          }
          
        })
        .catch((error) => {
          // Handle any errors that occur during the otprequest
          console.error("Error in otprequest:", error);
        });
        if(Cookie.get('userEmail')){
          redirect('login/Mail-otp');
        }
        
      }
    }
  }, [errorMessage]);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <form action={dispatch} className="flex gap-1  flex-col w-full px-6 max-w-[600px] mx-2 ">

      <strong className="  text-4xl font-semibold my-3 py-2 z-10 ">
        Sign in
      </strong >



      <div className="relative border-0" >
        <label className=" sr-only" htmlFor="email">Email</label> 
        <input
          className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
          id="email" type="email" name="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address" required
        /> <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      


      <div className="relative mt-4">
        <label  className="sr-only"  htmlFor="password"  >   Password  </label> 
        <input className="peer block w-full rounded-full border-0 bg-gray-200 
          py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
          id="password" type={showPassword ? 'text' : 'password'} name="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password" required
          minLength={6}
        /> <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        
        <button type="button"
          className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
          onClick={togglePasswordVisibility}
        > <EyeIcon className="h-[18px] w-[18px] text-gray-700" />
        </button>
      </div>



      <div className="relative border-0 mt-4">
        <label className="sr-only" htmlFor="userType">Teacher or Student</label>
        <select  className="peer block w-full rounded-full border-0 bg-gray-200
          py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
          id="userType" value={userType} 
          onChange={(e) => setUserType(e.target.value)}
          name = "userType"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    
      
      <LoginButton />

      <div className='flex justify-center text-xl my-2'>or</div>
      <div className="border-t border-gray-900 my-2"></div>
      <div className='flex justify-center text-xl my-2'>
        dont have an account? 
        <Link href='./signUp' className='text-indigo-600 font-bold px-1'>
          Sign Up</Link>
      </div>
      
      

      

    
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    
      <Button className="mt-4 w-full rounded-full justify-center bg-indigo-600 hover:bg-indigo-400" aria-disabled={pending}>
      {pending? "processing":"Log in"} 
      </Button>
    
    
  );
}
