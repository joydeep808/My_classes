import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Page(){

    const linkLists = [
        {name: "Entrance test paper for class 1" , href: "link", description: "Science, Math, SocialScience"},
        {name: "Entrance test paper for class 2" , href: "link", description: "Science, Math, SocialScience"},
        {name: "Entrance test paper for class 3" , href: "link", description: "Science, Math, SocialScience"},
        {name: "Entrance test paper for class 4" , href: "link", description: "Science, Math, SocialScience"},
        {name: "Entrance test paper for class 5" , href: "link", description: "Science, Math, SocialScience"},
    ]

    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col  w-10/12 bg-white rounded-full md:rounded-2xl">
                <span className="flex font-bold text-5xl md:ml-10">Entrance<br/> Guidance</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Mentorship.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl md:text-2xl relative left-16 md:left-24 md:px-8 md:-top-16 ">
                    
                    
                    Navigating the competitive landscape of entrance exams can be daunting,
                     but with My Classes Tripura by your side, you don&#39;t have to go it alone.<br/><br/>
                     
                    Our team of experienced educators offers expert guidance and support to help 
                    students prepare effectively for entrance exams in their chosen field. <br/><br/>
                    
                    From comprehensive exam syllabus breakdowns to targeted study plans and time management strategies,
                     we provide the resources and expertise students need to succeed. 

                    
                     


                    <span className="hidden xl:block"> <br/>Whether you&#39;re aiming for engineering, medicine, or any other competitive field, our free 
                    entrance guidance services are designed to equip you with the knowledge, skills, and 
                    confidence to excel on exam day and beyond.</span>
                    </p>
                </div>
            </div>

           
            

            

            <div className=" flex flex-col font-medium  text-2xl m-2 md:m-8 gap-2 mt-12">
                {linkLists.map((item) => (
                    <Link key={item.name} href={item.href}
                        className="hover:text-blue-700 self-center bg-slate-50 p-2 rounded-md  w-10/12 md:w-8/12 justify-between">  
                        <div className="text-blue-700 mx-1">{item.name} | </div> 
                        <div className=" mx-1">{item.description} </div>

                    </Link>

                ))}
            </div>

            <p className="font-medium text-xl m-16 md:text-2xl  md:px-8  ">
                <span className="block xl:hidden">Whether you&#39;re aiming for engineering, medicine, or any other competitive field, our free 
                    entrance guidance services are designed to equip you with the knowledge, skills, and 
                    confidence to excel on exam day and beyond.</span>

            </p>
            
        </div>
    )
}