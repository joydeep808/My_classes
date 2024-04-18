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
                <span className="flex font-bold text-5xl md:ml-10">Career<br></br>Consultations</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Consultations.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-2xl relative left-16 md:px-8">
                        students who are unsure of their carriers can receive appropriate guidance, <br></br> 
                        regarding their carrier and future goals  <br></br><br></br>

                        

                        


                    </p>
                </div>
            </div>

            
            
        </div>
    )
}