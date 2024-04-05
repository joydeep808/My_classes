import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center rounded-3xl bg-gray-300  pt-9 md:w-10/12 md:pt-2">
        <p className="flex flex-col justify-center text-center text-2xl text-gray-800  md:leading-normal">
          <strong>
            Find Agartala&apos;s{' '}
            <span className="text-indigo-700"> most experienced offline </span>{' '}
            tution teachers!
          </strong>
          <br></br>connecting students with teachers
        </p>
        {/* <button  className='rounded-2xl bg-indigo-700 w-20 text-white p-1 font-semibold'>explore</button>  */}

        <Image
          src="/hero-home.svg"
          width={900}
          height={100}
          alt="headding image"
          priority
        />
      </div>
      <div className="w-full bg-violet-700 text-white text-center p-3">
        <span>Trusted by 100 Teachers and 1000+ Students</span>
      </div>
    </>
  );
}
