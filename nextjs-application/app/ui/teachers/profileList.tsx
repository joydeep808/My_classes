import React from 'react';
import ProfileCard from './profilecard';
import { profiles } from '@/app/pageData';
import Marquee from "react-fast-marquee";

const ProfileList = () => {
  // Check if window is defined before accessing its properties
  const viewportx = typeof window !== 'undefined' ? window.innerWidth : 0;
  const setgradient = viewportx >= 1024;

  return (
    <div className="flex flex-col items-center self-start justify-center md:h-2/5 md:mb-auto mt-4">
      <strong className='font-extrabold text-3xl md:text-4xl m-4'>
        Top Rated Teachers
      </strong>

      <div className='flex w-screen bg-gradient-to-t from-indigo-600'>
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          gradient={setgradient}
          className=''
        >
          {profiles.map((profile, index) => (
            <div key={index} className='flex-shrink-0 bg-slate-50 shadow-xl rounded-3xl hover:shadow-2xl my-5 transition-all hover:scale-105 ease-in mx-2'>
              <ProfileCard {...profile} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProfileList;
