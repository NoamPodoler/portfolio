import { EXPERIENCE_DATA } from "@/data/experience";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Expereience({}: Props) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-full mx-20 ">
      <h1 className="block lg:hidden mb-10 text-center">Experience</h1>
      <div className="flex gap-10 min-w-[400px] max-h-[100vh]">
        <div className="hidden lg:flex flex-col justify-around h-full">
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={item.company + "0"}>
              <h3>{item.duration}</h3>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex h-full w-1 bg-stone-200 rounded-full" />
        <div className="flex flex-col justify-around">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.company}
              className="flex item-center gap-10 border-stone-200 p-10 rounded-2xl"
            >
              <Image
                src={item.logo}
                alt={item.company}
                className="h-32 w-32 border-3 border-stone-100 border-5 shadow-lg rounded-full"
              />
              <div className="flex flex-col justify-center max-w-[800px]">
                <h2>
                  {item.title} | {item.company}
                </h2>
                <h3 className="hidden lg:flex opacity-50 max-h-20 overflow-hidden">
                  {item.description}
                </h3>
                <h3 className="flex lg:hidden opacity-50 max-h-20 overflow-hidden">
                  {item.shortDescription}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
