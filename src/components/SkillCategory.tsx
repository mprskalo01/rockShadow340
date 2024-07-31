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

  const gridClasses =
    title === "Optimization"
      ? "grid grid-cols-2 gap-4"
      : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4";

  return (
    <div
      className={`shadow-lg rounded-3xl p-6 ${
        isColorized
          ? "bg-gradient-to-t from-cyan-200 to-cyan-600"
          : "bg-zinc-800"
      } flex flex-col h-full`}
    >
      <h1
        className={`text-xl font-semibold mb-4 title text-center ${
          isColorized ? "color-skill-title" : "title"
        }`}
      >
        {title}
      </h1>
      <div
        className={`pb-4 rounded-xl ${gridClasses} flex-grow ${
          isColorized ? "color-border-gradient" : "border-gradient"
        }`}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-between p-4 hover:scale-110 transition-all duration-500 shadow-2xl rounded-xl ${
              isColorized ? "bg-gradient-to-t from-pink-200 to-pink-600" : ""
            } ${title === "Optimization" && index === 2 ? "col-span-2" : ""}`}
          >
            <div className='mb-2 w-12 h-12 group-hover:scale-125 transition-all duration-500'>
              {skill.icon}
            </div>
            <h3
              className={`group-hover:scale-110 transition-all ${
                isColorized ? "color-skill-name" : "skill-name"
              }`}
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
