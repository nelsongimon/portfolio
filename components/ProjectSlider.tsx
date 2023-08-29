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
    name: "Airbnb Clone",
    url: "https://test-rent-clone.vercel.app/",
    image: "/images/airbnb.jpg",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Iservicesint",
    url: "https://iservicesint.com/",
    image: "/images/iis-ca.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
  {
    name: "Spotify Clone",
    url: "https://spotify-clone-blush-pi.vercel.app/",
    image: "/images/spotify-clone.jpg",
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
    image: "/images/messenger-clone.jpg",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Ecommerce Admin",
    url: "https://ecommerce-admin-xi-three.vercel.app/",
    image: "/images/ecommerce-admin.png",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Ecommerce Store",
    url: "https://ecommerce-store-delta-virid.vercel.app/",
    image: "/images/ecommerce-store.jpg",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Panlatino",
    url: "https://panlatino.ca/",
    image: "/images/panlatino-ca.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
  {
    name: "Netflix Clone",
    url: "https://movie-watch-seven.vercel.app/",
    image: "/images/netflix-clone.jpg",
    technologies: [
      FaHtml5,
      SiTailwindcss,
      SiTypescript,
      FaReact,
      SiNextdotjs,
    ]
  },
  {
    name: "Twitter Clone",
    url: "https://threads-vert.vercel.app/",
    image: "/images/twitter.jpg",
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
    image: "/images/calzado-america.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
  {
    name: "Agrofomento",
    url: "https://agrofomentoecuador.com/",
    image: "/images/agrofomento.jpg",
    technologies: [
      FaWordpress,
      FaElementor,
      SiWoo
    ]
  },
];

export default function ProjectSlider() {
  const { language } = useLanguage();
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 2,
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
      className="h-[280px] sm:h-[400px]"
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

