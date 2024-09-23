import React from "react";
import Para from "@/components/ui/Paragraph/Para";
import Button from "@/components/ui/Button/Button";
import Faqs from "@/components/ui/Faqs/Faqs";
import Card from "@/components/ui/Cards/Cards";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import HackathonCard from "@/components/ui/Cards/HackathonCard";
const Hackathons = () => {
  const navigate = useNavigate()
  let name = [
    "Hackathon Challenge 2024",
    "Android app Challenge",
    "AI Skill Challenge",
  ];
  const Register = (name)=>{
    
    
    navigate(`${name}`)
  }

  return (
    <div className="font-serif">
      <div className="flex flex-col lg:flex-row mt-14">
        <div className="flex flex-col justify-evenly items-start">
          <NavLink to="/home">
            <div className="flex m-8">
              <FaChevronLeft className="font-light text-5xl my-2 mx-2" />{" "}
              <h1 className=" text-blue-600 font-bold">Hackathons</h1>
            </div>
          </NavLink>{" "}
          <Para
            className="w-4/5 text-3xl m-10 text-blue-900"
            text="Unlock the secrets to success in our exclusive hachathon series designed to elevate your skills and knowledge."
            names={name}
          />
        </div>
        <img
          src="/src/assets/images/hackathone.png"
          alt="Workshop"
          className="h-96 mt-10"
        ></img>
      </div>
      <div className="text-center">
        {" "}
        <Button text="weekdays" className=" m-40" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <HackathonCard
            imgurl="https://static.vecteezy.com/system/resources/previews/011/161/241/large_2x/ai-glowing-chip-free-vector.jpg"
            topic={`${name[2]}`}
            description="This hackathons is a place where you can showcase your skills to everyone."
            tags={["machine learning" ,"AI"]}
            startDate="02/10/2024"
            endDate="07/10/2024"
            timeLeft="20 hours"
            participants="1000"
            onclick={()=>Register(`${name[2]}`)}
            />
          <HackathonCard
            imgurl="https://static.vecteezy.com/system/resources/previews/018/753/786/large_2x/new-idea-creative-idea-lamp-icon-creativity-innovation-and-inspiration-modern-technology-and-business-concept-closeup-finger-about-to-press-a-button-just-push-the-button-illustration-vector.jpg"
            topic={`${name[0]}`}
            description="This hackathons is a place where you can showcase your skills to everyone."
            tags={["machine learning" ,"AI"]}
            startDate="02/10/2024"
            endDate="07/10/2024"
            timeLeft="20 hours"
            participants="1000"
            onclick={()=>Register(`${name[0]}`)}
            />
          <HackathonCard
            imgurl="https://static.vecteezy.com/system/resources/previews/026/380/577/large_2x/abstract-digital-technology-futuristic-circuit-blue-pink-background-cyber-science-tech-innovation-communication-future-ai-big-data-internet-network-connection-cloud-hi-tech-illustration-3d-vector.jpg"
            topic={`${name[1]}`}
            description="This hackathons is a place where you can showcase your skills to everyone."
            tags={["machine learning" ,"AI"]}
            startDate="02/10/2024"
            endDate="07/10/2024"
            timeLeft="20 hours"
            participants="1000"
            onclick={()=>Register(`${name[1]}`)}
            />
        </div>
        <Button text="FAQs" className=" m-20" />
      </div>
      <div className="mt-10 mb-20 w-4/5 m-auto">
        <Faqs
          que="What topics will be covered in the Hackathons?"
          ans="Hackathon topics include coding, problem-solving, innovation, collaboration, design, AI, web development, data analysis, IoT, and blockchain solutions."
        />
        <Faqs
          que="Is there a cost to attend the Hackathons?"
          ans="Hackathon attendance costs vary, but many are free; others may charge for registration, materials, or accommodations."
        />
        <Faqs
          que="How do I access the Hackathon on the day of the event?"
          ans="Access the Hackathon via event website, virtual platform, or physical venue with registration confirmation or code. "
        />
        <Faqs
          que="Will the Hackathons be recorded for later viewing?"
          ans="Some Hackathons are recorded for later viewing, but it depends on the organizers and event format."
        />
      </div>
    </div>
  );
};

export default Hackathons;
