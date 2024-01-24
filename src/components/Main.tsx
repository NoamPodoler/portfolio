"use client";
import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import { motion, useScroll } from "framer-motion";

type Props = {
  children?: ReactNode;
  current?: string;
};

export default function Main({ children, current = "" }: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col flex-1 bg-primary-light">
      {/* Scroll Bar Indicator */}
      <motion.div
        className="w-full h-2 bg-red-300"
        // style={{ width: scrollYProgress }}
      />
      <div className="flex flex-1">
        <Sidebar current={current} />
        <div className="h-screen w-full overflow-scroll bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
