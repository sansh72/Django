import React, { useEffect, useState } from "react";
import { FaHome, FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import goLogo from "./../../../assets/images/Go-Hackthon.png";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "@/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearAccessToken } from "@/store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken)
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For hamburger menu
  const navigate = useNavigate()


  const clearUsername = () => {
    if(!login)
    navigate('/login')
    dispatch(clearAccessToken());
    setLogin(false)
  }

  const findUser = () => {
    const username =  accessToken;
    axiosInstance.get(`finduser/${username}`)
    .then(res => {
      console.log(res)
      setLogin(true)
      })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    findUser()
  }, [])
  

  const toggleTraining = () => {
    setServicesOpen(false); // Close services dropdown if open
    setOpenDropdown(null)
    setTrainingOpen(!trainingOpen); // Toggle training dropdown
  };

  const toggleServices = () => {
    setTrainingOpen(false); // Close training dropdown if open
    setOpenDropdown(null)+
    setServicesOpen(!servicesOpen); // Toggle services dropdown
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle hamburger menu
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  
  return (
    <div className="Navbar mt-10 flex justify-between lg:justify-around relative font-serif">
      <img
        src={goLogo}
        alt="hg"
        className=" bg-cover object-cover bg-center max-h-20 aspect-auto"
      />
    
      <nav className="hidden lg:flex w-[830px] h-[70px] bg-[#0071D1] rounded-full items-center justify-center relative z-50">
        <ul className="flex list-none items-center text-white text-lg space-x-6 mr-5 relative">
          <li className="flex items-center">
            <NavLink to="/home">
              <button className="bg-white text-[#0071D1] px-10 py-2 rounded-full">
                <FaHome className="text-[25px]" />
              </button>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/about" className="hover:underline">
              About Us
            </NavLink>
          </li>

          {/* Training Dropdown */}
          <li
            onClick={toggleTraining}
            className="cursor-pointer flex items-center relative"
          >
            Training{" "}
            {trainingOpen ? (
               <FaChevronUp className="text-sm ml-1" />
            ) : (
              <FaChevronDown className="text-sm ml-1" />
            )}
            {/* Dropdown Menu */}
            {trainingOpen && (
              <div className="absolute top-full left-0 lg:w-[300px] bg-white mt-3 text-black shadow-lg rounded-md p-2 space-y-1 z-50">
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    4P Program
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/4pprogram/placement"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Placement
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/4pprogram/preparation"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Preparation
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/4pprogram/professional"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Professional
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/4pprogram/project"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Project
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
                {/* Full Stack Development */}
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    Full Stack Development
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/fullstack/python"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Python Full Stack
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/fullstack/java"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Java Full Stack
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/fullstack/mern"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            MERN Full Stack
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
                {/* UI/UX */}
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    UI/UX Designing
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/uiux/basics"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            HTML, CSS & JS
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/uiux/figma"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Figma
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/uiux/react"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            React
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
                {/* Advanced Learnings */}
                <ul>
                  <li className=" w-full relative hover:bg-blue-300 rounded-lg text-left group p-2 px-8">
                    Advanced Learnings
                    <ul className="hidden absolute min-w-[200px] -ml-1 left-full top-0 group-hover:block z-50">
                      <ul className="space-y-1 bg-white translate-x-5 p-2 rounded-lg">
                        <li>
                          <NavLink
                            to="/advanced/cybersecurity"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Cyber Security
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/advanced/testing"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            Testing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/advanced/aiml"
                            className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                          >
                            AI & ML
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            onClick={toggleServices}
            className="cursor-pointer flex items-center relative"
          >
            Services{" "}
            {servicesOpen ? (
              <FaChevronUp className="text-sm ml-1" />
            ) : (
              <FaChevronDown className="text-sm ml-1" />
            )}
            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-0 lg:w-[300px] mt-3 bg-white text-black shadow-lg rounded-md p-2 space-y-1 z-50">
                <NavLink
                  to="/services/worksops"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Workshops
                </NavLink>
                <NavLink
                  to="/services/webinars"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Webinars
                </NavLink>
                <NavLink
                  to="/services/placementsupport"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Placement Support
                </NavLink>
                <NavLink
                  to="/services/internships"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Internships
                </NavLink>
                <NavLink
                  to="/services/hackathons"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Hackathons
                </NavLink>
                <NavLink
                  to="/services/projects"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/services/research"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Research
                </NavLink>
                <NavLink
                  to="/services/startup"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  StartUp Mentorship Program
                </NavLink>
              </div>
            )}
          </li>

          <li className="flex items-center">
            <NavLink to="/carrier" className=" hover:underline">
              Career
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/contact" className="hover:underline">
              Contact Us
            </NavLink>
          </li>
          <li className="flex items-center">
          <button  className="hover:underline">
            <button onClick={clearUsername} className="bg-white text-[#0071D1] px-4 py-2 rounded-[10px]">
             {
              !login ? 
              "Log In/Sign Up":
              "Logout"
             } 
            </button>
          </button>
          </li>
        </ul>
      </nav>
      {/* Hamburger Menu for small screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl text-[#0071D1]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Slide-out menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-[75%] h-full bg-[#0071D1] text-white z-50 p-5 transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-4 text-lg">
          <li>
            <NavLink to="/home" className="block">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="block">
              About Us
            </NavLink>
          </li>
          <li>
            <div onClick={toggleTraining} className="cursor-pointer">
              Training{" "}
              {trainingOpen ? (
                <FaChevronUp className="inline ml-1" />
              ) : (
                <FaChevronDown className="inline ml-1" />
              )}
            </div>
            {trainingOpen && (
              <ul className="ml-4 space-y-2">
              <li className="w-full relative rounded-lg text-left p-2 px-8">
                <button
                  className="hover:bg-blue-300 rounded-lg text-left w-full"
                  onClick={() => toggleDropdown('4pProgram')}
                >
                  4P Program{" "}
                  {openDropdown === '4pProgram' ? (
                  <FaChevronUp className="inline ml-1" />
                  ) : (
                    <FaChevronDown className="inline ml-1" />
                  )}
                </button>
                
                {openDropdown === '4pProgram' && (
                  <ul className="space-y-1  p-2 rounded-lg mt-2">
                    <li>
                      <NavLink
                        to="/4pprogram/placement"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Placement
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/4pprogram/preparation"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Preparation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/4pprogram/professional"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Professional
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/4pprogram/project"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Project
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
        
              <li className="w-full relative rounded-lg text-left p-2 px-8">
                <button
                  className="hover:bg-blue-300 rounded-lg text-left w-full"
                  onClick={() => toggleDropdown('fullStack')}
                >
                  Full Stack Development{" "}
                  {openDropdown === 'fullStack' ? (
                  <FaChevronUp className="inline ml-1" />
                  ) : (
                    <FaChevronDown className="inline ml-1" />
                  )}
                </button>
                {openDropdown === 'fullStack' && (
                  <ul className="space-y-1  p-2 rounded-lg mt-2">
                    <li>
                      <NavLink
                        to="/fullstack/python"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Python Full Stack
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/fullstack/java"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Java Full Stack
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/fullstack/mern"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        MERN Full Stack
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
        
              <li className="w-full relative rounded-lg text-left p-2 px-8">
                <button
                  className="hover:bg-blue-300 rounded-lg text-left w-full"
                  onClick={() => toggleDropdown('uiux')}
                >
                  UI/UX Designing{" "}
                  {openDropdown === 'uiux' ? (
                  <FaChevronUp className="inline ml-1" />
                  ) : (
                    <FaChevronDown className="inline ml-1" />
                  )}
                </button>
                {openDropdown === 'uiux' && (
                  <ul className="space-y-1  p-2 rounded-lg mt-2">
                    <li>
                      <NavLink
                        to="/uiux/basics"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        HTML, CSS & JS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/uiux/figma"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Figma
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/uiux/react"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        React
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
        
              <li className="w-full relative rounded-lg text-left p-2 px-8">
                <button
                  className="hover:bg-blue-300 rounded-lg text-left w-full"
                  onClick={() => toggleDropdown('advancedLearnings')}
                >
                  Advanced Learnings{" "}
                  {openDropdown === 'advancedLearnings' ? (
                  <FaChevronUp className="inline ml-1" />
                  ) : (
                    <FaChevronDown className="inline ml-1" />
                  )}
                </button>
                {openDropdown === 'advancedLearnings' && (
                  <ul className="space-y-1  p-2 rounded-lg mt-2">
                    <li>
                      <NavLink
                        to="/advanced/cybersecurity"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Cyber Security
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/advanced/testing"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        Testing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/advanced/aiml"
                        className="block hover:bg-blue-300 rounded-lg text-left p-2 px-8"
                      >
                        AI & ML
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
          </li>
          <li>
            <div onClick={toggleServices} className="cursor-pointer">
              Services{" "}
              {servicesOpen ? (
                <FaChevronUp className="inline ml-1" />
              ) : (
                <FaChevronDown className="inline ml-1" />
              )}
            </div>
            {servicesOpen && (
              <ul className="ml-4 space-y-2">
                <NavLink
                  to="/services/worksops"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Workshops
                </NavLink>
                <NavLink
                  to="/services/webinars"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Webinars
                </NavLink>
                <NavLink
                  to="/services/placementsupport"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Placement Support
                </NavLink>
                <NavLink
                  to="/services/internships"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Internships
                </NavLink>
                <NavLink
                  to="/services/hackathons"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Hackathons
                </NavLink>
                <NavLink
                  to="/services/projects"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/services/research"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  Research
                </NavLink>
                <NavLink
                  to="/services/startup"
                  className="block hover:bg-blue-300 rounded-lg px-8 text-left p-2"
                >
                  StartUp Mentorship Program
                </NavLink>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/carrier" className="block">
              Career
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="block">
              Contact Us
            </NavLink>
          </li>
          <li>
            <button onClick={clearUsername} className="block">
            {
              !login ? 
              "Log In/Sign Up":
              "Logout"
             } 
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Navbar;







