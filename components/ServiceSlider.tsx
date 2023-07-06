"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { BsVectorPen } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css";
import useLanguage from "@/hooks/useLanguage";


const servicesData = [
  {
    icon: BiCodeAlt,
    title: {
      es: "Desarrollo Web",
      en: "Web Development",
    },
    description: {
      es: "Creación de sitios web a medida para empresas y emprendedores que desean destacar en línea. Desarrollo soluciones web atractivas, funcionales y optimizadas para una experiencia de usuario excepcional.",
      en: "Custom website creation for businesses and entrepreneurs looking to stand out online. I develop attractive, functional, and optimized web solutions for an exceptional user experience.",
    }
  },
  {
    icon: BsVectorPen,
    title: {
      es: "Diseño Gráfico",
      en: "Graphic Design",
    },
    description: {
      es: "Eleva tu presencia visual con diseños gráficos cautivadores y profesionales. Ya sea para material impreso o digital, mi servicio de diseño gráfico está diseñado para captar la atención de tu audiencia y transmitir la esencia de tu marca.",
      en: "Elevate your visual presence with captivating and professional graphic designs. Whether for print or digital materials, my graphic design service is designed to capture your audience's attention and convey the essence of your brand."
    }
  }
];

export default function ServiceSlider() {
  const { language } = useLanguage();
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[370px]"
    >
      {servicesData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" h-[370px]  rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  transition-all duration-300 relative bg-indigo-800/10 hover:bg-indigo-800/20">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.icon />
            </div>
            {/* title and description */}
            <div className="mb-8">
              <div className="mb-4 text-xl font-semibold">
                {item.title[language]}
              </div>
              <p className="max-w-[350px] leading-normal text-md font-light">
                {item.description[language]}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl absolute left-[32px] bottom-[32px]">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
