"use client";

import Image from "next/image";

export default function Avatar() {
  return (
    <div className="
      hidden
      xl:flex
      max-w-none
    ">
      <Image
        src="/images/avatar.png"
        width={737}
        height={678}
        alt="Avatar image"
        className="
          translate-z-0
        "
      />
    </div>
  );
}
