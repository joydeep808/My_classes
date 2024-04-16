'use server';
 
import { redirect } from 'next/navigation';
import { signIn ,auth ,signOut} from '@/auth';
import { AuthError } from 'next-auth';
import axios from 'axios';
import {handleAxiosError} from './handleAxiosError'
import { studentRegisterSchema ,teacherRegisterSchema,otprequestSchema} from './definitions';




export async function authenticate( prevState: string | undefined, formData: FormData, )
{
  try {
    await signIn('credentials', formData);

  } catch (error) {
    
    if (error instanceof AuthError) {

      console.log("the error: ", error.cause?.err)
      return error.cause?.err?.message + "!" + (new Date)


    }else if (error instanceof Error) {
      // console.log(error)
      if (error.message === 'NEXT_REDIRECT'){
        // console.log(error)
        redirect('/dashboard');
      }
      return error.message + "!" + (new Date); 
    } else {
      return "An unknown error occurred"+ "!" + (new Date);
    }
  }
}

export async function otprequest( email: string )
{

  const formattedData = {
    "email": email,
  };
  const validationResult = otprequestSchema.safeParse(formattedData);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(issue => issue.message);
    console.log(errorMessages)
    return errorMessages.join(', ')+ "!" + (new Date);
  }
  const apiEndpoint = `${process.env.BACKEND_URL}/user/generateEmailOTP`;

  // console.log("formatted data",formattedData, "\n api: ", apiEndpoint)
  try {
    console.log('request done')
    const response = await axios.put(apiEndpoint, formattedData);
    console.log("response", response);
    return response.data.message + "!" + (new Date);
  } catch (error) {
    const message = handleAxiosError(error);
    console.log(message);
    return message + "!" + (new Date);
  }
  
}

export async function verifyotp( prevState: string | undefined, formData: FormData, )
{
  const formattedData = {
    "email": formData.get('email'),
    "otp": formData.get('OTP')
  };
  const validationResult = otprequestSchema.safeParse(formattedData);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(issue => issue.message);
    console.log(errorMessages)
    return errorMessages.join(', ')+ "!" + (new Date);
  }
  const apiEndpoint = `${process.env.BACKEND_URL}/user/verify/email`;

  // console.log("formatted data",formattedData, "\n api: ", apiEndpoint)
  try {
    const response = await axios.put(apiEndpoint, formattedData);
    console.log(response.data);
    
    if (response.data.success === true){
      return 'redirect'
    }
    return response.data.message + "!" + (new Date);

  } catch (error) {
    const message = handleAxiosError(error);
    // console.error(message);
    return message + "!" + (new Date);
  }
  
}




export async function teacherRegister(prevState: string | undefined, formData: FormData)
{

  if (formData.get('password') !== formData.get('password2')){
    console.log('dont match2')
    return "passowrds dont match "+ "!" + (new Date);
  }

  const formattedData = {
    "name": formData.get('name'),
    "email": formData.get('email'),
    "completeAddress": formData.get('address'),
    "description": formData.get('description'),
    "locality": formData.get('coachingLocation'),
    "phone": formData.get('contact'),
    "qualification": formData.get("qualifications"),
    "subjectTeaching": formData.get('subject'),
    "password":formData.get('password'),
    "teacherSpecializeFor":formData.get('specializefor'),
    "teachingExperience":formData.get('teachingexperience')
  };

  const validationResult = teacherRegisterSchema.safeParse(formattedData);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(issue => issue.message);
    console.log(errorMessages)
    return errorMessages.join(', ')+ "!" + (new Date);
  }
  // console.log(validationResult);

  const apiEndpoint = `${process.env.BACKEND_URL}/teacher/register`;

  try {
    const response = await axios.post(apiEndpoint, formattedData);
    
    return response.data.message + "!" + (new Date);
  } catch (error) {
    const message = handleAxiosError(error);
    
    return message + "!" + (new Date);

  }
}

export async function studentRegister(prevState: string | undefined, formData: FormData) 
{
  // OTP send to you email 

  if (formData.get('password') !== formData.get('password2')){
    console.log('dont match2')
    return "passowrds dont match "+ "!" + (new Date);
  }

  const formattedData = {
    "email": formData.get('email'),
    "name": formData.get('name'),
    "phoneNumber": formData.get('contact'),
    "currentClass": formData.get('class'),
    "reffralId": '4d2cbab33c4d',
    "password": formData.get('password')
    };

  const validationResult = studentRegisterSchema.safeParse(formattedData);

  if (!validationResult.success) {
  const errorMessages = validationResult.error.issues.map(issue => issue.message);
  console.log(errorMessages)
  return errorMessages.join(', ') + "!" + (new Date);
  }

  const apiEndpoint = `${process.env.BACKEND_URL}/student/register`;
  // console.log(apiEndpoint)
  try {
      const response = await axios.post(apiEndpoint, formattedData);
      // console.log(response.data);
      return response.data.message + "!" + (new Date);
  } catch (error) {
    // console.log(error)
    const message = handleAxiosError(error);
      return message + "!"+(new Date);
    }

}

export async function userdata() {
  const data = await auth();
  // console.log(data)

  return data;
}

export async function fetchTeachers(){
  const apiEndpoint = `${process.env.BACKEND_URL}/student/showTeachers`;

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

export async function backendFetch() {
  return process.env.BACKEND_URL;
  
}
