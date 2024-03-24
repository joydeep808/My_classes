
'use client';
import React, { useState } from 'react';
import {  AtSymbolIcon,  KeyIcon,EyeIcon,  ExclamationCircleIcon,} from '@heroicons/react/24/outline';

export default function SignUpForm(){
    
    const [role, setRole] = useState('');
    
    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value);
    };
    

    return(
        <form className="flex gap-1   flex-col w-full max-w-[600px] p-6 mx-2"  >
        

            <strong className="  text-4xl font-semibold my-3 z-10">
                Sign in
            </strong >
        
            <div className="relative border-0">
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
    
            <div className="mt-4 relative">
                <label  className="sr-only"  htmlFor="password"  >   Password  </label>
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 
                    py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
                    id="password"
                    type='password'
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                    />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
            </div>

            <div className="mt-4 relative">
                <label  className="sr-only"  htmlFor="phone"  >   contact num  </label>
                <input
                    className="peer block w-full rounded-full border-0 bg-gray-200 
                    py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
                    id="contact"
                    type='number'
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

            <div className="mt-4 relative">
                <label className="sr-only" htmlFor="role">Role</label>
                <div>
                    <input
                    type="radio"
                    id="teacher"
                    name="role"
                    value="teacher"
                    checked={role === 'teacher'}
                    onChange={handleRoleChange}
                    />
                    <label htmlFor="teacher">Teacher</label>
                </div>
                <div>
                    <input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                    checked={role === 'student'}
                    onChange={handleRoleChange}
                    />
                    <label htmlFor="student">Student</label>
                </div>
                </div>


            
            


        </form >
    )
}