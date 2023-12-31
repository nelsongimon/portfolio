"use client";

import SwichterLanguages from "./SwichterLanguages";
import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="
      absolute
      top-0
      z-30
      w-full
      flex
      items-center
      px-16
      xl:px-0 
      xl:h-[90px]
    ">
      <div className="container mx-auto">
        <div className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center 
          gap-y-6
          py-8
        ">
          {/* socials */}
          <Socials />
          {/* logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={300}
              height={100}
              alt="Logo"
              priority={true}
            />
          </Link>
          {/* languages swicht */}
          <SwichterLanguages />
        </div>
      </div>
    </header>
  );
}
