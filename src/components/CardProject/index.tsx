import { Badge } from "../Badge";
import { Button } from "../Button";

interface props {
  title: string,
  description: string,
  src: string,
  technologies: string[],
  deploy?: string,
  frontend?: string,
  backend?: string
}

function handleOpenLink(link: string|undefined) {
  link && window.open(link, "_blank");
}


export function CardProject({ title, description, src, technologies, deploy, frontend, backend }: props) {
  return (
    <div className="flex gap-4 flex-col lg:flex-row">
      <h1 className="text-white text-3xl lg:hidden">{title}</h1>
      <img src={src} className="w-full max-w-md aspect-video self-center shadow shadow-blue-800 lg:self-auto"/>
      <div className="space-y-2">
        <h1 className="hidden text-white text-3xl lg:block">{title}</h1>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {technologies.map(tech => <Badge tech={tech} >{tech}</Badge>)}
        </div>

        <div className="flex justify-center gap-4 text-gray-300 lg:justify-start">
          <Button 
            onClick={()=>handleOpenLink(deploy)} 
            disabled={deploy?false: true}
            >Deploy</Button>
          <Button 
            onClick={()=>handleOpenLink(frontend)} 
            disabled={frontend?false: true}
            >Frontend</Button>
          <Button 
            onClick={()=>handleOpenLink(backend)}
            disabled={backend?false: true}
            >Backend</Button>
        </div>
      </div>

    </div>);
}

