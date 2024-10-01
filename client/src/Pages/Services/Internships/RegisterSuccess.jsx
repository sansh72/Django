import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RegisterSuccess = () => {
    // Extract the internship name and individual's name from the URL parameters
    const { coursename, name } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, [])
    
    return (
      <div className="min-h-screen p-8 font-serif">
        {/* Internship Details Section */}
        <div className="max-w-full mx-auto mt-5 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
            Welcome to the {coursename} Internship!
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Thank you, <strong>{name}</strong>, for applying for the {coursename} Internship. We're excited to have you take the next step toward your professional development and career growth.
          </p>
  
          {/* Internship Information */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              About the Internship
            </h2>
            <p className="text-lg text-gray-700">
              The {coursename} Internship is designed to offer hands-on experience in the field, where you will work closely with industry professionals on real-world projects. This is an opportunity to enhance your skills, network with experts, and potentially land a full-time role after the internship.
            </p>
          </section>
  
          {/* Code of Conduct */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Code of Conduct
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Maintain professionalism and respect toward all team members and supervisors.</li>
              <li>Harassment or discrimination of any kind will not be tolerated.</li>
              <li>Follow company policies and respect deadlines.</li>
              <li>Be open to feedback and strive for continuous improvement.</li>
              <li>Report any inappropriate behavior or concerns to your internship coordinator.</li>
            </ul>
          </section>
  
          {/* Internship Guidelines */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Internship Guidelines
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Adhere to the internship work schedule and hours agreed upon.</li>
              <li>Complete all assigned tasks and projects within the given timeline.</li>
              <li>Communicate regularly with your supervisor for feedback and assistance.</li>
              <li>Submit required reports or deliverables on time.</li>
              <li>Respect confidentiality and do not share sensitive information outside the organization.</li>
            </ul>
          </section>
  
          {/* Success Message */}
          <section className="text-center">
            <h3 className="text-2xl font-semibold text-green-600">
              You have successfully registered for the {coursename} Internship!
            </h3>
            <p className="text-lg text-gray-700 mt-4">
              We are excited to see you embark on this journey. Best of luck with your internship experience!
            </p>
          </section>
        </div>
      </div>
    );
};

export default RegisterSuccess;
