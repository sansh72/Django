import axiosInstance from '@/axiosInstance';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TrainingRegistration = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [file, setFile] = useState();
  const [course, setCourse] = useState('');

  useEffect(() => {
    // Extract the "java fullstack" part from the URL
    const pathParts = location.pathname.split('/');
    const extractedCourse = `${pathParts[1]} ${pathParts[2]}`; // 'java fullstack'
    setCourse(extractedCourse);
  }, [location.pathname]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Add the resume file manually to the FormData
    if (file) {
      formData.append('resume', file);
    }

    try {
      const res = await axiosInstance.post('/training-registration/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      navigate(`/thank-you/${formData.get('name')}`);
    } catch (e) {
      console.log(e);
      navigate(`${formData.get('name')}`);
    }
  };

  return (
    <div className={`flex items-center mt-0 justify-center min-h-screen ${className}`}>
      <div className="w-[700px] m-8 p-8 bg-white border border-blue-800 rounded-[40px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Register for  { course} Training
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="name"
              placeholder="Full Name"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            />
          </div>

          {/* University */}
          <div>
            <label className="block text-sm font-medium text-blue-600">University</label>
            <input
              type="text"
              id="university"
              name="university"
              placeholder="University"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Branch */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              placeholder="Branch"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Skills"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Learning Duration */}
          <div>
            <label className="block text-sm font-medium text-blue-600">Learning Duration (in months)</label>
            <input
              type="number"
              id="learningDuration"
              name="learning_duration"
              placeholder="Learning Duration"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              onChange={(e) => {
                const resume = e.target.files?.[0];
                setFile(resume);
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-[150px] px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainingRegistration;
