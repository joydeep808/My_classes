import { BookOpenIcon } from '@heroicons/react/24/outline';
import { Source_Sans_3} from 'next/font/google';
import Image from 'next/image';

const source_Sans_3 = Source_Sans_3({
  subsets: ['latin'],

})

export function MyClassLogoBlack() {
  return (
    <div
      className=" flex flex-row m-auto  items-center justify-start leading-none w-4/5 h-12   font-medium"
    >
      {/* <BookOpenIcon className="w-8 rotate-[15deg] mx-1  md:w-12 " /> */}
      <Image src='/logo/Black icon.svg' height={100} width={100} alt="my classes logo"
      className='w-12 mx-2'></Image>
      <p className="text-lg  font-semibold">My Classes</p>
    </div>
  );
}

export function MyClassLogoWhite() {
  return (
    <div
      className=" flex flex-row m-auto  items-center justify-start leading-none w-4/5 h-12   font-medium"
    >
      {/* <BookOpenIcon className="w-8 rotate-[15deg] mx-1  md:w-12 " /> */}
      <Image src='/logo/White icon.svg' height={100} width={100} alt="my classes logo"
      className='w-12 mx-2'></Image>
      <p className="text-lg  font-semibold">My Classes</p>
    </div>
  );
}

export function MyClassLogoGradient() {
  return (
    <div
      className=" flex flex-row m-auto  items-center justify-start leading-none w-4/5 h-12   font-medium"
    >
      {/* <BookOpenIcon className="w-8 rotate-[15deg] mx-1  md:w-12 " /> */}
      <Image src='/logo/Gradient icon.svg' height={100} width={100} alt="my classes logo"
      className='w-12'></Image>
      <p className="text-lg  font-semibold">My Classes</p>
    </div>
  );
}