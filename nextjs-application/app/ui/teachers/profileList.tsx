import ProfileCard from './profilecard';
import {profiles} from '@/app/pageData'


const ProfileList = () => {
  return (

    <div className="flex flex-col items-center self-start justify-center  md:h-2/5 md:px-2 md:py-0 md:mb-auto ">
      <strong className='font-extrabold text-2xl'>
        Top Rated Teachers</strong>

      <div className='flex  overflow-x-auto  w-screen gap-5     '>
        {profiles.map((profile, index) => (
          <div key={index} className='flex-shrink-0  bg-slate-50 shadow-xl rounded-3xl hover:shadow-2xl my-5'>
            <ProfileCard  {...profile} />
          </div>
        ))}
      </div>
    </div> 
  );
};

export default ProfileList;
