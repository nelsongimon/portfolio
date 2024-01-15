"use client";

import WebProjectSlider from "@/components/WebProjectSlider";
import useLanguage from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { fadeIn } from "@/varaints";

const projectsData = {
  es: {
    title: "Proyectos Web",
    description_1: "He creado diversos proyectos en WordPress, desde sitios web corporativos hasta tiendas virtuales, donde me encargué de diseñar la línea gráfica y realizar la maquetación para lograr una experiencia visualmente atractiva y funcional.",
    description_2: "Además, he trabajado en proyectos personales utilizando tecnologías como React.js, Next.js y Tailwind CSS. Estos proyectos me han permitido practicar y demostrar mi habilidad en el desarrollo frontend, implementando soluciones interactivas y modernas."
  },
  en: {
    title: "Web Projects",
    description_1: "I have created various projects in WordPress, ranging from corporate websites to online stores, where I was responsible for designing the visual identity and carrying out the layout to achieve a visually appealing and functional experience.",
    description_2: "Furthermore, I have worked on personal projects using technologies such as React.js, Next.js, and Tailwind CSS. These projects have allowed me to practice and showcase my frontend development skills by implementing interactive and modern solutions."
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
            <motion.p className="mb-4 max-w-[400px] mx-auto xl:mx-0"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {projectsData[language].description_2}
            </motion.p>
          </div>
          <motion.div className="w-full lg:max-w-[65%] pb-[120px] lg:pb-0"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* slider */}
            <WebProjectSlider />
          </motion.div>
        </div>
      </div>

    </div>
  );
}
