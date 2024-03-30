
'use client';
import React, { useState } from 'react';
import {  AtSymbolIcon,  KeyIcon,EyeIcon,  ExclamationCircleIcon, UserIcon, MapPinIcon , BookOpenIcon ,AcademicCapIcon} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { teacherRegister } from '@/app/lib/actions';

export default function TeacherRegisterForm(){

    const [errorMessage,dispatch] = useFormState(teacherRegister,undefined);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return(
        <form action={dispatch} className="flex gap-1   p-6 flex-col w-full max-w-[600px]  mx-2"  >
        

            <strong className="  text-4xl font-semibold my-3 z-10">
                Welcome to our platform 
            </strong >

            <div className="relative border-0">
                <label className=" sr-only" htmlFor="email">Name</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    required
                />

                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                
            </div>

            
        
            <div className="relative border-0 mt-4">
                <label className=" sr-only" htmlFor="email">Email</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                />

                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div className="relative border-0 mt-8">
                <label className=" sr-only" htmlFor="email">address</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="address"
                    type="text"
                    name="address"
                    placeholder="enter your local address"
                    required
                />

                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div className="relative border-0 mt-4">
                <label className=" sr-only" htmlFor="email">description</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="enter a description"
                    required
                />

                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div className="relative border-0 mt-8">
                <label className=" sr-only" htmlFor="email">places you can teach</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="coachingLocation"
                    type="text"
                    name="coachingLocation"
                    placeholder="places you can teach"
                    required
                />

                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div className="relative border-0 mt-4">
                <label className=" sr-only" htmlFor="email">subject teaching</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="enter the subject you want to teach"
                    required
                />

                <BookOpenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            <div className="relative border-0 mt-4">
                <label className=" sr-only" htmlFor="email">qualifications</label>
                
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-1 placeholder:text-gray-700 placeholder:text-base"
                    id="qualifications"
                    type="text"
                    name="qualifications"
                    placeholder="enter your qualifications"
                    required
                />

                <AcademicCapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>

            

            <div className="mt-4 relative">
                <label  className="sr-only"  htmlFor="phone"  >   contact num  </label>
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 
                    py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
                    id="contact"
                    type='tel'
                    name="contact"
                    placeholder="Enter contact number"
                    required
                    maxLength={10}
                    minLength={10}
                    />
                <span className="pointer-events-none absolute left-3 top-4 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" >
                    +91
                </span>
            </div>
    
            {/* <div className="relative mt-4">
                <label  className="sr-only"  htmlFor="password"  >   Password  </label>
                
                <input
                className="peer block w-full rounded-full border-0 bg-gray-200 
                py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                <button
                type="button"
                className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                onClick={togglePasswordVisibility}
                >
                <EyeIcon className="h-[18px] w-[18px] text-gray-700" />
                </button>
                
            </div>

            <div className="mt-4 relative">
                <label  className="sr-only"  htmlFor="2nd password"  >   Password  </label>
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 
                    py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
                    id="password2"
                    type='password'
                    name="password2"
                    placeholder="Enter password again"
                    required
                    minLength={6}
                    />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div> */}

            <SignUpButton/>
            
            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                <>
                    <ExclamationCircleIcon className="h-5 w-5 text-orange-500" />
                    <p className="text-sm ">{errorMessage}</p>
                </>
                )}
            </div>
        </form >

    );
}

function SignUpButton() {
    const { pending } = useFormStatus();
    return (
      
        <Button className="mt-4 w-full rounded-full justify-center bg-indigo-600 hover:bg-indigo-400" aria-disabled={pending}>
        {pending? "processing":"Sign up"} 
        </Button>
      
      
    );
  }