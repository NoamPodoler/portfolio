"use client";
import Main from "@/components/Main";
import { SECTION_PAGES } from "@/data/sections";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <Main>
      {Object.entries(SECTION_PAGES).map(([key, item]) => (
        <div key={key} className="h-screen">
          {item.node}
        </div>
      ))}
    </Main>
  );
}
