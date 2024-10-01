import React from 'react';
import { useParams } from 'react-router-dom';

const HackathonDetail = () => {
  // Extract the hackathon name and individual's name from the URL parameters
  const { name, info } = useParams();

  return (
    <div className="min-h-screen p-8 font-serif">
      {/* Hackathon Details Section */}
      <div className="max-w-full mx-auto mt-5 bg-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Welcome to the {name} Hackathon!
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Thank you, <strong>{info}</strong>, for registering for the {name} Hackathon. We're excited to have you onboard for this exciting event where innovation meets creativity.
        </p>

        {/* Hackathon Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            About the Hackathon
          </h2>
          <p className="text-lg text-gray-700">
            The {name} Hackathon is a 48-hour event focused on building innovative solutions to address real-world problems. Participants will work in teams to design, develop, and present their projects, with opportunities to win prizes and network with industry professionals.
          </p>
        </section>

        {/* Code of Conduct */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Code of Conduct
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Be respectful to all participants and organizers.</li>
            <li>Harassment or discrimination of any kind will not be tolerated.</li>
            <li>Foster a collaborative and inclusive environment.</li>
            <li>Respect the event's time schedule and deadlines.</li>
            <li>Report any inappropriate behavior to the organizers immediately.</li>
          </ul>
        </section>

        {/* Rules and Regulations */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Rules and Regulations
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Participants must work in teams of 3-5 members.</li>
            <li>All projects must be developed during the hackathon period.</li>
            <li>Plagiarism or use of pre-built projects is strictly prohibited.</li>
            <li>Teams must submit their project on time for judging.</li>
            <li>Decisions made by the judges will be final and binding.</li>
          </ul>
        </section>

        {/* Success Message */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-green-600">
            You have successfully registered for the {name} Hackathon!
          </h3>
          <p className="text-lg text-gray-700 mt-4">
            We look forward to seeing your innovative ideas. Good luck!
          </p>
        </section>
      </div>
    </div>
  );
};

export default HackathonDetail;
