import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
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

  try {
    const response = await axios.patch(apiEndpoint, data);
   
    if (response.data.success){
      delete response.data.data.password;
      delete response.data.data.incorrectPasswordCounter;
      delete response.data.data.isAccountBlocked;
      delete response.data.data.createdAt;
      delete response.data.data.updatedAt;
      delete response.data.data.__v;
      delete response.data.data.sessionToken;
      delete response.data.data.refreshToken;
      delete response.data.data.isAccountFreez;
      console.log(response.data.data)
      return response.data.data;
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