import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Register = ({ className }) => {
  const { webinar_title } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        formData.append('webinar_title', webinar_title);

        // Append checkbox values
        formData.append('slot_1', e.target.slot_1.checked);
        formData.append('slot_2', e.target.slot_2.checked);

        // Log the entire FormData object as key-value pairs
        console.log('Form Data:', [...formData]);  // This logs the key-value pairs of formData

        // Log individual form fields (optional, for detailed checks)
        console.log('First Name:', formData.get('first_name'));
        console.log('Last Name:', formData.get('last_name'));
        console.log('Email:', formData.get('email'));
        console.log('Webinar Date:', formData.get('webinar_date'));
        console.log('Slot 1:', e.target.slot_1.checked);  // Checkboxes
        console.log('Slot 2:', e.target.slot_2.checked);
        console.log('Source:', e.target.source.value);  // Radio button value

        const response = await axios.post('https://django-1-oiac.onrender.com/api/registrations/', formData);
        
        // Log the response from the server
        console.log('Response:', response.data);

        // Navigate to the success page with the names
        navigate(`/success/${formData.get('first_name')} ${formData.get('last_name')}`);
    } catch (error) {
        console.error("There was an error submitting the form!", error);
        // Log the error response from the server, if available
        if (error.response) {
            console.error("Error Response:", error.response.data); // This logs the detailed error from the backend
        }
        alert("Registration failed. Please check the form and try again.");
    }
};


  return (
    <div className={`flex items-center justify-center min-h-screen ${className}`}>
      <div className="w-[600px] p-8 bg-white border border-blue-800 rounded-[40px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register Here!</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input fields for first name, last name, email, and date */}
          <div>
            <label className="block text-sm font-medium text-blue-600">First Name</label>
            <input type="text" name="first_name" placeholder="First Name" className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-600">Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name" className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-600">Email</label>
            <input type="email" name="email" placeholder="Email ID" className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <br />
            <input type="date" name="webinar_date" className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Checkboxes Section */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Slots:</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input type="checkbox" name="slot_1" className="h-4 w-4 text-blue-600 border-blue-300 rounded" />
                <label className="ml-2 text-sm text-black-600">Slot-1:00pm - 2:00pm</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="slot_2" className="h-4 w-4 text-blue-600 border-blue-300 rounded" />
                <label className="ml-2 text-sm text-black-600">Slot-2:00pm - 3:00pm</label>
              </div>
            </div>
          </div>

          {/* Radio Buttons Section */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-blue-600 mb-2">How did you hear about this Webinar?</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input type="radio" name="source" value="Social Media" className="h-4 w-4 text-blue-600 border-blue-300 rounded-full" />
                <label className="ml-2 text-sm text-black-600">Social Media</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="source" value="Word of Mouth" className="h-4 w-4 text-blue-600 border-blue-300 rounded-full" />
                <label className="ml-2 text-sm text-black-600">Word of Mouth</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="source" value="Advertisement" className="h-4 w-4 text-blue-600 border-gray-300 rounded-full" />
                <label className="ml-2 text-sm text-black-600">Advertisement</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="source" value="Other" className="h-4 w-4 text-blue-600 border-blue-300 rounded-full" />
                <label className="ml-2 text-sm text-black-600">Other</label>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="w-[150px] px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

