import MyCard from "@/components/ui/Cards/MentorCard";
import Our_Partners from "@/components/ui/Out-Partners/Our_Partners";
import ReadMore from "@/components/ui/ReadMore/ReadMore";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="font-serif">
      <div className="flex flex-col lg:flex-row mt-14 max-w-xl lg:max-w-full">
        <div className="flex flex-col justify-evenly items-start">
          <NavLink to="/home">
            <div className="flex m-8">
              <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
              <h1 className=" text-blue-600 font-bold">About</h1>
            </div>
          </NavLink>
          <div className="w-3/4 text-2xl ml-20 mt-10">
            <p>
              Empowering your digital journey with expert web development,
              hands-on workshops, comprehensive training, and dedicated
              placement support for your career success.
            </p>
            <p className="mt-10">
              To create a community of talented and experienced tech
              professionals who can contribute to the growth of the economy and
              society.
            </p>

          </div>
        </div>
        <img
          src="src/assets/images/About.png"
          alt="about us"
          className="h-96 md:mr-20 max-w-96"
        ></img>
      </div>
      <div className="flex flex-col lg:flex-row items-end lg:max-w-full lg:justify-evenly m-10 mt-20">
        <img
          src="src/assets/images/about2.png"
          alt="about gohackthone"
          className="h-96 mt-20 md:m-10  max-w-96 order-2 lg:order-1"
        ></img>
        <div className="md:w-3/4 max-w-xl order-1 lg:order-2">
          <h1 className=" md:m-10">About GoHackathon</h1>
          <p className="text-xl  md:m-10 md:w-3/4 mr-5">
            Go Hackathon is a platform that brings together industry
            professionals, educators, and students to foster talent and
            innovation. It aims to equip students with advanced skills,
            software, and industry best practices, and provides a ecosystem
            for industry-academia partnership to develop impactful ideas.
            Through a series of events, seminars, hackathons, internships, and
            projects, Go Hackathon offers nurturing, mentorship, skills, and
            professional opportunities to its members and participants.
          </p>
        </div>
      </div>
      <h1 className="text-center m-28">Our Mentors</h1>
      <div className="flex justify-evenly flex-col md:flex-row m-10 ">
        <MyCard
          imgUrl="src/assets/images/picture1.png"
          title="Rahul"
          description="Software Architect"
        />
        <MyCard
          imgUrl="src/assets/images/picture2.png"
          title="Riya"
          description="Tester"
        />
        <MyCard
          imgUrl="src/assets/images/picture3.png"
          title="Harsha"
          description="DevOps Engineer"
        />
        <MyCard
          imgUrl="src/assets/images/picture4.png"
          title="Swathi"
          description="UI / UX DESIGNER"
        />
      </div>
      <h1 className="text-center m-28 ">Our Partners</h1>
      <div className="mb-28">
        <Our_Partners />
      </div>
    </div>
  );
};

export default About;
