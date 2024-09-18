import React from 'react'
import styles from './PrimaryText.module.css'


function PrimaryText(props){

    return(
        <div className={styles.TextHolder}>
            <h2 className={styles.TextTitle}> { props.title } </h2>
            <p className={styles.TextBlock}> { props.text } </p>
        </div>
    )
}

export default PrimaryText;