import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';
import { handleAxiosError } from './app/lib/handleAxiosError';
import {User , userCredentials } from '@/app/lib/definitions'

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

  try {
    const response = await axios.patch(apiEndpoint, data);
   
    if (response.data.success){
      const user: User = {
        id: response.data.data._id,
        name: response.data.data.name,
        email: response.data.data.email,
        userName: response.data.data.userName,
        emailVerified:response.data.data.emailVerified,
        phoneNumber: response.data.data.phoneNumber,
        role: response.data.data.role,
      };

      console.log(user);
      return user;
    }
    return null;
    
  } catch (error) {
    const message = handleAxiosError(error)
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
          }
          catch(error){
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