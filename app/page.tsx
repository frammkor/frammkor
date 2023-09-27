import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>
        Hi! I am Franco
      </h1>

      <p>
        I am updating this website.
      </p>
      <p>
        I leave you my CV for now. Come back later to see cool stuff.
      </p>

      <a className='d-block' href="/CV Franco 2023-10 INGLES.pdf"
        download="CV Franco 2023-10 INGLES.pdf"
      >
        Download CV
      </a>
    </div>
  )
}
