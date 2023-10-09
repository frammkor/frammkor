import styles from './styles.module.css'
import {Experience, Education} from "@/components"

const renderSwitch = (entry) => {
    switch(entry.renderType) {
        case 'string':
            return <p className={styles.entryWrapper}>{entry.content}</p>;
        case 'strArray':
            return <ul className={styles.entryWrapper}>
                {entry.content.map((string, index) => <li key={index}>{string}</li>)}
            </ul>
        case 'Experience':
            return <ul className={styles.experienceList}>
                {entry.content.map(experience => <Experience experience={experience} key={experience.id} />)}
            </ul>
        case 'Education':
            return <ul className={styles.entryWrapper}>
                {entry.content.map(educationEntry => <Education educationEntry={educationEntry} key={educationEntry.id} />)}
            </ul>
        default:
            return '';
    }
}

export default function CvEntryRenderer({entry}) {
    return <section id={entry.id} className={styles.sectionWrapper} style={{gridArea: entry.id}}>
        <h2 className={styles.sectionTitle}>{entry.id}</h2>
        {renderSwitch(entry)}
    </section>
}
