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

export const navbarData = [
  {
    label: {
      es: "Inicio",
      en: "Home"
    },
    path: "/",
    icon: <HiHome />
  },
  {
    label: {
      es: "Sobre mi",
      en: "About"
    },
    path: "/about",
    icon: <HiUser />
  },
  {
    label: {
      es: "Servicios",
      en: "Services"
    },
    path: "/services",
    icon: <HiRectangleGroup />
  },
  {
    label: {
      es: "Proyectos",
      en: "Projects"
    },
    path: "/projects",
    icon: <HiViewColumns />
  },
  {
    label: {
      es: "Contacto",
      en: "Contact"
    },
    path: "/contact",
    icon: <HiEnvelope />,
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
      xl:justify-center
      gap-y-4
      fixed
      bottom-0
      h-max
      mt-auto
      xl:right-[2%]
      z-50
      top-0
      w-full
      xl:w-16
      xl:max-w-md
      xl:h-screen
    ">
      <div className="
        flex
        xl:flex-col
        w-full
        items-center
        justify-around
        xl:justify-center
        gap-y-10
        px-4
        md:px-40
        xl:px-0
        h-[80px]
        xl:h-max
        py-8
        bg-indigo-900/10
        backdrop-blur-sm
        text-3xl
        xl:text-xl
        xl:rounded-full
        xl:shadow-lg
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
                    capitalize
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
