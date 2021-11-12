import {
  FaWifi,
  FaCode,
  FaPython,
  FaNodeJs,
  FaReact,
  FaNeos,
} from "react-icons/fa";

export const aboutMe = {
  id: 1,
  fullname: "Suresh Thapa",
  designation: "Network Engineer",
  description:
    "I am Cisco and Juniper network engineeer. Working knowledge in Cisco and Juniper switches and routers, Sonicwall Firewall, Server 2008 to 2016 (Active Directory, DNS, DHCP, Radius CA) and Network automation using Python Nornir and Netmiko.",
  image: "SureshThapa.jpg",
  extraskills: "HTML, CSS, Javascript, NodeJS, ReactJS, NextJS, ExpressJS",
};

export const skills = [
  {
    id: 1,
    title: "Network Engineer",
    description:
      "Cisco and Juniper network experience. More than 10 years of experience in networking.",
    icon: <FaWifi size={80} color="white" />,
  },
  {
    id: 2,
    title: "Web Developer",
    description: "Web devlopment using HTML, CSS and Javascript.",
    icon: <FaCode size={80} color="white" />,
  },
  {
    id: 3,
    title: "Node Js",
    description:
      "Full stack web devlopment using NodeJS Frameworks like MERN (MongoDb, Express, React and NodeJs).",
    icon: <FaNodeJs size={80} color="white" />,
  },
  {
    id: 4,
    title: "React Js",
    description:
      "Modern and Fully Dynamic website using React JS NodeJs Framework, with or without API.",
    icon: <FaReact size={80} color="white" />,
  },
  {
    id: 5,
    title: "Next Js",
    description:
      "Modern and Fully Dynamic website using Next JS NodeJs Framework, with or without API.",
    icon: <FaNeos size={80} color="white" />,
  },
  {
    id: 6,
    title: "React Native",
    description: "Mobile App with React Native Framework.",
    icon: <FaReact size={80} color="white" />,
  },
  {
    id: 7,
    title: "Python Programmer",
    description:
      "Network Automation using Nornir, Netmiko and Scripli. Web devlopment using Django framework.",
    icon: <FaPython size={80} color="white" />,
  },
];
