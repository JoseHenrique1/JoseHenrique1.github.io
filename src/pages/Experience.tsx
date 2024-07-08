import { ExperienceCard } from "../components/ExperienceCard";

export function Experience() {

    const experiences = [
        {name: "Python", src: "src/assets//img/python.png"},
        {name: "Javascript", src: "src/assets//img/javascript.png"},
        {name: "Typescript", src: "src/assets//img/typescript.png"},
        {name: "HTML", src: "src/assets//img/html.png"},
        {name: "CSS", src: "src/assets//img/css.png"},
        {name: "SQLite", src: "src/assets//img/sqlite.png"},
        {name: "React", src: "src/assets//img/react.png"},
        {name: "Tailwind", src: "src/assets//img/tailwind.png"},
        {name: "Fastify", src: "src/assets//img/fastify.png"},
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
