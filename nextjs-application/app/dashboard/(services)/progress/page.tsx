
            
            
            
import Performance from "../../(performance)/user_performance"
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
                <span className="flex font-bold text-5xl md:ml-10">Progress <br/>Tracking</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Progress.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl md:text-2xl relative left-16 md:left-24 md:px-8 md:-top-16 ">
                    At My Classes Tripura, we believe in the power of data-driven insights to inform and empower students
                    on their learning journey.<br/><br/>
                    That's why we provide a robust progress tracking system that allows students to
                    monitor their performance across multiple tests and assessments.<br/><br/>
                        
                    <span className="hidden xl:block">
                        By analyzing test series marks over time, students can gain valuable insights into 
                        their strengths and weaknesses, identify areas for improvement, and set realistic
                        goals for academic growth.<br/><br/>
                        Our intuitive tracking tools provide detailed analytics and personalized feedback,
                        enabling students to make informed decisions about their studies and chart a 
                        course towards success.<br/><br/></span>
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

            <p className="font-medium text-xl m-16 md:text-2xl  md:px-8  ">
                <span className="block xl:hidden">
                    By analyzing test series marks over time, students can gain valuable insights into 
                    their strengths and weaknesses, identify areas for improvement, and set realistic
                    goals for academic growth.<br/><br/>
                    Our intuitive tracking tools provide detailed analytics and personalized feedback,
                    enabling students to make informed decisions about their studies and chart a 
                    course towards success.<br/><br/></span>

            </p>
            
        </div>
    )
}