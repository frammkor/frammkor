import {SectionWithBackground} from "@/components"
import Link from "next/link"
import styles from './page.module.css'


export default function Art() {
    const sections = [
        {
            title: 'The artist',
            subtitle: 'Descubriendo el ser artístico',
            description: 'La vida de dos bailarines convergen en 4 años de exploración y aprendizaje',
            media: null,
            // actionLink: '',
            // actionMsg: '',
            // targetBlank: true,
        },
        {
            title: 'feat. Ámbar Hidalgo',
            subtitle: 'Descubriendo el ser artístico',
            description: 'La vida de dos bailarines convergen en 4 años de exploración y aprendizaje',
            media: 'amb.jpg',
            actionLink: 'https://youtu.be/jXMlXulZycY?si=fb0YhGI3I7fPPlJK',
            actionMsg: 'Watch our lastes show',
            targetBlank: true,
        },
        {
            title: 'Generaciones',
            subtitle: 'Una historia de vida, de Tango',
            description: '',
            media: 'gen.jpg',
            actionLink: 'https://youtu.be/JnxSGxT1zWs?si=1L2hXbifmydZUldC',
            actionMsg: 'Watch the trailer',
            targetBlank: true,
        },
        {
            title: 'feat. Bora Turgut',
            subtitle: 'Malevos en una tierra distante',
            description: '',
            media: 'bor.jpg',
            actionLink: 'https://www.youtube.com/watch?v=4PH6uNwu0GE',
            actionMsg: 'Memories from Turkey',
            targetBlank: true,
        },
    ]

    return (
        <div className={styles.slider}>
          { sections.map((section, index) => (
                <div className={styles.slide} key={index}>
                    <SectionWithBackground
                        title={section.title}
                        subtitle={section.subtitle}
                        media={section.media}
                        actionMsg={section.actionMsg}
                        actionLink={section.actionLink}
                        targetBlank={section.targetBlank}
                    />
                </div>
            )) }

            {/* <h1>The artist</h1>

      <h2>Latest Work</h2>

      <h3>Generaciones</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JnxSGxT1zWs?si=PJW2eKwS-LWroq8h" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <h3>Creating journey with Ámbar Hidalgo</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jXMlXulZycY?si=z_vkHtYcUW872DCg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}

        </div>
    )
}
