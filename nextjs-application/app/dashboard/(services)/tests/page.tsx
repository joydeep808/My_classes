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
            <div className="flex flex-col w-full lg:w-10/12 bg-white rounded-3xl md:rounded-2xl">
                <span className="flex font-bold text-3xl sm:text-5xl md:ml-10 bg-gradient-to-b from-indigo-500 to-indigo-700 text-slate-50 p-4 rounded-bl-2xl">Tests <br/>Series</span>
            
                <div className="flex flex-col md:flex-row py-8 items-center">
                    <Image src='/Test series.svg'  width={200} height={200} className='w-[15rem] md:w-[20rem] lg:w-[35rem] mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl sm:text-2xl px-10 md:px-8">
                        A seeirs of tests conducted on a regular basis  <br/>
                        to gague the performance of a child  
                        <br></br><br></br>

                        The tests will be conducted offline <br/>
                        <br></br><br></br>

                        


                    </p>
                </div>
            </div>

            {/* <div className=" flex flex-col font-medium  text-2xl m-2 md:m-8 gap-2 mt-12">
                {linkLists.map((item) => (
                    <Link key={item.name} href={item.href}
                        className="hover:text-blue-700 self-center bg-slate-50 p-2 rounded-md  w-10/12 md:w-8/12 justify-between">  
                        <div className="text-blue-700 mx-1">{item.name} | </div> 
                        <div className=" mx-1">{item.description} </div>
                        
                    </Link>
                    
  
                ))}
            </div> */}
            
        </div>
    )
}