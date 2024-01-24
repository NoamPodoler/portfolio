"use client";
import { APPS } from "@/data/apps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Github, Play } from "../../assets/images";
import { PROJECTS } from "@/data/projects";

type Props = {};

export default function Apps({}: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 h-full justify-center items-center gap-4 px-20">
      <div>
        <h2 className="mb-10 font-[30px]">Apps & Projects</h2>
        <div className="flex flex-col">
          {APPS.map((item, index) => (
            <button
              key={item.title}
              className="flex px-10 py-4 rounded-xl gap-10 transition-all"
            >
              <Image
                src={item.logo}
                alt={item.title}
                className="h-32 w-32 rounded-full border-2 border-white"
              />
              <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                  <div className="flex w-full justify-between">
                    <h2>{item.title}</h2>
                    <button onClick={() => router.push(item.link)}>
                      <Image src={Play} alt={item.title} className="h-6 w-6" />
                    </button>
                  </div>
                  <h3 className="opacity-50 mb-5 mr-10 text-left">
                    {item.description}
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  {item.technologies.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-white p-2 rounded-md  border-2 border-stone-100"
                    >
                      <h3>{tech}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="w-full h-[2px] bg-stone-200 rouned-full my-10" />
        <div className="flex flex-col">
          {PROJECTS.map((item, index) => (
            <button
              key={item.title}
              className="flex px-10 py-4 rounded-xl gap-10 transition-all"
            >
              {item.logo == null ? (
                <div className="flex justify-center items-center h-32 w-32 rounded-full border-2 border-white bg-primary-green">
                  <h2 className="text-white">{item.title}</h2>
                </div>
              ) : (
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="h-32 w-32 rounded-full border-2 border-white"
                />
              )}
              <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                  <div className="flex w-full justify-between">
                    <h2>{item.title}</h2>
                    <button onClick={() => router.push(item.link)}>
                      <Image
                        src={Github}
                        alt={item.title}
                        className="h-6 w-6"
                      />
                    </button>
                  </div>
                  <h3 className="opacity-50 mb-5 mr-10 text-left">
                    {item.description}
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  {item.technologies.map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-white p-2 rounded-md  border-2 border-stone-100"
                    >
                      <h3>{tech}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
