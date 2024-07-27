import React from "react";
import SkillCategory from "./SkillCategory";
import Icons from "../assets/Icons";

const Skills: React.FC = () => {
  return (
    <div className='container px-6 py-12 mx-auto w-4/6 max-w-screen-lg'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <SkillCategory
          title='Front-End'
          skills={[
            { name: "React", icon: <Icons.ReactIcon /> },
            { name: "JavaScript", icon: <Icons.JavaScriptIcon /> },
            { name: "TypeScript", icon: <Icons.TypeScriptIcon /> },
            { name: "HTML", icon: <Icons.HtmlIcon /> },
            { name: "CSS", icon: <Icons.CSSIcon /> },
            { name: "Next.js", icon: <Icons.NextIcon /> },
          ]}
        />
        <SkillCategory
          title='Back-End'
          skills={[
            { name: "Node.js", icon: <Icons.NodeIcon /> },
            { name: "Express", icon: <Icons.ExpressIcon /> },
            { name: "MongoDB", icon: <Icons.MongoDBIcon /> },
            { name: "PostgreSQL", icon: <Icons.PostgreSQLIcon /> },
            { name: "Docker", icon: <Icons.DockerIcon /> },
            { name: "Nestjs", icon: <Icons.NestJSIcon /> },
          ]}
        />
        <SkillCategory
          title='Optimization'
          skills={[
            { name: "Performance Tuning", icon: <Icons.PerformanceIcon /> },
            { name: "Search Engine Optimization", icon: <Icons.SEOIcon /> },
            { name: "Responsive Design", icon: <Icons.ResponsiveIcon /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
