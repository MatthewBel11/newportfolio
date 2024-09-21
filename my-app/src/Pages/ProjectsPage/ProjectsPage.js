import React from 'react'
import styles from './ProjectsPage.module.css'

import Project from '../../components/Project/Project'

var ProjectOne = {
  ProjectTitle : 'Placeholder',
  ProjectText : 'Developed a full-stack web application using Python, Flask, HTML, and CSS, enabling users to track and manage their health documents & data in real time. Integrated Firebase for secure, real time and scalable data storage, along with OAuth for user authentication, ensuring user data privacy and accessibility. Implemented automated testing with Pytest and set up a CI/CD pipeline, improving code quality and streamlining the deployment process throughout development.',
}

function AboutPage() {
  return (
    <>
      <Project ProjectTitle={ProjectOne.ProjectTitle} ProjectText={ProjectOne.ProjectText} demo='Demo'/>
      <Project ProjectTitle={ProjectOne.ProjectTitle} ProjectText={ProjectOne.ProjectText}/>
      <Project ProjectTitle={ProjectOne.ProjectTitle} ProjectText={ProjectOne.ProjectText}/>
      <Project ProjectTitle={ProjectOne.ProjectTitle} ProjectText={ProjectOne.ProjectText}/>
    </>
  );
}

export default AboutPage;
