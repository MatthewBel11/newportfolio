import React from 'react'
import PrimaryText from '../../components/PrimaryText/PrimaryText.js'
import Documents from '../../components/Documents/Documents.js'
import Work from '../../components/Work/WorkExp.js'
import SkillStack from '../../components/SkillStack/SkillStack.js'
import styles from './AboutPage.module.css'

var text = "A driven, resilient software engineering student at Newcastle University with a passion for coding and camping. Having successfully completed two summer internships, gaining a solid foundation in the Financial Services and Technology  industry whilst developing knowledge and softer skills within the development and architecture space. "

var text2 = " As I begin the third year of a Software Engineering Course, I’m focussed on further developing my problem-solving, coding and collaborative skills  through hackathons, personal projects and focussed learning whilst continuing to  challenge myself and explore new technologies. "


function AboutPage() {
  return (
    <>
      <PrimaryText title='About Me' text={text} text2={text2}> </PrimaryText>
      <Documents/>
      <Work/>
      <SkillStack/>
    </>
  );
}

export default AboutPage;
