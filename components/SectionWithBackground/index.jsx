import Link from 'next/link'
import styles from './styles.module.css'

export default function SectionWithBackground({
    title,
    subtitle,
    media,
    actionMsg,
    actionLink,
    targetBlank
}) {
    return <section className={styles.container}>
        <div
            className={styles.backgroundMediaContainer}
            style={{
            '--desktop-background-img': `url('/images/${media}')`,
            '--mobile-background-img': `url('/images/mobile-${media}')`
        }}>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.subtitle}>
                    {subtitle}
                </p>

                {actionMsg && actionLink && <Link
                    href={actionLink}
                    target={targetBlank
                    ? '_blank'
                    : '_self'}
                    className={styles.action}>
                    {actionMsg}
                </Link>
}

            </div>
        </div>
    </section>
}
