"use client";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import useLanguage from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { fadeIn } from "@/varaints";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaLaravel
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import CountUp from "react-countup";

const aboutText = {
  es: {
    title_1: "Contando",
    title_2: "Historias",
    title_3: "a través de Diseños Impactantes",
    description: "Mi enfoque principal se encuentra en el área del frontend, donde combino mi creatividad y habilidades técnicas para crear sitios web visualmente atractivos y de alto rendimiento.",
    yearExpWeb: "AÑOS DE EXPERIENCIA EN DESARROLLO WEB",
    yearExpDesign: "AÑOS DE EXPERIENCIA EN DISEÑO GRÁFICO"
  },
  en: {
    title_1: "Telling",
    title_2: "Stories",
    title_3: "through Impactful Designs",
    description: "My main focus lies in the frontend area, where I combine my creativity and technical skills to create visually appealing and high-performance websites.",
    yearExpWeb: "YEARS OF EXPERIENCE IN WEB DEVELOPMENT",
    yearExpDesign: "YEARS OF EXPERIENCE IN GRAPHIC DESIGN"
  }
}

type AboutData = {
  [index: string]: any
}

const aboutData: AboutData[] = [
  {
    title: {
      es: "Tecnologías Y Herramientas",
      en: "Technologies and Tools"
    },
    info: [
      {
        title: {
          es: "Desarrollo Web",
          en: "Web Development"
        },
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiTypescript,
          SiNextdotjs,
          SiTailwindcss,
          FaLaravel,
          FaWordpress,
        ],
      },
      {
        title: {
          es: "Diseño Gráfico",
          en: "Graphic Design"
        },
        icons: [
          SiAdobeillustrator,
          SiAdobephotoshop
        ],
      },
    ],
  },
  {
    title: {
      es: "Experiencia Laboral",
      en: "Work Experience"
    },
    info: [
      {
        title: {
          es: "DISEÑADOR Y DESARROLLADOR WEB FREELANCE",
          en: "FREELANCE WEB DESIGNER AND DEVELOPER"
        },
        stage: {
          es: "AGOSTO 2021 -  ACTUALIDAD",
          en: "AUGUST 2021 - PRESENT"
        },
      },
      {
        title: {
          es: "DISEÑADOR GRÁFICO Y WEB",
          en: "GRAPHIC AND WEB DESIGNER"
        },
        stage: {
          es: "NÍTIDO - TIENDA PUBLICITARIA | ECUADOR (ENERO 2021 -  JULIO 2021)",
          en: "NÍTIDO - TIENDA PUBLICITARIA | ECUADOR (JANUARY 2021 - JULY 2021)"
        },
      },
      {
        title: {
          es: "DISEÑADOR GRÁFICO",
          en: "GRAPHIC DESIGNER"
        },
        stage: {
          es: "BOMAN SPORTS | ECUADOR (DICIEMBRE 2019 - OCTUBRE  2020)",
          en: "BOMAN SPORTS | ECUADOR (DECEMBER 2019 - OCTOBER 2020)"
        },
      },
      {
        title: {
          es: "DISEÑADOR GRÁFICO",
          en: "GRAPHIC DESIGNER"
        },
        stage: {
          es: "PUNTO DEL CELULAR IMPORTADORA | ECUADOR (FEBRERO 2019 - DICIEMBRE 2019)",
          en: "PUNTO DEL CELULAR IMPORTADORA | ECUADOR (FEBRUARY 2019 - DECEMBER 2019)"
        },
      },
      {
        title: {
          es: "DESARROLLADOR WEB Y DISEÑADOR GRÁFICO",
          en: "WEB DEVELOPER AND GRAPHIC DESIGNER"
        },
        stage: {
          es: "FLOPOLOGIA AGENCIA DIGITAL | VENEZUELA (FEBRERO 2017 - NOVIEMBRE 2018)",
          en: "FLOPOLOGIA AGENCIA DIGITAL | VENEZUELA (FEBRUARY 2017 - NOVEMBER 2018)"
        },
      },
    ],
  },
  {
    title: {
      es: "Formación Académica",
      en: "Academic Education"
    },
    info: [
      {
        title: {
          es: "INGENIERÍA DE SISTEMAS",
          en: "SYSTEMS ENGINEERING"
        },
        stage: {
          es: "UNIVERSIDAD DE ORIENTE - VENEZUELA (2009 - 2015)",
          en: "UNIVERSIDAD DE ORIENTE - VENEZUELA (2009 - 2015)",
        },
      },
    ],
  },
];

export default function AboutContent() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  return (
    <div className="
     h-full
     text-center 
     lg:text-left  
    ">
      <div className="container mx-auto h-full flex flex-col lg:flex-row lg:items-center gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 className="h2 z-20"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {aboutText[language].title_1} <span className="text-accent">{aboutText[language].title_2}</span> {aboutText[language].title_3}
          </motion.h2>
          <motion.p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 z-20"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {aboutText[language].description}
          </motion.p>
          {/* counters */}
          <motion.div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 bg-indigo-800/10 p-4 rounded-md z-50"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* we experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-5xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={2}
                    duration={5}
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                  {aboutText[language].yearExpWeb}
                </div>
              </div>
              {/* design experience */}
              <div className="flex-1">
                <div className="text-2xl xl:text-5xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={6}
                    duration={5}
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                  {aboutText[language].yearExpDesign}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div className="flex flex-col w-full lg:max-w-[55%] xl:max-w-[48%] h-[420px] pt-4 lg:pt-0"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`${index === itemIndex && `text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300`} cursor-pointer uppercase text-sm xl:text-lg font-semibold relative after:w-8 after:h-[2px] after:absolute after:bg-white after:-bottom-1 after:left-0 text-left`}
              >
                {item.title[language]}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-5 xl:gap-y-7 pb-[100px] lg:pb-0">
            {aboutData[index].info.map((item: any, itemIndex: number) => (
              <div key={itemIndex} className="
                flex
                flex-col
                max-w-max
                gap-y-1
                lg:gap-y-0
                items-start
                text-white/60                
              ">
                {/* title */}
                <div className="mb-0">
                  <p className="text-sm lg:text-md font-medium uppercase text-left">
                    {item?.title[language]}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-xs font-light uppercase text-left">
                    {item?.stage?.[language]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* icons */}
                  {item.icons?.map((Icon: IconType, itemIndex: number) => (
                    <div
                      key={itemIndex}
                      className="
                        text-4xl
                        transition-all
                        duration-500
                        text-white
                      "
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Circles />
      {/* avatar */}
      <motion.div className="hidden xl:flex absolute -bottom-[30px] -left-[290px] z-10 h-[550px] w-[550px]"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>
    </div>
  );
}
