import Image from "next/image"
import {
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline"

export default function Contact() {
  return (
    <main>
        <div className="grid place-content-center p-10">
          <h1 className="text-4xl md:text-6xl font-extrabold underline decoration-indigo-600 decoration-8 text-slate-800">Get In Touch !</h1>
        </div>
        <div className="flex m-14 md:m-24 md:mt-0 gap-16 justify-around flex-wrap">
          <div className="w-full md:w-[32rem]">
            <Image src={"/contact-us.svg"} width={1000} height={1000} alt="contact" className=""></Image>
          </div>
          <div className="flex flex-col gap-10 items-center lg:items-start justify-around text-lg sm:text-2xl font-semibold ">

            <a href="mailto:support@myclassestripura.com" className="group/item flex flex-row gap-4 items-center hover:text-indigo-600 transition-all" target="_blank"><EnvelopeIcon className="w-6 md:w-8 group-hover/item:-translate-y-1 transition-all "/>support@myclassestripura.com</a>

            <div className="flex flex-col gap-6">
              <h2 className="border-b-4 border-slate-300 border-dashed">Give us a call at :</h2>
              <div className="group/item flex flex-row gap-4 items-center hover:text-indigo-600 transition-all"><PhoneIcon className="w-6 md:w-8 group-hover/item:-translate-y-1 transition-all"/>+918794919460</div>
              <div className="group/item flex flex-row gap-4 items-center hover:text-indigo-600 transition-all"><PhoneIcon className="w-6 md:w-8 group-hover/item:-translate-y-1 transition-all"/>+919863644922</div>
            </div>

          </div>
        </div>
    </main>
  )
}
