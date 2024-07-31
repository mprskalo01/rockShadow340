import React from "react";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  const projects = [
    {
      imageUrl:
        "https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.webp",
      title: "Car Rental",
      description: "MERN Fullstack Web App",
      visitLink: "https://github.com/mprskalo01",
      githubLink: "https://github.com/mprskalo01",
    },
    {
      imageUrl:
        "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg",
      title: "#2",
      description: "Description for #2.",
      visitLink: "https://github.com/mprskalo01",
      githubLink: "https://github.com/mprskalo01",
    },
    {
      imageUrl:
        "https://themewagon.com/wp-content/uploads/2020/10/MaleFashion-1200x736.png",
      title: "#3",
      description: "Description for #3.",
      visitLink: "https://github.com/mprskalo01",
      githubLink: "https://github.com/mprskalo01",
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center mx-auto mt-40 gap-24 xl:gap-36 width-custom'>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          visitLink={project.visitLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;
