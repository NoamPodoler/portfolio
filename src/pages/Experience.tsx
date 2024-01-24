import { EXPERIENCE_DATA } from "@/data/experience";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Expereience({}: Props) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-full">
      <div className="flex gap-10">
        <div className="flex flex-col justify-around h-full">
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={item.company + "0"}>
              <h3>{item.duration}</h3>
            </div>
          ))}
        </div>
        <div className="h-full w-1 bg-stone-200 rounded-full" />
        <div className="flex flex-col justify-around">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.company}
              className="flex gap-10 border-stone-200 p-10 rounded-2xl"
            >
              <Image
                src={item.logo}
                alt={item.company}
                className="h-32 w-32 border-3 border-stone-200 shadow-lg"
              />
              <div className="max-w-[800px]">
                <h2>
                  {item.title} | {item.company}
                </h2>
                <h3 className="opacity-50">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
