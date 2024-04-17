import Image from "next/image"
import FeedbackForm from "./feedback-form"

export default function Contact() {
  return (
    <main>
        <div className="grid place-content-center p-10">
          <h1 className="text-4xl md:text-6xl font-extrabold underline decoration-indigo-600 decoration-8 text-slate-800">Get In Touch !</h1>
        </div>
        <div className="flex m-14 md:m-24 md:mt-0 gap-16 justify-around items-center flex-wrap">
          <div className="w-full md:w-[32rem]">
            <Image src={"/contact-us.svg"} width={1000} height={1000} alt="contact" className=""></Image>
          </div>
          <div className="flex-grow flex flex-col items-center justify-between">
            <FeedbackForm/>
          </div>
        </div>
    </main>
  )
}
