'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import axios from 'axios';
 
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
 
// ...
 
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
    throw new Error('Failed to Delete Invoice');

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
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

 


// Define the Zod schema

const teacherRegisterSchema = z.object({
 name: z.string().min(1, "Name must be at least 1 character long")
    .max(50, "Name must be no more than 50 characters long"),
    
 email: z.string().email(),
 completeAddress: z.string().min(1, "Complete address must be at least 1 character long").max(200, "Complete address must be no more than 200 characters long"),
 description: z.string().min(1, "Description must be at least 1 character long").max(200, "Description must be no more than 200 characters long"),
 locality: z.string().min(1, "Locality must be at least 1 character long").max(50, "Locality must be no more than 50 characters long"),
 phone: z.string()
    .min(10, "Phone number must be exactly 10 digits long")
    .max(10, "Phone number must be exactly 10 digits long")
    .refine(phone => /^\d{10}$/.test(phone), {
      message: "Phone number must be a 10 digit number",
    }),
 qualification: z.string().min(1, "Qualification must be at least 1 character long").max(50, "Qualification must be no more than 50 characters long"),
 subjectTeaching: z.string().min(1, "Subject teaching must be at least 1 character long").max(50, "Subject teaching must be no more than 50 characters long"),
});


export async function teacherRegister(
  prevState: string | undefined,
  formData: FormData
  ) {
 const formattedData = {
    "name": formData.get('name'),
    "email": formData.get('email'),
    "completeAddress": "_",
    "description": "Qualified Teacher",
    "locality": formData.get('address'),
    "phone": formData.get('contact'),
    "qualification": "not given",
    "subjectTeaching": formData.get('subject')
 };

 
 const validationResult = teacherRegisterSchema.safeParse(formattedData);

 if (!validationResult.success) {
  const errorMessages = validationResult.error.issues.map(issue => issue.message);
  console.log(errorMessages)
  return errorMessages.join(', ');
  }
  console.log(validationResult)
  

 const apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/teacher/register';

 try {
    const response = await axios.post(apiEndpoint, formattedData);
    console.log(response.data);
    return 'success';
 } catch (error) {
    console.error(error);
    return 'error';
 }

}

const studentRegisterSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character long")
     .max(50, "Name must be no more than 50 characters long"),
     
  email: z.string().email(),

  class: z.number().int().min(1, "Class must be a number between 1 and 12").max(12, "Class must be a number between 1 and 12"),
  
  phone: z.string()
     .min(10, "Phone number must be exactly 10 digits long")
     .max(10, "Phone number must be exactly 10 digits long")
     .refine(phone => /^\d{10}$/.test(phone), {
       message: "Phone number must be a 10 digit number",
     }),

    reffralId:z.string().min(1, "Name must be at least 1 character long")
    .max(12, "Name must be no more than 50 characters long"),
  
 });

export async function studentRegister(
  prevState: string | undefined,
  formData: FormData) 
  {


    const formattedData = {
        "email":formData.get('email'),
        "name":formData.get('name'),
        "phoneNumber":formData.get('contact'),
        "currentClass":formData.get('class'),
        "reffralId":'4d2cbab33c4d'    
     };

   const validationResult = teacherRegisterSchema.safeParse(formattedData);
   if (!validationResult.success) {
    const errorMessages = validationResult.error.issues.map(issue => issue.message);
    console.log(errorMessages)
    return errorMessages.join(', ');
    }
    console.log(validationResult)


    const apiEndpoint = 'https://my-classes-backend.onrender.com/api/v1/student/register';

    try {
        const response = await axios.post(apiEndpoint, formattedData);
        console.log(response.data);
        return 'success';
    } catch (error) {
        console.error(error);
        return 'error';
    }
  
}
