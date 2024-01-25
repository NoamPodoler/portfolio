import Lottie from "lottie-react";
import React from "react";
import { HelloLottie } from "../assets/lottie";
import Skills from "../components/Skills";
import Image from "next/image";
import { ProfilePicture } from "../assets/images";
import ExternalLinks from "@/components/ExternalLinks";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="w-[100vw] lg:w-full flex flex-1 flex-col h-full  justify-center items-center">
      <div className="w-[100vw] lg:w-full flex flex-col flex-1">
        <div className="flex flex-1 flex-col justify-center items-center gap-5">
          <Lottie
            animationData={HelloLottie}
            className="hidden sm:block h-96 -my-20 max-w-[75vw]"
          />
          <h1 className="text-center text-[60px] max-w-[75vw]">Noam Podoler</h1>
          <h2 className="text-center max-w-[75vw]">
            Full Stack developer & Computer Science enthusaist
          </h2>
          <div className="hidden xs:block max-w-[80vw]">
            <div className="max-w-[800px]">
              <Skills />
            </div>
          </div>
          <div className="flex lg:hidden flex-col items-center gap-2">
            <h2 className="opacity-50 text-left">Tel Aviv IL</h2>
            <h2 className="opacity-50 text-left">podo0noam@gmail.com</h2>
            <ExternalLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
