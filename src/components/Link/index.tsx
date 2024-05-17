import { AnchorHTMLAttributes, ReactNode } from "react";

interface linkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}

export function Link({children}: linkProps) {
    return ( 
        <a 
            className="text-gray-300 hover:text-cyan-500" 
            href="#"
        >{children}</a>
     );
}
