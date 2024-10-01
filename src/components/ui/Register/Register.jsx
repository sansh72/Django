import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Register = ({ className }) => {
  const { webinar_title } = useParams();
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      formData.append('webinar_title' , webinar_title)

      const response = await axios.post('http://localhost:8000/api/registrations/', formData)
      .then(res => {
        console.log(res.data);
        
        navigate(`${formData.get('first_name')} + ${formData.get('last_name')}`)
      })
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div
      className={`flex items-center mt-0 justify-center min-h-screen ${className}`}
    >
      <div className="w-[600px] p-8 bg-white border border-blue-800 rounded-[40px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Register Here!
        </h2>
        <form className="space-y-4"  onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-blue-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              placeholder="First Name"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              placeholder="Last Name"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              
              
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email ID"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              
            />
            <br />
            <input type="date" name="webinar_date" id="webinar_date" className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
          </div>

          {/* Checkboxes Section */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Slots:</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="slot_1"
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded"
                />
                <label className="ml-2 text-sm  text-black-600">
                  Slot-1:00pm - 2:00pm
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="checkbox2"
                  name="slot_2"
                  className="h-4 w-4 text-blue-500 border-blue-300 rounded"
                />
                <label className="ml-2 text-sm  text-black-600">
                  Slot-2:00pm - 3:00pm
                </label>
              </div>
            </div>
          </div>

          {/* Radio Buttons Section */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-blue-600 mb-2">
              How did you hear about this Webinar?
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="radio1"
                  name="source"
                  value="Social Media"
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded-full"
                />
                <label className="ml-2 text-sm text-black-600">
                  Social Media
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="radio2"
                  name="source"
                  value="Word of Mouth"
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded-full"
                />
                <label htmlFor="radio2" className="ml-2 text-sm text-black-600">
                  Word of Mouth
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="radio3"
                  name="source"
                  value="Advertisement"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded-full"
                />
                <label htmlFor="radio3" className="ml-2 text-sm text-black-600">
                  Advertisement
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="radio4"
                  name="source"
                  value="Other"
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded-full"
                />
                <label htmlFor="radio4" className="ml-2 text-sm text-black-600">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-[150px] px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
               Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
