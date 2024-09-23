import React from 'react';
import PropTypes from 'prop-types';

const HackathonCard = ({
  imgurl,
  topic,
  description,
  startDate,
  endDate,
  timeLeft,
  participants,
  tags,
  onclick,
}) => {
  return (
    <div className="flex justify-center rounded-lg bg-white shadow-lg">
      <div className=" border-gray-300 w-80 mx-6 rounded-lg p-4">
        {/* Image */}
        <img
          src={imgurl}
          alt="Hackathon"
          className="mt-2 mx-auto h-40 w-64 object-contain"
        />

        {/* Hackathon Topic */}
        <h3 className="text-center mt-4 text-xl font-semibold text-gray-800">
          {topic}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-left  text-gray-600">
          {description}
        </p>

        {/* Date Information */}
        <div className="mt-4">
          <p className="text-sm text-left  text-gray-700">
            <strong>Start Date:</strong> {startDate}
          </p>
          <p className="text-sm text-left  text-gray-700">
            <strong>End Date:</strong> {endDate}
          </p>
        </div>

        {/* Time Left for Hackathon */}
        <p className="mt-2 text-left  text-sm text-red-500 font-medium">
          Time Left: {timeLeft}
        </p>

        {/* Participants */}
        <p className="mt-2 text-sm text-left text-gray-700">
          <strong>Participants:</strong> {participants} people registered
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags && tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>


        {/* Register Button */}
        <button
          className="bg-blue-600 text-white px-8 py-2 rounded-full mt-4 m-auto block"
          onClick={onclick}
        >
          Register
        </button>
      </div>
    </div>
  );
};

// PropTypes for better reusability and validation
HackathonCard.propTypes = {
  imgurl: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
  participants: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default HackathonCard;
