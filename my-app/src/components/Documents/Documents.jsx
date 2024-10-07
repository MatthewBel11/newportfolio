import React from 'react'
import styles from './Documents.module.css'
import transcriptOne from './YearOneTranscript.pdf'
import transcriptTwo from './YearTwoTranscript.pdf';
import CV from './CV2024.pdf'

function Documents(){

    return(
        <div className={styles.MainContainer}>
            <div className={styles.TitleHold}>
                <h2 className={styles.DocumentsTitle}> Documents </h2>
            </div>
            <div className={styles.DocumentHolder}>
                
                <div className={styles.LeftSide}>
                    <h3 className={styles.DocumentsSub}> University Transcripts </h3>
                        <p className={styles.DocumentRef}><a  className={styles.Document} href={transcriptTwo} target="_blank" rel="noopener noreferrer">
                            Stage 2 Transcript   </a> Last updated: 18/09/2024 </p>
                        
                        <p className={styles.DocumentRef}><a  className={styles.Document} href={transcriptOne} target="_blank" rel="noopener noreferrer">
                            Stage 1 Transcript   </a> Last updated: 18/09/2024 </p>
                        
                    
    

                </div>

                <div className={styles.RightSide}>
                    <h3 className={styles.DocumentsSub}> Professional </h3>
                    <p className={styles.DocumentRef}><a  className={styles.Document} href={CV} target="_blank" rel="noopener noreferrer">
                            Resume   </a> Last updated: 18/09/2024 </p>
                        
                </div>
            </div>
        </div>
    )
}

export default Documents;