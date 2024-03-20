import { BookOpenIcon } from '@heroicons/react/24/outline';
import { Source_Sans_3} from 'next/font/google';

const source_Sans_3 = Source_Sans_3({
  subsets: ['latin'],

})

export default function MyClassLogo() {
  return (
    <div
      className=" flex flex-row m-auto items-center leading-none w-4/5 h-12  text-black font-medium"
    >
      <BookOpenIcon className="w-8 rotate-[15deg] mx-1  md:w-12 " />
      <p className="text-lg  font-semibold">My Classes</p>
    </div>
  );
}
