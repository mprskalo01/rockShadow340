import React from "react";

interface Skill {
  name: string;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  bgColor: string;
  titleColor: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  bgColor,
  titleColor,
}) => {
  return (
    <div className={`${bgColor} shadow-lg rounded-lg p-6`}>
      <h1 className={`text-xl text-center font-semibold mb-4 ${titleColor}`}>
        {title}
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.color} rounded-lg p-4 flex flex-col items-center justify-center aspect-square`}
          >
            <div className='text-3xl mb-2'>
              {/* Placeholder for icon */}
              <span className='bg-white bg-opacity-30 rounded-full p-2'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  ></path>
                </svg>
              </span>
            </div>
            <h2 className='text-sm text-center text-white'>{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
