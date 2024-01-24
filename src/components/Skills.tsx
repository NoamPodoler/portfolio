import { SKILLS } from "@/data/skills";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="flex gap-2 py-8 flex-wrap items-center justify-center">
      {SKILLS.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-center gap-2 bg-white rounded-full shadow-md p-2 pr-8"
        >
          <Image
            src={item.logo}
            alt={item.title}
            className="h-10 w-auto rounded-full"
          />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
