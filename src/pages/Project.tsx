import { ContainerCard } from "../components/ContainerCard";

export function Project() {
    return ( 
        <section className="min-h-screen flex flex-col justify-start gap-8">
            <h1 className="text-white self-center text-4xl">Projects</h1>
            <ContainerCard />
        </section>
     );
}
