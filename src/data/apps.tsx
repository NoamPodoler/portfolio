import { Givol, LiveRoom } from "../assets/images";

export const APPS = [
  {
    title: "Givol",
    logo: Givol,
    link: "https://play.google.com/store/apps/details?id=com.givolvolunteer&hl=en&gl=US",
    description:
      "'Givol' is an innovative application that facilitates seamless connections between passionate volunteers and community centers in need. Serving as a user-friendly bridge, the platform effortlessly matches individuals eager to make a difference with local organizations seeking dedicated support.This empowering application enables users to explore a diverse range of volunteering opportunities, spanning tutoring, mentoring, event coordination, and environmental initiatives. With an intuitive interface, 'Givol' allows volunteers to filter opportunities based on their interests, skills, and availability, ensuring a personalized and meaningful experience.",
    shortDescription:
      "An innovative application connecting volunteers with community centers.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS S3",
    ],
  },
  {
    title: "Live Room",
    logo: LiveRoom,
    link: "https://play.google.com/store/apps/details?id=com.NoamPodoler.LiveRoom&hl=en&gl=US",
    description:
      "Live Room provides users with a simple and seamless way to customize their environment by integrating virtual 3D furniture models into their surroundings. The application was developed using Unity and Vuforia.",
    shortDescription:
      "An app for customizing environments with virtual 3D furniture models.",
    technologies: ["Unity", "Augmented Reality"],
  },
];
