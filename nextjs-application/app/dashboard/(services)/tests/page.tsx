import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Page(){

    const linkLists = [
        {name: "test paper for class 1" , href: "link", description: "Science, Math, SocialScience"},
        {name: "test paper for class 2" , href: "link", description: "Science, Math, SocialScience"},
        {name: "test paper for class 3" , href: "link", description: "Science, Math, SocialScience"},
        {name: "test paper for class 4" , href: "link", description: "Science, Math, SocialScience"},
        {name: "test paper for class 5" , href: "link", description: "Science, Math, SocialScience"},
    ]

    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col  w-10/12 bg-white rounded-full md:rounded-2xl">
                <span className="flex font-bold text-5xl md:ml-10">Test<br/> Series</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Test series.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl md:text-2xl relative left-16 md:left-24 md:px-8 md:-top-16 ">
                    
                    
                    Preparation is key to success in any academic endeavor,
                     which is why My Classes Tripura provides comprehensive test series to help students assess their 
                     knowledge, identify areas for improvement, and track their progress over time.<br/><br/>
                     
                    Our test series cover a wide range of subjects and topics, and are designed to simulate
                    the format and difficulty level of real exams.<br/><br/>
                    
                     Each test is carefully curated by our team of educators to ensure relevance, accuracy, 
                     and educational value. <br/><br/>
                     


                    <span className="hidden xl:block">By participating in our free test series, students can hone their exam-taking skills, 
                     identify strengths and weaknesses, <br/><br/>and develop effective study strategies to maximize 
                     their performance on the big day.</span>
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
                <span className="block xl:hidden">By participating in our free test series, students can hone their exam-taking skills, 
                     identify strengths and weaknesses, <br/><br/>and develop effective study strategies to maximize 
                     their performance on the big day.</span>

            </p>
            
        </div>
    )
}