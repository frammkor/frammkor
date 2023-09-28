import Link from 'next/link'

import styles from './home.module.css'

export default function Home() {
    return (
        <div className={styles.mainContainer}>
            <h1>
                Hi! I am Franco
            </h1>
            <p>
                A geek, an artist, and a full-stack developer.
            </p>

            <hr />

            <p>
                This site is under construction, proceed with caution.
            </p>

            <div className={styles.cardWrapper}>
                <Link href='/cs' className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        Meet the programmer
                    </h2>
                </Link>
                <Link href='/art' className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        Meet the artist
                    </h2>
                </Link>
            </div>

        </div>
    )
}
