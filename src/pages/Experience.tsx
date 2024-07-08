import { ExperienceCard } from "../components/ExperienceCard";
import python from "../assets/img/python.png"
import javascript from "../assets/img/javascript.png"
import  typescript from  "../assets/img/typescript.png" 
import  html from  "../assets/img/html.png" 
import  css from  "../assets/img/css.png" 
import  sqlite from  "../assets/img/sqlite.png" 
import  react from  "../assets/img/react.png" 
import  tailwind from  "../assets/img/tailwind.png" 
import  fastify  from  "../assets/img/fastify.png" 

export function Experience() {

    const experiences = [
        { name: "Python", src: python },
        { name: "Javascript", src: javascript },
        { name: "Typescript", src: typescript },
        { name: "HTML", src: html},
        { name: "CSS", src:css },
        { name: "SQLite", src: sqlite},
        { name: "React", src:react },
        { name: "Tailwind", src: tailwind},
        { name: "Fastify", src: fastify},
    ]


    return (
        <section id="experience" className="py-4 space-y-8">
            <h1 className="text-white text-4xl text-center">EXPERIÊNCIA</h1>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-12 max-w-screen-lg mx-auto">
                {
                    experiences.map(experience => <ExperienceCard key={experience.name} name={experience.name} src={experience.src} />)
                }
            </div>
        </section>
    );
}
