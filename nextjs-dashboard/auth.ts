import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import axios, { AxiosError } from 'axios';
import { handleAxiosError } from './app/lib/handleAxiosError';
interface userCredentials{
  email: string;
  password: string;
  userType?: string;
}

export async function getUser(data : userCredentials) {
  console.log('get user funciton')

  console.log(data)
  
  let apiEndpoint;

 if (data.userType === "student") {
    apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/student/login';
 } else {
    apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/teacher/login';
 }

  delete data.userType;
  // console.log("the data: ",data);
  // console.log("the api: ", apiEndpoint)
  
  try {
    const response = await axios.patch(apiEndpoint, data);
   
    // console.log('response data')
    if (response.data.success){
      // console.log(response.data);
      response.data.data.password = 0;
      return response.data.data;
    }
    // console.log(response.data.message);
    return null;
    
  } catch (error) {
    // console.error('Error logging in:', error);
    const message = handleAxiosError(error)
    // console.log("the message",message)
    throw new Error(message);
    
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({


    async authorize(credentials) {
      
      const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) ,userType: z.string()})
        .safeParse(credentials);

        if (parsedCredentials.success) {
            
            try{
              const user = await getUser(parsedCredentials.data);
              if (!user) return null;
              
              return user;

            }catch(error){
              if (error instanceof Error) {
                // console.log(error.message)
                throw new Error(error.message); 
              } else {
                throw new Error("An unknown error occurred");
              }

            }
            

        }
        console.log('Invalid credentials');
        return null;
    },


  }),
 ],
});