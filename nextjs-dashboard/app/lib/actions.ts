'use server';
 
import { redirect } from 'next/navigation';
import { signIn ,auth ,signOut} from '@/auth';
import { AuthError } from 'next-auth';
import axios from 'axios';
import {handleAxiosError} from './handleAxiosError'
import { studentRegisterSchema ,teacherRegisterSchema} from './definitions';




export async function authenticate( prevState: string | undefined, formData: FormData, )
{
  try {
    await signIn('credentials', formData);

  } catch (error) {
    if (error instanceof AuthError) {
      // console.log("the error: ", error.cause?.err)
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }else if (error instanceof Error) {
      // console.log(error)
      if (error.message === 'NEXT_REDIRECT'){
        // console.log(error)
        redirect('/dashboard');
      }
      return error.message; 
    } else {
      return "An unknown error occurred";
    }
  }
}


export async function teacherRegister(prevState: string | undefined, formData: FormData)
{
  const formattedData = {
    "name": formData.get('name'),
    "email": formData.get('email'),
    "completeAddress": formData.get('address'),
    "description": formData.get('description'),
    "locality": formData.get('coachingLocation'),
    "phone": formData.get('contact'),
    "qualification": formData.get("qualifications"),
    "subjectTeaching": formData.get('subject')
  };

  const validationResult = teacherRegisterSchema.safeParse(formattedData);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(issue => issue.message);
    console.log(errorMessages)
    return errorMessages.join(', ');
  }
  // console.log(validationResult);

  const apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/teacher/register';

  try {
    const response = await axios.post(apiEndpoint, formattedData);
    console.log(response.data);
    return response.data.message ;
  } catch (error) {
    const message = handleAxiosError(error);
    // console.error(message);
    return message;
  }
}

export async function studentRegister(prevState: string | undefined, formData: FormData) 
{

  const formattedData = {
    "email": formData.get('email'),
    "name": formData.get('name'),
    "phoneNumber": formData.get('contact'),
    "currentClass": formData.get('class'),
    "reffralId": '4d2cbab33c4d',
    };

  const validationResult = studentRegisterSchema.safeParse(formattedData);

  if (!validationResult.success) {
  const errorMessages = validationResult.error.issues.map(issue => issue.message);
  console.log(errorMessages)
  return errorMessages.join(', ');
  }

  const apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/student/register';
  try {
      const response = await axios.post(apiEndpoint, formattedData);
      // console.log(response.data);
      return response.data.message;
  } catch (error) {
    // console.log(error)
    const message = handleAxiosError(error);
      return message;
    }

}

export async function userdata() {
  const data = await auth();
  // console.log(data)

  return data;
}

export async function fetchTeachers(){
  const apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/student/showTeachers';

  try{
    const response = await axios.get(apiEndpoint)
    // console.log('the data')
    // console.log(response.data);
    return response
  }catch (error){
    const message = handleAxiosError(error);
    return message;
  }
}

export async function signUserOut(){
  await signOut();
}
