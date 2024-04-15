"use client"
import axios from "axios";
import TeacherProfileLayout from "./TeacherProfileLayout";



import TeacherProfile from "./teacher-profile/TeacherProfile";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Teacher } from "../../find-teacher/ui/responseType";
import { useStore } from "@/app/StateManagement/Management";

export default function Page({params}:{params:{id:string}}){
    const router = useRouter()
    const [teacherDetails , setTeacherDetails] = useState<Teacher>()
  const {Teachers ,addTeacher} = useStore()

    useEffect(()=>{
        async function getTeacherDetails() {
            if(Teachers.length > 0){
                const Teacher = Teachers.find(e=> e.teacherId === params.id)
                if(Teacher !== undefined){
                    setTeacherDetails(Teacher)
                }
            }
            else{
                try{
                    const response = await axios.get(`http://localhost:3001/api/v1/student/get/teacher/${params.id}`)
                    console.log("Called")
                    setTeacherDetails(response.data.data[0])
                    
            }catch(error){
                router.push("/dashboard/find-teacher")
            }
            }
        }
        
        getTeacherDetails()
    },[params.id])
    return (
        <div>
            {teacherDetails && <TeacherProfileLayout TeacherInfo={teacherDetails}>
            </TeacherProfileLayout>}
        </div>
    )
}
