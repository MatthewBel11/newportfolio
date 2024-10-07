import React from 'react'
import styles from './Skills.module.css'


function Skills(props){

    return(
        <div className={styles.Skill}>
            <img className={styles.Image} src={props.Icon} alt='SkllIcon'/>
            <p className={styles.SkillName}>{props.SkillName}</p>
        </div>
    )
}

export default Skills;   