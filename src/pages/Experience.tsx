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
        <section id="experience" className="py-4 space-y-8">
            <h1 className="text-white text-4xl text-center">EXPERIÊNCIA</h1>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-12 max-w-screen-lg mx-auto">
            {
                experiences.map(experience=> <ExperienceCard key={experience.name} name={experience.name} src={experience.src}/>)
            }
            </div>
        </section>
     );
}
