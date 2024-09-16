import React from 'react'
import styles from './Navbar.module.css'


function Navbar(){

    return(
        <div className={styles.Navholder}>
            <a href='' className={styles.LinkElement}> About </a>
            <a href='' className={styles.LinkElement}> Projects </a>
            <a href='' className={styles.LinkElement}>  </a>
            <a href='' className={styles.LinkElement}> XYZ </a>
        </div>
    )
}

export default Navbar;