import styles from './styles.module.css'

export default function Job({job}) {
    return <li>
        <h3>{job.role}</h3>
        <p>{job.companyName} | {job.startDate} - {job.endDate}</p>
        <div>
            {job.details?.map(string => <p>{string}</p>)}
        </div>
    </li>
}
