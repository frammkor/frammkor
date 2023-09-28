import Link from "next/link"

import styles from './page.module.css'

export default function Cs() {
    return (
        <div>
            <h1>
                The Programmer
            </h1>
            {/* <h2>
              Frammkor
            </h2> */}

            <p>
                Proud Senior Fullstack Developer Dev @<Link href="https://hoy-milonga.com">hoy-milonga.com</Link>
            </p>

            <ul className={styles.jobDescriptionList}>
                <li>
                    Workflow improvement, standardization, and modernization: Implemented Git and
                    management tools for faster iterations and modern development standards. Legacy
                    code migration and documentation: Successfully transitioned from AngularJS and
                    PHP systems to the latest technologies.
                </li>
                <li>
                    Performance debugging and optimization: Achieved a 60% improvement in Google
                    Lighthouse performance scores, with up to a 90% reduction in client bundle size.
                    Seek UI and UX improvements. Enhanced site discoverability by 100% of the web
                    client.
                </li>
                <li>

                    Team coordination and planning
                </li>
            </ul>

            <a
                className='d-block'
                href="/CV Franco 2023-10 INGLES.pdf"
                download="CV Franco 2023-10 INGLES.pdf">
                Download CV
            </a>
        </div>
    )
}
