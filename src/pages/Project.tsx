import fastnews from "../assets/img/projects/fastnews.png";
import forumsite from "../assets/img/projects/forum-site.png";
import taskblock from "../assets/img/projects/task-block.png";
import { CardProject } from "../components/CardProject";

interface projectInterface {
  title: string,
  description: string,
  src: string,
  technologies: string[],
  deploy?: string,
  frontend?: string,
  backend?: string
}
export function Project() {

  const projects: Array<projectInterface> = [
    {
      title: "Task Block",
      description: "Cansado de perder pensamentos e ideias em meio à pilha de papéis? Chega de depender de aplicativos complicados e cheios de anúncios! Online TaskBlock é a solução perfeita para quem procura uma forma simples e eficiente de organizar suas anotações. Com nosso bloco de notas virtual, você pode criar notas com título, descrição, cor de fundo e status.",
      src: taskblock,
      frontend: "https://github.com/JoseHenrique1/TaskBlock",
      //backend: "https://github.com/JoseHenrique1/TaskBlock-API",
      technologies: ["React", "Tailwind", "TypeScript", "Node.js", "Fastify", "Prisma ORM", "SQLite"],
      //deploy: "https://taskblock-app.vercel.app/",
    },
    {
      title: "FastNews",
      description: "Site de notícias sobre diversos temas: Brasil, Futebol, Europa e muito mais. Trabalhe em temas específicos ou veja os destaques na página inicial.",
      src: fastnews,
      frontend: "https://github.com/JoseHenrique1/FastNews",
      //backend: "https://github.com/JoseHenrique1/TaskBlock-API",
      technologies: ["Next.js","Javascript", "Bootstrap", "Reactstrap"],
      //deploy: "https://taskblock-app.vercel.app/",
    },
    {
      title: "Forum",
      description: "Fórum on-line vibrante e dinâmico onde você pode se conectar com pessoas que compartilham seus interesses. Crie tópicos, participe de conversas e explore um mundo de conhecimento e ideias!",
      src: forumsite,
      frontend: "https://github.com/JoseHenrique1/Forum/tree/main",
      //backend: "https://github.com/JoseHenrique1/TaskBlock-API",
      technologies: ["Next.js", "Javascript", "Tailwind",  "Node.js", "Express.js", "Sequelize"],
      //deploy: "https://taskblock-app.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-4 space-y-8">
      <h1 className="text-white self-center text-4xl">PROJETOS</h1>
      <div className="space-y-8">
        {
          projects.map(project => (
            <CardProject key={project.title} {...project} />
          ))
        }
      </div>
    </section>
  );
}
