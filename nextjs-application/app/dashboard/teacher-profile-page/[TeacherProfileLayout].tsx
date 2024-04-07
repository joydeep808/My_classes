'use client'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Button } from '@/app/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { number } from 'zod';
import Link from 'next/link';

const profilePicture = '/profilePicture_demo.png';
const profileBanner = '/profileBanner_demo.png';

const stars: {
  name: string,
  value: number,
}[] = [
    {
      name: "star1",
      value: 1,
    },
    {
      name: "star2",
      value: 2,
    },
    {
      name: "star3",
      value: 3,
    },
    {
      name: "star4",
      value: 4,
    },
    {
      name: "star5",
      value: 5,
    }
  ]

const TeacherProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const [rating, setRating] = useState<number|null>(null);
  const [hover, setHover] = useState<number>(0);
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-3 p-3 mx-[3vw]">
      <div className='col-span-2'>
        <div className="h-fit relative grid  rounded-2xl shadow-lg bg-slate-50">
          <img
            src={profileBanner}
            alt="profile_banner"
            className=" aspect-auto h-[30vh] w-full object-cover rounded-2xl"
          />
          <div className="relative flex w-fit items-end gap-4 ">
            <Image
              src={profilePicture}
              alt=""
              width={1000}
              height={1000}
              className="absolute m-4 aspect-square w-28 md:w-44 lg:w-56 rounded-full object-cover border-white border-[10px] drop-shadow-xl "
            />
            <div className='w-56'></div>
            <div className="mb-4 text-4xl p-2 m-4">
              <h1 className="font-bold">Name of teacher</h1>
              <p className='text-base'>Subject teaching</p>
            </div>
          </div>
          <div>
            <div className=' border-b-2 border-violet-600 flex mt-4 text-lg rounded-lg'>
              <Link href={"./profile"} className='bg-gradient-to-t  p-4 from-violet-500/10 hover:from-violet-500/30'>Profile</Link>
              <Link href={"./demo"} className='bg-gradient-to-t from-violet-500/30 p-4'>Demo Class</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="h-fit w-full bg-slate-50 rounded-2xl p-6 shadow-xl flex flex-col  gap-4 sticky">
        <div className=''>
          <h1 className='text-gray-800 text-3xl font-bold border-b-2 border-gray-200'>Contact Details</h1>
          <div className='grid gap-4 p-4'>
            <p className='grid grid-cols-1'>
              <span className='font-semibold text-xl'>
                1566198789415-example
              </span>
              <span className='text-slate-400'>
                Phone No.
              </span>
            </p>
            <p className='grid grid-cols-1'>
              <a href="https://example@gmail.com" target='_blank' className='font-semibold text-xl'>example@gmail.com</a>
              <span className='text-slate-400'>
                Email
              </span>
            </p>
            <p className='grid grid-cols-1'>
              <span className='font-semibold text-xl'>
                XYZ classes, sample city, state, country
              </span>
              <span className='text-slate-400'>
                Location
              </span>
            </p>
          </div>
        </div>
        <div className=''>
          <h1 className='text-gray-800 text-3xl font-bold border-b-2 border-gray-200'>Feedback</h1>
          <div className='flex flex-col gap-4 p-4'>
            <div className=''>
              <p><span>Your feedback is valuable for us, Feel free to share</span></p>
            </div>
            <form action="" className='flex flex-col gap-4' onSubmit={(e) => { e.preventDefault() }}>
              <label htmlFor="star" className='font-semibold text-violet-500 text-xl'>Your rating</label>
              <div className='flex'>
                {stars.map((star, index) => {
                  const currentRating:any= index + 1;
                  return (
                    <div key={index}>
                      <label htmlFor={star.name}>
                        <input
                          type="radio"
                          name="star"
                          id={star.name}
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                          className='hidden'
                        />
                        <StarIcon
                          className={clsx('text-slate-400 w-8 cursor-pointer', { 'text-yellow-400': currentRating<= hover })}
                          onMouseOver={() => setHover(currentRating )}
                          onMouseLeave={() => setHover(0)}
                        />
                      </label>
                    </div>
                  )
                })}

              </div>
              <label htmlFor="feedback" className='font-semibold text-violet-500 text-xl'>Your feedback</label>
              <textarea name="feedback" id="student_feedback" cols={30} rows={10} placeholder='Enter your feedback' maxLength={500} className='resize-none w-full border-1 border-gray-200 rounded-xl'></textarea>
              <Button
                className='self-start bg-violet-500 hover:bg-violet-600 active:bg-violet-700'
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TeacherProfileLayout;