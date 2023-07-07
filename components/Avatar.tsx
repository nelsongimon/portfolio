"use client";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className="
      hidden
      lg:flex
      max-w-none
    ">
      <Image
        src="/images/nelsongimonf.png"
        width={700}
        height={700}
        alt="Avatar image"
        className="
          translate-z-0
        "
      />
    </div>
  );
}
