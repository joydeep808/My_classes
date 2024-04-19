import Image from "next/image";

const iconPerson = "/logo/Gradient-icon-person.svg"
const iconSpinner = "/logo/Gradient-icon-spinner.svg"

export default function Loading() {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <div className='relative bg-red-500 w-32'>
        <Image src={iconPerson} height={100} width={100} alt="my classes logo"
          className='w-24 isolate absolute z-10 '></Image>
        <Image src={iconSpinner} height={100} width={100} alt="my classes logo"
          className='w-[80px] isolate absolute z-0 right-5 -top-1 loading-animation-spinner'></Image>
      </div>
    </div>
  );
}


// previous loading animation

{/* <div className="w-screen h-screen grid place-content-center">
      <Image src='/logo/Gradient icon.svg' height={100} width={100} alt="my classes logo"
        className='w-24  loading-animation'></Image>
    </div> */}