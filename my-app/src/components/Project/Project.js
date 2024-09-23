import React from 'react'
import styles from './Project.module.css'
import Skills from '../Skills/Skills';

import Python from '../SkillStack/Python.png'


function Project(props){

    return(
        <div className={styles.Project}>
            
            <div className={styles.TextHolder}>
                <h2 className={styles.ProjectName}>{props.ProjectTitle}</h2>
                <p className={styles.ProjectText}>{props.ProjectText}</p>

                <div className={styles.SkillHold}>
                    {props.skills.map((skill, index) => (
                        <Skills key={index} Icon={skill.icon} SkillName={skill.name} />
                    ))}
                </div>

                <div className = {styles.ViewContainer}>
                    <p className={styles.ProjectView}>{props.view}</p>
                    <p className={styles.ProjectView}>{props.demo}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;   