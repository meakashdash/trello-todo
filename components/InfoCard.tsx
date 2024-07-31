import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-2 p-4 bg-white shadow-md rounded-md">
      <span className="flex-shrink-0 pt-4">{icon}</span>
      <div>
        <h2 className="text-xl text-gray-700 font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
