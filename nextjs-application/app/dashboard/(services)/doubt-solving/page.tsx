import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Page(){

    const linkLists = [
        {name: "class 1" , href: "link", description: "Science, Math, SocialScience"},
        {name: "class 2" , href: "link", description: "Science, Math, SocialScience"},
        {name: "class 3" , href: "link", description: "Science, Math, SocialScience"},
        {name: "class 4" , href: "link", description: "Science, Math, SocialScience"},
        {name: "class 5" , href: "link", description: "Science, Math, SocialScience"},
    ]

    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col  w-10/12 bg-white rounded-full md:rounded-2xl">
                <span className="flex font-bold text-5xl md:ml-10">Dedicated  <br/>Doubt<br/>Solving</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Doubt.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl md:text-2xl relative left-16 md:left-24 md:px-8 md:-top-16 ">
                    At My Classes Tripura, we believe that no question should go unanswered.<br/><br/>
                    That's why we offer a dedicated doubt-solving service staffed by a team
                    of experienced teachers who are passionate about helping students succeed.<br/><br/>
                    


                    <span className="hidden xl:block">
                    Whether you're grappling with a tricky math problem, puzzling over a scientific concept,
                     or seeking clarification on a literary text, our experts are here to provide
                      personalized guidance and support.<br/><br/>  
                    Through one-on-one interactions, detailed explanations, and targeted assistance,
                    we aim to empower students to overcome obstacles, build confidence, and achieve their academic goals.</span>
                    </p>
                </div>
            </div>


            <Link href="https://wa.link/lgxatm" target="_blank" 
                className="flex items-center  bg-green-500 text-white p-3 rounded-lg text-xl mt-16 mx-4
                 hover:bg-green-600 transition duration-200 ease-in-out justify-center gap-4 md:gap-16">
                    <Image src="/whatsapp.svg" width={100} height={100} className="w-20" alt="wp icon"/>
                     <span>Join our WhatsApp Group</span>
            </Link>


  
            <p className="font-medium text-xl m-16 md:text-2xl  md:px-8  ">
                <span className="block xl:hidden">
                    Whether you're grappling with a tricky math problem, puzzling over a scientific concept,
                    or seeking clarification on a literary text, our experts are here to provide
                    personalized guidance and support.<br/><br/>  
                    Through one-on-one interactions, detailed explanations, and targeted assistance,
                    we aim to empower students to overcome obstacles, build confidence, and achieve their academic goals.</span>

            </p>
            
        </div>
    )
}