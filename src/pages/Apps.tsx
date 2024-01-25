"use client";
import { APPS } from "@/data/apps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Github, Play } from "../assets/images";
import { PROJECTS } from "@/data/projects";

type Props = {};

export default function Apps({}: Props) {
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div className="max-w-[1300px]">
        <h1 className="block lg:hidden mb-10 text-center">Apps & Projects</h1>
        <div className="flex flex-col">
          {APPS.map((item) => (
            <RenderItem key={item.title} item={item} isApp />
          ))}
        </div>
        <div className="flex flex-col">
          {PROJECTS.map((item) => (
            <RenderItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const RenderItem = ({
  item,
  isApp = false,
}: {
  item: (typeof PROJECTS)[0];
  isApp?: boolean;
}) => {
  const router = useRouter();

  return (
    <button className="flex flex-col px-10 py-4 rounded-xl w-full">
      <div className="flex w-full gap-10">
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
                  src={isApp ? Play : Github}
                  alt={item.title}
                  className="h-6 w-6"
                />
              </button>
            </div>
            <h3 className="hidden 2xl:flex opacity-50 mb-5 mr-10 text-left">
              {item.description}
            </h3>
            <h3 className="flex 2xl:hidden opacity-50 mb-5 mr-10 text-left">
              {item.shortDescription}
            </h3>
            <div className="hidden sm:flex w-full gap-2 items-center justify-center mt-5">
              {item.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex bg-white p-2 rounded-md  border-2 border-stone-100"
                >
                  <h3 className="text-[12px]">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-stone-100 rounded-full mt-5" />
    </button>
  );
};
