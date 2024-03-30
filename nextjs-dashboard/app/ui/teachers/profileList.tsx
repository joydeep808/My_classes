import ProfileCard from './profilecard';
import {profiles} from '@/app/pageData'


const ProfileList = () => {
  return (
    <div className='flex  overflow-x-auto overflow-y-hidden w-screen gap-5 md:overflow-y-auto md:flex-col md:w-64 md:h-[85vh] '>
      {profiles.map((profile, index) => (
        <div key={index} className='flex-shrink-0  bg-slate-50 shadow-xl rounded-3xl hover:shadow-2xl '>
          <ProfileCard  {...profile} />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
