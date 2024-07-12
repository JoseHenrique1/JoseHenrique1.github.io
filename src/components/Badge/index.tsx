import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface props extends ComponentProps<'div'> {
  tech: string
}

type badgeType = {
  [key:string]: string|undefined
}

const badgeStyle: badgeType = {
  "React": "bg-blue-800",
  "Python": "bg-blue-600",
  "Javascript": "bg-yellow-500",
  "TypeScript": "bg-blue-800",
  "SQLite": "bg-blue-600",
  "Tailwind": "bg-cyan-600",
  "Node.js": "bg-green-600",
  "Express.js": "bg-green-600",
  "Next.js": "bg-black",
  "Fastify": "bg-black",
  "Prisma ORM": "bg-indigo-800",
  "HTML": "bg-orange-600",
  "CSS": "bg-cyan-600",
  "Kodular": "bg-violet-800",
  "Java": "bg-orange-600",
  "C": "bg-cyan-400",
}
export function Badge({children, title, tech}: props) {
  const style = badgeStyle[tech] || badgeStyle["React"]
  return ( 
    <div 
      title={title}
      className={twMerge("text-sm font-medium text-white rounded px-1", style)}>
      {children}
    </div>
   );
}
