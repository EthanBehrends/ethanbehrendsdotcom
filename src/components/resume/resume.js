export default {
    name: "Ethan Behrends",
    contact: {
        email: "epbehrends@gmail.com",
        phone: "913-216-4629"
    },
    sections: [{
        title: "Experience",
        body: [{
            header: "Software Developer",
            subHeader: "<b>HYFIN</b> (2021 - Present)",
            techStack: [
                "Node",
                "MongoDB",
                "Redis",
                "Svelte",
                "Java",
                "React",
                "AWS"
            ],
            points: [
                "Accelerated early-stage development of payment platform up to successful launch.",
                "Constructed powerful UI infrastructure enabling developers to rapidly develop new features.",
                "Led development on three major projects that became marketing focal points.",
                "Spearheaded drastic refactors to better align codebase with SOLID design principles, increasing maintainability and readability of code.",
                "Engineered client support utility that allowed non-technical employees to easily navigate data and diagnose client issues.",
                "Developed software integrations with Intuit Quickbooks and two other industry partners.",
                "Engineered new, retooled existing infrastructure allowing web-client to navigate a data-intensive application in intuitive and performant manner.",
            ]
        }]
    },{
        title: "Projects",
        body: [{
            header: "Messaging Platform",
            description: "Full-stack messaging platform mirroring the core functionality of apps like Slack, Discord.",
            techStack: [
                "Node",
                "Express",
                "MongoDB",
                "React",
                "SocketIO",
            ],
            points: [
                "Responsive user interface built with React and the Material UI library.",
                "Secure account creation with password hashing and salting.",
                "Utilized WebSockets to achieve real-time messaging and notifications.",
            ]
        },{
            header: "Wordle Clone",
            description: "Enhanced version of the popular word game Wordle",
            techStack: [
                "Svelte",
                "Node",
                "Express",
            ],
            points: [
                "Implemented system to create and share user-created puzzles.",
                "Received over 3,000 site visitors.",
            ]
        }]
    },{
        title: "Skills",
        renderDirection: "row",
        body: [{
            header: "Languages",
            points: [
                "Javascript/Node.js",
                "Java",
                "HTML, CSS",
                "C++",
                "Python",
            ]
        },{
            header: "Technologies/Frameworks",
            points: [
                "Svelte",
                "React",
                "MongoDB",
                "Redis",
                "PostgreSQL",
            ]
        }]
    }]
}