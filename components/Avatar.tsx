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
        src="/images/HeroBannerWeb.png"
        width={569}
        height={620}
        alt="Avatar image"
        className="
          translate-z-0
        "
      />
    </div>
  );
}
