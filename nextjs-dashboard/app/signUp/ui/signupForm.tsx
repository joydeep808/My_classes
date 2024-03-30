
'use client';
import React, { useState } from 'react';
import StudentRegisterForm from './studentRegister';
import TeacherRegisterForm from './teacherRegister';


export default function SignUpForm(){
    
    const [userType, setUserType] = useState('');

  return (
    <div className='my-36 flex  flex-col'>
    <select value={userType} onChange={(e) => setUserType(e.target.value)}
    className=' bg-slate-200 rounded-lg w-32 self-center'>
        <option value="">Select User Type</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
    </select>

    {userType === 'teacher' ? (
        <TeacherRegisterForm />
    ) : userType === 'student' ? (
        <StudentRegisterForm />
    ) : null}
    </div>
    );
    }



         
    

    
