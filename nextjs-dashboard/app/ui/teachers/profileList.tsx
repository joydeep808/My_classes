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
    <div className='flex  overflow-x-auto w-screen gap-2 md:overflow-y-auto md:flex-col md:w-72 md:h-96'>
      {profiles.map((profile, index) => (
        <div key={index} className='flex-shrink-0  bg-indigo-400 rounded-2xl'>
          <ProfileCard  {...profile} />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
