// import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/varaints";

export default function Home() {
  return (
    <div className="
      bg-primary/60 
      h-full
    ">
      {/* text */}
      <div className="w-full h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="
          text-center
          flex
          flex-col
          justify-center
          xl:pt-30
          xl:text-left
          h-full
          container
          mx-auto
        ">
          <h1 className="h1">
            Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quaerat sit, molestiae mollitia ea eum quam quas accusamus culpa corporis ab deleniti id repellendus reiciendis magnam corrupti aliquam vero esse.
          </p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div> */}
          <div className="hidden xl:flex">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-screen absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0 mix-blend-color-dodge">
        </div>
        <div>
          {/* particles */}
          {/* <ParticlesContainer /> */}
          <div className="
            w-full
            h-full
            max-w-[737px]
            max-h-[678px]
            absolute
            -bottom-32
            lg:bottom-0
            lg:right-[8%]
          ">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}
