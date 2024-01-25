"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { SECTION_PAGES } from "@/data/sections";
import ExternalLinks from "./ExternalLinks";
import { MotionValue, motion, useTransform } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useMeasure from "react-use-measure";

type Props = {
  current?: string;
  handleScrollTo: (key: number) => void;
  scrollY: MotionValue<number>;
};
export default function Sidebar({
  current = "",
  handleScrollTo,
  scrollY,
}: Props) {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const [ref, bounds] = useMeasure();
  const dotTranslation = useTransform(
    scrollY,
    [0, Object.entries(SECTION_PAGES).length * height],
    [0, bounds.height + 8]
  );

  return (
    <div className="hidden lg:flex flex-col h-screen p-10 gap-5">
      <button
        onClick={() => router.push("/")}
        className="flex flex-col items-start"
      >
        <h1>Noam Podoler</h1>
        <div>
          <h2 className="opacity-50 text-left">Tel Aviv IL</h2>
          <h2 className="opacity-50 text-left">podo0noam@gmail.com</h2>
        </div>
      </button>
      {/* Link */}
      <div className="flex flex-1 items-start">
        <div className="relative flex flex-0 gap-4" ref={ref}>
          <motion.div
            className="absolute top-0 -left-[3px] mt-6 h-2 w-2 rounded-full bg-black"
            style={{ translateY: dotTranslation }}
          />
          {/* Divider */}
          <div className="w-[2px] bg-stone-400 rounded-full" />
          {/* Items */}
          <div className="flex flex-col items-start gap-2">
            {Object.entries(SECTION_PAGES).map(([key, item], index) => (
              <div key={key}>
                <button
                  onClick={() => handleScrollTo(index)}
                  className={`${
                    current == key && "bg-slate-200"
                  } flex items-center px-4 h-14 rounded-md gap-4 bg-primary-light transition-all hover:bg-slate-200`}
                >
                  {<item.logo />}
                  <h2 className="mr-6 ml-2">{item.title}</h2>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ExternalLinks />
    </div>
  );
}
