"use client";

import Link from "next/link";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin
} from "react-icons/ai";

export default function Socials() {
  return (
    <div className="
      flex
      items-center
      gap-x-5
      text-2xl
    ">
      <Link href="https://github.com/nelsongimon" target="_blank" className="hover:text-accent transition-all duration-300">
        <AiOutlineGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/nelson-gimon/" target="_blank" className="hover:text-accent transition-all duration-300">
        <AiFillLinkedin />
      </Link>
      <Link href="https://twitter.com/nelsongimonf" target="_blank" className="hover:text-accent transition-all duration-300">
        <AiFillTwitterCircle />
      </Link>
    </div>
  );
}
