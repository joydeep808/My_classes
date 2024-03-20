'use client';

import {  AtSymbolIcon,  KeyIcon,  ExclamationCircleIcon,} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex gap-1 w-full max-w-[600px] mx-2 ">
      <div className="flex  mx-auto flex-col w-full  rounded-lg  px-6 py-4 ">
        <strong className="  text-4xl font-semibold my-3">
          Sign in
        </strong >
        <div className="w-full">
          <div>
            <label className=" sr-only" htmlFor="email">Email</label>
            <div className="relative border-0">
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
          </div>
          <div className="mt-4">
            <label  className="sr-only"  htmlFor="password"  >   Password  </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-full border-0 bg-gray-200 py-[9px] pl-10 text-sm p-5 placeholder:text-gray-700 placeholder:text-base"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        
        <LoginButton />
        
        
        
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
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
