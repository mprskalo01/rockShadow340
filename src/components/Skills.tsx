import React from "react";
import SkillCategory from "./SkillCategory";

const Skills: React.FC = () => {
  return (
    <div className='container mx-auto px-6 py-12 w-4/6 max-w-screen-lg'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <SkillCategory
          title='Front-End'
          bgColor='bg-zinc-800'
          titleColor='text-cyan-500'
          skills={[
            { name: "React", color: "bg-blue-500" },
            { name: "HTML", color: "bg-orange-500" },
            { name: "CSS", color: "bg-blue-400" },
            { name: "JavaScript", color: "bg-yellow-500" },
            { name: "TypeScript", color: "bg-blue-600" },
            { name: "Next", color: "bg-blue-600" },
          ]}
        />
        <SkillCategory
          title='Back-End'
          bgColor='bg-zinc-800'
          titleColor='text-orange-400'
          skills={[
            { name: "Node.js", color: "bg-green-500" },
            { name: "Express", color: "bg-gray-500" },
            { name: "MongoDB", color: "bg-green-600" },
            { name: "SQL", color: "bg-blue-500" },
            { name: "Nest", color: "bg-purple-500" },
            { name: "Docker", color: "bg-purple-500" },
          ]}
        />
        <SkillCategory
          title='Optimization'
          bgColor='bg-zinc-800'
          titleColor='text-amber-200'
          skills={[
            { name: "Performance Tuning", color: "bg-red-500" },
            { name: "SEO", color: "bg-yellow-500" },
            { name: "Accessibility", color: "bg-blue-500" },
            { name: "Responsive Design", color: "bg-green-500" },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
