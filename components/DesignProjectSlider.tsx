"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress, FaEye, FaElementor, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiWoo, SiTailwindcss } from "react-icons/si";
import useLanguage from "@/hooks/useLanguage";

const projectsText = {
  es: {
    text: "Visitar sitio web"
  },
  en: {
    text: "Visit website"
  }
}

interface ProjectsData {
  [index: string]: any
}

const projectsData: ProjectsData[] = [
  {
    image: "/images/socialmedia-1.jpg",
  },
  {
    image: "/images/socialmedia-2.png",
  },
  {
    image: "/images/socialmedia-3.png",
  },
  {
    image: "/images/socialmedia-4.jpg",
  },
];

export default function DesignProjectSlider() {
  const { language } = useLanguage();
  return (
    <Swiper
      autoplay={true}
      slidesPerView={2}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="w-full h-[210px] lg:h-[420px]"
    >
      {projectsData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="
            bg-indigo-800/60
            hover:bg-indigo-900/60
            relative
            flex
            flex-col
            items-center
            justify-center
            overflow-hidden
            group 
            cursor-pointer
            transition-all 
            duration-300
            p-2
            shadow-xl
            h-[160px]
            w-[160px]
            lg:h-[370px]
            lg:w-[370px]
          ">
            <div className="
              relative
              overflow-hidden
              w-full
              h-full
              aspect-square
            "
            >
              <Image
                src={item.image}
                fill
                alt="Image"
                className="
                  object-cover
                "
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

