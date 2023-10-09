export default {
    about : {
        id: 'about',
        renderType: 'string',
        content: 'Geek, artist, and experienced Fullstack Developer with a passion for technology,' +
        ' specializing in modernizing legacy code, optimizing performance, and improving ' +
            'user experiences. Strong expertise in system design, team coordination, and DevO' +
            'ps.',
    },
    education : {
        id: 'education',
        renderType: 'Education',
        content: [
            {
                id: "csb",
                description: "Bachelor in Computer Science",
                institution: "Snow College",
                time: "2021",
                location: "USA",
                additional: ""
            }, {
                id: 'cpw',
                description: "Certificado en Programación Web Full Stack",
                institution: "Mindhub",
                time: "2019",
                location: "Argentina",
                additional: ""
            }, {
                id: 'ec',
                description: "English Proficiency Certification",
                institution: "TOEFL IBT TEST",
                time: "2019",
                location: "Argentina",
                additional: "2019 Score: 105 out of 120"
            }, {
                id: 'tc',
                description: "Turkish B2 Certification",
                institution: "TOMER, Ankara University",
                time: "2018",
                location: "Turkey",
                additional: "Score: 75 out of 100"
            },
        ],
    },
    skills : {
        id: 'skills',
        renderType: 'strArray',
        content: [
            "System Design", "DevOps and Containerization with Docker", "Advanced CSS, SASS, Bootstrap, and Tailwind", "Experienced teaching and talking to a crowd"
        ],
    },
    languages : {
        id: 'languages',
        renderType: 'strArray',
        content: [
            "Spanish (Native)", "English (Proficient)", "Turkish (Advanced)",
        ],
    },
    experience : {
        id: 'experience',
        renderType: 'Experience',
        content: [
            {
                id: 'hm',
                role: 'Senior Fullstack Developer',
                companyName: 'Hoy Milonga',
                link: 'http://hoy-milonga.com/',
                img: 'hm-logo.png',
                startDate: 'September 2019',
                endDate: 'Present',
                details: [
                    'Workflow improvement, standardization, and modernization: Implemented Git and ma' +
                            'nagement tools for faster iterations and modern development standards.',
                    'Legacy code migration and documentation: Successfully transitioned from AngularJ' +
                            'S and PHP systems to the latest technologies.',
                    'Performance debugging and optimization: Achieved a 60% improvement in Google Lig' +
                            'hthouse performance scores, with up to a 90% reduction in client bundle size.',
                    'Seek UI and UX improvements. Enhanced site discoverability by 100% of the web cl' +
                            'ient.',
                    'Team coordination and planning',
                    'Utilized SQL databases and Excel.'
                ]
            }, {
                id: 'handit',
                role: 'Lead Frontend Developer',
                companyName: 'Handit, Switzerland',
                link: 'https://handit.ch/',
                img: 'handit-logo.jpg',
                startDate: 'November 2020',
                endDate: 'March 2022',
                details: [
                    'Team leader for a React Web application', 'Designed, standardized, and managed frontend project with rapidly changing requi' +
                            'rements following agile development processes.',
                    'Communication with a PHP server using Web Sockets.'
                ]
            }, {
                id: 'mutualitics',
                role: 'Junior Frontend Developer',
                companyName: 'Mutualitics, Berlin',
                link: 'https://www.linkedin.com/company/mutualitics/',
                img: 'mutualitics-logo.jpg',
                startDate: 'June 2020',
                endDate: 'October 2020',
                details: ['Data visualization with D3 embedded in a React application. Utilized GraphQL and' +
                        ' Neo4J graph database.']
            }, {
                id: 'nextDot',
                role: 'Junior Mobile Developer',
                companyName: 'NextDots, Argentina',
                link: 'https://www.linkedin.com/company/nextdots/about/',
                img: 'next-dots-logo.jpg',
                startDate: 'June 2020',
                endDate: 'October 2020',
                details: [
                    'Cross-patform development using React Native, typescript, GraphQL, and nosql dat' +
                            'abases',
                    'End-2-End Testing using Detox'
                ]
            }
        ]
    },
}