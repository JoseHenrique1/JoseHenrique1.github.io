import { PanelsTopLeft, DatabaseZap } from "lucide-react";
import CardService from "../components/CardService";

export function Service() {
    const services = [
        {
            title:"LANDING PAGE",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, soluta aspernatur dolore reiciendis minus mollitia praesentium asperiores sequi. Ipsum nisi consequatur, similique voluptatum eveniet minus voluptates ullam praesentium corrupti eum?",
            icon: PanelsTopLeft
        },
        {
            title:"API CREATION",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, soluta aspernatur dolore reiciendis minus mollitia praesentium asperiores sequi. Ipsum nisi consequatur, similique voluptatum eveniet minus voluptates ullam praesentium corrupti eum?",
            icon: DatabaseZap
        }
    ]

    return ( 
        <section className="min-h-screen flex flex-col gap-8">
            <h1 className="text-white self-center text-4xl">SERVICES</h1>
            <div className="flex items-center justify-around">
                {services.map(service=> <CardService {...service} />)}
            </div>
        </section>
     );
}