"use client";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/varaints";
import useLanguage from "@/hooks/useLanguage";

const contactData = {
  es: {
    title: "¿Tienes algún proyecto en mente?",
    name: "Nombre",
    email: "Correo Electrónico",
    subject: "Asunto",
    message: "Mensaje",
    button: "Hablemos",
  },
  en: {
    title: "Do you have any project in mind?",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    button: "Let's talk",
  }
}

export default function ContactContent() {
  const { language } = useLanguage();
  return (
    <div className="
    h-full 
    ">
      <div className="container mx-auto h-full text-center xl:text-left flex justify-center lg:items-center">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 className="h2 text-[30px] text-center mb-8"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="show"
          >
            {contactData[language].title}
          </motion.h2>
          {/* form */}
          <motion.form className="flex-1 flex flex-col gap-5 w-full mx-auto pb-[150px] lg:pb-0"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="show"
          >
            {/* input group */}
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              <input type="text" placeholder={contactData[language].name} className="input" />
              <input type="text" placeholder={contactData[language].email} className="input" />
            </div>
            <input type="text" placeholder={contactData[language].subject} className="input" />
            <textarea placeholder={contactData[language].message} className="textarea">
            </textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">{contactData[language].button}</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>

  );
}
