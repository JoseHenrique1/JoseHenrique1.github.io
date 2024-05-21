import { AnchorHTMLAttributes, ReactNode } from "react";

interface linkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}

export function Link({children, ...props}: linkProps) {
    return ( 
        <a 
            className="text-gray-300 hover:text-cyan-500" 
            {...props}
        >{children}</a>
     );
}
