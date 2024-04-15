import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <Image src='/logo/Gradient icon.svg' height={100} width={100} alt="my classes logo"
        className='w-24 animate-pulse'></Image>
    </div>
  );
}