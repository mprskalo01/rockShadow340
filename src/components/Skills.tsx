import React from 'react'
import SkillCategory from './SkillCategory'
import Icons from '../assets/icons/Icons'
import { useColor } from '../context/ColorContext'

const Skills: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <div className="width-custom container mx-auto px-6 text-center">
      <h2 className={`${isColorized ? 'color-title' : 'title'}`}>
        &lt;Skills /&gt;
      </h2>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <SkillCategory
          title="Front-End"
          skills={[
            { name: 'React', icon: <Icons.ReactIcon /> },
            { name: 'TypeScript', icon: <Icons.TypeScriptIcon /> },
            { name: 'Next.js', icon: <Icons.NextIcon /> },
            { name: 'HTML', icon: <Icons.HtmlIcon /> },
            { name: 'CSS', icon: <Icons.CSSIcon /> },
            { name: 'JavaScript', icon: <Icons.JavaScriptIcon /> },
          ]}
        />
        <SkillCategory
          title="Back-End"
          skills={[
            { name: 'Node.js', icon: <Icons.NodeIcon /> },
            { name: 'Express', icon: <Icons.ExpressIcon /> },
            { name: 'MongoDB', icon: <Icons.MongoDBIcon /> },
            { name: 'PostgreSQL', icon: <Icons.PostgreSQLIcon /> },
            { name: 'Docker', icon: <Icons.DockerIcon /> },
            { name: 'Nestjs', icon: <Icons.NestJSIcon /> },
          ]}
        />
        <SkillCategory
          title="Optimization"
          skills={[
            { name: 'Performance Tuning', icon: <Icons.PerformanceIcon /> },
            { name: 'Search Engine Optimization', icon: <Icons.SEOIcon /> },
            { name: 'Responsive Design', icon: <Icons.ResponsiveIcon /> },
          ]}
        />
      </div>
    </div>
  )
}

export default Skills
