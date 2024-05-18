import { AnchorHTMLAttributes } from "react";
import { MoveRight } from "lucide-react";
interface cardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function CardLink({href}: cardLinkProps) {
    return ( 
        <a className="flex items-center gap-4 text-xs text-gray-300" href={href}>
            <MoveRight/>
            <p>Read more</p>
        </a>
    );
}

export default CardLink;