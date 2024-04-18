import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Performance from "../../(performance)/user_performance"
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
                <span className="flex font-bold text-5xl md:ml-10">User  <br/> And <br/> Performance</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Progress.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='performance page hero' />
                    
                    <p className="font-medium text-2xl relative left-16 md:px-8">
                        tract the progress of the students conducted through the tests, <br/> <br/>
                        the progress gague is used to give the student a history of their performance 
                        so they can use the previous test performance as refrence and improve
                        

                     

                        


                    </p>
                </div>
            </div>
            <div className="flex flex-col my-10 bg-slate-300 rounded-e-full ">
                <span className="self-center font-semibold text-3xl m-4 " >Demo Score Gague</span>
                <div className="flex flex-col md:flex-row">
                    <div className="bg-white rounded-e-full flex justify-end px-4 w-9/12 md:w-7/12">
                        <Performance  score={60} maxScore={100} />                                                                                                                                                                             
                    </div>
                    <span className="self-center font-semibold text-3xl m-4 w-fit" >
                        the performace score <br/>is a easy and quick<br/> way to know<br/>
                         your previous<br/> performace in a test </span>
                </div>
                

            </div>
            
            <div className=" flex flex-col font-medium  text-2xl m-2 md:m-8 gap-2 mt-12 ">
                <span className="self-center font-semibold text-3xl m-4 " >Test history</span>
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