import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaWordpress, FaAws } from "react-icons/fa";
import { SiCloudflare, SiPlesk, SiBootstrap } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Project = [
  {
    url: "/weatherapp",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/WeatherProject.png",
    cNameImg: "img rounded",
    altImg: "Project 1",
    title: "Weather Site",
    text: "In this project you will see the minupulation of data from both a weather and covid API.",
    cNameText: "text-center m-4",
    icon1: <FaHtml5 size={30} />,
    icon2: <FaCss3Alt size={30} />,
    icon3: <FaJsSquare size={30} />,
    icon4: <FaReact size={30} />,
    cNameIcons: "m-4",
  },
  {
    url: "/zoemazurk",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/ZoeProject.png",
    cNameImg: "img rounded",
    altImg: "Project 2",
    title: "Zoe Mazurk",
    cNameTitle:"mb-3",
    text:
      "When learning React, I signed up to help a friend create a website to display her art work on.",
    cNameText: " m-4",
    icon1: <FaHtml5 size={30} />,
    icon2: <FaCss3Alt size={30} />,
    icon3: <FaJsSquare size={30} />,
    icon4: <FaReact size={30} />,
    cNameIcons: "m-4",
  },
  {
    url: "/simplyhome",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/SimplyHomeProject.png",
    cNameImg: "img rounded",
    altImg: "Project 2",
    title: "Simply Home Consignments",
    text:
      "Simply Home Consignments was looking to updating their front-end layout, design, and code. I used the Bootstrap framework in developing the front-end",
    cNameText: "text-center m-4",
    icon1: <FaHtml5 size={30} />,
    icon2: <FaCss3Alt size={30} />,
    icon3: <SiBootstrap size={30} />,
    cNameIcons: "m-4",
  },
  {
    url: "/ourhelpapp",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/OurHelpProject.png",
    cNameImg: "img rounded",
    altImg: "Project 4",
    title: "OurHelpApp",
    text:
      "The OurHelpApp was my group project for my capstone. We had to create an a Covid help app for an apartment, and create the documentation for the develoment of this site.",
    cNameText: "text-center m-4",
    icon1: <FaWordpress size={30} />,
    icon2: <FaAws size={30} />,
    icon3: <SiCloudflare size={30} />,
    icon4: <SiPlesk size={30} />,
    cNameIcons: "m-4",
  },
];
