import { PanelsTopLeft, DatabaseZap } from "lucide-react";
import CardService from "../components/CardService";

export function Service() {
    const services = [
        {
            title:"LANDING PAGE",
            description:"Desenvolvimento de landing pages como esta página, utilizando as principais tecnologias do mercado: react, tailwind, next, entre outras.",
            icon: PanelsTopLeft
        },
        {
            title:"APIs",
            description:"Desenvolvimento de APIs como as apresentadas em meus projetos pessoais, utilizando Prisma, Fastify e Express js.",
            icon: DatabaseZap
        }
    ]

    return ( 
        <section id="services" className="p-4 space-y-8">
            <h1 className="text-white self-center text-4xl text-center">SERVIÇOS</h1>
            <div className="flex flex-col gap-8 items-center sm:flex-row sm:items-center sm:justify-around">
                {services.map(service=> <CardService key={service.title} {...service} />)}
            </div>
        </section>
     );
}