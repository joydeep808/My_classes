import Image from 'next/image';
import {HeartIcon, UsersIcon } from "@heroicons/react/24/outline";

interface ProfileProps {
  pictureSrc: string;
  name: string;
  subject: string;
  likes: number;
  followers: number;
}

const ProfileCard: React.FC<ProfileProps> = ({ 
    
    pictureSrc = '/default_profile.svg',
    name = 'John Doe',
    subject = 'No subject',
    likes = 0,
    followers = 0

 }) => {
  return (
    <div className="flex flex-col items-center w-32 h-44 p-4 rounded-lg">
      <div className=" flex items-center mx-auto">
        <Image className='rounded-full w-14' src={pictureSrc} width={100} height={100} alt='profile picture' />
      </div>
      <div className='flex flex-col'>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-900">{subject}</p>
        
      </div>
      <div className="flex items-center mt-auto self-end">
          <span className=" flex mr-4 items-center">
            <HeartIcon className='w-4'/> {likes}
          </span>
          <span className=" flex mr-4 items-center" >
           <UsersIcon  className='w-4'/> {followers}
          </span>
        </div>
    </div>
  );
};

export default ProfileCard;
