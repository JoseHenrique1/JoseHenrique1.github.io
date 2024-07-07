import { Card } from "../components/Card";

interface projectInterface {
    title: string,
    description: string,
    src: string,
    link: string,
}
export function Project() {

    const projects : Array<projectInterface> = [
        {
            title: "Task Block",
            description: "Cansado de perder pensamentos e ideias em meio à pilha de papéis? Chega de depender de aplicativos complicados e cheios de anúncios! Online TaskBlock é a solução perfeita para quem procura uma forma simples e eficiente de organizar suas anotações. Com nosso bloco de notas virtual, você pode criar notas com título, descrição, cor de fundo e status.",
            src: "img/projects/task-block.png",
            link: "https://github.com/JoseHenrique1/TaskBlock",
        },
        {
            title: "FastNews",
            description: "Site de notícias sobre diversos temas: Brasil, Futebol, Europa e muito mais. Trabalhe em temas específicos ou veja os destaques na página inicial.",
            src: "img/projects/fastnews.png",
            link: "https://github.com/JoseHenrique1/FastNews",
        },
        {
            title: "Forum",
            description: "Fórum on-line vibrante e dinâmico onde você pode se conectar com pessoas que compartilham seus interesses. Crie tópicos, participe de conversas e explore um mundo de conhecimento e ideias!",
            src: "img/projects/forum-site.png",
            link: "https://github.com/JoseHenrique1/Forum/tree/main",
        },
    ]

    return ( 
        <section id="projects" className="py-4 flex flex-col justify-start gap-8">
            <h1 className="text-white self-center text-4xl">PROJETOS</h1>
            {
                projects.map(project=>(
                    <Card.Root key={project.title}>
                        <Card.Image layout="horizontal" src={project.src} />
                        <Card.Content title={project.title} description={project.description} >
                            <Card.Link href={project.link}/>
                        </Card.Content>
                    </Card.Root>
                ))
            }
        </section>
     );
}
