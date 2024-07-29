import React from "react";
import { useColor } from "../context/ColorContext";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const { isColorized } = useColor();

  // Determine grid classes based on the title
  const gridClasses =
    title === "Optimization"
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 gap-4";

  return (
    <div
      className={`shadow-lg rounded-3xl p-6 ${
        isColorized ? "bg-sky-300" : "bg-zinc-800"
      }`}
    >
      <h1 className='text-xl font-semibold mb-4 title text-center'>{title}</h1>
      <div className={`border-gradient pb-4 rounded-xl  ${gridClasses}`}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-between p-4 hover:scale-110 transition-all duration-500 shadow-2xl rounded-xl ${
              isColorized ? "bg-pink-400" : ""
            } ${
              title === "Optimization" && index === 2
                ? "sm:col-span-2 h-full"
                : "h-full"
            }`}
          >
            <div className='mb-2 w-12 h-12 group-hover:scale-125 transition-all duration-500'>
              {skill.icon}
            </div>
            <h3 className='skill-name group-hover:scale-110 transition-all duration-500'>
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
