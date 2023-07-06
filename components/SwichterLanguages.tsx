"use client";

import { AvailableLanguages } from "@/context/LanguageContext";
import useLanguage from "@/hooks/useLanguage";
import Image from "next/image";

interface LanguageData {
  language: AvailableLanguages;
  image: string;
}

const languagesData: LanguageData[] = [
  {
    language: "es",
    image: "/images/LENGUAGE-FLAG-ES.png",
  },
  {
    language: "en",
    image: "/images/LENGUAGE-FLAG-EN.png",
  },
]

export default function SwichterLanguages() {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="flex gap-x-2">
      {languagesData.map((flag, index) => (
        <div
          key={index}
          onClick={() => changeLanguage(flag.language as AvailableLanguages)}
          className={`
            p-[3px]
            overflow-hidden 
            rounded-full
            cursor-pointer
            shadow-lg
            ${language === flag.language ? "opacity-100" : "opacity-30"}
            ${language === flag.language && "border-white/50 border-dotted border"}
          `}>
          <Image
            src={flag.image}
            alt="Flag image"
            width={25}
            height={25}
          />
        </div>
      ))}
    </div>
  );
}
