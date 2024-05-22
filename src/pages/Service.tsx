import { PanelsTopLeft, DatabaseZap } from "lucide-react";
import CardService from "../components/CardService";

export function Service() {
    const services = [
        {
            title:"LANDING PAGE",
            description:"Development of landing pages like this page, using the main technologies on the market: react, tailwind, next, among others.",
            icon: PanelsTopLeft
        },
        {
            title:"APIs",
            description:"Development of APIs like those presented in my personal projects, using Prisma, Fastify and Express js.",
            icon: DatabaseZap
        }
    ]

    return ( 
        <section id="services" className="min-h-screen flex flex-col justify-center gap-8">
            <h1 className="text-white self-center text-4xl">SERVICES</h1>
            <div className="flex items-center justify-around">
                {services.map(service=> <CardService key={service.title} {...service} />)}
            </div>
        </section>
     );
}