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
            description: "Tired of losing your thoughts and ideas amidst the pile of papers? No more relying on complicated apps full of ads! Online TaskBlock is the perfect solution for those looking for a simple and efficient way to organize their notes. With our virtual notepad, you can create notes with title, description, background color and status.",
            src: "img/projects/task-block.png",
            link: "https://github.com/JoseHenrique1/TaskBlock",
        },
        {
            title: "FastNews",
            description: "News site on various topics: Brazil, Football, Europe and much more. Work through specific themes or see highlights on the home page.",
            src: "img/projects/fastnews.png",
            link: "https://github.com/JoseHenrique1/FastNews",
        },
        {
            title: "Forum",
            description: "Vibrant and dynamic online forum where you can connect with people who share your interests. Create topics, join conversations, and explore a world of knowledge and ideas!",
            src: "img/projects/forum-site.png",
            link: "https://github.com/JoseHenrique1/Forum/tree/main",
        },
    ]

    return ( 
        <section id="projects" className="min-h-screen flex flex-col justify-start gap-8">
            <h1 className="text-white self-center text-4xl">Projects</h1>
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
