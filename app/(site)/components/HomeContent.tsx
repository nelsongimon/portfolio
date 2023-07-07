"use client";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import useLanguage from "@/hooks/useLanguage";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "@/varaints";

const homeData = {
  es: {
    title_1: "Un gusto conocerte,",
    title_2: "Soy Nelson Gimón",
    description: "Como profesional, he trabajado en proyectos en las áreas de diseño gráfico y desarrollo web, lo cual me ha permitido adquirir habilidades analíticas y creativas."
  },
  en: {
    title_1: "Nice to meet you,",
    title_2: "I'm Nelson Gimón",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eveniet ad similique mollitia necessitatibus doloribus officiis perspiciatis ipsa distinctio, nostrum possimus quod ullam, expedita corrupti repellendus error quo pariatur a!"
  }
}

export default function HomeContent() {
  const { language } = useLanguage();
  return (
    <div className="
      h-full
      w-full
    ">
      {/* text */}
      <div className="w-full h-screen">
        <div className="
          text-center
          lg:text-left
          flex
          flex-col
          justify-center
          pt-24
          lg:pt-12
          xl:pt-28
          h-full
          container
          mx-auto
        ">
          <motion.h1 className="h1 w-full lg:max-w-xl mx-auto lg:mx-0"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {homeData[language].title_1} <span className="text-accent">{homeData[language].title_2}</span>
          </motion.h1>
          <motion.p className="w-full lg:max-w-xl mx-auto lg:mx-0 mb-9 lg:mb-10"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {homeData[language].description}
          </motion.p>
          {/* button */}
          <div className="flex justify-center lg:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden lg:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-screen absolute -right-[50px] bottom-0">
        {/* bg image */}
        <div className="bg-none lg:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute -bottom-[0px] mix-blend-color-dodge">
        </div>
        <div>
          {/* particles */}
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="
            max-w-[650px]
            max-h-[620px]
            absolute
            bottom-0
            lg:bottom-0
            lg:right-[2%]
            xl:right-[20%]
          ">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
