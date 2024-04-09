
'use client';
import React, { useState } from 'react';
import StudentRegisterForm from './studentRegister';
import TeacherRegisterForm from './teacherRegister';


export default function SignUpForm(){
    
    const [userType, setUserType] = useState('student');

  return (
    <div className='w-10/12 mt-20 md:mt-10 flex  flex-col'>
    <select value={userType} onChange={(e) => setUserType(e.target.value)}
    className=' bg-slate-200 rounded-ss-xl rounded-ee-2xl w-32 self-start'>
        
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



         
    

    
