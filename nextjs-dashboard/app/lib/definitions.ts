import {z} from 'zod';

export const studentRegisterSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character long")
    .max(50, "Name must be no more than 50 characters long"),
     
  email: z.string().email(),

  currentClass: z.string().refine(classString => {
    const classNumber = parseInt(classString);
    return !isNaN(classNumber) && classNumber >= 1 && classNumber <= 12;
  }, {
    message: "Class must be a number between 1 and 12",
  }),

  phoneNumber: z.string()
    .min(10, "Phone number must be exactly 10 digits long")
    .max(10, "Phone number must be exactly 10 digits long")
    .refine(phone => /^\d{10}$/.test(phone), {
      message: "Phone number must be a 10 digit number",
    }),

  reffralId: z.string().min(1, "Name must be at least 1 character long")
    .max(12, "Name must be no more than 50 characters long"),
});


export const teacherRegisterSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character long")
     .max(50, "Name must be no more than 50 characters long"),
     
  email: z.string().email(),
  completeAddress: z.string().min(1, "Complete address must be at least 1 character long").max(200, "Complete address must be no more than 200 characters long"),
  description: z.string().min(1, "Description must be at least 1 character long").max(200, "Description must be no more than 200 characters long"),
  locality: z.string().min(1, "Locality must be at least 1 character long").max(100, "Locality must be no more than 50 characters long"),
  phone: z.string()
     .min(10, "Phone number must be exactly 10 digits long")
     .max(10, "Phone number must be exactly 10 digits long")
     .refine(phone => /^\d{10}$/.test(phone), {
       message: "Phone number must be a 10 digit number",
     }),
  qualification: z.string().min(1, "Qualification must be at least 1 character long").max(50, "Qualification must be no more than 50 characters long"),
  subjectTeaching: z.string().min(1, "Subject teaching must be at least 1 character long").max(50, "Subject teaching must be no more than 50 characters long"),
 });





export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
