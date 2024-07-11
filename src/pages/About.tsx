import { Badge } from "../components/Badge"

export function About() {
  const title = "Olá, 👋!";
  const description = `
      Sou um desenvolvedor apaixonado por tecnologia, em 2023 concluí um curso técnico em Informática no IFPB, 
      onde adquiri conhecimentos em banco de dados relacionais, Python, HTML, CSS, Kodular, JavaScript, programação 
      orientada a objetos, dentre outros. Atualmente, estou cursando uma graduação em Análise e Desenvolvimento de 
      Sistemas (ADS), onde já estudei Java, C, HTML, CSS e banco de dados. Minha stack atual de desenvolvimento web é 
      composta por TypeScript, React, Express, Fastify e Prisma ORM.`;

  const hardSkills = [
    { name: "Python", time: "4 anos de experiência", className: "bg-blue-600" },
    { name: "Javascript", time: "3 anos de experiência", className: "bg-yellow-500"  },
    { name: "Typescript", time: "1 anos de experiência", className: "bg-blue-800"  },
    { name: "HTML", time: "3 anos de experiência", className: "bg-orange-600"  },
    { name: "CSS", time: "3 anos de experiência", className: "bg-cyan-600"  },
    { name: "SQLite", time: "3 anos de experiência", className: "bg-blue-600"  },
    { name: "React", time: "2 anos de experiência", className: "bg-blue-800"  },
    { name: "Tailwind", time: "1 anos de experiência", className: "bg-cyan-600"  },
    { name: "Fastify", time: "1 anos de experiência", className: "bg-black"  },
  ]

  return (
    <section id="about" className="py-1 sm:py-4 space-y-4 md:space-y-8">
      <h1 className="text-white text-4xl text-center">SOBRE MIM</h1>
      <div className="flex flex-col items-center gap-2 md:gap-4" >
        <h1 className="text-cyan-500 text-2xl">{title}</h1>
        <p className="w-full text-gray-300 max-w-screen-lg">{description}</p>
        <div className="flex flex-wrap justify-center gap-1">
          {hardSkills.map(skill => <Badge title={skill.time} className={skill.className} >{skill.name}</Badge>)}
        </div>
      </div>
    </section>
  );
}
