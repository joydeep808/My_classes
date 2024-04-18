import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Page(){

    const linkLists = [
        {name: "note1" , href: "link", description: "the one group"},
        {name: "group sfsf 2" , href: "link", description: "the one g sfsfsadfroup"},
        {name: "group f sdfsa 3" , href: "link", description: "the one dsfsdfas group"},
        {name: "group sfd 4" , href: "link", description: "the one  dfasfgroup asfasdfas"},
        {name: "group sfasfsfasfa 5" , href: "link", description: "the on sdfsae groupafasdfas fdasfasf"},
    ]

    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col  w-10/12 bg-white rounded-full md:rounded-2xl">
                <span className="flex font-bold text-5xl md:ml-10">Notes <br/>And <br/>Materials</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Notes.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-2xl relative left-16 md:px-8">
                        my classes and it&#39;s team of faculty, <br/>
                        is here to help you with your doubts and problems 
                        anytime, throught it&#39;s communities <br></br><br></br>

                        my classes and it&#39;s team of faculty, <br/>
                        is here to help you with your doubts and problems 
                        anytime, throught it&#39;s communities<br></br><br></br>

                        


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
            
        </div>
    )
}