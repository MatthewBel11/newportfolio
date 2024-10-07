import React from 'react';
import styles from './ProjectsPage.module.css';
import Project from '../../components/Project/Project';

import Python from '../../components/SkillStack/Python.png';
import Html from '../../components/SkillStack/html.png';
import ReactImg from '../../components/SkillStack/React.png';
import Vue from '../../components/SkillStack/vue.png';
import Firebase from '../../components/SkillStack/firebase.png';
import astro from '../../components/SkillStack/astro.png';
import cog from '../../components/SkillStack/cogs.png';
import Javascript from '../../components/SkillStack/java-script.png';
import css from '../../components/SkillStack/css.png';
import db from '../../components/SkillStack/db.png';
import scrape from '../../components/SkillStack/web.png';
import sqlite from '../../components/SkillStack/sql-server.png';
import checked from '../../components/SkillStack/checked.png';



const ProjectWebsite = {
    ProjectTitle: 'This Website',
    ProjectText: 'I built a personal portfolio website using React, JavaScript, HTML, and CSS to showcase my work and skills. The current setup efficiently handles interactivity and styling but I plan to enhance it further by implementing Astro to improve loading speed and boost SEO performance. In addition, I will transition from traditional CSS to Tailwind CSS to streamline styling, making the website more responsive and maintainable.',
    skills: [
        { icon: Javascript, name: 'JavaScript' },
        { icon: Html, name: 'HTML' },
        { icon: css, name: 'CSS' },
        { icon: ReactImg, name: 'React' },
        { icon: cog, name: 'Under Development ' },
    ],
    ProjectViewLink: 'https://github.com/MatthewBel11/newportfolio',
    ProjectDemoLink: 'https://matthew-swe.com',
};

const ProjectHealth = {
    ProjectTitle: 'Personal Health Diary Website',
    ProjectText: 'Built a full-stack web application using Python, Flask, HTML, and CSS for real-time health data management, with Firebase for secure, scalable storage and OAuth for user authentication. Automated testing with Pytest and implemented a CI/CD pipeline to enhance code quality and streamline the deployment process.',
    skills: [
        { icon: Python, name: 'Python' },
        { icon: Html, name: 'HTML' },
        { icon: css, name: 'CSS' },
        { icon: Firebase, name: 'Firebase' },
        { icon: checked, name: 'Completed' },
    ],
    ProjectViewLink: 'https://github.com/MatthewBel11/HealthTrack',
    ProjectDemoLink: '',
};

const ProjectChatom = {
    ProjectTitle: 'ChAtom GPT',
    ProjectText: "I developed a company prototype AI Companion project using React, JavaScript, Python, and Astro, applying atomic design principles for a scalable front-end architecture. I designed the website and basic architecture in LucidChart and created a custom Python API hosted on Google Cloud Run, utilizing BigQuery to store and retrieve user chat histories. The project integrated Google's Gemini AI model for intelligent responses, with REST API calls to the Python backend. In collaboration with one other team member, we used HTML, CSS, and JavaScript to deliver a data-driven, cloud-based solution.",
    skills: [
        { icon: Python, name: 'Python' },
        { icon: Javascript, name: 'JavaScript' },
        { icon: css, name: 'CSS' },
        { icon: ReactImg, name: 'React' },
        { icon: astro, name: 'Astro' },
        { icon: db, name: 'BigQuery' },
        { icon: checked, name: 'Completed' },
    ],
    ProjectViewLink: 'https://github.com/MatthewBel11/portfolio',
    ProjectDemoLink: 'https://github.com/MatthewBel11/portfolio'
};

const ProjectIkea = {
    ProjectTitle: 'Ikea Web Scraping',
    ProjectText: "I developed a Python app using Selenium, pandas, and SQLite to extract and analyze data from Ikea's Kitchen category, focusing on customer star ratings, pricing, and product details. The app features a user-friendly GUI built with Tkinter, allowing for easy navigation and data display. This project not only enhanced my technical skills but also improved my understanding of Ikea's product performance, helping identify areas for optimization and product improvement.",
    skills: [
        { icon: Python, name: 'Python' },
        { icon: scrape, name: 'Selenium' },
        { icon: sqlite, name: 'SQLite' },
        { icon: checked, name: 'Completed' },
    ],
    ProjectViewLink: 'https://github.com/MatthewBel11/portfolio',
    ProjectDemoLink: 'https://github.com/MatthewBel11/portfolio',
};

const ProjectOldWebsite = {
    ProjectTitle: 'My Old Portfolio Website',
    ProjectText: 'Developed a responsive website using Vue.js with component-based architecture and state management for reusable, scalable code, and implemented the UI with Figma, HTML, and CSS. Deployed the site using GitHub Pages and Netlify, gaining experience in version control, continuous deployment, and static site hosting.',
    skills: [
        { icon: Vue, name: 'Vue' },
        { icon: Javascript, name: 'JavaScript' },
        { icon: Html, name: 'HTML' },
        { icon: css, name: 'CSS' },
        { icon: checked, name: 'Completed' },
    ],
    ProjectViewLink: 'https://github.com/MatthewBel11/portfolio',
    ProjectDemoLink: 'https://swe-matthew.com/',
};

function AboutPage() {
    return (
        <>
            <Project 
                ProjectTitle={ProjectWebsite.ProjectTitle} 
                ProjectText={ProjectWebsite.ProjectText} 
                skills={ProjectWebsite.skills} 
                demo='Demo' view='View on GitHub' 
                demoLink={ProjectWebsite.ProjectDemoLink} viewLink={ProjectWebsite.ProjectViewLink}
            />

            <Project 
                ProjectTitle={ProjectHealth.ProjectTitle} 
                ProjectText={ProjectHealth.ProjectText} 
                skills={ProjectHealth.skills}  
                view='View on GitHub' demo='Demo N/A'
                viewLink={ProjectHealth.ProjectViewLink}
            />

            <Project 
                ProjectTitle={ProjectChatom.ProjectTitle} 
                ProjectText={ProjectChatom.ProjectText} 
                skills={ProjectChatom.skills} 
                view='Code N/A due to being a Internship project' 
                
            />

            <Project 
                ProjectTitle={ProjectOldWebsite.ProjectTitle} 
                ProjectText={ProjectOldWebsite.ProjectText} 
                skills={ProjectOldWebsite.skills} 
                demo='Demo' view='View on GitHub' 
                demoLink={ProjectOldWebsite.ProjectDemoLink} viewLink={ProjectOldWebsite.ProjectViewLink}
            />

            <Project 
                ProjectTitle={ProjectIkea.ProjectTitle} 
                ProjectText={ProjectIkea.ProjectText} 
                skills={ProjectIkea.skills} view='Code N/A' 
                
            />

        </>
    );
}

export default AboutPage;
