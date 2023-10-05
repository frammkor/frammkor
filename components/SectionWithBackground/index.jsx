import Link from 'next/link'
import styles from './styles.module.css'

export default function SectionWithBackground({title, subtitle, media, actionMsg, actionLink, targetBlank}) {
    return <section className={styles.container}>
        <div className={styles.backgroundMediaContainer} style={{'--background-img': `url(${media})`}}>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.subtitle}>
                    {subtitle}
                </p>

                {
                    actionMsg && actionLink &&
                    <Link href={actionLink} target={targetBlank ? '_blank' : '_self'} className={styles.action}>
                        {actionMsg}
                    </Link>
                }
                

            </div>
        </div>
    </section>
}
