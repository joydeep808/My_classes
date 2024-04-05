import Image from 'next/image';
import {HeartIcon, UsersIcon } from "@heroicons/react/24/outline";

interface ProfileProps {
  pictureSrc: string;
  name: string;
  subject: string;
  qualifications: string;
  experience: string;
  locality: String;
}

const FindProfileCard: React.FC<ProfileProps> = ({ 
    
    pictureSrc = '/default_profile.svg',
    name = 'John Doe',
    subject = 'No subject',
    qualifications = 'empty',
    experience = "",
    locality = ""

 }) => {
  return (
    <div className="flex  items-center  p-4 h-60 md:h-40 bg-slate-100 shadow-sm rounded-3xl 
                    hover:shadow-2xl hover:bg-sky-50 ">
      <div className=" flex items-center mx-2 md:mx-6">
        <Image className='rounded-full w-18  ' src={pictureSrc} width={100} height={100} alt='profile picture' />
      </div>
      <div className='flex flex-col'>
        <h2 className="text-lg font-semibold">name: {name}</h2>
        <p className="text-sm text-gray-900">subject Teaching: {subject}</p>
        <p className="text-sm text-gray-900">qualifications: {qualifications}</p>
        <p className="text-sm text-gray-900">description: {experience}</p>
        <p className="text-sm text-gray-900">area: {locality}</p>
        
      </div>
      {/* <div className="flex items-center mt-auto self-end">
        <span className=" flex mr-4 items-center">
          <HeartIcon className='w-4'/> {likes}
        </span>
        <span className=" flex mr-4 items-center" >
          <UsersIcon  className='w-4'/> {followers}
        </span>
      </div> */}
    </div>
  );
};

export default FindProfileCard;
