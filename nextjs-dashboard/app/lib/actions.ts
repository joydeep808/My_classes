'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn ,auth } from '@/auth';
import { AuthError } from 'next-auth';
import axios, { AxiosError } from 'axios';
import {handleAxiosError} from './handleAxiosError'
import { studentRegisterSchema ,teacherRegisterSchema} from './definitions';
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'],{invalid_type_error: 'Please select an invoice status.',}),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
   
export async function createInvoice(prevState: State, formData: FormData) {

    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
      }

      const { customerId, amount, status } = validatedFields.data;
      const amountInCents = amount * 100;
      const date = new Date().toISOString().split('T')[0];
      
    try{
        await sql` 
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
    } catch (error) { 
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function updateInvoice(
    id: string,
    prevState: State,
    formData: FormData,
  ){
    const validatedFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
 try{
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
 } catch (error){
    return {message : 'failed to update invoice',
    };
 }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
    
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Invoice.' };
      } catch (error) {
        return { message: 'Database Error: Failed to Delete Invoice.' };
      }
  }


export async function authenticate( 
  prevState: string | undefined,
  formData: FormData, 
) {
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
    }
    else if (error instanceof Error) {
      return error.message; 
    } else {
      return "An unknown error occurred";
    }
    
  }
}





export async function teacherRegister(
  prevState: string | undefined,
  formData: FormData
  ) {
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
  console.log(validationResult);

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



interface ErrorResponse {
  statusCode?: number;
  message?: string;
  success?: boolean;
  // Add other properties as needed
}


export async function studentRegister(
  prevState: string | undefined,
  formData: FormData) 
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





