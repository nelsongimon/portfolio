"use client";

import useLanguage from "@/hooks/useLanguage";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiEnvelope
} from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";
import { MdWeb } from "react-icons/md";

export const navbarData = [
  {
    label: {
      es: "Inicio",
      en: "Home"
    },
    path: "/",
    icon: <HiHome className="text-xl" />
  },
  {
    label: {
      es: "Sobre mi",
      en: "About me"
    },
    path: "/about",
    icon: <HiUser className="text-xl" />
  },
  {
    label: {
      es: "Servicios",
      en: "Services"
    },
    path: "/services",
    icon: <HiRectangleGroup className="text-xl" />
  },
  {
    label: {
      es: "Proyectos de Diseño Gráfico",
      en: "Graphic Design Projects"
    },
    path: "/graphic-design-projects",
    icon: <MdDesignServices className="text-xl" />
  },
  {
    label: {
      es: "Proyectos Web",
      en: "Web Projects"
    },
    path: "/web-projects",
    icon: <MdWeb className="text-xl" />
  },
  {
    label: {
      es: "Contacto",
      en: "Contact"
    },
    path: "/contact",
    icon: <HiEnvelope className="text-xl" />,
  },
]

export default function Navbar() {
  const { language } = useLanguage();
  const pathname = usePathname();

  return (
    <nav className="
      flex
      flex-col
      items-center
      lg:justify-center
      gap-y-4
      fixed
      bottom-0
      h-max
      lg:right-[15px]
      z-50
      w-full
      lg:w-16
      lg:max-w-md
      lg:h-screen
    ">
      <div className="
        flex
        lg:flex-col
        w-full
        items-center
        justify-between
        lg:justify-center
        gap-y-10
        px-4
        md:px-40
        lg:px-0
        h-[35px]
        lg:h-max
        py-6
        lg:py-8
        bg-indigo-900/20
        backdrop-blur-sm
        text-3xl
        lg:text-xl
        lg:rounded-full
        lg:shadow-lg
      ">
        {navbarData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`
              ${pathname === link.path ? "text-accent" : ""}
              relative
              flex
              items-center
              group
              hover:text-accent
              transition-all
              duration-300
            `}
          >
            <div>
              {/* Tooltips */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex items-center text-primary p-[10px] rounded-[3px]">
                  <div className="
                    text-[12px]
                    leading-none
                    font-semibold
                    whitespace-nowrap
                  ">
                    {link.label[language]}
                  </div>
                  {/* Triangle */}
                  <div className="
                    border-solid
                    border-l-white
                    border-l-8
                    border-y-transparent
                    border-y-[6px]
                    border-r-0
                    absolute
                    -right-2
                  ">

                  </div>
                </div>
              </div>
              {/* Icons */}
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
