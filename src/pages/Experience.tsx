import { ExperienceCard } from "../components/ExperienceCard";

export function Experience() {

    const experiences = [
        {name: "Python", src: "/img/python.png"},
        {name: "Javascript", src: "/img/javascript.png"},
        {name: "Typescript", src: "/img/typescript.png"},
        {name: "HTML", src: "/img/html.png"},
        {name: "CSS", src: "/img/css.png"},
        {name: "SQLite", src: "/img/sqlite.png"},
        {name: "React", src: "/img/react.png"},
        {name: "Tailwind", src: "/img/tailwind.png"},
        {name: "Fastify", src: "/img/fastify.png"},
    ]


    return ( 
        <section className="min-h-screen flex flex-col justify-center items-center gap-8">
            <h1 className="text-white text-4xl">EXPERIENCE</h1>
            <div className="w-full grid grid-cols-4 justify-items-center gap-12 max-w-screen-lg">
            {
                experiences.map(experience=> <ExperienceCard name={experience.name} src={experience.src}/>)
            }
            </div>
        </section>
     );
}
