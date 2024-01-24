import Lottie from "lottie-react";
import React from "react";
import { HelloLottie } from "../../assets/lottie";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-1 flex-col h-full justify-center items-center">
      <Lottie animationData={HelloLottie} />
    </div>
  );
}
