"use client";
import React, { ReactNode, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { SECTION_PAGES } from "@/data/sections";

type Props = {
  children?: ReactNode;
  current?: string;
};

export default function Main({ children, current = "" }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });

  const { height, width } = useWindowDimensions();
  const bottomScrollIndicator = useTransform(
    scrollY,
    [0, (Object.entries(SECTION_PAGES).length - 1) * height],
    [100, width]
  );
  const handleScrollTo = (index: number) =>
    scrollRef.current?.scrollTo({ top: index * height, behavior: "smooth" });

  return (
    <motion.div
      className="flex flex-col flex-1 bg-primary-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="absolute left-0 bottom-0 w-full h-2 bg-primary-green"
        style={{ width: bottomScrollIndicator }}
      />
      <div className="flex flex-1">
        <Sidebar
          current={current}
          handleScrollTo={handleScrollTo}
          scrollY={scrollY}
        />
        <div
          className="h-screen w-full overflow-scroll bg-stone-50"
          ref={scrollRef}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
