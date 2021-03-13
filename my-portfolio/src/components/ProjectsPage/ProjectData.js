import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Project = [
  {
    url: "/weatherapp",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/WeatherProject.png",
    cNameImg: "img rounded",
    altImg: "Project 1",
    title: "Weather Site",
    text: "A project to display data from weather and covid API's.",
    cNameText: "card-text m-5",
    icon1: <FaHtml5 size={40} />,
    icon2: <FaHtml5 size={40} />,
    icon3: <FaHtml5 size={40} />,
    icon4: <FaHtml5 size={40} />,
  },
  {
    url: "/zoemazurk",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/ZoeProject.png",
    cNameImg: "img rounded",
    altImg: "Project 2",
    title: "Zoe Mazurk",
    text:
      "This project was to help a friend with their art portfolio.",
    cNameText: "card-text m-5",
  },
  {
    url: "/simplyhome",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/SimplyHomeProject.png",
    cNameImg: "img rounded",
    altImg: "Project 2",
    title: "Simply Home Consignments",
    text:
      "On this project, I spent time creating the front-end layout with Bootstrap.",
    cNameText: "card-text m-5",
  },
  {
    url: "/ourhelpapp",
    imgSrc:
      "https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/OurHelpProject.png",
    cNameImg: "img rounded",
    altImg: "Project 4",
    title: "OurHelpApp",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text m-5",
  },
];
