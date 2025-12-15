// Statistics.jsx
import React from "react";
import {
  FaUsers,
  FaMoneyBillWave,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import Counter from "./counter";

const stats = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl text-blue-500 mb-2" />,
    value: 1250,
    suffix: "+",
    label: "Borrowers Helped",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave className="text-4xl text-green-500 mb-2" />,
    value: 2500000,
    suffix: "",
    label: "Funds Disbursed",
    prefix: "$",
  },
  {
    id: 3,
    icon: <FaClock className="text-4xl text-yellow-500 mb-2" />,
    value: 24,
    suffix: "h",
    label: "Average Approval Time",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl text-purple-500 mb-2" />,
    value: 1000,
    suffix: "+",
    label: "Loans Approved",
  },
];

const Statistics = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 title-text">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-base-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center"
          >
            {stat.icon}

            <h3 className="text-2xl font-bold mb-1">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </h3>

            <p className="text-base-content/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
