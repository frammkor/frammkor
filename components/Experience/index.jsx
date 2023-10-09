import Link from 'next/link'
import styles from './styles.module.css'

export default function Experience({experience}) {
    return <li style={{'--background-img': `url(/images/${experience.img})`}}>
        <div className={styles.experienceHeader}>
            <img src={`/images/${experience.img}`} alt="" className={styles.companyImg} width="48" height="48" />
            <div>
                <h3 className={styles.experienceTitle}>{experience.role}</h3>
                <p><Link href={experience.link}>{experience.companyName}</Link> | {experience.startDate} - {experience.endDate}</p>
            </div>
        </div>
        <ul className={styles.experienceDetails}>
            {experience.details?.map(string => <li>{string}</li>)}
        </ul>
    </li>
}
