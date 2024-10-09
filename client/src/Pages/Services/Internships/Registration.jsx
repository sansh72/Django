import axiosInstance from '@/axiosInstance';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Registration = ({ className }) => {
  const { coursename } = useParams(); // Get internship name from URL
  const navigate = useNavigate();
  const [file,setFile] = useState();
  const [cover,setCover] = useState();


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    // Add the resume file manually to the FormData
    if (file) {
      formData.append('resume', file);
    }

    if (cover) {
      formData.append('cover_letter', cover);
    }
  
    formData.append('course_name', coursename); // Add internship name from URL
  
    try {
      const res = await axiosInstance.post('/internships/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
      console.log(res.data);
      navigate(`${formData.full_name}`)
    })
    } catch (e) {
      console.log(e);
    }
  
  };
  

  /* 
const data = {
      course_name: coursename, // Using the internship name from URL
      full_name: formData.get('fullName'),
      email: formData.get('email'),
      contact_no: formData.get('contactNo'),
      institution: formData.get('institution'),
      graduation_year: formData.get('graduationYear'),
      field_of_study: formData.get('fieldOfStudy'),
      city: formData.get('city'),
      desired_position: formData.get('desiredPosition'),
      resume: file, // File upload for resume
      cover_letter: formData.get('coverLetter') // File upload for cover letter
     };
  */
  return (
    <div className={`flex items-center mt-0 justify-center min-h-screen ${className}`}>
      <div className="w-[700px] m-8 p-8 bg-white border border-blue-800 rounded-[40px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Register for {coursename} Internship
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="full_name"
              placeholder="Full Name"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Contact Number</label>
            <input
              type="number"
              id="contactNo"
              name="contact_no"
              placeholder="Contact Number"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Educational Institution */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Educational Institution</label>
            <input
              type="text"
              id="institution"
              name="institution"
              placeholder="Educational Institution"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Year of Graduation */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Year of Graduation</label>
            <input
              type="number"
              id="graduationYear"
              name="graduation_year"
              placeholder="Year of Graduation"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Field of Study */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Field of Study</label>
            <input
              type="text"
              id="fieldOfStudy"
              name="field_of_study"
              placeholder="Field of Study"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-blue-600">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Desired Position */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Desired Position</label>
            <input
              type="text"
              id="desiredPosition"
              name="desired_position"
              placeholder="Desired Position"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.docx"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   required
            onChange={(e) => {
              const resume = e.target.files?.[0];
              console.log(resume)
              setFile(resume);
            }}
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Cover Letter</label>
            <input
              type="file"
              id="coverLetter"
              name="coverLetter"
              accept=".pdf,.docx"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                const coverletter = e.target.files?.[0];
                setCover(coverletter);
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-[150px] px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
