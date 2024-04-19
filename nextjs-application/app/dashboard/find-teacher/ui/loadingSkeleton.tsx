// not completed yet, it is in development

import Image from "next/image"
const profileImg = '/default_profile.svg';

import React from 'react'

type Props = {}

function LoadingSkeleton({ }: Props) {
    return (
        <div>
            <div className="flex items-center justify-between rounded-xl shadow-md self-center border-solid border-2 border-gray-200 bg-white p-4 "
            >
                <Image height={70} width={70} src={profileImg}
                    alt="profile picture" className="w-24 sm:w-36  "
                />
                <div className='flex flex-col w-1/2'>
                    <h2 className="  font-semibold text-base sm:text-xl">
                        test
                    </h2>
                    <span className='text-base sm:text-xl'>test</span>
                    <div className='flex flex-col md:flex-row gap-9'>
                        <span className='text-base sm:text-xl'>test</span>
                        <span className='text-base sm:text-xl'>test</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton