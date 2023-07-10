"use client";

import { SkewLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="
      w-full 
      h-full
      flex 
      items-center 
      justify-center
    ">
      <SkewLoader
        color="rgb(30 27 75)"
        size={50}
      />
    </div>
  );
}
