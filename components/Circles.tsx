"use client";

import Image from "next/image";

export default function Circles() {
  return (
    <div className="
      w-[200px] 
      xl:w-[300px]
      absolute
      -right-16
      -bottom-[30px]
      mix-blend-color-dodge
      animate-pulse
      duration-75
      hidden
      lg:block
    ">
      <Image
        src="/images/circles.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="Circles image"
      />
    </div>
  );
}
