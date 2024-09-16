import React from 'react'
import styles from './Titlecard.module.css'
import Image from './img1.png'

function Titlecard(){

    return(
        <div className={styles.Cardholder}>
            <img src={Image} className={styles.ProfileImage}></img>
            <div className={styles.Textholder}>
                <h1 className={styles.MainIntro}>Matthew Bell </h1>
                <h2 className={styles.SubIntro}>Junior Software Engineer & 3rd Year Comp Sci Student </h2>
                <h3 className={styles.LocationIntro}>Newcastle Upon Tyne, United Kingdom</h3>
                <h3 className={styles.LocationIntro}>
                    <a href='' className={styles.LinkElement}> Email </a>
                    |<a href='' className={styles.LinkElement}> LinkedIn </a>
                    |<a href='' className={styles.LinkElement}> GitHub </a>
                    |<a href='' className={styles.LinkElement}> LeetCode </a>
                </h3>
            </div>
        </div>
    )
}

export default Titlecard;