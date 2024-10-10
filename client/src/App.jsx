import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/ui/Login/Login";
import About from "./Pages/About/About";
import Carrier from "./Pages/Carrer/Carrier";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import NavFooter from "./components/NavFooter/NavFooter";
import Placement from "./Pages/Training/4pProgram/Placement";
import Preparation from "./Pages/Training/4pProgram/Preparation";
import Professional from "./Pages/Training/4pProgram/Professional";
import Project from "./Pages/Training/4pProgram/Project";
import Workshops from "./Pages/Services/Workshops";
import Webinar from "./Pages/Services/Webinar";
import Placements from "./Pages/Services/Placements";
import Internships from "./Pages/Services/Internships/Internships";
import AiAndMl from "./Pages/Training/AdvancedLearning/AiAndMl";
import CyberSecurity from "./Pages/Training/AdvancedLearning/CyberSecurity";
import Testing from "./Pages/Training/AdvancedLearning/Testing";
import Java from "./Pages/Training/FullStack/Java";
import Python from "./Pages/Training/FullStack/Python";
import Mern from "./Pages/Training/FullStack/Mern";
import Figma from "./Pages/Training/UiUx/Figma";
import HtmlCss from "./Pages/Training/UiUx/HtmlCss";
import ReactUi from "./Pages/Training/UiUx/ReactUi";
import Hackathons from "./Pages/Services/Hackathons";
import Projects from "./Pages/Services/Projects";
import StartUpProgram from "./Pages/Services/StartUpProgram";
import Ourmentor from "./Pages/ourmentor/Ourmentor";
import Research from "./Pages/Services/Research";
import Register from "./components/ui/Register/Register";
import Thanku from "./components/ui/Thanku/Thanku";
import Reviews from "./components/ui/Trainer/Reviews";
import Trainings from "./Pages/Services/Trainings";
import RegisterHackathon from "./components/ui/Register/RegisterHackathon";
import HackathonDetail from "./Pages/Services/HackathonDetail";
import Registration from "./Pages/Services/Internships/Registration";
import RegisterSuccess from "./Pages/Services/Internships/RegisterSuccess";
import Signup from "./components/ui/Signup/Signup";
import TrainingRegistration from "./components/ui/Register/TrainingRegistration";
function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route>
            <Route path="Thanku" element={<Thanku />} />
            <Route path="Reviews" element={<Reviews />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
          </Route>
        
        <Route path="/" element={<NavFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ourmentor" element={<Ourmentor />} />

          <Route path="/services">
            
            
            <Route path="placementsupport" element={<Placements />} />
            <Route path="internships" element={<Internships />} />
            <Route path="internships/:coursename" element={<Registration />} />
            <Route path="internships/:coursename/:name" element={<RegisterSuccess />} />

            <Route path="hackathons" element={<Hackathons />} />
            <Route path="hackathons/:name" element={<RegisterHackathon />} />
            <Route path="hackathons/:name/:info" element={<HackathonDetail />} />

            <Route path="webinars" element={<Webinar />} />
            <Route path="webinars/:webinar_title" element={<Register />} />
            <Route path="webinars/:name/:info" element={<Thanku />} />

            <Route path="worksops" element={<Workshops />} />
            <Route path="worksops/:webinar_title" element={<Register />} />
            <Route path="worksops/:name/:info" element={<Thanku />} />

            <Route path="projects" element={<Projects />} />
            <Route path="research" element={<Research />} />
            <Route path="startup" element={<StartUpProgram />} />
            <Route path="trainings" element={<Trainings />} />
          </Route>
          
          <Route path="/4pprogram">
            <Route path="placement" element={<Placement />} />
            <Route path="preparation" element={<Preparation />} />
            <Route path="professional" element={<Professional />} />
            <Route path="project" element={<Project />} />
          </Route>

          <Route path="advanced">
              <Route path="aiml" element={<AiAndMl />} />
              <Route path="aiml/:training_name" element={<TrainingRegistration />} />
              <Route path="aiml/:training_name/:info" element={<Thanku />} />

              <Route path="cybersecurity" element={<CyberSecurity />} />
              <Route path="cybersecurity/:training_name" element={<TrainingRegistration />} />
              <Route path="cybersecurity/:training_name/:info" element={<Thanku />} />

              <Route path="testing" element={<Testing />} />
              <Route path="testing/:training_name" element={<TrainingRegistration />} />
              <Route path="testing/:training_name/:info" element={<Thanku />} />
            </Route>

          <Route path="fullstack">
              <Route path="java" element={<Java />} />
              <Route path="java/:training_name" element={<TrainingRegistration />} />
              <Route path="java/:training_name/:info" element={<Thanku />} />

              <Route path="python" element={<Python />} />
              <Route path="python/:training_name" element={<TrainingRegistration />} />
              <Route path="python/:training_name/:info" element={<Thanku />} />

              <Route path="mern" element={<Mern />} />
              <Route path="mern/:training_name" element={<TrainingRegistration />} />
              <Route path="mern/:training_name/:info" element={<Thanku />} />
          </Route>

          <Route path="uiux">
              <Route path="figma" element={<Figma />} />
              <Route path="figma/:training_name" element={<TrainingRegistration />} />
              <Route path="figma/:training_name/:info" element={<Thanku />} />

              <Route path="basics" element={<HtmlCss />} />
              <Route path="basics/:training_name" element={<TrainingRegistration />} />
              <Route path="basics/:training_name/:info" element={<Thanku />} />

              <Route path="react" element={<ReactUi />} />
              <Route path="react/:training_name" element={<TrainingRegistration />} />
              <Route path="react/:training_name/:info" element={<Thanku />} />
            </Route>



        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
