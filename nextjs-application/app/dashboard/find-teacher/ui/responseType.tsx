// types.ts
export interface Teacher {
    _id: string;
    name: string;
    email: string;
    phoneNumber: number;
  }
  
  export interface TeacherInfo {
    _id: string;
    name: string;
    email: string;
    phoneNumber: number;
  }
  
  export interface Teacher {
    _id: string;
    teacherId: string;
    description: string;
    qualification: string;
    subjectTeaching: string[];
    locality: string;
    completeAddress: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
    Teachers: Teacher[];
    TeacherInfo: TeacherInfo;
  }
  
  export interface ApiResponse {
    statusCode: number;
    message: string;
    data: Teacher[];
    success: boolean;
  }
  