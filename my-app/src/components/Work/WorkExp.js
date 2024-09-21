import React from 'react'
import styles from './WorkExp.module.css'
import Job from '../Job/Job.js'

import ImageAtom from './ATOMBANK.png'
import ImageZebra from './zebra.png'
import ImageNU from './NU.png'

function Work(props){

    var JobOne = {
        CompanyTitle : 'Atom Bank',
        JobTitle : 'Junior Enterprise Architect',
        JobLocation : 'United Kingdom, Durham, Aykley Woods | June 2024 - Sept 2024',
        JobText : "At a Fintech based in the Northeast, I gained experience applying enterprise architecture frameworks like TOGAF and CSVLOD in a fast-paced startup environment. I contributed to the development of a prototype AI Companion project using front-end technologies such as React, JavaScript, and Python, and integrated Google Cloud Run and BigQuery to enable data-driven solutions. Additionally, I collaborated with interns to present a data-driven improvement proposal to Atom Bank's Executive Committee and CEO, enhancing my problem-solving and presentation skills."
    }


    var JobTwo = {
        CompanyTitle : 'Zebra Technologies',
        JobTitle : 'Software Engineering Virtual Intern',
        JobLocation : 'Virtual | Mar 2023 – May 2023',
        JobText : 'During my internship, I collaborated with a small team to develop an employee workflow optimization app using Flutter, designed to improve task management with features such as task lists and deadlines. I proposed a development methodology that combined atomic design principles with the Waterfall model, which streamlined the process and reduced development time by a week. Additionally, I led the GUI design using Figma, enabling a detailed breakdown of components and facilitating easy refinements, improving the overall design efficiency.'
    }

    var JobThree = {
        CompanyTitle : 'Ikea',
        JobTitle : 'Sales Assistant & Kitchen Designer',
        JobLocation : 'United Kingdom, Gateshead | Nov 2022 – Jun 2024',
        JobText : 'BSc Software Engineering (2:1 Expected, June 2026) Key Modules: Algorithm Design and Analysis, Software Systems and Design, Database Design'
    }

    var JobFour = {
        CompanyTitle : 'Newcastle University',
        JobTitle : '3rd Year Software Engineering Student',
        JobLocation : 'United Kingdom, Newcastle | Nov 2022 – Current',
        JobText :  "I am pursuing a BSc in Software Engineering, expecting to graduate in June 2026 with a 2:1 classification. My studies focus on areas like Algorithm Design, Software Systems, and Database Design. In Year 1, I achieved high marks in Programming Portfolio 1 and 2 (80 and 73) and Computer Systems Design (78). In Year 2, I earned solid results in Algorithm Design (60), Software Systems Design (65), and excelled in a Software Engineering Team Project with a score of 80."
    }


    return(
        <div className={styles.MainHolder}>
            <h2 className={styles.Title}> Internship Experience </h2>
            <Job Image = {ImageAtom} CompanyTitle={JobOne.CompanyTitle} JobTitle={JobOne.JobTitle} JobLocation={JobOne.JobLocation} JobText={JobOne.JobText}/>
            <Job Image = {ImageZebra} CompanyTitle={JobTwo.CompanyTitle} JobTitle={JobTwo.JobTitle} JobLocation={JobTwo.JobLocation} JobText={JobTwo.JobText}/>

            <h2 className={styles.WorkTitle}> Education </h2>
            <Job Image = {ImageNU} CompanyTitle={JobFour.CompanyTitle} JobTitle={JobFour.JobTitle} JobLocation={JobFour.JobLocation} JobText={JobFour.JobText}/>
        </div>
    )
}

export default Work;