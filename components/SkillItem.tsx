import React from "react";
interface SkillItemProps {
  title: string;
  description: string;
}
const SkillItem: React.FC<SkillItemProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p className="text-base text-gray">{description}</p>
    </div>
  );
};

export default SkillItem;
