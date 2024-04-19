
import Image from "next/image"
import Link from "next/link"
export default function Page(){



    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col w-full lg:w-10/12 bg-white rounded-3xl md:rounded-2xl">
                <span className="flex font-bold text-3xl sm:text-5xl md:ml-10  text-slate-50 p-4 rounded-bl-2xl bg-gradient-to-b from-indigo-500 to-indigo-700">Mentorship <br/>Sessions</span>
            
                <div className="flex flex-col md:flex-row py-8 items-center">
                    <Image src='/Mentorship.svg'  width={200} height={200} className='w-[15rem] md:w-[20rem] lg:w-[35rem] mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-xl sm:text-2xl px-10 md:px-8">
                        my classes and it&#39;s team of faculty, <br/>
                        is here to help you with your doubts and problems 
                        anytime, throught it&#39;s communities <br></br><br></br>

                        my classes and it&#39;s team of faculty, <br/>
                        is here to help you with your doubts and problems 
                        anytime, throught it&#39;s communities<br></br><br></br>

                        


                    </p>
                </div>
            </div>

            
            
        </div>
    )
}