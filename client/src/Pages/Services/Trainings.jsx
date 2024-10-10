import React from "react";
import Para from "@/components/ui/Paragraph/Para";
import Button from "@/components/ui/Button/Button";
import Trainingcard from "@/components/ui/Cards/Trainingcard";
import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const Trainings = () => {
  let name = [
    "FULL STACK DEVELOPMENT",
    "UI / UX Designing ",
    "Advance Learnings",
    "Professional Development",
  ];
  let images = {
    a: "/src/assets/images/python.png",
    b: "/src/assets/images/java.png",
    c: "/src/assets/images/mern.png",
    d: "/src/assets/images/htmlcss.svg",
    e: "/src/assets/images/figma.svg",
    f: "/src/assets/react.svg",
    g: "/src/assets/images/cybersecurity.svg",
    h: "/src/assets/images/softwareTesting.svg",
    i: "/src/assets/images/aiMl copy.svg",
    j: "/src/assets/images/communication.svg",
    k: "/src/assets/images/university.png",
    l: "/src/assets/images/finishing.svg",
  };

  return (
    <div className="font-serif">
      <NavLink to="/home">
        <div className="flex m-8 mt-28">
          <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
          <h1 className=" text-blue-600 font-bold">Trainings</h1>
        </div>
      </NavLink>{" "}
      <div className="flex flex-col md:flex-row justify-evenly">
        <Para
          className="w-2/5 text-3xl m-10 text-blue-900 h-96"
          text="Unlock the secrets to success in our exclusive training series designed to elevate your skills and knowledge"
          names={name}
        />
        <img
          src="/src/assets/images/TWimage1.png"
          alt="Workshop"
          className="h-96"
        ></img>
      </div>
      <div className="text-center">
        <Button text="weekdays" className="px-8" />
        <div className="mt-20">
          {/* Full Stack Development Section */}
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-full h-20 text-white flex items-center justify-center">
            <h1 className="text-4xl">Full Stack Development</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <Trainingcard
              img={images.a}
              topic="PYTHON FULL STACK DEVELOPMENT"
              to="/fullstack/python"
            />
            <Trainingcard
              img={images.b}
              topic="JAVA FULL STACK DEVELOPMENT"
              to="/fullstack/java"
            />
            <Trainingcard
              img={images.c}
              topic="MERN FULL STACK DEVELOPMENT"
              to="/fullstack/mern"
            />
          </div>

          {/* UI / UX Designing Section */}
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-full h-20 text-white flex items-center justify-center">
            <h1 className="text-4xl">UI / UX Designing</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <Trainingcard
              img={images.d}
              topic="HTML, CSS & JAVASCRIPT"
              to="/uiux/basics"
            />
            <Trainingcard img={images.e} topic="FIGMA" to="/uiux/figma" />
            <Trainingcard img={images.f} topic="REACT JS" to="/uiux/react" />
          </div>

          {/* Advance Learnings Section */}
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-full h-20 text-white flex items-center justify-center">
            <h1 className="text-4xl">Advance Learnings</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <Trainingcard
              img={images.g}
              topic="CYBER SECURITY"
              to="/advanced/cybersecurity"
            />
            <Trainingcard img={images.h} topic="TESTING" to="/advanced/testing" />
            <Trainingcard img={images.i} topic="AI & ML" to="/advanced/aiml" />
          </div>

          {/* Professional Development Section */}
          <div className="bg-[url('/src/assets/images/frame.png')] bg-cover bg-no-repeat w-full h-20 text-white flex items-center justify-center">
            <h1 className="text-4xl">Professional Development</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <Trainingcard
              img={images.j}
              topic="COMMUNICATION SKILLS & APTITUDE"
              to="/4pprogram/professional"
            />
            <Trainingcard
              img={images.k}
              topic="ENTRY UNIVERSITY PROGRAM"
              to="/4pprogram/preparation"
            />
            <Trainingcard
              img={images.l}
              topic="FINISHING UNIVERSITY PROGRAM"
              to="/4pprogram/project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
