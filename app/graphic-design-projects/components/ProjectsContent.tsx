"use client";

import useLanguage from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { fadeIn } from "@/varaints";
import DesignProjectSlider from "@/components/DesignProjectSlider";

const projectsData = {
  es: {
    title: "Proyectos de Diseño Gráfico",
    description_1: "Con una sólida experiencia en diseño gráfico, he tenido el privilegio de trabajar en emocionantes proyectos internacionales que abarcan desde la creación de publicaciones impactantes para redes sociales hasta el desarrollo de identidades visuales completas. Mi trayectoria incluye la colaboración con clientes de distintos países, lo que me ha permitido adquirir una perspectiva global y enriquecer mi enfoque creativo.",
  },
  en: {
    title: "Graphic Design Projects",
    description_1: "With a solid background in graphic design, I have had the privilege of working on exciting international projects ranging from creating impactful social media posts to developing complete visual identities. My experience involves collaborating with clients from different countries, allowing me to gain a global perspective and enrich my creative approach.",
  },
}

export default function ProjectsContent() {
  const { language } = useLanguage();
  return (
    <div className="
      h-full 
      pb-[200px]
      lg:pb-0
      flex 
      lg:items-center
    ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex lg:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 className="h2"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {projectsData[language].title}
            </motion.h2>
            <motion.p className="mb-4 max-w-[400px] mx-auto xl:mx-0"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {projectsData[language].description_1}
            </motion.p>
          </div>
          <motion.div className="w-full lg:max-w-[65%] pb-[90px] lg:pb-0"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* slider */}
            <DesignProjectSlider />
          </motion.div>
        </div>
      </div>

    </div>
  );
}
