import { Givol, LiveRoom } from "../assets/images";

export const APPS = [
  {
    title: "Givol",
    logo: Givol,
    link: "https://play.google.com/store/apps/details?id=com.givolvolunteer&hl=en&gl=US",
    description:
      "'Givol' is a user-friendly application connecting volunteers with community centers. It offers diverse opportunities like tutoring, mentoring, event coordination, and environmental initiatives. The platform allows personalized experiences through intuitive filtering based on interests, skills, and availability.",
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
