// Statistics.jsx
import React from "react";
import {
  FaUsers,
  FaMoneyBillWave,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl text-blue-500 mb-2" />,
    number: "1,250+",
    label: "Borrowers Helped",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave className="text-4xl text-green-500 mb-2" />,
    number: "$2.5M",
    label: "Funds Disbursed",
  },
  {
    id: 3,
    icon: <FaClock className="text-4xl text-yellow-500 mb-2" />,
    number: "24h",
    label: "Average Approval Time",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl text-purple-500 mb-2" />,
    number: "1,000+",
    label: "Loans Approved",
  },
];

const Statistics = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 title-text">
        Our Achievements
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center"
          >
            {stat.icon}
            <h3 className="text-2xl font-bold mb-1">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
