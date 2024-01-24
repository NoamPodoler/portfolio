"use client";
import { EXTERNAL_LINKS } from "@/data/links";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function ExternalLinks({}: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-2 items-center">
      {EXTERNAL_LINKS.map((item) => (
        <button
          key={item.title}
          className="flex justify-center items-center h-16 w-16 rounded-[50%] bg-white"
          onClick={() => router.push(item.link)}
        >
          <Image src={item.logo} alt={item.title} className="h-9 w-9" />
        </button>
      ))}
    </div>
  );
}
