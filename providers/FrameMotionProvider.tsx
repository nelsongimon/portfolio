"use client";

import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";


interface FrameMotionProviderProps {
  children: React.ReactNode;
}

export default function FrameMotionProvider({
  children
}: FrameMotionProviderProps) {
  const pathname = usePathname();
  console.log("PATH", pathname);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

