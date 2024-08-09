import React from 'react';
import ProjectItem from './ProjectItem'; 

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} technologies={project.technologies} />
      ))}
    </div>
  );
};

export default ProjectList;