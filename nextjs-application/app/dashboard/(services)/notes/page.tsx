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
            <div className="flex flex-col w-full lg:w-10/12 bg-white rounded-3xl md:rounded-2xl">
                <span className="flex font-bold text-3xl sm:text-5xl md:ml-10 bg-gradient-to-b from-indigo-500 to-indigo-700 text-slate-50 p-4 rounded-bl-2xl">Notes <br/>And <br/>Materials</span>
            
                <div className="flex flex-col md:flex-row py-8 items-center">
                    <Image src='/Notes.svg'  width={200} height={200} className='w-[15rem] md:w-[20rem] lg:w-[25rem] mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl sm:text-2xl px-10 md:px-8">
                    At My Classes Tripura, we recognize that access to high-quality 
                    study materials is crucial for academic success. <br/><br/>
                    That&#39;s why we&#39;re proud to offer a diverse range of meticulously crafted notes,
                    covering a wide array of subjects and topics, all completely free of charge.<br/><br/>
                    <span className="hidden xl:block">Designed by experienced educators who understand the needs of students,
                    each set of notes is comprehensive yet concise,
                      providing clear explanations, illustrative examples, and practical tips to aid
                       comprehension and retention.<br/><br/> Whether you&#39;re studying for exams, seeking clarification
                        on complex concepts, or simply looking to enhance your understanding, our free notes are
                         here to support you every step of the way.</span>

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
                <span className="block xl:hidden">Designed by experienced educators who understand the needs of students,
                each set of notes is comprehensive yet concise,
                    providing clear explanations, illustrative examples, and practical tips to aid
                    comprehension and retention.<br/><br/> Whether you&#39;re studying for exams, seeking clarification
                    on complex concepts, or simply looking to enhance your understanding, our free notes are
                        here to support you every step of the way.</span>

            </p>
            
        </div>
    )
}