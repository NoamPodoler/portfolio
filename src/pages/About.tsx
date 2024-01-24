import Lottie from "lottie-react";
import React from "react";
import { HelloLottie } from "../../assets/lottie";
import Skills from "../components/Skills";
import Image from "next/image";
import { ProfilePicture } from "../../assets/images";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-1 flex-col h-full justify-center items-center">
      <div className="flex flex-col flex-1">
        <div className="flex flex-1 flex-col justify-center items-center">
          <Lottie animationData={HelloLottie} className="h-96 -my-20" />
          <h1 className="text-center text-[60px]">Noam Podoler</h1>
          <h2 className="text-center">
            Full Stack developer & Computer Science enthusaist
          </h2>
          <div className="max-w-[800px] mt-20">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
