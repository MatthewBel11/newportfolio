import React from 'react'
import styles from './SkillStack.module.css'

import PythonIcon from './Python.png'
import CSharp from './c-sharp.png'
import html from './html.png'
import JavaS from './java-script.png'
import Java from './java.png'
import Sqlite from './sql-server.png'
import astro from './astro.png'
import firebase from './firebase.png'
import ReactImg from './React.png'
import Vue from './vue.png'
import css from './css.png'


import Skill from '../Skills/Skills.js'

function Skills(props){

    return(
        <>
        <div className={styles.TitleContainer}>
            <h2 className={styles.Title}> Skills </h2>
        </div>
        <div className={styles.Container}>
            <Skill Icon={PythonIcon} SkillName='Python'/>
            <Skill Icon={CSharp} SkillName='C#'/>
            <Skill Icon={html} SkillName='Html'/>
            <Skill Icon={JavaS} SkillName='JavaScript'/>
            <Skill Icon={Java} SkillName='Java'/>
            <Skill Icon={Sqlite} SkillName='Sqlite'/>
            <Skill Icon={firebase} SkillName='Firebase'/>
            <Skill Icon={astro} SkillName='Astro'/>
            <Skill Icon={Vue} SkillName='Vue'/>
            <Skill Icon={ReactImg} SkillName='React'/>
            <Skill Icon={css} SkillName='CSS'/>
        </div>
        </>
    )
}

export default Skills;   