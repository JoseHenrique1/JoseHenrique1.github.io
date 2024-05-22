import { Card } from "../components/Card";

export function Project() {
    
    const projects = [
        {
            title: "Task Block",
            description: "Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks |",
            src: "img/projects/forum-site.png",
            link: "google.com",
        },
        {
            title: "Task Block",
            description: "Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks |",
            src: "img/projects/forum-site.png",
            link: "google.com",
        },
        {
            title: "Task Block",
            description: "Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks |",
            src: "img/projects/forum-site.png",
            link: "google.com",
        },
    ]

    return ( 
        <section id="projects" className="min-h-screen flex flex-col justify-start gap-8">
            <h1 className="text-white self-center text-4xl">Projects</h1>
            {
                projects.map(project=>(
                    <Card.Root>
                        <Card.Image layout="horizontal" src={project.src} />
                        <Card.Content title={project.title} description={project.description} >
                            <Card.Link href="#"/>
                        </Card.Content>
                    </Card.Root>
                ))
            }
        </section>
     );
}
