



import Performance from "../../(performance)/user_performance"
import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {


    const linkLists = [
        { name: "note1", href: "link", description: "the one group" },
        { name: "group sfsf 2", href: "link", description: "the one g sfsfsadfroup" },
        { name: "group f sdfsa 3", href: "link", description: "the one dsfsdfas group" },
        { name: "group sfd 4", href: "link", description: "the one  dfasfgroup asfasdfas" },
        { name: "group sfasfsfasfa 5", href: "link", description: "the on sdfsae groupafasdfas fdasfasf" },
    ]

    return (
        <div className="flex flex-col  bg-gray-200 p-4">

            <div className="flex flex-col lg:flex-row gap-4 lg:flex-nowrap flex-wrap">
                <div className="flex flex-col bg-white rounded-3xl md:rounded-2xl w-full lg:w-4/6 lg:rounded-r-none">
                    <span className="flex font-bold text-3xl sm:text-5xl md:ml-10 bg-gradient-to-b from-indigo-500 to-indigo-700 text-slate-50 p-4 rounded-bl-2xl">User and <br /> Performance</span>

                    <div className="flex flex-col md:flex-row py-8 items-center">
                        <Image src='/Progress.svg' width={200} height={200} className='w-[15rem] md:w-[20rem] lg:w-[20rem] mb-8'
                            alt='performance page hero' />

                        <p className="font-medium text-xl sm:text-2xl px-10 md:px-8">
                            At My Classes Tripura, we believe in the power of data-driven insights to inform and empower students
                            on their learning journey.<br /><br />
                            That&#39;s why we provide a robust progress tracking system that allows students to
                            monitor their performance across multiple tests and assessments.<br /><br />
                            <span className="hidden xl:block">
                                By analyzing test series marks over time, students can gain valuable insights into
                                their strengths and weaknesses, identify areas for improvement, and set realistic
                                goals for academic growth.<br /><br />
                                Our intuitive tracking tools provide detailed analytics and personalized feedback,
                                enabling students to make informed decisions about their studies and chart a
                                course towards success.<br /><br /></span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around bg-white w-full lg:w-2/6 items-center rounded-xl lg:rounded-l-none">
                    <div className="rounded-full drop-shadow-xl">
                        <Performance score={60} maxScore={100} />
                    </div>
                    <div className="flex flex-col">
                        <span className="self-center font-bold text-3xl md:text-4xl m-4 text-indigo-600" >Demo Score Gague</span>
                        <p className="self-center font-semibold text-xl md:text-2xl p-12 w-full" >
                            the performace score is a easy and quick way to know your previous performace in a test </p>

                    </div>
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

            <p className="font-medium text-xl m-16 md:text-2xl  md:px-8  ">
                <span className="block xl:hidden">
                    By analyzing test series marks over time, students can gain valuable insights into
                    their strengths and weaknesses, identify areas for improvement, and set realistic
                    goals for academic growth.<br /><br />
                    Our intuitive tracking tools provide detailed analytics and personalized feedback,
                    enabling students to make informed decisions about their studies and chart a
                    course towards success.<br /><br /></span>

            </p>


        </div>
    )
}