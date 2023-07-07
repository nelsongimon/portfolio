"use client";

import Image from "next/image";

export default function Bulb() {
  return (
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge rotate-12 animate-pulse duration-75 w-[200px] xl:w-[260px]       hidden lg:block">
      <Image
        src="/images/bulb.png"
        alt="Bulb image"
        width={260}
        height={200}
        className="
          w-full
          h-full
        "
      />
    </div>
  );
}
