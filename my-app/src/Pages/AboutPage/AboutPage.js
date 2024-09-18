import React from 'react'
import PrimaryText from '../../components/PrimaryText/PrimaryText.js'
import Documents from '../../components/Documents/Documents.js'
import Work from '../../components/Work/WorkExp.js'
import styles from './AboutPage.module.css'

var text = 'Basic holder text'

function AboutPage() {
  return (
    <>
      <PrimaryText title='About Me' text={text}></PrimaryText>
      <Documents/>
      <Work/>
    </>
  );
}

export default AboutPage;
