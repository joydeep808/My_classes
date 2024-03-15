import { BookOpenIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function MyClassLogo() {
  return (
    <div
      className=" flex flex-row m-auto items-center leading-none w-4/5 h-12  text-black font-medium"
    >
      <BookOpenIcon className="w-2/12 rotate-[15deg] mx-1  md:w-16 " />
      <p className="text-[22px] md:text-[32px] w-50">My Classes</p>
    </div>
  );
}
