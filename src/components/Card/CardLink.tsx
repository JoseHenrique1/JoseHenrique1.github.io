import { AnchorHTMLAttributes } from "react";
import { MoveRight } from "lucide-react";
interface cardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function CardLink(props: cardLinkProps) {
    return ( 
        <a target="_blank" className="flex items-center gap-4 text-xs text-gray-300 transition duration-300 hover:bg-blue-950 p-2 pr-4 rounded" {...props}>
            <MoveRight/>
            <p>Ver mais</p>
        </a>
    );
}

export default CardLink;