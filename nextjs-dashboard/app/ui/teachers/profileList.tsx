import ProfileCard from './profilecard';

const profiles = [
  
  { pictureSrc: '/default_profile.svg', name: 'Sanjai Dat', subject: 'No subject', likes: 0, followers: 0 },
  { pictureSrc: '/default_profile.svg', name: 'John Doe', subject: 'Computer Science', likes: 0, followers: 0 },
  { pictureSrc: '/default_profile.svg', name: 'Sanjai Dat', subject: 'No subject', likes: 0, followers: 0 },
  { pictureSrc: '/default_profile.svg', name: 'John Doe', subject: 'Computer Science', likes: 0, followers: 0 },
  { pictureSrc: '/default_profile.svg', name: 'Sanjai Dat', subject: 'No subject', likes: 0, followers: 0 },
  { pictureSrc: '/default_profile.svg', name: 'John Doe', subject: 'Computer Science', likes: 0, followers: 0 },
  // Add more profiles as needed
];

const ProfileList = () => {
  return (
    <div className='flex  overflow-x-auto overflow-y-hidden w-screen gap-2 md:overflow-y-auto md:flex-col md:w-60 md:h-[80vh] rounded-2xl'>
      {profiles.map((profile, index) => (
        <div key={index} className='flex-shrink-0  bg-indigo-400 rounded-2xl'>
          <ProfileCard  {...profile} />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
