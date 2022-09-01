export default new Developer({
    name: "Ethan Behrends",
    profession: "Software Engineer",
    email: "hire.ethanb@gmail.com",
    seeking: "Remote Position",

    preferredLanguages: [
        "JavaScript", "TypeScript",
        "Python",
        "Java",
    ],
    favoriteTech: ["SvelteJS", "ReactJS", "MongoDB", "TailwindCSS", "Redis"],
    tags: ["Self-Taught", "Full-Stack", "UI/UX"],
    
    industryExperience: [{
        company: "HYFIN",
        industry: "Fintech",
        startDate: new Date("October 2021"),
        endDate: undefined,
        techStack: ["Node", "MongoDB", "Redis", "SvelteJS", "Java", "ReactJS", "AWS"],
        notes: [
            `Accelerated early-stage development of payment 
            platform up to successful launch.`,

            `Led development on three major projects that 
            became marketing focal points.`,

            `Spearheaded drastic refactors to better align 
            codebase with SOLID design principles, increasing 
            maintainability and readability of code.`,

            `Engineered client support utility that allowed 
            non-technical employees to easily navigate data 
            and diagnose client issues.`,

            `Developed software integrations with Intuit Quickbooks 
            and two other industry partners.`,

            `Engineered new and retooled existing infrastructure 
            allowing web-client to navigate a data-intensive 
            application in simple and performant manner.`
        ]
    }]
})