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

  reffralId: z.string().min(1, "reffral must be at least 1 character long")
    .max(12, "reffral must be no more than 50 characters long"),

  password: z.string()
    .min(6,"password needs to be atleast 6 characters long")
    .max(24,"password can not be larget than 24 characters")
});

export const otprequestSchema = z.object({
  email: z.string().email(),
  otp: z.string().optional()
})

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
  
  password: z.string()
    .min(6,"password needs to be atleast 6 characters long")
    .max(24,"password can not be larget than 24 characters"),
  teacherSpecializeFor: z.string().min(1, "qualifications must be at least 1 character long").max(50, "qualificaiton must be no more than 50 characters long"),
  teachingExperience: z.string().min(0, "Teaching experience must be at least 0 years")
  .max(100, "Teaching experience must be no more than 100 years").regex(/^\d+$/,"experience needs to be a number")
  .transform(Number),

});

 export interface userCredentials{
  email: string;
  password: string;
  userType?: string;
}

export interface User{
  id: string;
  name: string;
  email: string;
  userName: string;
  emailVerified: boolean,
  phoneNumber: number,
  role: string,
}






