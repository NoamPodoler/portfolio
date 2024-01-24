import Lottie from "lottie-react";
import React from "react";
import { HelloLottie } from "../../assets/lottie";
import Skills from "../components/Skills";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-1 flex-col h-full justify-center items-center">
      <div className="flex flex-col flex-1 justify-center items-center">
        <Lottie animationData={HelloLottie} className="h-96 -my-20" />
        <h1 className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          unde!
        </h1>
      </div>
      <Skills />
    </div>
  );
}
