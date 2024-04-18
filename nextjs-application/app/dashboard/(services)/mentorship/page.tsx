
import Image from "next/image"
import Link from "next/link"
export default function Page(){



    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col  w-10/12 bg-white rounded-full md:rounded-2xl">
                <span className="flex font-bold text-5xl md:ml-10">Mentorship <br/>Sessions</span>
            
                <div className="flex flex-col md:flex-row">
                    <Image src='/Mentorship.svg'  width={200} height={200} className=' w-[20rem] lg:w-[35rem] relative left-16 mb-8'
                    alt='doubt solving page hero' />

                    <p className="font-medium text-2xl relative left-16 md:px-8 md:left-24">
                        my classes and it&#39s team of faculty, <br/>
                        is here to help you with your doubts and problems 
                        anytime, throught it&#39s communities <br></br><br></br>

                        my classes and it&#39s team of faculty, <br/>
                        is here to help you with your doubts and problems 
                        anytime, throught it&#39s communities<br></br><br></br>

                        


                    </p>
                </div>
            </div>

            
            
        </div>
    )
}