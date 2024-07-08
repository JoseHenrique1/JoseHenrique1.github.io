import { Button } from "../components/Button";
import { Card } from "../components/Card";
import photoPersonal from "../assets/img/foto-pessoal.jpeg"

export function About() {
    const title = "Olá, 👋!";
    const description = "Sou um desenvolvedor júnior apaixonado por tecnologia, em 2023 concluí um curso técnico em Informática no IFPB, onde adquiri conhecimentos em banco de dados relacionais, Python, HTML, CSS, Kodular, JavaScript, programação orientada a objetos, dentre outros. Atualmente, estou cursando uma graduação em Análise e Desenvolvimento de Sistemas (ADS), onde já estudei Java, C, HTML, CSS e banco de dados. Minha stack atual de desenvolvimento web é composta por TypeScript, React, Express, Fastify e Prisma ORM.";
    
    return ( 
        <section id="about" className="py-4 space-y-8">
            <h1 className="text-white text-4xl text-center">SOBRE MIM</h1>
            <Card.Root>
                <Card.Image layout="vertical" src={photoPersonal} />
                <Card.Content title={title} description={description} >
                    <Button href="https://www.linkedin.com/in/jos%C3%A9-henrique-araujo-da-silva-43970a274/" className="w-max text-lg md:px-6 lg:px-12">CONTRATE - ME</Button>
                    <Card.Anchor href="/Currículo.pdf">CV</Card.Anchor>
                </Card.Content>
            </Card.Root>
        </section>
       
     );
}
