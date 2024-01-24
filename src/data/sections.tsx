import About from "@/pages/About";
import Apps from "@/pages/Apps";
import Expereience from "@/pages/Experience";
import NotFound from "@/pages/NotFound";
import Skills from "@/pages/Skills";
import { CgBee, CgAttribution, CgToday, CgAwards } from "react-icons/cg";

export const SECTION_PAGES = {
  apps: { node: <Apps />, title: "Apps", logo: CgToday },
  skills: { node: <Skills />, title: "Skills", logo: CgBee },
  experience: {
    node: <Expereience />,
    title: "Experience",
    logo: CgAttribution,
  },
  about: { node: <About />, title: "About", logo: CgAwards },
};

export const getSectionPage = (key: keyof typeof SECTION_PAGES) =>
  SECTION_PAGES[key]?.node ?? <NotFound />;
