import styles from './styles.module.css'

export default function Education({educationEntry}) {
    return <li>
        <h3>{educationEntry.description}</h3>
        <p>{educationEntry.institution}, {educationEntry.location} | {educationEntry.time}</p>
        {educationEntry.additional && <p>{educationEntry.additional}</p>}
    </li>
}

