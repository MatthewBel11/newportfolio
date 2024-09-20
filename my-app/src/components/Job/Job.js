import React from 'react'
import styles from './Job.module.css'

function Job(props){

    return(
        <>
        <div className={styles.Container}>

            <div className={styles.ImageContainer}>
                <img className={styles.Image} alt='JobLogo' src={props.Image} />
            </div>

            <div className={styles.JobInfo}>
                <h2 className={styles.CompanyTitle}>{props.CompanyTitle}</h2>
                <h2 className={styles.JobTitle}>{props.JobTitle}</h2>
                <h3 className={styles.JobLocation}>{props.JobLocation}</h3>
            </div>

        </div>
        <p className={styles.JobText}>{props.JobText}</p>

        </>
    )
}

export default Job;