"use client";

import ProjectSlider from "@/components/ProjectSlider";
import useLanguage from "@/hooks/useLanguage";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import Bulb from "@/components/Bulb";
import { fadeIn } from "@/varaints";

const projectsData = {
  es: {
    title: "Mis proyectos",
    description_1: "He creado diversos proyectos en WordPress, desde elegantes sitios web corporativos hasta dinámicas tiendas virtuales, donde me encargué de diseñar la línea gráfica y realizar la maquetación de los sitios para lograr una experiencia visualmente atractiva y funcional.",
    description_2: "Además, he trabajado en proyectos personales utilizando tecnologías como React.js, Next.js y Tailwind CSS. Estos proyectos me han permitido practicar y demostrar mi habilidad en el desarrollo frontend, implementando soluciones interactivas y modernas utilizando estas herramientas de vanguardia."
  },
  en: {
    title: "My projects",
    description_1: "I have created various projects in WordPress, ranging from elegant corporate websites to dynamic virtual stores, where I took care of designing the visual elements and performing the site layout to achieve a visually appealing and functional experience.",
    description_2: "Furthermore, I have worked on personal projects using technologies like React.js, Next.js, and Tailwind CSS. These projects have allowed me to practice and showcase my skills in frontend development, implementing interactive and modern solutions using these cutting-edge tools."
  },
}

export default function ProjectsContent() {
  const { language } = useLanguage();
  return (
    <div className="h-full bg-primary/50 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 className="text-5xl mb-4 font-bold capitalize xl:mt-8"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {projectsData[language].title} <span className="text-accent">.</span>
            </motion.h2>
            <motion.p className="mb-4 max-w-[400px] mx-auto xl:mx-0"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {projectsData[language].description_1}
            </motion.p>
            <motion.p className="mb-4 max-w-[400px] mx-auto xl:mx-0"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {projectsData[language].description_2}
            </motion.p>
          </div>
          <motion.div className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* slider */}
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}