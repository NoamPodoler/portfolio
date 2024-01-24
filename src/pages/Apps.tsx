"use client";
import { APPS } from "@/data/apps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Play } from "../../assets/images";
import { PROJECTS } from "@/data/projects";

type Props = {};

export default function Apps({}: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 h-full justify-center items-center gap-4 px-20">
      <div>
        <h2 className="mb-5">Mobile Applications I developed</h2>
        <div className="flex flex-col gap-10">
          {APPS.map((item, index) => (
            <div
              key={item.title}
              className="flex bg-white shadow-md p-10 rounded-xl gap-10"
            >
              <Image
                src={item.logo}
                alt={item.title}
                className="h-32 w-32 rounded-full"
              />
              <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                  <div className="flex w-full justify-between">
                    <h2>{item.title}</h2>
                    <button onClick={() => router.push(item.link)}>
                      <Image src={Play} alt={item.title} className="h-6 w-6" />
                    </button>
                  </div>
                  <h3 className="opacity-50 mb-5 mr-10">{item.description}</h3>
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
            </div>
          ))}
        </div>
        <h2 className="my-5">Other Projects</h2>
        <div className="flex flex-col gap-10">
          {PROJECTS.map((item, index) => (
            <div
              key={item.title}
              className="flex bg-white shadow-md p-10 rounded-xl gap-10"
            >
              {item.logo == null ? (
                <div className="flex justify-center items-center h-32 w-32 rounded-full bg-primary-green">
                  <h1 className="text-white">
                    {item.title.substring(0, 1).toUpperCase()}
                  </h1>
                </div>
              ) : (
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="h-32 w-32 rounded-full"
                />
              )}
              <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1">
                  <div className="flex w-full justify-between">
                    <h2>{item.title}</h2>
                    <button onClick={() => router.push(item.link)}>
                      <Image src={Play} alt={item.title} className="h-6 w-6" />
                    </button>
                  </div>
                  <h3 className="opacity-50 mb-5 mr-10">{item.description}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
