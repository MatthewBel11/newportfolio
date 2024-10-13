import React from 'react';
import PythonIcon from './Python.png';
import CSharp from './c-sharp.png';
import html from './html.png';
import JavaS from './java-script.png';
import Sqlite from './sql-server.png';
import astro from './astro.png';
import firebase from './firebase.png';
import ReactImg from './React.png';
import Vue from './vue.png';
import css from './css.png';

import Skill from '../Skills/Skills.jsx';

function Skills(props) {
    return (
        <>
            <div className="mx-auto mt-16 w-[78%] max-w-[1200px]">
                <h2 className="text-3xl text-gray-700 font-bold">Skills</h2>
            </div>
            <div className="flex flex-wrap w-[78%] mx-auto my-4 w-full max-w-[1200px]">
                <Skill Icon={PythonIcon} SkillName='Python' />
                <Skill Icon={CSharp} SkillName='C#' />
                <Skill Icon={html} SkillName='Html' />
                <Skill Icon={JavaS} SkillName='JavaScript' />
                <Skill Icon={Sqlite} SkillName='Sqlite' />
                <Skill Icon={firebase} SkillName='Firebase' />
                <Skill Icon={astro} SkillName='Astro' />
                <Skill Icon={Vue} SkillName='Vue' />
                <Skill Icon={ReactImg} SkillName='React' />
                <Skill Icon={css} SkillName='CSS' />
            </div>
        </>
    );
}

export default Skills;
