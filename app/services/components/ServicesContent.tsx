"use client";

import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import Bulb from "@/components/Bulb";
import { fadeIn } from "@/varaints";
import useLanguage from "@/hooks/useLanguage";
import ServiceSlider from "@/components/ServiceSlider";


const servicesContent = {
  es: {
    title: "Mis servicios",
    description: "Con años de experiencia en diseño y desarrollo web, he adquirido destrezas versátiles y especializadas. Mi enfoque se centra en el diseño gráfico y el desarrollo frontend, creando soluciones a medida para lograr resultados impactantes."
  },
  en: {
    title: "My services",
    description: "With years of experience in web design and development, I have acquired versatile and specialized skills. My focus is on graphic design and frontend development, creating tailored solutions to achieve impactful results."
  },
}

export default function ServicesContent() {
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
              {servicesContent[language].title} <span className="text-accent">.</span>
            </motion.h2>
            <motion.p className="mb-4 max-w-[400px] mx-auto xl:mx-0"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {servicesContent[language].description}
            </motion.p>
          </div>
          <motion.div className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
