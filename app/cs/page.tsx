import {CvEntryRenderer} from "@/components"

import CurriculumVitae from './CurriculumVitae'

import styles from './page.module.css'

export default function Cs() {
    return (
        <div className={styles.CsContainer}>
            <div className={styles.glassContainer}>

                <section className={styles.hero} style={{gridArea: 'hero'}}>
                    <h1 className={styles.heroTitle}>
                        The Programmer
                    </h1>

                    <p>
                        <a
                            className='d-block'
                            href="/CV Franco 2023-10 INGLES.pdf"
                            download="CV Franco 2023-10 INGLES.pdf">
                            Download my CV
                        </a> or keep scrolling to see it.
                    </p>
                </section>

                {Object.entries(CurriculumVitae).map(([key, value]) => <CvEntryRenderer key={key} entry={value} />)}

            </div>
        </div>
    )
}
