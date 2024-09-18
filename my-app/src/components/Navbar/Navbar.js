import React from 'react'
import styles from './Navbar.module.css'


function Navbar(){

    return(
        <div className={styles.Navholder}>
            <a href='/About' className={styles.LinkElement}> About </a>
            <a href='/Projects' className={styles.LinkElement}> Projects </a>
            <a href='/Contact' className={styles.LinkElement}> Contact </a>
        </div>
    )
}

export default Navbar;