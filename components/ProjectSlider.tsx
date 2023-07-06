"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress, FaEye, FaElementor } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiWoo, SiTailwindcss } from "react-icons/si";
import useLanguage from "@/hooks/useLanguage";
import { useRouter } from "next/navigation";

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
    name: "Panlatino.ca",
    url: "https://panlatino.ca/",
    image: "/images/panlatino.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
  {
    name: "Iservicesint",
    url: "https://iservicesint.com/",
    image: "/images/iis.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
  {
    name: "Spotify Clone",
    url: "https://iservicesint.com/",
    image: "/images/spotify.jpg",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Messenger Clone",
    url: "https://iservicesint.com/",
    image: "/images/messenger.jpg",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Calzado América",
    url: "https://iservicesint.com/",
    image: "/images/calzadoamerica.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
];

export default function ProjectSlider() {
  const router = useRouter();

  const handleClick = (url: string) => {
    console.log("click");
    router.push(url);
  }

  const { language } = useLanguage();
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[400px]"
    >
      {projectsData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="
            bg-indigo-800/20
            hover:bg-indigo-800/40
            relative
            flex
            flex-col
            items-center
            justify-center
            rounded-md
            overflow-hidden
            group 
            cursor-pointer
            transition-all 
            duration-300
            p-3
            shadow-xl
          ">
            {/* image */}
            <div className="
              relative
              overflow-hidden
              w-full
              h-full
              aspect-square
              rounded-lg
            "
              onClick={() => handleClick(item.url)}
            >
              <div className="
                bg-gradient-to-t
                from-black
                to-black/25
                inset-0
                absolute
                z-10
                opacity-90
              "></div>
              <div className="
                bg-black/50
                inset-0
                absolute
                z-20
                bg-gradient-to-t
                from-black
                via-indigo-950
                to-[#4a22bd]
                opacity-0
                group-hover:opacity-70
                transition-all
                duration-700
              "></div>
              <Image
                src={item.image}
                fill
                alt="Image"
                className="
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              />
            </div>
            <div className="
              flex
              flex-col
              pt-4
              w-full
              gap-y-1
            ">
              {/* title */}
              <p className="font-semibold truncate w-full">
                {item.name}
              </p>
              {/* description */}
              <div className="
                text-xl
                text-neutral-400
                truncate
                w-full
              ">
                <div className="flex gap-x-2">
                  {item.technologies.map((Icon: any, index: number) => (
                    <Icon key={index} />
                  ))}
                </div>

              </div>
            </div>
            <div className="
              absolute 
              z-20
              bottom-[50%]
              left-[50%]
              -translate-x-[60px]
              transition
              duration-300
              opacity-0
              rounded-full
              flex
              flex-col
              items-center
              justify-center
              drop-shadow-md
              translate
              translate-y-1/4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-white
              w-[120px]
              hover:text-accent
            ">
              <FaEye className="text-4xl" />
              <a className="text-sm font-light underline underline-offset-4" href={item.url} target="_blank">
                {projectsText[language].text}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
