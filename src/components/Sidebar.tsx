"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SECTION_PAGES } from "@/data/sections";
import ExternalLinks from "./ExternalLinks";

type Props = {
  current?: string;
};

export default function Sidebar({ current = "" }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen p-10 gap-5">
      <button
        onClick={() => router.push("/")}
        className="flex flex-col items-start"
      >
        <h1>Noam Podoler</h1>
        <h2 className="opacity-50 text-left">
          Full Stack developer & Computer Science enthusaist
        </h2>
      </button>
      {/* Link */}
      <div className="flex flex-1 flex-col items-start gap-2">
        {Object.entries(SECTION_PAGES).map(([key, item]) => (
          <div key={key}>
            <button
              onClick={() => {}}
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
      <ExternalLinks />
    </div>
  );
}
