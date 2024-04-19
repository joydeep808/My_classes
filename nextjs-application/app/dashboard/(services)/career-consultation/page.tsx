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
                <span className="flex font-bold text-3xl sm:text-5xl md:ml-10 bg-gradient-to-b from-indigo-500 to-indigo-700 text-slate-50 p-4 rounded-bl-2xl">Career<br></br>Consultations</span>
            
                <div className="flex flex-col md:flex-row py-8 items-center">
                    <Image src='/Consultations.svg'  width={200} height={200} className='w-[15rem] md:w-[20rem] lg:w-[35rem] m-8 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl sm:text-2xl px-10 md:px-8">
                        students who are unsure of their carriers can receive appropriate guidance, <br/>
                        regarding their carrier and future goals  <br></br><br></br>

                    </p>
                </div>
            </div>

            
            
        </div>
    )
}