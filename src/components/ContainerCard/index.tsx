import { Card } from "../Card";

export function ContainerCard() {
    const projects = [
        {
            title: "Task Block",
            description: "Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks |",
            src: "img/forum-site.png",
            link: "google.com",
        },
        {
            title: "Task Block",
            description: "Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks |",
            src: "img/forum-site.png",
            link: "google.com",
        },
        {
            title: "Task Block",
            description: "Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks | Site manager of tasks |",
            src: "img/forum-site.png",
            link: "google.com",
        },
    ]
    return ( 
        <>
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
        </>
    );
}
