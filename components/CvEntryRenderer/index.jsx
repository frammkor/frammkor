import styles from './styles.module.css'
import {Job, Education} from "@/components"


const renderSwitch = (entry) => {
    switch(entry.renderType) {
        case 'string':
            return <p>{entry.content}</p>;
        case 'strArray':
            return <ul>
                {entry.content.map((string, index) => <li key={index}>{string}</li>)}
            </ul>
        case 'Job':
            return <ul>
                {entry.content.map(job => <Job job={job} key={job.id} />)}
            </ul>
        case 'Education':
            return <ul>
                {entry.content.map(educationEntry => <Education educationEntry={educationEntry} key={educationEntry.id} />)}
            </ul>
        default:
            return '';
    }
}

export default function CvEntryRenderer({entry}) {
    return <div id={entry.id} className={styles[entry.id]}>
        <h2>{entry.id}</h2>
        {renderSwitch(entry)}
    </div>
}
