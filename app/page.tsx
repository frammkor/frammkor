import Link from 'next/link'
import Image from 'next/image'

import styles from './home.module.css'

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div>
                <h1 className={styles.title}>
                    Hi! I am <span className={styles.name}>Franco</span>
                </h1>
                <p className={styles.subtitle}>
                    A geek, an artist, and a full-stack developer.
                </p>

                <hr/>
                <p className={styles.constructionAlert}>
                    This site is under construction, proceed with caution.
                </p>

                <p className={styles.meet}>
                    Meet
                </p>

                <div className={styles.cardWrapper}>
                    <Link href='/cs' className={styles.card}>
                        <h2 className={styles.cardTitle}>
                            the programmer
                        </h2>

                        <div className={styles.imgWrapper}>
                            <Image src="/images/mask-pxart.png" fill alt="Picture of the author" />
                        </div>
                    </Link>
                    <Link href='/art' className={styles.card}>
                        <h2 className={styles.cardTitle}>
                            the artist
                        </h2>
                        <div className={styles.imgWrapper}>
                            <Image src="/images/mask-base.png" fill alt="Picture of the author" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
