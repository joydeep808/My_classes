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
                <span className="flex font-bold text-5xl md:ml-10">Mentorship <br/>Sessions</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Mentorship.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl md:text-2xl relative left-16 md:left-24 md:px-8 md:-top-16 ">
                    My classes will also help you find mentors that can act as personal guides 
                    that help you every setep of your way.<br/>
                    Discover a community where ambitious learners
                     meet seasoned professionals. <br/><br/>At My Classes Tripura,
                      we bridge the gap between knowledge seeking and expertise by providing
                       personalized mentorship in various fields.<br/><br/> Whether you&#39;re starting a new career,
                        scaling up in your current field, or exploring new interests,
                         our mentors are here to guide you every step of the way
                    
                    </p>
                </div>
            </div>

            
            

            

            
            
        </div>
    )
}