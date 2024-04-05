import Image from 'next/image';

const profilePicture = '/profilePicture_demo.png';
const profileBanner = '/profileBanner_demo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col  ">
      <div className="flex-grow p-1 md:overflow-y-auto ">
        <main>
          <div className="grid grid-cols-3 gap-4 bg-red-200 p-3">
            <div className="relative col-span-2 overflow-hidden rounded-2xl bg-green-400">
              <img
                src={profileBanner}
                alt="profile_banner"
                className=" aspect-auto h-[40vh] w-full object-cover"
              />
              <div className="absolute bottom-0 z-10 flex w-fit items-end gap-4 text-white">
                <Image
                  src={profilePicture}
                  alt=""
                  width={1000}
                  height={1000}
                  className="aspect-square w-56 rounded-full bg-red-600 object-cover"
                />
                <div className="mb-4 bg-violet-800/30 p-2">
                  <h1 className="text-2xl font-bold">Name of teacher</h1>
                  <p>Subject teaching</p>
                </div>
              </div>
            </div>
            <div className="h-full w-full bg-violet-800"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
