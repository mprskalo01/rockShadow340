import React from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className='shadow-lg rounded-lg p-6'>
      <h1 className='text-xl font-semibold mb-4 title text-center'>{title}</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 border-gradient'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='group aspect-square flex flex-col items-center justify-center p-4 hover:scale-110 transition-all duration-500 shadow-2xl'
          >
            <div className='mb-2 w-12 h-12'>{skill.icon}</div>
            <h2 className=' skill-name group-hover:scale-125 transition-all duration-500'>
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
