import Link from "next/link"

import contactOptions from './contactOptions'

export default function Contact() {

    return (
        <div>
            <h2>Get in touch:</h2>
            <ul>
                {
                    contactOptions.map(contactOption => 
                        <li key={contactOption.key}>
                            {contactOption.label} \
                            <Link href={contactOption.href} target="_blank">
                                {contactOption.value}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
